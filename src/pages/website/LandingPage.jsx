import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const coreModules = [
    {
      id: 'admissions',
      title: 'State-of-the-Art Admissions',
      category: 'academic',
      icon: 'fa-user-plus',
      tag: 'Admissions & Intake',
      desc: 'Seamless student digital applications, automatic lead capture, entrance exam scoring, document verification, and instant parent onboarding.',
      colorScheme: 'yellow',
    },
    {
      id: 'fees',
      title: 'Automated Fee Collection',
      category: 'finance',
      icon: 'fa-file-invoice-dollar',
      tag: 'Finance & Accounts',
      desc: 'Automated invoice generation, multi-channel payment reconciliation (Card, Bank Transfer, USSD), real-time receipts, and defaulter tracking.',
      colorScheme: 'green',
    },
    {
      id: 'exams',
      title: 'Flexible Examination & Grading',
      category: 'academic',
      icon: 'fa-graduation-cap',
      tag: 'Academic Grading',
      desc: 'Customizable grading scales, automated report card compilation, position rankings, class remarks, and online result portal for parents.',
      colorScheme: 'yellow',
    },
    {
      id: 'attendance',
      title: 'One-Click Daily Attendance',
      category: 'operations',
      icon: 'fa-calendar-check',
      tag: 'Daily Operations',
      desc: 'Instant daily roll-call, subject-wise attendance logs, biometric compatibility, and automatic SMS notifications to parents for absent students.',
      colorScheme: 'green',
    },
    {
      id: 'hr',
      title: 'Complete HR & Staff Payroll',
      category: 'operations',
      icon: 'fa-users-cog',
      tag: 'Staff & Administration',
      desc: 'Comprehensive staff database, biometric clock-in, leave approvals, automated payslips, tax deductions, and bank disbursement schedules.',
      colorScheme: 'yellow',
    },
    {
      id: 'history',
      title: '360° Digital Student Records',
      category: 'academic',
      icon: 'fa-history',
      tag: 'Lifelong Records',
      desc: 'Complete digital profile from Year 1 to graduation, tracking continuous assessment, disciplinary logs, health history, and parent correspondence.',
      colorScheme: 'green',
    },
  ];

  const filteredModules = activeFilter === 'all' 
    ? coreModules 
    : coreModules.filter(m => m.category === activeFilter);

  return (
    <div className="landing-page bg-white">
      {/* Formal Yellow Hero Section - Compact & Classic */}
      <section 
        className="position-relative py-5 overflow-hidden classic-hero-yellow border-bottom"
        style={{ minHeight: '560px', borderColor: '#FCD34D' }}
      >
        <div className="container py-lg-3">
          <div className="row align-items-center justify-content-between g-4 g-lg-5">
            {/* Left Hero Content */}
            <div className="col-lg-7 text-center text-lg-start">
              {/* Trust Badge */}
              <div 
                className="d-inline-flex align-items-center rounded-pill px-3 py-1.5 mb-3 shadow-sm"
                style={{ backgroundColor: '#272630', color: '#FFFFFF' }}
              >
                <span 
                  className="badge rounded-pill me-2 px-2.5 py-1 text-white fw-bold" 
                  style={{ backgroundColor: '#8CC641', fontSize: '11px' }}
                >
                  Cloud ERP 2.0
                </span>
                <span className="small fw-semibold" style={{ color: '#FFE468', fontSize: '13px' }}>
                  Trusted by 180+ Leading Educational Institutions
                </span>
              </div>

              {/* Main Headline */}
              <h1 
                className="display-5 fw-bold mb-3 lh-sm" 
                style={{ 
                  color: '#272630',
                  letterSpacing: '-0.025em',
                  fontWeight: 800
                }}
              >
                Modern and Complete <br className="d-none d-md-inline" />
                <span style={{ color: '#272630' }}>School Automation Software</span>
              </h1>

              {/* Subtitle */}
              <p 
                className="lead mb-4 fs-6" 
                style={{ 
                  maxWidth: '580px', 
                  lineHeight: '1.7',
                  color: '#3D3C48',
                  fontWeight: 500
                }}
              >
                EduStow stabilizes, streamlines, and simplifies the administrative workload of your institution. From admissions and fees collection to computerized broadsheets, attendance, and payroll in one unified platform.
              </p>

              {/* CTA Buttons */}
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2.5 pt-1">
                <Link 
                  to="/user" 
                  className="btn rounded-pill px-4 py-2.5 fw-bold text-white shadow-sm d-inline-flex align-items-center"
                  style={{ backgroundColor: '#8CC641', borderColor: '#8CC641', fontSize: '15px' }}
                >
                  <i className="fa fa-school me-2"></i> Join Leading Schools
                  <i className="fa fa-arrow-right ms-2 small"></i>
                </Link>

                <Link 
                  to="/login" 
                  className="btn rounded-pill px-4 py-2.5 fw-bold text-white shadow-sm d-inline-flex align-items-center"
                  style={{ backgroundColor: '#272630', borderColor: '#272630', fontSize: '15px' }}
                >
                  <i className="fa fa-lock me-2 text-warning"></i> Access Portal
                </Link>

                <Link 
                  to="/pricing" 
                  className="btn btn-outline-dark rounded-pill px-4 py-2.5 fw-bold d-inline-flex align-items-center"
                  style={{ fontSize: '15px' }}
                >
                  <i className="fa fa-tag me-2"></i> View Pricing
                </Link>
              </div>

              {/* Quick Metrics Bar */}
              <div className="row g-3 pt-3 mt-2 border-top border-dark border-opacity-10">
                <div className="col-4">
                  <h4 className="fw-bold mb-0 text-dark">40+</h4>
                  <p className="small text-dark mb-0 fw-semibold opacity-75">Integrated Modules</p>
                </div>
                <div className="col-4">
                  <h4 className="fw-bold mb-0 text-dark">8</h4>
                  <p className="small text-dark mb-0 fw-semibold opacity-75">Dedicated Portals</p>
                </div>
                <div className="col-4">
                  <h4 className="fw-bold mb-0 text-dark">99.9%</h4>
                  <p className="small text-dark mb-0 fw-semibold opacity-75">Operational Uptime</p>
                </div>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="col-lg-5 text-center position-relative">
              <div className="position-relative d-inline-block">
                {/* Hero Student Image */}
                <img 
                  src="/img/hero.png" 
                  alt="EduStow Student" 
                  className="img-fluid position-relative py-2 px-1" 
                  style={{ maxHeight: '440px', objectFit: 'contain', zIndex: 1 }}
                />

                {/* Floating Metric 1 */}
                <div 
                  className="position-absolute bg-white shadow-sm rounded-3 p-2.5 text-start d-none d-sm-block border-start border-4 border-success border"
                  style={{ bottom: '20px', left: '-20px', zIndex: 2, minWidth: '200px' }}
                >
                  <div className="d-flex align-items-center">
                    <div 
                      className="rounded-circle p-2 me-2 d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: '#E4F4D9', width: '34px', height: '34px' }}
                    >
                      <i className="fa fa-check-circle" style={{ color: '#588820' }}></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '13px' }}>Instant Fee Alerts</h6>
                      <small className="text-muted" style={{ fontSize: '11px' }}>SMS & Email to Parents</small>
                    </div>
                  </div>
                </div>

                {/* Floating Metric 2 - Automated Grades (positioned top-left away from students) */}
                <div 
                  className="position-absolute bg-white shadow-sm rounded-3 p-2.5 text-start d-none d-sm-block border-start border-4 border-warning border"
                  style={{ top: '25px', left: '-25px', zIndex: 2, minWidth: '190px' }}
                >
                  <div className="d-flex align-items-center">
                    <div 
                      className="rounded-circle p-2 me-2 d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: '#FFF9C2', width: '34px', height: '34px' }}
                    >
                      <i className="fa fa-star text-warning"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '13px' }}>Automated Grades</h6>
                      <small className="text-muted" style={{ fontSize: '11px' }}>Terminal Broadsheets</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Highlights Ribbon */}
      <section className="py-3 text-white" style={{ backgroundColor: '#272630' }}>
        <div className="container">
          <div className="row text-center g-3 py-1">
            <div className="col-md-3 col-6">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <i className="fa fa-shield-alt text-warning fs-5"></i>
                <span className="small fw-bold">Enterprise Cloud Security</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <i className="fa fa-mobile-alt text-warning fs-5"></i>
                <span className="small fw-bold">Multi-Role Web Portals</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <i className="fa fa-sync-alt text-warning fs-5"></i>
                <span className="small fw-bold">Continuous Free Updates</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <i className="fa fa-headset text-warning fs-5"></i>
                <span className="small fw-bold">Dedicated 24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Compact & Organized */}
      <section className="py-5 bg-white">
        <div className="container py-lg-3">
          {/* Section Heading */}
          <div className="text-center mx-auto mb-4" style={{ maxWidth: '640px' }}>
            <span className="classic-badge-yellow px-3 py-1 rounded-pill d-inline-block mb-2">
              ABOUT EDUSTOW
            </span>
            <h2 className="display-6 fw-bold text-dark mb-2">
              Welcome To EduStow
            </h2>
            <div className="classic-accent-line mb-3"></div>
            <p className="text-secondary small" style={{ color: '#475569' }}>
              Simplifies, stabilizes, and streamlines the administration of your educational institution while projecting an avant-garde competitive image.
            </p>
          </div>

          {/* Welcome Card */}
          <div className="row align-items-center g-4 g-lg-5 mb-5 pb-2">
            <div className="col-lg-6">
              <div className="rounded-4 overflow-hidden border shadow-sm" style={{ borderColor: '#E2E8F0' }}>
                <img 
                  src="/img/about-1.jpg" 
                  alt="EduStow Classroom Learning" 
                  className="w-100 h-100" 
                  style={{ objectFit: 'cover', minHeight: '340px' }} 
                />
              </div>
            </div>

            <div className="col-lg-6">
              <span className="classic-badge-green px-3 py-1 rounded-pill d-inline-block mb-3">
                CLOUD ECOSYSTEM
              </span>
              <h3 className="h3 fw-bold text-dark mb-3">
                Modern School Operations, Simplified
              </h3>
              <p className="text-secondary mb-3 small lh-base" style={{ color: '#475569', fontSize: '14.5px' }}>
                EduStow simplifies, stabilizes, and streamlines the structure of a modern school. In addition, our system and all its functionalities will give you a competitive advantage over other educational institutions, improve communication between parents, students, and teachers, and allow your institution to operate smoothly.
              </p>

              <div className="row g-2.5 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa fa-check-circle text-success"></i>
                    <span className="small fw-bold text-dark">Automated Admissions</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa fa-check-circle text-success"></i>
                    <span className="small fw-bold text-dark">Instant Fee Collection</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa fa-check-circle text-success"></i>
                    <span className="small fw-bold text-dark">Error-Free Report Cards</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa fa-check-circle text-success"></i>
                    <span className="small fw-bold text-dark">Staff Biometric Payroll</span>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2.5">
                <Link to="/about" className="btn btn-dark rounded-pill px-4 py-2 fw-bold" style={{ fontSize: '14px' }}>
                  Learn More About Us <i className="fa fa-arrow-right ms-1.5 small"></i>
                </Link>
                <Link to="/user" className="btn btn-outline-dark rounded-pill px-4 py-2 fw-bold" style={{ fontSize: '14px' }}>
                  Register Your School
                </Link>
              </div>
            </div>
          </div>

          {/* Why Choose Us Card */}
          <div className="row align-items-center g-4 g-lg-5 flex-column-reverse flex-lg-row">
            <div className="col-lg-6">
              <span className="classic-badge-yellow px-3 py-1 rounded-pill d-inline-block mb-3">
                PROVEN EXCELLENCE
              </span>
              <h3 className="h3 fw-bold text-dark mb-3">
                Why Choose EduStow?
              </h3>
              <p className="text-secondary mb-3 small lh-base" style={{ color: '#475569', fontSize: '14.5px' }}>
                EduStow Suite is the most comprehensive, innovative, and advanced unified software with highly sophisticated cloud infrastructure for effective automation of academic and administrative processes of educational institutions.
              </p>
              <p className="text-secondary mb-4 small lh-base" style={{ color: '#475569', fontSize: '14.5px' }}>
                It features fully integrated modules for academic data management, fees, automated billing, human resources, and staff payroll payments. In addition, our customer service and continuous improvements at no additional cost set us apart.
              </p>
              <div>
                <Link 
                  to="/features" 
                  className="btn rounded-pill px-4 py-2 fw-bold text-white shadow-sm"
                  style={{ backgroundColor: '#8CC641', borderColor: '#8CC641', fontSize: '14px' }}
                >
                  Explore All 40+ Features <i className="fa fa-check-circle ms-2"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="rounded-4 overflow-hidden border shadow-sm" style={{ borderColor: '#E2E8F0' }}>
                <img 
                  src="/img/about-2.jpg" 
                  alt="Why Choose EduStow" 
                  className="w-100 h-100" 
                  style={{ objectFit: 'cover', minHeight: '340px' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE MODULES Section - Organized Compact Grid */}
      <section className="py-5 border-top border-bottom" style={{ backgroundColor: '#F8FAFC', borderColor: '#E2E8F0' }}>
        <div className="container py-lg-3">
          <div className="text-center mx-auto mb-4" style={{ maxWidth: '640px' }}>
            <span className="classic-badge-yellow px-3 py-1 rounded-pill d-inline-block mb-2">
              POWERFUL SYSTEM CAPABILITIES
            </span>
            <h2 className="display-6 fw-bold text-dark mb-2">
              Core Modules
            </h2>
            <div className="classic-accent-line mb-3"></div>
            <p className="text-secondary small" style={{ color: '#64748B' }}>
              Built specifically to handle every academic, operational, administrative, and financial requirement of schools.
            </p>
          </div>

          {/* Module Filter Tabs */}
          <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
            {[
              { id: 'all', label: 'All Modules' },
              { id: 'academic', label: 'Academic & Grading' },
              { id: 'finance', label: 'Finance & Fees' },
              { id: 'operations', label: 'Operations & HR' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`btn btn-sm rounded-pill px-3 py-1 fw-bold border transition ${
                  activeFilter === tab.id
                    ? 'btn-dark text-white'
                    : 'btn-light text-dark bg-white'
                }`}
                style={{ fontSize: '13px', borderColor: activeFilter === tab.id ? '#272630' : '#E2E8F0' }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Organized Module Cards */}
          <div className="row g-3.5">
            {filteredModules.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <div className="classic-card h-100 p-4 d-flex flex-column text-start">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    {/* Classic Icon Box with Formal Yellow */}
                    <div className={`classic-icon-box classic-icon-box-${item.colorScheme}`}>
                      <i className={`fa ${item.icon}`}></i>
                    </div>
                    <span className="badge bg-light text-dark border rounded-pill px-2.5 py-1 small fw-semibold">
                      {item.tag}
                    </span>
                  </div>

                  <h5 className="fw-bold text-dark mb-2 fs-6">
                    {item.title}
                  </h5>

                  <p className="text-secondary small mb-3 flex-grow-1" style={{ lineHeight: '1.6', color: '#64748B' }}>
                    {item.desc}
                  </p>

                  <div className="pt-2 border-top" style={{ borderColor: '#F1F5F9' }}>
                    <Link 
                      to="/features" 
                      className="text-decoration-none fw-bold small d-inline-flex align-items-center"
                      style={{ color: '#272630' }}
                    >
                      View Details <i className="fa fa-arrow-right ms-1.5 text-warning small"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4 pt-2">
            <Link 
              to="/features" 
              className="btn btn-dark rounded-pill px-4.5 py-2.5 fw-bold shadow-sm"
              style={{ fontSize: '14.5px' }}
            >
              See All 40+ School Modules & Portals <i className="fa fa-arrow-right ms-2 text-warning"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Formal Yellow Call to Action Banner */}
      <section 
        className="py-5 position-relative text-dark"
        style={{ 
          background: 'linear-gradient(rgba(255, 228, 104, 0.96), rgba(255, 228, 104, 0.96)), url(/img/call-to-action.jpg) center center / cover no-repeat',
        }}
      >
        <div className="container py-lg-3">
          <div className="row align-items-center justify-content-between g-4">
            <div className="col-lg-7 text-center text-lg-start">
              <span className="badge bg-dark text-warning rounded-pill px-3 py-1.5 mb-2 fw-bold">
                PARTNER WITH EDUSTOW
              </span>
              <h2 className="display-6 fw-bold text-dark mb-2">
                Do You Have a School?
              </h2>
              <p className="fs-6 mb-0 fw-semibold text-dark opacity-90" style={{ maxWidth: '580px', lineHeight: '1.6' }}>
                EduStow has an engineered module for each of the key processes needed in the management of your educational institution. Join over 180+ schools today.
              </p>
            </div>

            <div className="col-lg-5 text-center text-lg-end">
              <div className="d-flex flex-column flex-sm-row justify-content-lg-end gap-2.5">
                <Link 
                  to="/contact" 
                  className="btn btn-dark rounded-pill px-4 py-2.5 fw-bold shadow"
                >
                  <i className="fa fa-envelope me-2 text-warning"></i> Contact Us
                </Link>
                <Link 
                  to="/user" 
                  className="btn rounded-pill px-4 py-2.5 fw-bold text-white shadow"
                  style={{ backgroundColor: '#8CC641', borderColor: '#8CC641' }}
                >
                  <i className="fa fa-rocket me-2"></i> Join EduStow Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
