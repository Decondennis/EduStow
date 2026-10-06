import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    subject: '',
    message: '',
  });

  const [showAlert, setShowAlert] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setShowAlert(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        schoolName: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setShowAlert(false), 7000);
    }, 600);
  };

  return (
    <div className="contact-page bg-white">
      {/* Header Banner: Formal Yellow */}
      <section 
        className="py-5 text-center text-lg-start position-relative classic-hero-yellow border-bottom"
        style={{ minHeight: '240px', borderColor: '#FCD34D' }}
      >
        <div className="container py-3 position-relative" style={{ zIndex: 1 }}>
          <span className="badge bg-dark text-warning rounded-pill px-3 py-1.5 fw-bold mb-2">
            WE ARE HERE TO HELP
          </span>
          <h1 className="display-5 fw-bold text-dark mb-2" style={{ letterSpacing: '-0.02em' }}>
            Contact EduStow
          </h1>
          <p className="lead text-dark opacity-90 fs-6 mb-0" style={{ maxWidth: '620px', lineHeight: '1.6' }}>
            Speak directly with our educational deployment team, request a system walkthrough, or ask any technical questions.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-5 bg-white">
        <div className="container py-lg-3">
          <div className="row g-3.5 mb-5">
            {/* Office Address */}
            <div className="col-lg-4 col-md-6">
              <div className="classic-card h-100 p-4 text-center">
                <div className="classic-icon-box classic-icon-box-yellow mx-auto mb-3">
                  <i className="fa fa-map-marker-alt"></i>
                </div>
                <h6 className="fw-bold text-dark mb-1.5 fs-6">Headquarters</h6>
                <p className="text-secondary small mb-0" style={{ color: '#64748B', lineHeight: '1.6' }}>
                  27 Edgerly Road, Calabar<br />
                  Cross River State, Nigeria
                </p>
              </div>
            </div>

            {/* Direct Phone Lines */}
            <div className="col-lg-4 col-md-6">
              <div className="classic-card h-100 p-4 text-center">
                <div className="classic-icon-box classic-icon-box-green mx-auto mb-3">
                  <i className="fa fa-phone"></i>
                </div>
                <h6 className="fw-bold text-dark mb-1.5 fs-6">Direct Phone Lines</h6>
                <p className="small mb-0" style={{ lineHeight: '1.6' }}>
                  <a href="tel:+23409121001933" className="text-dark fw-bold text-decoration-none">+234 0912 100 1933</a><br />
                  <a href="tel:+2347062028958" className="text-secondary text-decoration-none" style={{ color: '#64748B' }}>+234 706 202 8958</a>
                </p>
              </div>
            </div>

            {/* Email Support */}
            <div className="col-lg-4 col-md-6">
              <div className="classic-card h-100 p-4 text-center">
                <div className="classic-icon-box classic-icon-box-yellow mx-auto mb-3">
                  <i className="fa fa-envelope-open"></i>
                </div>
                <h6 className="fw-bold text-dark mb-1.5 fs-6">Email Inquiries</h6>
                <p className="small mb-0" style={{ lineHeight: '1.6' }}>
                  <a href="mailto:info@edustow.com" className="text-dark fw-bold text-decoration-none">info@edustow.com</a><br />
                  <a href="mailto:support@edustow.com" className="text-secondary text-decoration-none" style={{ color: '#64748B' }}>support@edustow.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="classic-card p-4 p-md-5">
                <div className="text-center mb-4">
                  <span className="classic-badge-yellow px-2.5 py-1 rounded-pill d-inline-block mb-2">
                    SEND INQUIRY
                  </span>
                  <h3 className="fw-bold text-dark mb-1 fs-4">
                    Send Us a Direct Message
                  </h3>
                  <p className="text-secondary small" style={{ color: '#64748B' }}>
                    Fill out the form below and an EduStow representative will respond within 4 business hours.
                  </p>
                </div>

                {showAlert && (
                  <div className="alert alert-success text-center mb-4 rounded-3 border-0 shadow-sm" role="alert">
                    <i className="fa fa-check-circle me-2"></i>
                    Thank you! Your message was submitted successfully. Our team will contact you shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">Your Full Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Samuel Okon"
                        required
                        className="form-control rounded-3 py-2 small"
                        style={{ borderColor: '#CBD5E1' }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">Official Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. principal@school.edu.ng"
                        required
                        className="form-control rounded-3 py-2 small"
                        style={{ borderColor: '#CBD5E1' }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234..."
                        required
                        className="form-control rounded-3 py-2 small"
                        style={{ borderColor: '#CBD5E1' }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">School / Organization Name</label>
                      <input 
                        type="text" 
                        name="schoolName" 
                        value={formData.schoolName}
                        onChange={handleChange}
                        placeholder="e.g. St. Jude International Academy"
                        className="form-control rounded-3 py-2 small"
                        style={{ borderColor: '#CBD5E1' }}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-semibold text-dark">Subject *</label>
                      <input 
                        type="text" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Inquiry regarding school fees automation and report cards"
                        required
                        className="form-control rounded-3 py-2 small"
                        style={{ borderColor: '#CBD5E1' }}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-semibold text-dark">Your Message *</label>
                      <textarea 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="How can EduStow help your school?"
                        required
                        className="form-control rounded-3 small"
                        style={{ borderColor: '#CBD5E1' }}
                      ></textarea>
                    </div>
                    <div className="col-12 text-center pt-2">
                      <button 
                        type="submit" 
                        disabled={submitting}
                        className="btn rounded-pill px-5 py-2.5 fw-bold text-white shadow-sm"
                        style={{ backgroundColor: '#8CC641', borderColor: '#8CC641', fontSize: '15px' }}
                      >
                        {submitting ? 'Sending...' : 'Send Inquiry Message'} <i className="fa fa-paper-plane ms-1.5"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
