'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  author: string;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  canonical_url: string | null;
  created_at: string;
  updated_at: string;
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

function BlogContent() {
  const searchParams = useSearchParams();
  const slugParam = searchParams.get('post');

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [singleBlog, setSingleBlog] = useState<Blog | null>(null);
  const [pagination, setPagination] = useState<Pagination>({ total: 0, page: 1, limit: 12, totalPages: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch blog listing
  const fetchBlogs = async (page = 1) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/blogs?page=${page}&limit=12`);
      const data = await res.json();
      if (data.success) {
        setBlogs(data.data);
        setPagination(data.pagination);
      } else {
        setError('Failed to load blogs.');
      }
    } catch (err) {
      console.error('Blog fetch error:', err);
      setError('Unable to connect to server.');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch single blog
  const fetchSingleBlog = async (slug: string) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/blogs/post/${slug}`);
      const data = await res.json();
      if (data.success) {
        setSingleBlog(data.data);
        // Update document title dynamically for SEO
        document.title = data.data.meta_title || data.data.title || 'Blog | Doon International School';
        updateMetaTag('description', data.data.meta_description || data.data.excerpt || '');
        updateMetaTag('keywords', data.data.meta_keywords || '');
        updateLinkTag('canonical', data.data.canonical_url || `https://www.dooninternationaljabalpur.com/blog?post=${data.data.slug}`);
      } else {
        setError('Blog post not found.');
      }
    } catch (err) {
      console.error('Blog fetch error:', err);
      setError('Unable to load this article.');
    } finally {
      setIsLoading(false);
    }
  };

  const updateMetaTag = (name: string, content: string) => {
    let metaTag = document.querySelector(`meta[name="${name}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', name);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  };

  const updateLinkTag = (rel: string, href: string) => {
    let linkTag = document.querySelector(`link[rel="${rel}"]`);
    if (!linkTag) {
      linkTag = document.createElement('link');
      linkTag.setAttribute('rel', rel);
      document.head.appendChild(linkTag);
    }
    linkTag.setAttribute('href', href);
  };

  useEffect(() => {
    if (slugParam) {
      fetchSingleBlog(slugParam);
    } else {
      setSingleBlog(null);
      fetchBlogs();
    }
  }, [slugParam]);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  const getImageUrl = (img: string | null) => {
    if (!img) return null;
    if (img.startsWith('http')) return img;
    return `${API_URL}${img}`;
  };

  // ─────────────── SINGLE BLOG VIEW ───────────────
  if (slugParam && singleBlog) {
    return (
      <>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: singleBlog.meta_title || singleBlog.title,
              description: singleBlog.meta_description || singleBlog.excerpt,
              image: singleBlog.featured_image ? getImageUrl(singleBlog.featured_image) : undefined,
              author: {
                '@type': 'Organization',
                name: singleBlog.author || 'Doon International School',
              },
              publisher: {
                '@type': 'Organization',
                name: 'Doon International School, Jabalpur',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.dooninternationaljabalpur.com/assets/doonlogo.png',
                },
              },
              datePublished: singleBlog.created_at,
              dateModified: singleBlog.updated_at,
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': singleBlog.canonical_url || `https://www.dooninternationaljabalpur.com/blog?post=${singleBlog.slug}`,
              },
            }),
          }}
        />

        <article>
          {/* Hero Header */}
          <header className="relative bg-gradient-to-br from-[#001d4a] via-[#002B6B] to-[#003d8f] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-10 w-40 h-40 bg-[#FFD700]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#FFD700]/8 rounded-full blur-3xl" />
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 py-14 md:py-20">
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-sm flex-wrap">
                  <li><Link href="/" className="text-white/60 hover:text-[#FFD700] transition-colors">Home</Link></li>
                  <li className="text-white/40">/</li>
                  <li><Link href="/blog" className="text-white/60 hover:text-[#FFD700] transition-colors">Blog</Link></li>
                  <li className="text-white/40">/</li>
                  <li className="text-[#FFD700] font-medium truncate max-w-[200px]">{singleBlog.title}</li>
                </ol>
              </nav>

              <div className="flex items-center gap-3 mb-5 text-sm text-white/60 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(singleBlog.created_at)}
                </span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {singleBlog.author}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-heading">
                {singleBlog.title}
              </h1>

              {singleBlog.excerpt && (
                <p className="mt-5 text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl">
                  {singleBlog.excerpt}
                </p>
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <path d="M0 60V20C360 0 720 40 1080 20C1260 10 1380 20 1440 30V60H0Z" fill="white" />
              </svg>
            </div>
          </header>

          {/* Featured Image */}
          {singleBlog.featured_image && (
            <div className="max-w-4xl mx-auto px-4 -mt-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <img
                  src={getImageUrl(singleBlog.featured_image)!}
                  alt={singleBlog.title}
                  className="w-full h-auto max-h-[500px] object-cover"
                />
              </div>
            </div>
          )}

          {/* Blog Content */}
          <div className="max-w-4xl mx-auto px-4 py-10 md:py-14">
            <div
              className="prose prose-lg max-w-none
                prose-headings:text-[#002B6B] prose-headings:font-bold
                prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-a:text-[#002B6B] prose-a:underline prose-a:font-medium hover:prose-a:text-[#FFD700]
                prose-strong:text-gray-900
                prose-ul:text-gray-700 prose-ol:text-gray-700
                prose-li:marker:text-[#002B6B]
                prose-img:rounded-xl prose-img:shadow-md
                prose-blockquote:border-l-[#FFD700] prose-blockquote:bg-[#002B6B]/5 prose-blockquote:rounded-r-lg prose-blockquote:py-2 prose-blockquote:px-4
                prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                prose-pre:bg-[#1a1a2e] prose-pre:text-gray-100"
              dangerouslySetInnerHTML={{ __html: singleBlog.content }}
            />
          </div>

          {/* Author & Back */}
          <div className="max-w-4xl mx-auto px-4 pb-12">
            <div className="border-t border-gray-200 pt-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#002B6B] flex items-center justify-center text-white font-bold text-lg">
                    {singleBlog.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{singleBlog.author}</p>
                    <p className="text-sm text-gray-500">Published on {formatDate(singleBlog.created_at)}</p>
                  </div>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#002B6B] text-white rounded-lg hover:bg-[#001d4a] transition-colors font-medium text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  All Articles
                </Link>
              </div>
            </div>
          </div>
        </article>
      </>
    );
  }

  // ─────────────── BLOG LISTING VIEW ───────────────
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#001d4a] via-[#002B6B] to-[#003d8f] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-[#FFD700]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#FFD700]/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link href="/" className="text-white/60 hover:text-[#FFD700] transition-colors">Home</Link></li>
              <li className="text-white/40">/</li>
              <li className="text-[#FFD700] font-medium">Blog</li>
            </ol>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/10">
              <span className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium tracking-wide">Latest Updates &amp; Insights</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
              Our <span className="text-[#FFD700]">Blog</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Stay updated with the latest news, events, and educational insights from Doon International School, Jabalpur
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V20C360 0 720 40 1080 20C1260 10 1380 20 1440 30V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-[#002B6B]/20 border-t-[#002B6B] rounded-full animate-spin mb-4" />
            <p className="text-gray-500 text-sm">Loading articles...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.834-1.964-.834-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <p className="text-gray-600 font-medium">{error}</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-[#002B6B]/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#002B6B]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Articles Yet</h3>
            <p className="text-gray-500">Stay tuned! We&apos;ll be publishing our latest stories and updates soon.</p>
          </div>
        ) : (
          <>
            {/* Featured Blog (First One) */}
            {blogs.length > 0 && (
              <div className="mb-12">
                <Link href={`/blog?post=${blogs[0].slug}`} className="group block">
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-64 md:h-96 overflow-hidden bg-gradient-to-br from-[#002B6B]/10 to-[#FFD700]/10">
                        {blogs[0].featured_image ? (
                          <img
                            src={getImageUrl(blogs[0].featured_image)!}
                            alt={blogs[0].title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#002B6B] to-[#003d8f]">
                            <svg className="w-16 h-16 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                        )}
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#FFD700] text-[#002B6B] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-6 md:p-10 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {formatDate(blogs[0].created_at)}
                          </span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full" />
                          <span>{blogs[0].author}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#002B6B] transition-colors line-clamp-3">
                          {blogs[0].title}
                        </h2>
                        {blogs[0].excerpt && (
                          <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{blogs[0].excerpt}</p>
                        )}
                        <div className="flex items-center text-[#002B6B] font-semibold group-hover:gap-3 gap-2 transition-all">
                          <span>Read Full Article</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Rest of the blogs */}
            {blogs.length > 1 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {blogs.slice(1).map((blog) => (
                  <Link href={`/blog?post=${blog.slug}`} key={blog.id} className="group block">
                    <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-400 border border-gray-100 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#002B6B]/10 to-[#FFD700]/10">
                        {blog.featured_image ? (
                          <img
                            src={getImageUrl(blog.featured_image)!}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#002B6B]/80 to-[#003d8f]">
                            <svg className="w-12 h-12 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3 text-xs text-gray-400">
                          <span>{formatDate(blog.created_at)}</span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full" />
                          <span>{blog.author}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#002B6B] transition-colors line-clamp-2">
                          {blog.title}
                        </h3>
                        {blog.excerpt && (
                          <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">{blog.excerpt}</p>
                        )}
                        <div className="flex items-center text-[#002B6B] text-sm font-semibold group-hover:gap-2 gap-1.5 transition-all mt-auto pt-3 border-t border-gray-50">
                          <span>Read More</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  onClick={() => fetchBlogs(pagination.page - 1)}
                  disabled={pagination.page <= 1}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-sm font-medium"
                >
                  ← Previous
                </button>
                {Array.from({ length: Math.min(pagination.totalPages, 7) }, (_, i) => {
                  const pageNum = i + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => fetchBlogs(pageNum)}
                      className={`w-10 h-10 rounded-lg text-sm font-semibold transition-all ${pagination.page === pageNum
                          ? 'bg-[#002B6B] text-white shadow-lg shadow-[#002B6B]/20'
                          : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                <button
                  onClick={() => fetchBlogs(pagination.page + 1)}
                  disabled={pagination.page >= pagination.totalPages}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-sm font-medium"
                >
                  Next →
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#002B6B]/20 border-t-[#002B6B] rounded-full animate-spin mb-4" />
        <p className="text-gray-500 text-sm">Loading...</p>
      </div>
    }>
      <BlogContent />
    </Suspense>
  );
}
