import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import EduStowLogo from './EduStowLogo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // The 6 core navigation links
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'App. Features', path: '/features' },
    { label: 'Join', path: '/user' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="sticky-top w-100 shadow-sm" style={{ zIndex: 1050 }}>
      {/* Top Formal Yellow Utility Strip */}
      <div 
        className="py-1.5 px-3 border-bottom"
        style={{ 
          backgroundColor: '#FFE468', 
          borderColor: '#FCD34D',
          color: '#272630' 
        }}
      >
        <div className="container d-flex flex-wrap justify-content-between align-items-center small py-0.5">
          <div className="d-flex align-items-center flex-wrap gap-3">
            <a 
              href="tel:+23409121001933" 
              className="text-decoration-none fw-bold d-inline-flex align-items-center"
              style={{ color: '#272630', fontSize: '13px' }}
            >
              <i className="bi bi-telephone-fill me-2" style={{ color: '#73A82C', fontSize: '12px' }}></i>
              <span>+234 0912 100 1933</span>
            </a>
            <span className="opacity-40 d-none d-sm-inline" style={{ color: '#272630' }}>|</span>
            <a 
              href="mailto:info@edustow.com" 
              className="text-decoration-none fw-bold d-none d-sm-inline-flex align-items-center"
              style={{ color: '#272630', fontSize: '13px' }}
            >
              <i className="bi bi-envelope-fill me-2" style={{ color: '#73A82C', fontSize: '12px' }}></i>
              <span>info@edustow.com</span>
            </a>
            <span className="opacity-40 d-none d-md-inline" style={{ color: '#272630' }}>|</span>
            <span className="d-none d-md-inline fw-semibold opacity-90" style={{ fontSize: '12.5px', color: '#272630' }}>
              <i className="bi bi-shield-check me-1" style={{ color: '#588820' }}></i> Accredited Cloud ERP 2.0
            </span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <div className="d-none d-lg-flex align-items-center gap-2 me-2">
              <span className="fw-bold small opacity-75" style={{ color: '#272630', fontSize: '12px' }}>Follow:</span>
              <a href="#" className="text-decoration-none px-1" style={{ color: '#272630' }} aria-label="Facebook">
                <i className="fab fa-facebook-f" style={{ fontSize: '12px' }}></i>
              </a>
              <a href="#" className="text-decoration-none px-1" style={{ color: '#272630' }} aria-label="Twitter">
                <i className="fab fa-twitter" style={{ fontSize: '12px' }}></i>
              </a>
              <a href="#" className="text-decoration-none px-1" style={{ color: '#272630' }} aria-label="LinkedIn">
                <i className="fab fa-linkedin-in" style={{ fontSize: '12px' }}></i>
              </a>
            </div>

            <Link 
              to="/dashboard" 
              className="btn btn-sm rounded-pill px-3 py-1 fw-bold text-decoration-none d-inline-flex align-items-center shadow-sm"
              style={{ 
                fontSize: '12px', 
                backgroundColor: '#272630',
                color: '#FFE468',
                border: '1px solid #272630'
              }}
            >
              <i className="fa fa-tachometer-alt me-1.5" style={{ color: '#8CC641', fontSize: '11px' }}></i>
              School Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className="py-2.5 px-3 border-bottom"
        style={{ backgroundColor: '#272630', borderColor: 'rgba(255, 255, 255, 0.08)' }}
      >
        <div className="container d-flex align-items-center justify-content-between">
          {/* EduStow Logo */}
          <Link to="/" className="d-flex align-items-center text-decoration-none py-1">
            <EduStowLogo variant="dark" size="lg" showTagline={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="d-none d-lg-flex align-items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-pill fw-semibold text-decoration-none transition ${
                    isActive 
                      ? 'fw-bold' 
                      : 'hover-opacity'
                  }`
                }
                style={({ isActive }) => ({
                  fontSize: '14.5px',
                  letterSpacing: '-0.01em',
                  color: isActive ? '#272630' : '#F2F2F2',
                  backgroundColor: isActive ? '#FFE468' : 'transparent',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                })}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Right Action Buttons & Mobile Hamburger */}
          <div className="d-flex align-items-center gap-2">
            <Link
              to="/login"
              className="btn rounded-pill px-3.5 py-1.5 fw-bold text-decoration-none d-none d-sm-inline-flex align-items-center"
              style={{ 
                fontSize: '13.5px', 
                border: '1px solid #FFE468', 
                color: '#FFE468',
                backgroundColor: 'transparent'
              }}
            >
              <i className="fa fa-lock me-1.5 small"></i> Login
            </Link>
            
            <Link
              to="/user"
              className="btn rounded-pill px-4 py-1.5 fw-bold text-white shadow-sm text-decoration-none"
              style={{ 
                fontSize: '13.5px', 
                backgroundColor: '#8CC641', 
                borderColor: '#8CC641' 
              }}
            >
              Get Started
            </Link>

            {/* Mobile Toggle Button */}
            <button
              type="button"
              className="btn btn-dark d-lg-none p-2 border rounded-3 ms-1"
              style={{ borderColor: 'rgba(255,255,255,0.2)' }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <i className={`fa ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} fs-5 text-warning`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="d-lg-none border-top pt-3 pb-2 mt-2 px-3 border-secondary">
            <div className="d-flex flex-column gap-1">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-3 fw-semibold text-decoration-none ${
                      isActive ? 'bg-warning text-dark fw-bold' : 'text-light'
                    }`
                  }
                  style={{ fontSize: '15px' }}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="border-top pt-2 mt-2 d-flex flex-column gap-2 border-secondary">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn btn-outline-warning rounded-pill py-2 text-center fw-bold"
                >
                  <i className="fa fa-lock me-2"></i> Portal Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
