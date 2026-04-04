'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import './admin.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter email and password.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Save token and admin info
        localStorage.setItem('admin_token', result.data.token);
        localStorage.setItem('admin_name', result.data.admin.name);
        localStorage.setItem('admin_email', result.data.admin.email);

        // Redirect to dashboard
        router.push('/admin/dashboard');
      } else {
        setError(result.message || 'Invalid credentials. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Server not reachable. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-bg-pattern" aria-hidden="true" />

      <div className="admin-login-card">
        {/* Logo */}
        <div className="admin-login-logo">
          <Image
            src="/assets/doonlogo.png"
            alt="Doon International School"
            width={70}
            height={70}
            style={{ borderRadius: '14px', margin: '0 auto' }}
          />
          <div className="admin-login-badge">
            <i className="fas fa-shield-alt" />
            Admin Panel
          </div>
          <h2>Doon International School</h2>
          <p>Sign in to admin dashboard</p>
        </div>

        {/* Error */}
        {error && (
          <div className="admin-login-error">
            <i className="fas fa-exclamation-circle" />
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="admin-input-group">
            <label htmlFor="admin-email">Email Address</label>
            <div className="admin-input-wrap">
              <input
                type="email"
                id="admin-email"
                placeholder="admin@doonschool.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                autoComplete="email"
              />
              <i className="fas fa-envelope" />
            </div>
          </div>

          <div className="admin-input-group">
            <label htmlFor="admin-password">Password</label>
            <div className="admin-input-wrap">
              <input
                type={showPassword ? 'text' : 'password'}
                id="admin-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                autoComplete="current-password"
              />
              <i className="fas fa-lock" />
              <button
                type="button"
                className="admin-toggle-pass"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="admin-login-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="admin-spinner" />
                Signing in...
              </>
            ) : (
              <>
                Sign In
                <i className="fas fa-arrow-right" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
