import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PricingPage() {
  const [studentCount, setStudentCount] = useState(250);

  const calculateTermCost = () => {
    return (studentCount * 1000).toLocaleString();
  };

  return (
    <div className="pricing-page bg-white">
      {/* Header Banner: Formal Yellow */}
      <section 
        className="py-5 text-center text-lg-start position-relative classic-hero-yellow border-bottom"
        style={{ minHeight: '240px', borderColor: '#FCD34D' }}
      >
        <div className="container py-3 position-relative" style={{ zIndex: 1 }}>
          <span className="badge bg-dark text-warning rounded-pill px-3 py-1.5 fw-bold mb-2">
            TRANSPARENT VALUE
          </span>
          <h1 className="display-5 fw-bold text-dark mb-2" style={{ letterSpacing: '-0.02em' }}>
            Transparent School Pricing Plans
          </h1>
          <p className="lead text-dark opacity-90 fs-6 mb-0" style={{ maxWidth: '620px', lineHeight: '1.6' }}>
            Predictable, flexible, and affordable investment tiers designed to grow alongside your institution without hidden setup costs or sudden price hikes.
          </p>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <section className="py-5 bg-white">
        <div className="container py-lg-3">
          <div className="text-center mx-auto mb-4" style={{ maxWidth: '620px' }}>
            <span className="classic-badge-yellow px-3 py-1 rounded-pill d-inline-block mb-2">
              SUBSCRIPTION TIERS
            </span>
            <h2 className="display-6 fw-bold text-dark mb-2">
              Choose The Plan That Suits Your School
            </h2>
            <div className="classic-accent-line mb-3"></div>
            <p className="text-secondary small" style={{ color: '#64748B' }}>
              Whether you need per-term operational flexibility or a lifetime dedicated installation, EduStow has you covered.
            </p>
          </div>

          <div className="row g-3.5 align-items-stretch">
            {/* Plan 1: Registration Fee */}
            <div className="col-lg-4 col-md-6">
              <div className="classic-card h-100 p-4 d-flex flex-column">
                <div className="mb-3">
                  <span className="badge bg-light text-dark border px-2.5 py-1 rounded-pill fw-bold small">
                    INITIAL SETUP
                  </span>
                </div>
                <h4 className="fw-bold text-dark mb-1 fs-5">
                  Registration Fee
                </h4>
                <p className="small text-secondary mb-3" style={{ color: '#64748B' }}>Complete initial onboarding, data migration, and deployment.</p>

                <div className="p-3 rounded-3 mb-3 text-center border" style={{ backgroundColor: '#F8FAFC', borderColor: '#E2E8F0' }}>
                  <span className="text-muted small d-block">One-Time Onboarding</span>
                  <div className="d-flex align-items-baseline justify-content-center">
                    <span className="fs-3 fw-bold text-dark">₦40,000</span>
                  </div>
                  <span className="badge rounded-pill mt-1" style={{ backgroundColor: '#FFF9C2', color: '#78350F' }}>One Time Payment</span>
                </div>

                <ul className="list-unstyled mb-4 flex-grow-1">
                  <li className="d-flex align-items-center mb-2 small">
                    <i className="fa fa-check text-success me-2"></i>
                    <span>System set-up fee & initial configuration</span>
                  </li>
                  <li className="d-flex align-items-center mb-2 small">
                    <i className="fa fa-check text-success me-2"></i>
                    <span>Custom domain name purchase & DNS link</span>
                  </li>
                  <li className="d-flex align-items-center mb-2 small">
                    <i className="fa fa-check text-success me-2"></i>
                    <span>Serverpilot fee & server orchestration</span>
                  </li>
                  <li className="d-flex align-items-center mb-2 small">
                    <i className="fa fa-check text-success me-2"></i>
                    <span>Cloud hosting setup & SSL security certificate</span>
                  </li>
                  <li className="d-flex align-items-center mb-2 small">
                    <i className="fa fa-check text-success me-2"></i>
                    <span>Staff introductory training & portal onboarding</span>
                  </li>
                </ul>

                <Link 
                  to="/user" 
                  className="btn btn-outline-dark rounded-pill py-2 fw-bold w-100"
                  style={{ fontSize: '14px' }}
                >
                  Get Started <i className="fa fa-arrow-right ms-1.5 small"></i>
                </Link>
              </div>
            </div>

            {/* Plan 2: Per Student (Most Popular) */}
            <div className="col-lg-4 col-md-6">
              <div 
                className="classic-card h-100 p-4 position-relative d-flex flex-column border-2 shadow-sm"
                style={{ borderColor: '#8CC641' }}
              >
                <div className="position-absolute top-0 start-50 translate-middle">
                  <span 
                    className="badge rounded-pill px-3 py-1.5 fw-bold text-white shadow-sm"
                    style={{ backgroundColor: '#8CC641', fontSize: '11px' }}
                  >
                    MOST POPULAR FOR SCHOOLS
                  </span>
                </div>

                <div className="mb-3 pt-2">
                  <span className="classic-badge-yellow px-2.5 py-1 rounded-pill d-inline-block">
                    TERM LICENSE
                  </span>
                </div>
                <h4 className="fw-bold text-dark mb-1 fs-5">
                  Cost For Each Student
                </h4>
                <p className="small text-secondary mb-3" style={{ color: '#64748B' }}>Pay-as-you-grow operational model scaled to student population.</p>

                <div 
                  className="p-3 rounded-3 mb-3 text-center border"
                  style={{ backgroundColor: 'rgba(255, 228, 104, 0.2)', borderColor: '#FCD34D' }}
                >
                  <span className="text-secondary small d-block">Active Student Billing</span>
                  <div className="d-flex align-items-baseline justify-content-center">
                    <span className="fs-3 fw-bold text-dark">₦1,000</span>
                    <span className="text-secondary ms-1 small">/ student</span>
                  </div>
                  <span className="badge rounded-pill mt-1" style={{ backgroundColor: '#E4F4D9', color: '#406616' }}>Per Academic Term</span>
                </div>

                <ul className="list-unstyled mb-4 flex-grow-1">
                  <li className="d-flex align-items-center mb-2 small">
                    <i className="fa fa-check text-success me-2"></i>
                    <span>Dedicated maintenance fee included</span>
                  </li>
                  <li className="d-flex align-items-center mb-2 small">
                    <i className="fa fa-check text-success me-2"></i>
                    <span>Domain name renewal included</span>
                  </li>
                  <li className="d-flex align-items-center mb-2 small">
                    <i className="fa fa-check text-success me-2"></i>
                    <span>Serverpilot fee included</span>
                  </li>
                  <li className="d-flex align-items-center mb-2 small">
                    <i className="fa fa-check text-success me-2"></i>
                    <span>High-speed cloud hosting fee included</span>
                  </li>
                  <li className="d-flex align-items-center mb-2 small">
                    <i className="fa fa-check text-success me-2"></i>
                    <span>Full access to all 40+ school modules</span>
                  </li>
                  <li className="d-flex align-items-center mb-2 small">
                    <i className="fa fa-check text-success me-2"></i>
                    <span>Priority WhatsApp and phone support</span>
                  </li>
                </ul>

                <Link 
                  to="/user" 
                  className="btn rounded-pill py-2 fw-bold text-white w-100 shadow-sm"
                  style={{ backgroundColor: '#8CC641', borderColor: '#8CC641', fontSize: '14px' }}
                >
                  Start With This Plan <i className="fa fa-rocket ms-1.5 small"></i>
                </Link>
              </div>
            </div>

            {/* Plan 3: Perpetual License */}
            <div className="col-lg-4 col-md-6">
              <div className="classic-card h-100 p-4 d-flex flex-column">
                <div className="mb-3">
                  <span className="badge bg-dark text-warning border px-2.5 py-1 rounded-pill fw-bold small">
                    ENTERPRISE OWNERSHIP
                  </span>
                </div>
                <h4 className="fw-bold text-dark mb-1 fs-5">
                  Perpetual License
                </h4>
                <p className="small text-secondary mb-3" style={{ color: '#64748B' }}>Complete institutional license for dedicated school networks.</p>

                <div className="p-3 rounded-3 mb-3 text-center border" style={{ backgroundColor: '#F8FAFC', borderColor: '#E2E8F0' }}>
                  <span className="text-muted small d-block">Lifetime License</span>
                  <div className="d-flex align-items-baseline justify-content-center">
                    <span className="fs-3 fw-bold text-dark">₦6,000,000</span>
                  </div>
                  <span className="badge rounded-pill mt-1" style={{ backgroundColor: '#272630', color: '#FFE468' }}>One Time Payment</span>
                </div>

                <ul className="list-unstyled mb-4 flex-grow-1">
                  <li className="d-flex align-items-center mb-2 small">
                    <i className="fa fa-check text-success me-2"></i>
                    <span>System Set-up — <strong>Free & Fully Custom</strong></span>
                  </li>
                  <li className="d-flex align-items-center mb-2 small">
                    <i className="fa fa-check text-success me-2"></i>
                    <span>Ongoing Recurring Term Fees — <strong>₦0 / None</strong></span>
                  </li>
                  <li className="d-flex align-items-center mb-2 small">
                    <i className="fa fa-check text-success me-2"></i>
                    <span>Dedicated On-Premise or Private Cloud Deployment</span>
                  </li>
                  <li className="d-flex align-items-center mb-2 small">
                    <i className="fa fa-check text-success me-2"></i>
                    <span>Unlimited student and staff accounts across all branches</span>
                  </li>
                  <li className="d-flex align-items-center mb-2 small">
                    <i className="fa fa-check text-success me-2"></i>
                    <span>Direct source access & bespoke feature integration</span>
                  </li>
                </ul>

                <Link 
                  to="/contact" 
                  className="btn btn-outline-dark rounded-pill py-2 fw-bold w-100"
                  style={{ fontSize: '14px' }}
                >
                  Contact For Enterprise <i className="fa fa-envelope ms-1.5 small"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Term Cost Estimator */}
          <div className="mt-5 p-4 rounded-4 border bg-white shadow-sm" style={{ borderColor: '#E2E8F0' }}>
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <span className="classic-badge-yellow px-2.5 py-1 rounded-pill d-inline-block mb-2">
                  COST ESTIMATOR
                </span>
                <h3 className="fw-bold text-dark mb-1 fs-4">
                  Estimate Your School's Termly Cost
                </h3>
                <p className="text-secondary small mb-3" style={{ color: '#64748B' }}>
                  Drag the slider to adjust your estimated student enrollment and view the projected term cost.
                </p>
                <div className="mb-2">
                  <label className="form-label fw-bold d-flex justify-content-between text-dark">
                    <span>Enrolled Students:</span>
                    <span className="text-success fs-5">{studentCount} Students</span>
                  </label>
                  <input 
                    type="range" 
                    className="form-range" 
                    min="50" 
                    max="3000" 
                    step="25"
                    value={studentCount}
                    onChange={(e) => setStudentCount(Number(e.target.value))}
                  />
                  <div className="d-flex justify-content-between text-muted small">
                    <span>50 students</span>
                    <span>1,500 students</span>
                    <span>3,000+ students</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 text-center text-lg-end">
                <div className="p-3.5 rounded-4 shadow-sm border d-inline-block text-center w-100 bg-light" style={{ maxWidth: '320px', borderColor: '#E2E8F0' }}>
                  <span className="text-muted small text-uppercase fw-bold">Projected Cost</span>
                  <div className="my-1.5">
                    <span className="display-6 fw-bold text-dark">₦{calculateTermCost()}</span>
                    <span className="text-muted d-block small">/ term</span>
                  </div>
                  <p className="small text-secondary mb-3" style={{ color: '#64748B', fontSize: '12.5px' }}>All 40+ modules, parent portal, and staff accounts included.</p>
                  <Link 
                    to="/user" 
                    className="btn rounded-pill py-2 px-4 fw-bold text-white w-100 shadow-sm"
                    style={{ backgroundColor: '#8CC641', borderColor: '#8CC641', fontSize: '14px' }}
                  >
                    Register School Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section 
        className="py-5 position-relative text-dark text-center"
        style={{ 
          background: 'linear-gradient(rgba(255, 228, 104, 0.96), rgba(255, 228, 104, 0.96)), url(/img/call-to-action.jpg) center center / cover no-repeat',
        }}
      >
        <div className="container py-lg-3">
          <h2 className="display-6 fw-bold text-dark mb-2">
            Do You Have Custom Requirements?
          </h2>
          <p className="lead fs-6 mb-3 text-dark opacity-90 mx-auto" style={{ maxWidth: '600px', lineHeight: '1.6' }}>
            We work with school boards, state education ministries, and dioceses to implement centralized multi-campus systems.
          </p>
          <Link to="/contact" className="btn btn-dark rounded-pill px-5 py-2.5 fw-bold text-white" style={{ fontSize: '15px' }}>
            Talk to an EduStow Specialist
          </Link>
        </div>
      </section>
    </div>
  );
}
