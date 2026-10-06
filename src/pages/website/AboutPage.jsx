import React from 'react';
import { Link } from 'react-router-dom';
import EduStowLogo from '../../components/common/EduStowLogo';

export default function AboutPage() {
  return (
    <div className="about-page bg-white">
      {/* Page Header: Formal Yellow Banner */}
      <section 
        className="py-5 text-center text-lg-start position-relative classic-hero-yellow border-bottom"
        style={{ minHeight: '240px', borderColor: '#FCD34D' }}
      >
        <div className="container py-3 position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="badge bg-dark text-warning rounded-pill px-3 py-1.5 fw-bold mb-2">
                WHO WE ARE
              </span>
              <h1 className="display-5 fw-bold text-dark mb-2" style={{ letterSpacing: '-0.02em' }}>
                About EduStow
              </h1>
              <p className="lead text-dark opacity-90 fs-6 mb-3" style={{ maxWidth: '580px', lineHeight: '1.6' }}>
                Engineering modern, intuitive, and complete school management cloud solutions to empower educators and advance African education.
              </p>
              <div className="d-flex flex-wrap gap-2.5">
                <Link 
                  to="/user" 
                  className="btn rounded-pill px-4 py-2 fw-bold text-white shadow-sm" 
                  style={{ backgroundColor: '#8CC641', borderColor: '#8CC641', fontSize: '14px' }}
                >
                  Join Leading Schools
                </Link>
                <Link to="/login" className="btn btn-dark rounded-pill px-4 py-2 fw-bold text-white" style={{ fontSize: '14px' }}>
                  Login to Portal
                </Link>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-flex justify-content-end align-items-center">
              <div className="p-3 bg-white rounded-3 shadow-sm border border-light">
                <EduStowLogo variant="light" size="xl" showTagline={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Philosophy & Mission */}
      <section className="py-5 bg-white">
        <div className="container py-lg-3">
          <div className="row align-items-center g-4 g-lg-5 mb-5 pb-3">
            <div className="col-lg-6">
              <span className="classic-badge-yellow px-3 py-1 rounded-pill d-inline-block mb-3">
                OUR PHILOSOPHY
              </span>
              <h2 className="display-6 fw-bold text-dark mb-3">
                Technology That Does The Heavy Lifting Behind The Scenes
              </h2>
              <p className="text-secondary mb-3 small lh-base" style={{ color: '#475569', fontSize: '14.5px' }}>
                At EduStow, we believe technology is at its most effective when it remains unnoticed. We design and develop systems that are an intuitive pleasure to use, speak the same academic language, and reliably shoulder the administrative burden.
              </p>
              <p className="text-secondary mb-4 small lh-base" style={{ color: '#475569', fontSize: '14.5px' }}>
                We help your school capture, protect, and share data securely whenever and wherever needed—eliminating redundant spreadsheets and preserving institutional continuity.
              </p>
              <div className="row g-3 pt-1">
                <div className="col-sm-6">
                  <div className="border-start border-3 ps-3" style={{ borderColor: '#FFE468' }}>
                    <h6 className="fw-bold text-dark mb-1">Zero Redundancy</h6>
                    <p className="small text-secondary mb-0" style={{ color: '#64748B' }}>Unified database with zero duplicate student files.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="border-start border-3 ps-3" style={{ borderColor: '#8CC641' }}>
                    <h6 className="fw-bold text-dark mb-1">Empowered Staff</h6>
                    <p className="small text-secondary mb-0" style={{ color: '#64748B' }}>Rapid grading, digital roll-call, and auto-generated broadsheets.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="position-relative rounded-4 overflow-hidden border shadow-sm" style={{ borderColor: '#E2E8F0' }}>
                <img src="/img/about-1.jpg" alt="EduStow Learning" className="w-100 img-fluid" style={{ minHeight: '340px', objectFit: 'cover' }} />
                <div 
                  className="position-absolute bottom-0 start-0 end-0 p-3 text-center text-white"
                  style={{ background: 'linear-gradient(to top, rgba(39, 38, 48, 0.9) 0%, transparent 100%)' }}
                >
                  <p className="small mb-0 fw-semibold">Integrated K-12 and Higher Education Operating System</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars of Excellence */}
          <div className="row align-items-center g-4 g-lg-5 py-lg-3">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="rounded-4 overflow-hidden border shadow-sm" style={{ borderColor: '#E2E8F0' }}>
                <img src="/img/about-2.jpg" alt="Why Choose EduStow" className="w-100 img-fluid" style={{ minHeight: '340px', objectFit: 'cover' }} />
              </div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2">
              <span className="classic-badge-green px-3 py-1 rounded-pill d-inline-block mb-3">
                WHY CHOOSE EDUSTOW
              </span>
              <h2 className="display-6 fw-bold text-dark mb-3">
                Setting The Standard for Modern Educational Technology
              </h2>
              <p className="text-secondary mb-3 small lh-base" style={{ color: '#475569', fontSize: '14.5px' }}>
                EduStow provides all key tools required for the effective administration of any K-12 institution: Nursery, Primary, Junior and Senior Secondary.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="d-flex align-items-start mb-2.5">
                  <i className="fa fa-check-circle text-success fs-5 me-2.5 mt-0.5"></i>
                  <div>
                    <strong className="text-dark">Cloud-Based Architecture:</strong>
                    <span className="text-secondary d-block small" style={{ color: '#64748B' }}>Access student records and financial reconciliations from any device, anywhere.</span>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-2.5">
                  <i className="fa fa-check-circle text-success fs-5 me-2.5 mt-0.5"></i>
                  <div>
                    <strong className="text-dark">Complete Peace of Mind:</strong>
                    <span className="text-secondary d-block small" style={{ color: '#64748B' }}>Automated daily cloud backups, 256-bit SSL encryption, and multi-tenant security guarantees.</span>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-2.5">
                  <i className="fa fa-check-circle text-success fs-5 me-2.5 mt-0.5"></i>
                  <div>
                    <strong className="text-dark">Continuous Feature Additions:</strong>
                    <span className="text-secondary d-block small" style={{ color: '#64748B' }}>Quarterly software updates, curriculum adjustments, and new integrations at zero additional cost.</span>
                  </div>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-dark rounded-pill px-4 py-2 fw-bold" style={{ fontSize: '14px' }}>
                Speak With An Educational Consultant <i className="fa fa-arrow-right ms-2 small text-warning"></i>
              </Link>
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
            Make Your School Future-Ready Today
          </h2>
          <p className="lead fs-6 mb-3 text-dark opacity-90 mx-auto" style={{ maxWidth: '600px', lineHeight: '1.6' }}>
            Join leading school proprietors, principals, and educators who rely on EduStow daily to deliver structured, world-class educational operations.
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-2.5">
            <Link 
              to="/user" 
              className="btn rounded-pill px-4.5 py-2.5 fw-bold text-white shadow" 
              style={{ backgroundColor: '#8CC641', borderColor: '#8CC641', fontSize: '15px' }}
            >
              Register Your School Now
            </Link>
            <Link to="/contact" className="btn btn-dark rounded-pill px-4.5 py-2.5 fw-bold text-white" style={{ fontSize: '15px' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
