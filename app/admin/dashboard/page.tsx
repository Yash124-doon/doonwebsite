'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import '../admin.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface Lead {
  id: number;
  student_name: string;
  parent_name: string | null;
  phone: string;
  class_applied: string | null;
  message: string | null;
  status: 'Pending' | 'IN' | 'Not interesting' | 'HOld' | 'Call not pickup' | 'Fake Leads';
  created_at: string;
}

interface DashboardStats {
  stats: { total: number; today: number; thisWeek: number; thisMonth: number };
  recentLeads: Lead[];
  leadsByClass: { class_applied: string; count: number }[];
  dailyTrend: { date: string; count: number }[];
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  canonical_url: string | null;
  author: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface AdmissionEnquiry {
  id: number;
  childFirstName: string;
  classId: string;
  studentGender: string;
  childDateOfBirth: string;
  fatherFirstName: string;
  motherFirstName: string;
  category: string;
  mobileNumber: string;
  address: string;
  email: string;
  created_at: string;
}

interface CareerJob {
  id: number;
  title: string;
  type: string;
  experience: string | null;
  qualification: string | null;
  status: 'Open' | 'Closed';
  created_at: string;
}

interface CareerApplication {
  id: number;
  job_id: number | null;
  first_name: string;
  last_name: string;
  email: string;
  position: string;
  resume_path: string | null;
  summary: string | null;
  created_at: string;
}

type ActiveTab = 'dashboard' | 'leads' | 'blogs' | 'careerJobs' | 'careerApps' | 'admissionEnquiries';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [dashboardData, setDashboardData] = useState<DashboardStats | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [pagination, setPagination] = useState<Pagination>({ total: 0, page: 1, limit: 20, totalPages: 0 });
  const [search, setSearch] = useState('');
  const [classFilter, setClassFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [adminName, setAdminName] = useState('Admin');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Blog state
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [blogPagination, setBlogPagination] = useState<Pagination>({ total: 0, page: 1, limit: 20, totalPages: 0 });
  const [blogSearch, setBlogSearch] = useState('');
  const [blogStatusFilter, setBlogStatusFilter] = useState('');
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [blogFormData, setBlogFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    meta_title: '',
    meta_description: '',
    meta_keywords: '',
    canonical_url: '',
    author: 'Admin',
    status: 'published',
  });
  const [blogImage, setBlogImage] = useState<File | null>(null);
  const [blogImagePreview, setBlogImagePreview] = useState<string | null>(null);
  const [blogFormLoading, setBlogFormLoading] = useState(false);
  const [blogMsg, setBlogMsg] = useState({ type: '', text: '' });
  const editorRef = useRef<HTMLDivElement>(null);

  // Career state
  const [careerJobs, setCareerJobs] = useState<CareerJob[]>([]);
  const [careerApps, setCareerApps] = useState<CareerApplication[]>([]);
  const [showJobForm, setShowJobForm] = useState(false);
  const [editingJob, setEditingJob] = useState<CareerJob | null>(null);
  const [jobFormData, setJobFormData] = useState({
    title: '',
    type: 'Full-time',
    experience: '',
    qualification: '',
    status: 'Open' as 'Open' | 'Closed'
  });
  const [jobMsg, setJobMsg] = useState({ type: '', text: '' });
  const [isCareerLoading, setIsCareerLoading] = useState(false);

  // Admission Enquiries state
  const [admissionEnquiries, setAdmissionEnquiries] = useState<AdmissionEnquiry[]>([]);
  const [isAdmissionsLoading, setIsAdmissionsLoading] = useState(false);
  const [admissionSearch, setAdmissionSearch] = useState('');
  const [admissionPagination, setAdmissionPagination] = useState({ page: 1, limit: 20, total: 0, totalPages: 0 });
  const [selectedEnquiry, setSelectedEnquiry] = useState<AdmissionEnquiry | null>(null);

  // Simple Leads Details state
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

  // Initialize rich text editor content when the form opens
  useEffect(() => {
    if (showBlogForm && editorRef.current) {
      editorRef.current.innerHTML = blogFormData.content || '';
    }
  }, [showBlogForm]);

  // Auth check
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin');
      return;
    }
    setAdminName(localStorage.getItem('admin_name') || 'Admin');
  }, [router]);

  // Get auth headers
  const getHeaders = () => ({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('admin_token')}`,
  });

  const getAuthHeader = () => ({
    Authorization: `Bearer ${localStorage.getItem('admin_token')}`,
  });

  // Fetch dashboard data
  const fetchDashboard = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/admin/dashboard`, { headers: getHeaders() });
      if (res.status === 401) { handleLogout(); return; }
      const data = await res.json();
      if (data.success) setDashboardData(data.data);
    } catch (err) {
      console.error('Dashboard fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch leads
  const fetchLeads = useCallback(async (page = 1) => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: '20',
        ...(search && { search }),
        ...(classFilter && { class: classFilter }),
      });
      const res = await fetch(`${API_URL}/api/admin/leads?${params}`, { headers: getHeaders() });
      if (res.status === 401) { handleLogout(); return; }
      const data = await res.json();
      if (data.success) {
        setLeads(data.data);
        setPagination(data.pagination);
      }
    } catch (err) {
      console.error('Leads fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [search, classFilter]);

  // Fetch blogs for admin
  const fetchBlogs = useCallback(async (page = 1) => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: '20',
        ...(blogSearch && { search: blogSearch }),
        ...(blogStatusFilter && { status: blogStatusFilter }),
      });
      const res = await fetch(`${API_URL}/api/blogs/admin/all?${params}`, { headers: getHeaders() });
      if (res.status === 401) { handleLogout(); return; }
      const data = await res.json();
      if (data.success) {
        setBlogs(data.data);
        setBlogPagination(data.pagination);
      }
    } catch (err) {
      console.error('Blogs fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [blogSearch, blogStatusFilter]);

  // Fetch Career Jobs
  const fetchCareerJobs = useCallback(async () => {
    setIsCareerLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/career/admin/jobs`, { headers: getHeaders() });
      if (res.status === 401) { handleLogout(); return; }
      const data = await res.json();
      if (data.success) setCareerJobs(data.data);
    } catch (err) {
      console.error('Career jobs fetch error:', err);
    } finally {
      setIsCareerLoading(false);
    }
  }, []);

  // Fetch Career Applications
  const fetchCareerApps = useCallback(async () => {
    setIsCareerLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/career/admin/applications`, { headers: getHeaders() });
      if (res.status === 401) { handleLogout(); return; }
      const data = await res.json();
      if (data.success) setCareerApps(data.data);
    } catch (err) {
      console.error('Career applications fetch error:', err);
    } finally {
      setIsCareerLoading(false);
    }
  }, []);

  // Fetch Detailed Admission Enquiries
  const fetchAdmissionEnquiries = useCallback(async (pageIdx = 1) => {
    setIsAdmissionsLoading(true);
    try {
      const url = `${API_URL}/api/admin/admission-enquiries?page=${pageIdx}&limit=${admissionPagination.limit}&search=${admissionSearch}`;
      const res = await fetch(url, { headers: getHeaders() });
      if (res.status === 401) { handleLogout(); return; }
      const data = await res.json();
      if (data.success) {
        setAdmissionEnquiries(data.data);
        setAdmissionPagination(data.pagination);
      }
    } catch (err) {
      console.error('Admission enquiries fetch error:', err);
    } finally {
      setIsAdmissionsLoading(false);
    }
  }, [admissionSearch, admissionPagination.limit]);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) return;
    if (activeTab === 'dashboard') fetchDashboard();
    else if (activeTab === 'leads') fetchLeads();
    else if (activeTab === 'blogs') fetchBlogs();
    else if (activeTab === 'careerJobs') fetchCareerJobs();
    else if (activeTab === 'careerApps') fetchCareerApps();
    else if (activeTab === 'admissionEnquiries') fetchAdmissionEnquiries();
  }, [activeTab, fetchDashboard, fetchLeads, fetchBlogs, fetchCareerJobs, fetchCareerApps, fetchAdmissionEnquiries]);

  // Delete lead
  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    try {
      const res = await fetch(`${API_URL}/api/admin/leads/${id}`, {
        method: 'DELETE',
        headers: getHeaders(),
      });
      if (res.ok) {
        if (activeTab === 'leads') fetchLeads(pagination.page);
        else fetchDashboard();
      }
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_name');
    localStorage.removeItem('admin_email');
    router.push('/admin');
  };

  const handleStatusUpdate = async (id: number, newStatus: string) => {
    setIsUpdatingStatus(true);
    try {
      const res = await fetch(`${API_URL}/api/admin/leads/${id}/status`, {
        method: 'PATCH',
        headers: getHeaders(),
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        // Update local state for modal if open
        if (selectedLead && selectedLead.id === id) {
          setSelectedLead({ ...selectedLead, status: newStatus as any });
        }
        fetchLeads(pagination.page); // Refresh table
      }
    } catch (err) {
      console.error('Status update error:', err);
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'IN': return '#10b981'; // Green
      case 'Pending': return '#f59e0b'; // Gold
      case 'HOld': return '#8b5cf6'; // Purple
      case 'Not interesting': return '#64748b'; // Gray
      case 'Call not pickup': return '#f43f5e'; // Rose
      case 'Fake Leads': return '#000000'; // Black
      default: return '#888';
    }
  };

  // Search handler with debounce
  useEffect(() => {
    if (activeTab !== 'leads') return;
    const timer = setTimeout(() => fetchLeads(1), 400);
    return () => clearTimeout(timer);
  }, [search, classFilter]);

  // Blog search debounce
  useEffect(() => {
    if (activeTab !== 'blogs') return;
    const timer = setTimeout(() => fetchBlogs(1), 400);
    return () => clearTimeout(timer);
  }, [blogSearch, blogStatusFilter]);

  // Format date
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const formatTime = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  };

  // ─────────── Blog Form Handlers ───────────
  const resetBlogForm = () => {
    setBlogFormData({
      title: '',
      excerpt: '',
      content: '',
      meta_title: '',
      meta_description: '',
      meta_keywords: '',
      canonical_url: '',
      author: 'Admin',
      status: 'published',
    });
    setBlogImage(null);
    setBlogImagePreview(null);
    setEditingBlog(null);
    setBlogMsg({ type: '', text: '' });
  };

  const openNewBlogForm = () => {
    resetBlogForm();
    setShowBlogForm(true);
  };

  const openEditBlogForm = async (blogId: number) => {
    try {
      const res = await fetch(`${API_URL}/api/blogs/admin/${blogId}`, { headers: getHeaders() });
      const data = await res.json();
      if (data.success) {
        const blog = data.data;
        setEditingBlog(blog);
        setBlogFormData({
          title: blog.title || '',
          excerpt: blog.excerpt || '',
          content: blog.content || '',
          meta_title: blog.meta_title || '',
          meta_description: blog.meta_description || '',
          meta_keywords: blog.meta_keywords || '',
          canonical_url: blog.canonical_url || '',
          author: blog.author || 'Admin',
          status: blog.status || 'published',
        });
        if (blog.featured_image) {
          setBlogImagePreview(blog.featured_image.startsWith('http') ? blog.featured_image : `${API_URL}${blog.featured_image}`);
        }
        setBlogImage(null);
        setBlogMsg({ type: '', text: '' });
        setShowBlogForm(true);
      }
    } catch (err) {
      console.error('Error loading blog:', err);
    }
  };

  const handleBlogImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBlogImage(file);
      setBlogImagePreview(URL.createObjectURL(file));
    }
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBlogFormLoading(true);
    setBlogMsg({ type: '', text: '' });

    try {
      const formData = new FormData();
      formData.append('title', blogFormData.title);
      formData.append('excerpt', blogFormData.excerpt);
      formData.append('content', editorRef.current?.innerHTML || blogFormData.content);
      formData.append('meta_title', blogFormData.meta_title);
      formData.append('meta_description', blogFormData.meta_description);
      formData.append('meta_keywords', blogFormData.meta_keywords);
      formData.append('canonical_url', blogFormData.canonical_url);
      formData.append('author', blogFormData.author);
      formData.append('status', blogFormData.status);

      if (blogImage) {
        formData.append('featured_image', blogImage);
      }

      const url = editingBlog
        ? `${API_URL}/api/blogs/admin/${editingBlog.id}`
        : `${API_URL}/api/blogs/admin/create`;

      const method = editingBlog ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: getAuthHeader(),
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setBlogMsg({ type: 'success', text: editingBlog ? 'Blog updated successfully!' : 'Blog created successfully!' });
        setTimeout(() => {
          setShowBlogForm(false);
          resetBlogForm();
          fetchBlogs();
        }, 1200);
      } else {
        setBlogMsg({ type: 'error', text: data.message || 'Failed to save blog.' });
      }
    } catch (err) {
      console.error('Blog save error:', err);
      setBlogMsg({ type: 'error', text: 'Server error. Please try again.' });
    } finally {
      setBlogFormLoading(false);
    }
  };

  const handleDeleteBlog = async (id: number) => {
    if (!confirm('Are you sure you want to delete this blog post? This action cannot be undone.')) return;
    try {
      const res = await fetch(`${API_URL}/api/blogs/admin/${id}`, {
        method: 'DELETE',
        headers: getHeaders(),
      });
      if (res.ok) {
        fetchBlogs(blogPagination.page);
      }
    } catch (err) {
      console.error('Blog delete error:', err);
    }
  };

  const getImageUrl = (img: string | null) => {
    if (!img) return null;
    if (img.startsWith('http')) return img;
    return `${API_URL}${img}`;
  };

  const getTabTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Dashboard';
      case 'leads': return 'Admission Leads';
      case 'blogs': return showBlogForm ? (editingBlog ? 'Edit Blog Post' : 'Create New Blog') : 'Blog Management';
      case 'careerJobs': return showJobForm ? (editingJob ? 'Edit Career Opening' : 'Add New Opening') : 'Career Openings';
      case 'careerApps': return 'Career Inquiries';
      case 'admissionEnquiries': return 'Admission Enquiries (Detailed)';
    }
  };

  const getTabDesc = () => {
    switch (activeTab) {
      case 'dashboard': return 'Overview of your admission leads';
      case 'leads': return 'Manage all admission inquiries';
      case 'blogs': return showBlogForm ? 'Fill in the blog details below' : 'Create, edit, and manage blog posts';
      case 'careerJobs': return showJobForm ? 'Define the job details below' : 'Manage your school vacancies';
      case 'careerApps': return 'Track and respond to career queries';
      case 'admissionEnquiries': return 'View and manage detailed registration forms';
    }
  };

  // ─────────── Admission Enquiry Handlers ───────────
  const deleteAdmissionEnquiry = async (id: number) => {
    if (!confirm('Are you sure you want to delete this enquiry form?')) return;
    try {
      const res = await fetch(`${API_URL}/api/admin/admission-enquiries/${id}`, {
        method: 'DELETE',
        headers: getHeaders(),
      });
      if (res.ok) fetchAdmissionEnquiries();
    } catch (err) {
      console.error('Delete enquiry error:', err);
    }
  };

  // ─────────── Career Handlers ───────────
  const resetJobForm = () => {
    setJobFormData({ title: '', type: 'Full-time', experience: '', qualification: '', status: 'Open' });
    setEditingJob(null);
    setJobMsg({ type: '', text: '' });
  };

  const handleJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setJobMsg({ type: '', text: '' });

    try {
      const url = editingJob 
        ? `${API_URL}/api/career/admin/jobs/${editingJob.id}`
        : `${API_URL}/api/career/admin/jobs`;
      
      const method = editingJob ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: getHeaders(),
        body: JSON.stringify(jobFormData)
      });
      const data = await res.json();

      if (data.success) {
        setJobMsg({ type: 'success', text: data.message });
        setTimeout(() => {
          setShowJobForm(false);
          resetJobForm();
          fetchCareerJobs();
        }, 1200);
      }
    } catch (err) {
      console.error('Job sumbit error:', err);
    }
  };

  const deleteJob = async (id: number) => {
    if (!confirm('Are you sure you want to delete this job opening?')) return;
    try {
      const res = await fetch(`${API_URL}/api/career/admin/jobs/${id}`, {
        method: 'DELETE',
        headers: getHeaders(),
      });
      if (res.ok) fetchCareerJobs();
    } catch (err) {
      console.error('Delete job error:', err);
    }
  };

  const deleteApp = async (id: number) => {
    if (!confirm('Are you sure you want to delete this application?')) return;
    try {
      const res = await fetch(`${API_URL}/api/career/admin/applications/${id}`, {
        method: 'DELETE',
        headers: getHeaders(),
      });
      if (res.ok) fetchCareerApps();
    } catch (err) {
      console.error('Delete application error:', err);
    }
  };

  return (
    <div className="admin-layout">
      {/* Mobile overlay */}
      <div
        className={`admin-sidebar-overlay ${sidebarOpen ? 'open' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* ─────────── SIDEBAR ─────────── */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="admin-sidebar-header">
          <Image
            src="/assets/doonlogo.png"
            alt="Doon International School"
            width={40}
            height={40}
            style={{ borderRadius: '10px' }}
          />
          <div>
            <h3>DIS Jabalpur</h3>
            <span>Admin Panel</span>
          </div>
        </div>

        <nav className="admin-sidebar-nav">
          <div className="admin-nav-label">Main Menu</div>
          <button
            className={`admin-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => { setActiveTab('dashboard'); setSidebarOpen(false); setShowBlogForm(false); }}
          >
            <i className="fas fa-chart-pie" />
            Dashboard
          </button>
          <button
            className={`admin-nav-item ${activeTab === 'leads' ? 'active' : ''}`}
            onClick={() => { setActiveTab('leads'); setSidebarOpen(false); setShowBlogForm(false); }}
          >
            <i className="fas fa-user-friends" />
            Admission Leads (Simple)
          </button>
          <button
            className={`admin-nav-item ${activeTab === 'admissionEnquiries' ? 'active' : ''}`}
            onClick={() => { setActiveTab('admissionEnquiries'); setSidebarOpen(false); setShowBlogForm(false); }}
          >
            <i className="fas fa-id-card" />
            Admission Forms (Detailed)
          </button>
          <button
            className={`admin-nav-item ${activeTab === 'blogs' ? 'active' : ''}`}
            onClick={() => { setActiveTab('blogs'); setSidebarOpen(false); setShowBlogForm(false); }}
          >
            <i className="fas fa-blog" />
            Blog Posts
          </button>
          <button
            className={`admin-nav-item ${activeTab === 'careerJobs' ? 'active' : ''}`}
            onClick={() => { setActiveTab('careerJobs'); setSidebarOpen(false); setShowBlogForm(false); }}
          >
            <i className="fas fa-briefcase" />
            Career Openings
          </button>
          <button
            className={`admin-nav-item ${activeTab === 'careerApps' ? 'active' : ''}`}
            onClick={() => { setActiveTab('careerApps'); setSidebarOpen(false); setShowBlogForm(false); }}
          >
            <i className="fas fa-file-alt" />
            Career Queries
          </button>

          <div className="admin-nav-label">Quick Links</div>
          <a href="/" target="_blank" rel="noopener" className="admin-nav-item">
            <i className="fas fa-globe" />
            View Website
          </a>
          <a href="/blog" target="_blank" rel="noopener" className="admin-nav-item">
            <i className="fas fa-newspaper" />
            View Blog
          </a>
          <a href="/admission-landing-page" target="_blank" rel="noopener" className="admin-nav-item">
            <i className="fas fa-bullhorn" />
            Landing Page
          </a>
        </nav>

        <div className="admin-sidebar-footer">
          <button className="admin-nav-item" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt" />
            Logout
          </button>
        </div>
      </aside>

      {/* ─────────── MAIN ─────────── */}
      <main className="admin-main">
        {/* Topbar */}
        <header className="admin-topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button className="admin-mobile-toggle" onClick={() => setSidebarOpen(true)}>
              <i className="fas fa-bars" />
            </button>
            <div className="admin-topbar-left">
              <h1>{getTabTitle()}</h1>
              <p>{getTabDesc()}</p>
            </div>
          </div>
          <div className="admin-topbar-right">
            <div className="admin-user-info">
              <div className="admin-user-avatar">
                {adminName.charAt(0).toUpperCase()}
              </div>
              <span className="admin-user-name">{adminName}</span>
            </div>
          </div>
        </header>

        <div className="admin-content">
          {activeTab === 'dashboard' ? (
            /* ─────────── DASHBOARD TAB ─────────── */
            <>
              {isLoading ? (
                <div className="admin-loading"><div className="admin-loading-spinner" /></div>
              ) : dashboardData ? (
                <>
                  {/* Stats Cards */}
                  <div className="admin-stats-grid">
                    <div className="admin-stat-card">
                      <div className="admin-stat-icon blue"><i className="fas fa-users" /></div>
                      <div className="admin-stat-info">
                        <h3>{dashboardData.stats.total}</h3>
                        <p>Total Leads</p>
                      </div>
                    </div>
                    <div className="admin-stat-card">
                      <div className="admin-stat-icon gold"><i className="fas fa-calendar-day" /></div>
                      <div className="admin-stat-info">
                        <h3>{dashboardData.stats.today}</h3>
                        <p>Today&apos;s Leads</p>
                      </div>
                    </div>
                    <div className="admin-stat-card">
                      <div className="admin-stat-icon green"><i className="fas fa-chart-line" /></div>
                      <div className="admin-stat-info">
                        <h3>{dashboardData.stats.thisWeek}</h3>
                        <p>This Week</p>
                      </div>
                    </div>
                    <div className="admin-stat-card">
                      <div className="admin-stat-icon purple"><i className="fas fa-calendar-alt" /></div>
                      <div className="admin-stat-info">
                        <h3>{dashboardData.stats.thisMonth}</h3>
                        <p>This Month</p>
                      </div>
                    </div>
                  </div>

                  {/* Recent Leads Table */}
                  <div className="admin-table-card">
                    <div className="admin-table-header">
                      <h2>Recent Admission Leads</h2>
                      <button
                        className="admin-nav-item"
                        style={{ padding: '0.5rem 1rem', width: 'auto', color: '#002B6B', fontWeight: 600, fontSize: '0.82rem' }}
                        onClick={() => setActiveTab('leads')}
                      >
                        View All <i className="fas fa-arrow-right" style={{ marginLeft: '0.35rem' }} />
                      </button>
                    </div>
                    <div className="admin-table-wrapper">
                      <table className="admin-table">
                        <thead>
                          <tr>
                            <th>Student Name</th>
                            <th>Parent</th>
                            <th>Phone</th>
                            <th>Class</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dashboardData.recentLeads.length > 0 ? (
                            dashboardData.recentLeads.map((lead) => (
                              <tr key={lead.id}>
                                <td className="name-cell">{lead.student_name}</td>
                                <td>{lead.parent_name || '—'}</td>
                                <td className="phone-cell">{lead.phone}</td>
                                <td>{lead.class_applied ? <span className="class-badge">{lead.class_applied}</span> : '—'}</td>
                                <td>
                                  <span 
                                    className="status-badge" 
                                    style={{ 
                                      backgroundColor: getStatusColor(lead.status) + '15',
                                      color: getStatusColor(lead.status),
                                      fontSize: '0.65rem',
                                      fontWeight: 700,
                                      padding: '2px 6px',
                                      borderRadius: '4px',
                                      textTransform: 'uppercase'
                                    }}
                                  >
                                    {lead.status || 'Pending'}
                                  </span>
                                </td>
                                <td className="date-cell">{formatDate(lead.created_at)}</td>
                                <td>
                                  <div className="admin-flex-actions">
                                    <button className="action-btn" title="View & Manage" onClick={() => { setActiveTab('leads'); setSelectedLead(lead); }}>
                                      <i className="fas fa-eye" />
                                    </button>
                                    <button className="action-btn delete" title="Delete" onClick={() => handleDelete(lead.id)}>
                                      <i className="fas fa-trash-alt" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={7}>
                                <div className="admin-empty-state">
                                  <i className="fas fa-inbox" />
                                  <h3>No leads yet</h3>
                                  <p>Leads from the admission form will appear here.</p>
                                </div>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Class Distribution */}
                  {dashboardData.leadsByClass.length > 0 && (
                    <div className="admin-table-card" style={{ marginTop: '1.5rem' }}>
                      <div className="admin-table-header">
                        <h2>Leads by Class</h2>
                      </div>
                      <div style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '0.75rem' }}>
                        {dashboardData.leadsByClass.map((item, i) => (
                          <div key={i} style={{ padding: '1rem', background: '#f8f9fc', borderRadius: '10px', textAlign: 'center' }}>
                            <div style={{ fontWeight: 800, fontSize: '1.4rem', color: '#002B6B' }}>{item.count}</div>
                            <div style={{ fontSize: '0.78rem', color: '#888', marginTop: '0.2rem' }}>{item.class_applied}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : null}
            </>
          ) : activeTab === 'leads' ? (
            /* ─────────── LEADS TAB ─────────── */
            <>
              <div className="admin-table-card">
                <div className="admin-table-header">
                  <h2>All Admission Leads ({pagination.total})</h2>
                  <div className="admin-table-actions">
                    <div className="admin-search-box">
                      <i className="fas fa-search" />
                      <input
                        type="text"
                        placeholder="Search by name, phone..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                    <select
                      className="admin-filter-select"
                      value={classFilter}
                      onChange={(e) => setClassFilter(e.target.value)}
                    >
                      <option value="">All Classes</option>
                      <option value="Nursery">Nursery</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="Class I">Class I</option>
                      <option value="Class II">Class II</option>
                      <option value="Class III">Class III</option>
                      <option value="Class IV">Class IV</option>
                      <option value="Class V">Class V</option>
                      <option value="Class VI">Class VI</option>
                      <option value="Class VII">Class VII</option>
                      <option value="Class VIII">Class VIII</option>
                      <option value="Class IX">Class IX</option>
                    </select>
                  </div>
                </div>

                {isLoading ? (
                  <div className="admin-loading"><div className="admin-loading-spinner" /></div>
                ) : (
                  <>
                    <div className="admin-table-wrapper">
                      <table className="admin-table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Student Name</th>
                            <th>Parent Name</th>
                            <th>Phone</th>
                            <th>Class</th>
                            <th>Status</th>
                            <th>Date &amp; Time</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {leads.length > 0 ? (
                            leads.map((lead, index) => (
                              <tr key={lead.id}>
                                <td style={{ color: '#aaa', fontSize: '0.8rem' }}>
                                  {(pagination.page - 1) * pagination.limit + index + 1}
                                </td>
                                <td className="name-cell">{lead.student_name}</td>
                                <td>{lead.parent_name || '—'}</td>
                                <td className="phone-cell">{lead.phone}</td>
                                <td>
                                  {lead.class_applied ? (
                                    <span className="class-badge">{lead.class_applied}</span>
                                  ) : '—'}
                                </td>
                                <td>
                                  <span 
                                    className="status-badge" 
                                    style={{ 
                                      backgroundColor: getStatusColor(lead.status) + '15',
                                      color: getStatusColor(lead.status),
                                      border: `1px solid ${getStatusColor(lead.status)}30`,
                                      padding: '3px 10px',
                                      borderRadius: '6px',
                                      fontSize: '0.75rem',
                                      fontWeight: 700,
                                      display: 'inline-block',
                                      textTransform: 'uppercase',
                                      letterSpacing: '0.02em'
                                    }}
                                  >
                                    {lead.status || 'Pending'}
                                  </span>
                                </td>
                                <td className="date-cell">
                                  {formatDate(lead.created_at)}<br />
                                  <span style={{ fontSize: '0.72rem' }}>{formatTime(lead.created_at)}</span>
                                </td>
                                <td>
                                  <div className="admin-flex-actions">
                                    <button className="action-btn" title="View & Manage" onClick={() => setSelectedLead(lead)}>
                                      <i className="fas fa-eye" />
                                    </button>
                                    <button className="action-btn delete" title="Delete" onClick={() => handleDelete(lead.id)}>
                                      <i className="fas fa-trash-alt" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={8}>
                                <div className="admin-empty-state">
                                  <i className="fas fa-search" />
                                  <h3>No leads found</h3>
                                  <p>{search ? 'Try a different search term' : 'No admission leads yet'}</p>
                                </div>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination */}
                    {pagination.totalPages > 1 && (
                      <div className="admin-pagination">
                        <div className="admin-pagination-info">
                          Showing {(pagination.page - 1) * pagination.limit + 1}–
                          {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total}
                        </div>
                        <div className="admin-pagination-btns">
                          <button
                            disabled={pagination.page <= 1}
                            onClick={() => fetchLeads(pagination.page - 1)}
                          >
                            <i className="fas fa-chevron-left" />
                          </button>
                          {Array.from({ length: Math.min(pagination.totalPages, 5) }, (_, i) => {
                            const pageNum = i + 1;
                            return (
                              <button
                                key={pageNum}
                                className={pagination.page === pageNum ? 'active' : ''}
                                onClick={() => fetchLeads(pageNum)}
                              >
                                {pageNum}
                              </button>
                            );
                          })}
                          <button
                            disabled={pagination.page >= pagination.totalPages}
                            onClick={() => fetchLeads(pagination.page + 1)}
                          >
                            <i className="fas fa-chevron-right" />
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </>
          ) : activeTab === 'blogs' ? (
            /* ─────────── BLOGS TAB ─────────── */
            <>
              {showBlogForm ? (
                /* ─── Blog Create/Edit Form ─── */
                <div className="admin-table-card">
                  <div className="admin-form-header">
                    <h2>
                      <i className={`fas ${editingBlog ? 'fa-edit' : 'fa-plus-circle'}`} />
                      {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
                    </h2>
                    <button className="admin-btn-secondary" onClick={() => { setShowBlogForm(false); resetBlogForm(); }}>
                      <i className="fas fa-arrow-left" /> Back to List
                    </button>
                  </div>
                  <div className="admin-form-body">
                    {blogMsg.text && (
                      <div className={blogMsg.type === 'success' ? 'admin-success-msg' : 'admin-error-msg'}>
                        <i className={`fas ${blogMsg.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`} />
                        {blogMsg.text}
                      </div>
                    )}

                    <form onSubmit={handleBlogSubmit} className="admin-blog-form">
                      {/* Title */}
                      <div className="admin-form-group">
                        <label>Blog Title <span className="required">*</span></label>
                        <input
                          type="text"
                          placeholder="Enter blog title..."
                          value={blogFormData.title}
                          onChange={(e) => setBlogFormData({ ...blogFormData, title: e.target.value })}
                          required
                        />
                      </div>

                      {/* Author & Status */}
                      <div className="admin-blog-form-grid">
                        <div className="admin-form-group">
                          <label>Author</label>
                          <input
                            type="text"
                            placeholder="Author name"
                            value={blogFormData.author}
                            onChange={(e) => setBlogFormData({ ...blogFormData, author: e.target.value })}
                          />
                        </div>
                        <div className="admin-form-group">
                          <label>Status</label>
                          <select
                            value={blogFormData.status}
                            onChange={(e) => setBlogFormData({ ...blogFormData, status: e.target.value })}
                          >
                            <option value="published">Published</option>
                            <option value="draft">Draft</option>
                          </select>
                        </div>
                      </div>

                      {/* Excerpt */}
                      <div className="admin-form-group">
                        <label>Excerpt / Short Description</label>
                        <textarea
                          placeholder="Write a short description for the blog card preview..."
                          value={blogFormData.excerpt}
                          onChange={(e) => setBlogFormData({ ...blogFormData, excerpt: e.target.value })}
                          style={{ minHeight: '80px' }}
                        />
                        <span className="char-count">{blogFormData.excerpt.length} / 300 characters recommended</span>
                      </div>

                      {/* Content — Rich Text Editor */}
                      <div className="admin-form-group">
                        <label>Blog Content <span className="required">*</span></label>
                        {/* Toolbar */}
                        <div className="rte-toolbar">
                          <div className="rte-toolbar-group">
                            <button type="button" title="Bold (Ctrl+B)" className="rte-btn" onMouseDown={(e) => { e.preventDefault(); document.execCommand('bold'); }}>
                              <i className="fas fa-bold" />
                            </button>
                            <button type="button" title="Italic (Ctrl+I)" className="rte-btn" onMouseDown={(e) => { e.preventDefault(); document.execCommand('italic'); }}>
                              <i className="fas fa-italic" />
                            </button>
                            <button type="button" title="Underline (Ctrl+U)" className="rte-btn" onMouseDown={(e) => { e.preventDefault(); document.execCommand('underline'); }}>
                              <i className="fas fa-underline" />
                            </button>
                            <button type="button" title="Strikethrough" className="rte-btn" onMouseDown={(e) => { e.preventDefault(); document.execCommand('strikeThrough'); }}>
                              <i className="fas fa-strikethrough" />
                            </button>
                          </div>
                          <div className="rte-divider" />
                          <div className="rte-toolbar-group">
                            <button type="button" title="Heading 2" className="rte-btn rte-btn-text" onMouseDown={(e) => { e.preventDefault(); document.execCommand('formatBlock', false, 'H2'); }}>
                              H2
                            </button>
                            <button type="button" title="Heading 3" className="rte-btn rte-btn-text" onMouseDown={(e) => { e.preventDefault(); document.execCommand('formatBlock', false, 'H3'); }}>
                              H3
                            </button>
                            <button type="button" title="Heading 4" className="rte-btn rte-btn-text" onMouseDown={(e) => { e.preventDefault(); document.execCommand('formatBlock', false, 'H4'); }}>
                              H4
                            </button>
                            <button type="button" title="Paragraph" className="rte-btn rte-btn-text" onMouseDown={(e) => { e.preventDefault(); document.execCommand('formatBlock', false, 'P'); }}>
                              P
                            </button>
                          </div>
                          <div className="rte-divider" />
                          <div className="rte-toolbar-group">
                            <button type="button" title="Insert Link" className="rte-btn" onMouseDown={(e) => {
                              e.preventDefault();
                              const url = prompt('Enter the URL (e.g., https://example.com):', 'https://');
                              if (url) { document.execCommand('createLink', false, url); }
                            }}>
                              <i className="fas fa-link" />
                            </button>
                            <button type="button" title="Remove Link" className="rte-btn" onMouseDown={(e) => { e.preventDefault(); document.execCommand('unlink'); }}>
                              <i className="fas fa-unlink" />
                            </button>
                          </div>
                          <div className="rte-divider" />
                          <div className="rte-toolbar-group">
                            <button type="button" title="Bullet List" className="rte-btn" onMouseDown={(e) => { e.preventDefault(); document.execCommand('insertUnorderedList'); }}>
                              <i className="fas fa-list-ul" />
                            </button>
                            <button type="button" title="Numbered List" className="rte-btn" onMouseDown={(e) => { e.preventDefault(); document.execCommand('insertOrderedList'); }}>
                              <i className="fas fa-list-ol" />
                            </button>
                            <button type="button" title="Blockquote" className="rte-btn" onMouseDown={(e) => { e.preventDefault(); document.execCommand('formatBlock', false, 'BLOCKQUOTE'); }}>
                              <i className="fas fa-quote-left" />
                            </button>
                          </div>
                          <div className="rte-divider" />
                          <div className="rte-toolbar-group">
                            <button type="button" title="Horizontal Line" className="rte-btn" onMouseDown={(e) => { e.preventDefault(); document.execCommand('insertHorizontalRule'); }}>
                              <i className="fas fa-minus" />
                            </button>
                            <button type="button" title="Clear Formatting" className="rte-btn" onMouseDown={(e) => { e.preventDefault(); document.execCommand('removeFormat'); }}>
                              <i className="fas fa-eraser" />
                            </button>
                            <button type="button" title="Undo" className="rte-btn" onMouseDown={(e) => { e.preventDefault(); document.execCommand('undo'); }}>
                              <i className="fas fa-undo" />
                            </button>
                            <button type="button" title="Redo" className="rte-btn" onMouseDown={(e) => { e.preventDefault(); document.execCommand('redo'); }}>
                              <i className="fas fa-redo" />
                            </button>
                          </div>
                        </div>
                        {/* Editable Area */}
                        <div
                          ref={editorRef}
                          className="rte-editor"
                          contentEditable
                          suppressContentEditableWarning
                          data-placeholder="Start writing your blog content here... Select text and use the toolbar above to format it."
                        />
                      </div>

                      {/* Featured Image */}
                      <div className="admin-form-group">
                        <label>Featured Image</label>
                        <div className="admin-image-upload">
                          {blogImagePreview && (
                            <div className="admin-image-preview">
                              <img src={blogImagePreview} alt="Preview" />
                              <button
                                type="button"
                                className="remove-img"
                                onClick={() => { setBlogImage(null); setBlogImagePreview(null); }}
                              >
                                <i className="fas fa-times" />
                              </button>
                            </div>
                          )}
                          <div className="admin-file-input">
                            <input
                              type="file"
                              accept="image/jpeg,image/jpg,image/png,image/webp,image/avif"
                              onChange={handleBlogImageChange}
                            />
                          </div>
                          <span className="char-count">Max 5MB • JPEG, PNG, WebP, AVIF supported</span>
                        </div>
                      </div>

                      {/* SEO Section */}
                      <div className="admin-seo-section">
                        <h4><i className="fas fa-search-plus" /> SEO Settings</h4>
                        <div className="admin-blog-form-grid">
                          <div className="admin-form-group">
                            <label>Meta Title</label>
                            <input
                              type="text"
                              placeholder="SEO title (leave empty to use blog title)"
                              value={blogFormData.meta_title}
                              onChange={(e) => setBlogFormData({ ...blogFormData, meta_title: e.target.value })}
                            />
                            <span className="char-count">{blogFormData.meta_title.length} / 60 characters recommended</span>
                          </div>
                          <div className="admin-form-group">
                            <label>Canonical URL</label>
                            <input
                              type="url"
                              placeholder="https://www.dooninternationaljabalpur.com/blog/..."
                              value={blogFormData.canonical_url}
                              onChange={(e) => setBlogFormData({ ...blogFormData, canonical_url: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="admin-form-group" style={{ marginTop: '1rem' }}>
                          <label>Meta Description</label>
                          <textarea
                            placeholder="SEO meta description (leave empty to use excerpt)"
                            value={blogFormData.meta_description}
                            onChange={(e) => setBlogFormData({ ...blogFormData, meta_description: e.target.value })}
                            style={{ minHeight: '70px' }}
                          />
                          <span className="char-count">{blogFormData.meta_description.length} / 160 characters recommended</span>
                        </div>
                        <div className="admin-form-group" style={{ marginTop: '1rem' }}>
                          <label>Meta Keywords</label>
                          <input
                            type="text"
                            placeholder="keyword1, keyword2, keyword3..."
                            value={blogFormData.meta_keywords}
                            onChange={(e) => setBlogFormData({ ...blogFormData, meta_keywords: e.target.value })}
                          />
                          <span className="char-count">Comma-separated keywords for SEO</span>
                        </div>
                      </div>

                      {/* Submit Buttons */}
                      <div className="admin-form-actions">
                        <button type="submit" className="admin-btn-primary" disabled={blogFormLoading}>
                          {blogFormLoading ? (
                            <><div className="admin-spinner" /> Saving...</>
                          ) : (
                            <><i className={`fas ${editingBlog ? 'fa-save' : 'fa-paper-plane'}`} /> {editingBlog ? 'Update Blog' : 'Publish Blog'}</>
                          )}
                        </button>
                        <button type="button" className="admin-btn-secondary" onClick={() => { setShowBlogForm(false); resetBlogForm(); }}>
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                /* ─── Blog List ─── */
                <div className="admin-table-card">
                  <div className="admin-table-header">
                    <h2>All Blog Posts ({blogPagination.total})</h2>
                    <div className="admin-table-actions">
                      <div className="admin-search-box">
                        <i className="fas fa-search" />
                        <input
                          type="text"
                          placeholder="Search blogs..."
                          value={blogSearch}
                          onChange={(e) => setBlogSearch(e.target.value)}
                        />
                      </div>
                      <select
                        className="admin-filter-select"
                        value={blogStatusFilter}
                        onChange={(e) => setBlogStatusFilter(e.target.value)}
                      >
                        <option value="">All Status</option>
                        <option value="published">Published</option>
                        <option value="draft">Draft</option>
                      </select>
                      <button className="admin-btn-primary" onClick={openNewBlogForm}>
                        <i className="fas fa-plus" /> New Blog
                      </button>
                    </div>
                  </div>

                  {isLoading ? (
                    <div className="admin-loading"><div className="admin-loading-spinner" /></div>
                  ) : blogs.length > 0 ? (
                    <>
                      <div className="admin-blog-grid">
                        {blogs.map((blog) => (
                          <div key={blog.id} className="admin-blog-card">
                            <div className="admin-blog-card-img">
                              {blog.featured_image ? (
                                <img src={getImageUrl(blog.featured_image)!} alt={blog.title} />
                              ) : (
                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #002B6B, #003d8f)' }}>
                                  <i className="fas fa-image" style={{ fontSize: '2rem', color: 'rgba(255,255,255,0.15)' }} />
                                </div>
                              )}
                            </div>
                            <div className="admin-blog-card-body">
                              <h3>{blog.title}</h3>
                              {blog.excerpt && <p className="blog-excerpt">{blog.excerpt}</p>}
                              <div className="admin-blog-card-meta">
                                <span className="blog-date">{formatDate(blog.created_at)}</span>
                                <span className={`blog-status ${blog.status}`}>{blog.status}</span>
                              </div>
                            </div>
                            <div className="admin-blog-card-actions">
                              <button className="admin-btn-edit" onClick={() => openEditBlogForm(blog.id)}>
                                <i className="fas fa-edit" /> Edit
                              </button>
                              <a
                                href={`/blog?post=${blog.slug}`}
                                target="_blank"
                                rel="noopener"
                                className="admin-btn-edit"
                                style={{ textDecoration: 'none' }}
                              >
                                <i className="fas fa-external-link-alt" /> View
                              </a>
                              <button className="admin-btn-danger" onClick={() => handleDeleteBlog(blog.id)} style={{ marginLeft: 'auto' }}>
                                <i className="fas fa-trash-alt" /> Delete
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Blog Pagination */}
                      {blogPagination.totalPages > 1 && (
                        <div className="admin-pagination">
                          <div className="admin-pagination-info">
                            Showing {(blogPagination.page - 1) * blogPagination.limit + 1}–
                            {Math.min(blogPagination.page * blogPagination.limit, blogPagination.total)} of {blogPagination.total}
                          </div>
                          <div className="admin-pagination-btns">
                            <button
                              disabled={blogPagination.page <= 1}
                              onClick={() => fetchBlogs(blogPagination.page - 1)}
                            >
                              <i className="fas fa-chevron-left" />
                            </button>
                            {Array.from({ length: Math.min(blogPagination.totalPages, 5) }, (_, i) => {
                              const pageNum = i + 1;
                              return (
                                <button
                                  key={pageNum}
                                  className={blogPagination.page === pageNum ? 'active' : ''}
                                  onClick={() => fetchBlogs(pageNum)}
                                >
                                  {pageNum}
                                </button>
                              );
                            })}
                            <button
                              disabled={blogPagination.page >= blogPagination.totalPages}
                              onClick={() => fetchBlogs(blogPagination.page + 1)}
                            >
                              <i className="fas fa-chevron-right" />
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="admin-empty-state">
                      <i className="fas fa-newspaper" />
                      <h3>No blog posts yet</h3>
                      <p>Click &quot;New Blog&quot; to create your first blog post.</p>
                      <button className="admin-btn-primary" style={{ margin: '1rem auto 0', display: 'inline-flex' }} onClick={openNewBlogForm}>
                        <i className="fas fa-plus" /> Create First Blog
                      </button>
                    </div>
                  )}
                </div>
              )}
            </>
          ) : activeTab === 'careerJobs' ? (
            /* ─────────── CAREER JOBS TAB ─────────── */
            <div className="admin-table-card">
              <div className="admin-table-header">
                <h2>{getTabTitle()}</h2>
                {!showJobForm && (
                  <button className="admin-btn-primary" onClick={() => { resetJobForm(); setShowJobForm(true); }}>
                    <i className="fas fa-plus" /> New Opening
                  </button>
                )}
              </div>

              {showJobForm ? (
                <div className="admin-form-body">
                  {jobMsg.text && (
                    <div className={jobMsg.type === 'success' ? 'admin-success-msg' : 'admin-error-msg'}>
                      <i className={`fas ${jobMsg.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`} />
                      {jobMsg.text}
                    </div>
                  )}
                  <form onSubmit={handleJobSubmit} className="admin-blog-form">
                    <div className="admin-form-group">
                      <label>Job Title <span className="required">*</span></label>
                      <input 
                        type="text" 
                        required 
                        value={jobFormData.title}
                        onChange={e => setJobFormData({...jobFormData, title: e.target.value})}
                        placeholder="e.g. PGT - Mathematics"
                      />
                    </div>
                    <div className="admin-blog-form-grid">
                      <div className="admin-form-group">
                        <label>Job Type</label>
                        <select value={jobFormData.type} onChange={e => setJobFormData({...jobFormData, type: e.target.value})}>
                          <option value="Full-time">Full-time</option>
                          <option value="Part-time">Part-time</option>
                          <option value="Contract">Contract</option>
                        </select>
                      </div>
                      <div className="admin-form-group">
                        <label>Status</label>
                        <select value={jobFormData.status} onChange={e => setJobFormData({...jobFormData, status: e.target.value as 'Open' | 'Closed'})}>
                          <option value="Open">Open</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </div>
                    </div>
                    <div className="admin-blog-form-grid">
                      <div className="admin-form-group">
                        <label>Experience Required</label>
                        <input 
                          type="text" 
                          value={jobFormData.experience}
                          onChange={e => setJobFormData({...jobFormData, experience: e.target.value})}
                          placeholder="e.g. 3-5 Years"
                        />
                      </div>
                      <div className="admin-form-group">
                        <label>Qualification</label>
                        <input 
                          type="text" 
                          value={jobFormData.qualification}
                          onChange={e => setJobFormData({...jobFormData, qualification: e.target.value})}
                          placeholder="e.g. Post Graduate with B.Ed"
                        />
                      </div>
                    </div>
                    <div className="admin-form-actions">
                      <button type="button" className="admin-btn-secondary" onClick={() => setShowJobForm(false)}>Cancel</button>
                      <button type="submit" className="admin-btn-primary">
                        {editingJob ? 'Update Opening' : 'Save Opening'}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="admin-table-wrapper">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Job Title</th>
                        <th>Type</th>
                        <th>Experience</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {careerJobs.length > 0 ? (
                        careerJobs.map(job => (
                          <tr key={job.id}>
                            <td className="name-cell">{job.title}</td>
                            <td>{job.type}</td>
                            <td>{job.experience || '—'}</td>
                            <td>
                              <span className={`status-badge ${job.status === 'Open' ? 'published' : 'draft'}`}>
                                {job.status}
                              </span>
                            </td>
                            <td>
                              <div className="admin-flex-actions">
                                <button className="action-btn" onClick={() => {
                                  setEditingJob(job);
                                  setJobFormData({
                                    title: job.title,
                                    type: job.type,
                                    experience: job.experience || '',
                                    qualification: job.qualification || '',
                                    status: job.status
                                  });
                                  setShowJobForm(true);
                                }}>
                                  <i className="fas fa-edit" />
                                </button>
                                <button className="action-btn delete" onClick={() => deleteJob(job.id)}>
                                  <i className="fas fa-trash-alt" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="text-center py-10 text-gray-400">No job openings found.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ) : activeTab === 'careerApps' ? (
            /* ─────────── CAREER APPLICATIONS TAB ─────────── */
            <div className="admin-table-card">
              <div className="admin-table-header">
                <h2>{getTabTitle()}</h2>
              </div>
              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Position</th>
                      <th>Resume</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {careerApps.length > 0 ? (
                      careerApps.map(app => (
                        <tr key={app.id}>
                          <td className="name-cell">{app.first_name} {app.last_name}</td>
                          <td>{app.email}</td>
                          <td>{app.position}</td>
                          <td>
                            {app.resume_path ? (
                              <a 
                                href={`${API_URL}${app.resume_path}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="admin-btn-small"
                              >
                                <i className="fas fa-download" /> Download
                              </a>
                            ) : (
                              <span className="text-gray-400">No Resume</span>
                            )}
                          </td>
                          <td className="date-cell">{formatDate(app.created_at)}</td>
                          <td>
                            <button className="action-btn delete" onClick={() => deleteApp(app.id)}>
                              <i className="fas fa-trash-alt" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="text-center py-10 text-gray-400">No applications received yet.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ) : activeTab === 'admissionEnquiries' ? (
            /* ─────────── ADMISSION ENQUIRIES TAB ─────────── */
            <>
              <div className="admin-table-card">
                <div className="admin-table-header">
                  <h2>{getTabTitle()}</h2>
                  <div className="admin-table-actions">
                    <div className="admin-search-box">
                      <i className="fas fa-search" />
                      <input 
                        type="search" 
                        placeholder="Search child, father, or phone..." 
                        value={admissionSearch}
                        onChange={e => setAdmissionSearch(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' && fetchAdmissionEnquiries(1)}
                      />
                    </div>
                  </div>
                </div>

                <div className="admin-table-wrapper">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Child Name</th>
                        <th>Class</th>
                        <th>Gender</th>
                        <th>Father's Name</th>
                        <th>Mobile</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {admissionEnquiries.length > 0 ? (
                        admissionEnquiries.map(enquiry => (
                          <tr key={enquiry.id}>
                            <td className="name-cell">{enquiry.childFirstName}</td>
                            <td>{enquiry.classId}</td>
                            <td>{enquiry.studentGender}</td>
                            <td>{enquiry.fatherFirstName}</td>
                            <td>{enquiry.mobileNumber}</td>
                            <td className="date-cell">{formatDate(enquiry.created_at)}</td>
                            <td>
                              <div className="admin-flex-actions">
                                <button className="action-btn" title="View Details" onClick={() => setSelectedEnquiry(enquiry)}>
                                  <i className="fas fa-eye" />
                                </button>
                                <button className="action-btn delete" onClick={() => deleteAdmissionEnquiry(enquiry.id)}>
                                  <i className="fas fa-trash-alt" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={7} className="text-center py-10 text-gray-400">No registration forms found.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {admissionPagination.totalPages > 1 && (
                  <div className="admin-pagination">
                    <div className="admin-pagination-info">
                      Showing {(admissionPagination.page - 1) * admissionPagination.limit + 1}–
                      {Math.min(admissionPagination.page * admissionPagination.limit, admissionPagination.total)} of {admissionPagination.total}
                    </div>
                    <div className="admin-pagination-btns">
                      <button
                        disabled={admissionPagination.page <= 1}
                        onClick={() => fetchAdmissionEnquiries(admissionPagination.page - 1)}
                      >
                        <i className="fas fa-chevron-left" />
                      </button>
                      <button className="active">{admissionPagination.page}</button>
                      <button
                        disabled={admissionPagination.page >= admissionPagination.totalPages}
                        onClick={() => fetchAdmissionEnquiries(admissionPagination.page + 1)}
                      >
                        <i className="fas fa-chevron-right" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : null}

          {/* ─────────── GLOBAL MODALS (Accessible from any tab) ─────────── */}
          
          {/* Detailed Admission Form Details Modal */}
          {selectedEnquiry && (
            <div className="admin-modal-overlay" onClick={() => setSelectedEnquiry(null)}>
              <div className="admin-modal-content" onClick={e => e.stopPropagation()}>
                <div className="admin-modal-header">
                  <h3><i className="fas fa-id-card" style={{ marginRight: '10px' }} /> Admission Form Details</h3>
                  <button className="close-modal" onClick={() => setSelectedEnquiry(null)}>
                    <i className="fas fa-times" />
                  </button>
                </div>
                <div className="admin-modal-body">
                  <div className="details-grid">
                    <div className="details-section">
                      <h4><i className="fas fa-child" /> Child Information</h4>
                      <p><strong>Name:</strong> <span>{selectedEnquiry.childFirstName}</span></p>
                      <p><strong>Class:</strong> <span>{selectedEnquiry.classId}</span></p>
                      <p><strong>Gender:</strong> <span>{selectedEnquiry.studentGender}</span></p>
                      <p><strong>D.O.B:</strong> <span>{new Date(selectedEnquiry.childDateOfBirth).toLocaleDateString('en-IN')}</span></p>
                      <p><strong>Category:</strong> <span>{selectedEnquiry.category}</span></p>
                    </div>
                    <div className="details-section">
                      <h4><i className="fas fa-user-friends" /> Parent Information</h4>
                      <p><strong>Father:</strong> <span>{selectedEnquiry.fatherFirstName}</span></p>
                      <p><strong>Mother:</strong> <span>{selectedEnquiry.motherFirstName}</span></p>
                      <p><strong>Mobile:</strong> <span>{selectedEnquiry.mobileNumber}</span></p>
                      <p><strong>Email:</strong> <span>{selectedEnquiry.email}</span></p>
                    </div>
                    <div className="details-section full-width">
                      <h4><i className="fas fa-map-marker-alt" /> Contact Details</h4>
                      <p><strong>Address:</strong> <span style={{ textAlign: 'right' }}>{selectedEnquiry.address}</span></p>
                    </div>
                    <div className="details-section full-width">
                      <h4><i className="fas fa-clock" /> Submission Details</h4>
                      <p><strong>Submitted On:</strong> <span>{new Date(selectedEnquiry.created_at).toLocaleString('en-IN')}</span></p>
                    </div>
                  </div>
                </div>
                <div className="admin-modal-footer">
                  <button className="admin-btn-secondary" onClick={() => setSelectedEnquiry(null)}>
                    <i className="fas fa-times" /> Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Simple Lead Details Modal */}
          {selectedLead && (
            <div className="admin-modal-overlay" onClick={() => setSelectedLead(null)}>
              <div className="admin-modal-content" onClick={e => e.stopPropagation()}>
                <div className="admin-modal-header">
                  <h3><i className="fas fa-user-graduate" style={{ marginRight: '10px' }} /> Lead Management</h3>
                  <button className="close-modal" onClick={() => setSelectedLead(null)}>
                    <i className="fas fa-times" />
                  </button>
                </div>
                <div className="admin-modal-body">
                  <div className="details-grid">
                    <div className="details-section">
                      <h4><i className="fas fa-info-circle" /> Contact Details</h4>
                      <p><strong>Student Name:</strong> <span>{selectedLead.student_name}</span></p>
                      <p><strong>Parent Name:</strong> <span>{selectedLead.parent_name || '—'}</span></p>
                      <p><strong>Phone:</strong> <span>{selectedLead.phone}</span></p>
                      <p><strong>Class:</strong> <span>{selectedLead.class_applied || '—'}</span></p>
                    </div>
                    <div className="details-section">
                      <h4><i className="fas fa-flag" /> Current Status</h4>
                      <div style={{ padding: '1rem', textAlign: 'center', borderRadius: '10px', background: getStatusColor(selectedLead.status) + '10', border: `1px solid ${getStatusColor(selectedLead.status)}20` }}>
                        <span style={{ fontSize: '1.2rem', fontWeight: 800, color: getStatusColor(selectedLead.status) }}>
                          {selectedLead.status || 'Pending'}
                        </span>
                        <p style={{ margin: '0.5rem 0 0', fontSize: '0.75rem', color: '#999', justifyContent: 'center' }}>
                          Last updated: {formatDate(selectedLead.created_at)}
                        </p>
                      </div>
                    </div>
                    <div className="details-section full-width">
                      <h4><i className="fas fa-comment-dots" /> Inquiry Message</h4>
                      <p style={{ display: 'block', lineHeight: '1.6', color: '#666', background: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid #eef0f4' }}>
                        {selectedLead.message || 'No message provided.'}
                      </p>
                    </div>
                    
                    <div className="details-section full-width" style={{ background: '#f0f4f8' }}>
                      <h4 style={{ color: '#002B6B' }}><i className="fas fa-edit" /> Update Inquiry Status</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem', marginTop: '0.5rem' }}>
                        {[
                          { id: 'Pending', label: 'Pending', icon: 'fa-clock' },
                          { id: 'IN', label: 'IN (Follow-up)', icon: 'fa-sign-in-alt' },
                          { id: 'HOld', label: 'Hold', icon: 'fa-pause' },
                          { id: 'Call not pickup', label: 'Call Missed', icon: 'fa-phone-slash' },
                          { id: 'Not interesting', label: 'Not Interested', icon: 'fa-thumbs-down' },
                          { id: 'Fake Leads', label: 'Fake Lead', icon: 'fa-user-secret' }
                        ].map((s) => (
                          <button
                            key={s.id}
                            disabled={isUpdatingStatus}
                            onClick={() => handleStatusUpdate(selectedLead.id, s.id)}
                            style={{
                              padding: '0.6rem 0.5rem',
                              borderRadius: '8px',
                              border: '1.5px solid',
                              borderColor: selectedLead.status === s.id ? getStatusColor(s.id) : '#e2e8f0',
                              background: selectedLead.status === s.id ? getStatusColor(s.id) : '#fff',
                              color: selectedLead.status === s.id ? '#fff' : '#64748b',
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '0.4rem',
                              transition: 'all 0.2s',
                              opacity: isUpdatingStatus ? 0.7 : 1
                            }}
                          >
                            <i className={`fas ${s.icon}`} /> {s.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="admin-modal-footer">
                  <button className="admin-btn-secondary" onClick={() => setSelectedLead(null)}>
                    <i className="fas fa-times" /> Close
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
