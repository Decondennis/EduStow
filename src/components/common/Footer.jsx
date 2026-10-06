import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setShowAlert(true);
      setEmail('');
      setTimeout(() => setShowAlert(false), 5000);
    }, 600);
  };

  return (
    <footer style={{ backgroundColor: '#272630', color: '#F2F2F2' }}>
      <div className="container py-5">
        {showAlert && (
          <div className="mb-4">
            <div className="alert alert-success border-0 text-center rounded-3 py-2 small" role="alert">
              <i className="fa fa-check-circle me-2"></i> Subscribed successfully! Thank you for joining our educational briefing.
            </div>
          </div>
        )}

        <div className="row g-4 g-lg-5">
          {/* Column 1: Get in Touch */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3" style={{ color: '#FFE468' }}>Get In Touch</h5>
            <div className="mb-3" style={{ width: '40px', height: '3px', backgroundColor: '#8CC641' }}></div>
            <p className="small mb-3 text-light opacity-80" style={{ lineHeight: '1.6' }}>
              Do you have a school?<br />
              Harness the power of a complete cloud-based school management system.
            </p>
            <div className="small d-flex flex-column gap-2 text-light opacity-90">
              <div className="d-flex align-items-center">
                <i className="fa fa-map-marker-alt me-2.5" style={{ color: '#FFE468', width: '16px' }}></i>
                <span>27 Edgerly Cal. CRS. Nig.</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="fa fa-envelope me-2.5" style={{ color: '#FFE468', width: '16px' }}></i>
                <a href="mailto:info@edustow.com" className="text-light text-decoration-none">info@edustow.com</a>
              </div>
              <div className="d-flex align-items-center">
                <i className="fa fa-phone-alt me-2.5" style={{ color: '#FFE468', width: '16px' }}></i>
                <span>+234 0912 100 1933</span>
              </div>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="fw-bold mb-3" style={{ color: '#FFE468', fontSize: '15px' }}>Platform</h5>
            <div className="mb-3" style={{ width: '40px', height: '3px', backgroundColor: '#8CC641' }}></div>
            <div className="d-flex flex-column gap-2 small">
              <Link to="/features" className="text-light opacity-80 text-decoration-none hover-opacity">
                Admissions
              </Link>
              <Link to="/features" className="text-light opacity-80 text-decoration-none hover-opacity">
                Fees Collection
              </Link>
              <Link to="/features" className="text-light opacity-80 text-decoration-none hover-opacity">
                Exam Grading
              </Link>
              <Link to="/features" className="text-light opacity-80 text-decoration-none hover-opacity">
                Attendance
              </Link>
              <Link to="/features" className="text-light opacity-80 text-decoration-none hover-opacity">
                Staff Payroll
              </Link>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="fw-bold mb-3" style={{ color: '#FFE468', fontSize: '15px' }}>Quick Links</h5>
            <div className="mb-3" style={{ width: '40px', height: '3px', backgroundColor: '#8CC641' }}></div>
            <div className="d-flex flex-column gap-2 small">
              <Link to="/" className="text-light opacity-80 text-decoration-none hover-opacity">
                Home
              </Link>
              <Link to="/about" className="text-light opacity-80 text-decoration-none hover-opacity">
                About Us
              </Link>
              <Link to="/features" className="text-light opacity-80 text-decoration-none hover-opacity">
                App. Features
              </Link>
              <Link to="/tech-club" className="text-light opacity-80 text-decoration-none hover-opacity">
                Tech Club
              </Link>
              <Link to="/pricing" className="text-light opacity-80 text-decoration-none hover-opacity">
                Pricing
              </Link>
              <Link to="/contact" className="text-light opacity-80 text-decoration-none hover-opacity">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3" style={{ color: '#FFE468', fontSize: '15px' }}>Newsletter</h5>
            <div className="mb-3" style={{ width: '40px', height: '3px', backgroundColor: '#8CC641' }}></div>
            <p className="small text-light opacity-80 mb-3">
              Subscribe to get updates on new academic modules and system releases.
            </p>
            <form onSubmit={handleSubmit} className="mb-3">
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter administrator email"
                  required
                  className="form-control rounded-start-pill border-0 px-3 small"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF', fontSize: '13.5px' }}
                />
                <button 
                  className="btn rounded-end-pill px-3.5 fw-bold small text-white" 
                  type="submit" 
                  disabled={submitting}
                  style={{ backgroundColor: '#8CC641', borderColor: '#8CC641' }}
                >
                  {submitting ? '...' : 'Sign Up'}
                </button>
              </div>
            </form>

            <div className="d-flex align-items-center gap-2">
              <span className="small text-muted me-1">Follow Us:</span>
              <a href="#" className="btn btn-sm btn-outline-warning rounded-circle p-0 d-inline-flex align-items-center justify-content-center" style={{ width: 30, height: 30 }} aria-label="Twitter">
                <i className="fab fa-twitter small"></i>
              </a>
              <a href="#" className="btn btn-sm btn-outline-warning rounded-circle p-0 d-inline-flex align-items-center justify-content-center" style={{ width: 30, height: 30 }} aria-label="Facebook">
                <i className="fab fa-facebook-f small"></i>
              </a>
              <a href="#" className="btn btn-sm btn-outline-warning rounded-circle p-0 d-inline-flex align-items-center justify-content-center" style={{ width: 30, height: 30 }} aria-label="LinkedIn">
                <i className="fab fa-linkedin-in small"></i>
              </a>
              <a href="#" className="btn btn-sm btn-outline-warning rounded-circle p-0 d-inline-flex align-items-center justify-content-center" style={{ width: 30, height: 30 }} aria-label="Instagram">
                <i className="fab fa-instagram small"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Formal Yellow Bottom Copyright Bar */}
      <div 
        className="py-3 border-top"
        style={{ 
          backgroundColor: '#FFE468', 
          borderColor: '#FCD34D',
          color: '#272630',
          fontSize: '13px'
        }}
      >
        <div className="container">
          <div className="row align-items-center g-2 text-dark">
            <div className="col-md-6 text-center text-md-start">
              <span>Copyright &copy; {new Date().getFullYear()} <strong>EduStow</strong>. All Rights Reserved.</span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <span>
                Designed with excellence for educational institutions
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
