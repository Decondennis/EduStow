import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export default function UserJoinPage() {
  const navigate = useNavigate();
  const { registerSchool, switchRole } = useApp();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    schoolName: '',
    email: '',
    phone: '',
    address: '',
    state: 'Cross River State',
    city: 'Calabar',
    schoolType: 'K-12 (Nursery, Primary & Secondary)',
    studentEstimate: '200-500 Students',
    plan: 'term-license',
  });

  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
      setShowModal(true);

      // Register school in ecosystem context
      if (registerSchool) {
        registerSchool({
          name: formData.schoolName,
          slug: formData.schoolName.toLowerCase().replace(/\s+/g, '-'),
          adminEmail: formData.email,
          phone: formData.phone,
          address: `${formData.address}, ${formData.city}, ${formData.state}`,
          branchesCount: 1,
        });
      }
    }, 700);
  };

  const handleFinishToDashboard = () => {
    setShowModal(false);
    switchRole('admin');
    navigate('/dashboard');
  };

  return (
    <div className="join-page bg-white">
      {/* Header Banner: Formal Yellow */}
      <section 
        className="py-5 text-center text-lg-start position-relative classic-hero-yellow border-bottom"
        style={{ minHeight: '240px', borderColor: '#FCD34D' }}
      >
        <div className="container py-3 position-relative" style={{ zIndex: 1 }}>
          <span className="badge bg-dark text-warning rounded-pill px-3 py-1.5 fw-bold mb-2">
            INSTITUTIONAL ONBOARDING
          </span>
          <h1 className="display-5 fw-bold text-dark mb-2" style={{ letterSpacing: '-0.02em' }}>
            Join Leading Schools On EduStow
          </h1>
          <p className="lead text-dark opacity-90 fs-6 mb-0" style={{ maxWidth: '620px', lineHeight: '1.6' }}>
            Empower your staff, streamline student records, and automate fee collection. Set up your digital school environment in minutes.
          </p>
        </div>
      </section>

      {/* Main Registration Form */}
      <section className="py-5 bg-white">
        <div className="container py-lg-3">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="classic-card p-4 p-md-5">
                <div className="text-center mb-4">
                  <span className="classic-badge-green px-2.5 py-1 rounded-pill d-inline-block mb-2">
                    STEP 1 OF 1 — COMPLETE SCHOOL PROFILE
                  </span>
                  <h3 className="fw-bold text-dark mb-1 fs-4">
                    Register Your School
                  </h3>
                  <p className="text-secondary small" style={{ color: '#64748B' }}>
                    Provide the official administrator details below to initiate your cloud ERP instance.
                  </p>
                </div>

                {showAlert && (
                  <div className="alert alert-success text-center mb-4 rounded-3 border-0 shadow-sm" role="alert">
                    <i className="fa fa-check-circle me-2"></i>
                    Congratulations! Your school application was submitted and verified successfully.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {/* Administrator First & Last Name */}
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">Proprietor / Admin First Name *</label>
                      <input 
                        type="text" 
                        name="firstName" 
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="e.g. Dennis"
                        required
                        className="form-control rounded-3 py-2 small"
                        style={{ borderColor: '#CBD5E1' }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">Admin Last Name *</label>
                      <input 
                        type="text" 
                        name="lastName" 
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="e.g. Bassey"
                        required
                        className="form-control rounded-3 py-2 small"
                        style={{ borderColor: '#CBD5E1' }}
                      />
                    </div>

                    {/* School Name */}
                    <div className="col-12">
                      <label className="form-label small fw-semibold text-dark">Official School Name *</label>
                      <input 
                        type="text" 
                        name="schoolName" 
                        value={formData.schoolName}
                        onChange={handleChange}
                        placeholder="e.g. EduStow Model Academy"
                        required
                        className="form-control rounded-3 py-2 small"
                        style={{ borderColor: '#CBD5E1' }}
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">Official School Email *</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="admin@school.edu.ng"
                        required
                        className="form-control rounded-3 py-2 small"
                        style={{ borderColor: '#CBD5E1' }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">Contact Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                        required
                        className="form-control rounded-3 py-2 small"
                        style={{ borderColor: '#CBD5E1' }}
                      />
                    </div>

                    {/* School Type & Student Count */}
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">Institution Level *</label>
                      <select 
                        name="schoolType" 
                        value={formData.schoolType}
                        onChange={handleChange}
                        className="form-select rounded-3 py-2 small"
                        style={{ borderColor: '#CBD5E1' }}
                      >
                        <option value="Nursery & Primary">Nursery & Primary School</option>
                        <option value="Secondary & High School">Secondary / High School</option>
                        <option value="K-12 (Nursery, Primary & Secondary)">K-12 (All Levels)</option>
                        <option value="College / Tertiary Institution">College / Tertiary Institution</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">Estimated Student Population *</label>
                      <select 
                        name="studentEstimate" 
                        value={formData.studentEstimate}
                        onChange={handleChange}
                        className="form-select rounded-3 py-2 small"
                        style={{ borderColor: '#CBD5E1' }}
                      >
                        <option value="Under 100 Students">Under 100 Students</option>
                        <option value="100 - 300 Students">100 - 300 Students</option>
                        <option value="300 - 800 Students">300 - 800 Students</option>
                        <option value="800 - 2,000 Students">800 - 2,000 Students</option>
                        <option value="2,000+ Students (Multi-Branch)">2,000+ Students (Multi-Branch)</option>
                      </select>
                    </div>

                    {/* Address, City, State */}
                    <div className="col-12">
                      <label className="form-label small fw-semibold text-dark">School Physical Address *</label>
                      <input 
                        type="text" 
                        name="address" 
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Street address, campus building"
                        required
                        className="form-control rounded-3 py-2 small"
                        style={{ borderColor: '#CBD5E1' }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">City *</label>
                      <input 
                        type="text" 
                        name="city" 
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="form-control rounded-3 py-2 small"
                        style={{ borderColor: '#CBD5E1' }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">State / Region *</label>
                      <input 
                        type="text" 
                        name="state" 
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="form-control rounded-3 py-2 small"
                        style={{ borderColor: '#CBD5E1' }}
                      />
                    </div>

                    {/* Selected Plan Choice */}
                    <div className="col-12 pt-2">
                      <label className="form-label small fw-semibold text-dark">Choose Subscription Plan *</label>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className={`card p-3 border rounded-3 cursor-pointer transition ${formData.plan === 'term-license' ? 'border-success bg-white shadow-sm' : 'bg-light'}`} style={{ borderColor: formData.plan === 'term-license' ? '#8CC641' : '#E2E8F0' }}>
                            <div className="d-flex align-items-center">
                              <input 
                                type="radio" 
                                name="plan" 
                                value="term-license" 
                                checked={formData.plan === 'term-license'} 
                                onChange={handleChange}
                                className="form-check-input me-3"
                              />
                              <div>
                                <strong className="text-dark d-block small">Term License (₦1,000 / student)</strong>
                                <small className="text-muted" style={{ fontSize: '12px' }}>Scaled per term based on active enrollment.</small>
                              </div>
                            </div>
                          </label>
                        </div>
                        <div className="col-md-6">
                          <label className={`card p-3 border rounded-3 cursor-pointer transition ${formData.plan === 'setup-onetime' ? 'border-warning bg-white shadow-sm' : 'bg-light'}`} style={{ borderColor: formData.plan === 'setup-onetime' ? '#FCD34D' : '#E2E8F0' }}>
                            <div className="d-flex align-items-center">
                              <input 
                                type="radio" 
                                name="plan" 
                                value="setup-onetime" 
                                checked={formData.plan === 'setup-onetime'} 
                                onChange={handleChange}
                                className="form-check-input me-3"
                              />
                              <div>
                                <strong className="text-dark d-block small">Initial Setup Only (₦40,000)</strong>
                                <small className="text-muted" style={{ fontSize: '12px' }}>Onboarding, domain purchase & server pilot.</small>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 text-center pt-3">
                      <button 
                        type="submit" 
                        disabled={submitting}
                        className="btn rounded-pill px-5 py-2.5 fw-bold text-white shadow-sm"
                        style={{ backgroundColor: '#8CC641', borderColor: '#8CC641', fontSize: '15px' }}
                      >
                        {submitting ? 'Setting Up Your School...' : 'Complete Registration & Open Dashboard'} <i className="fa fa-arrow-right ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Success Modal */}
      {showModal && (
        <div 
          className="modal fade show d-block" 
          tabIndex="-1" 
          style={{ backgroundColor: 'rgba(39, 38, 48, 0.7)' }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
              <div className="modal-header py-3 text-white" style={{ backgroundColor: '#272630' }}>
                <h5 className="modal-title fw-bold fs-6" style={{ color: '#FFE468' }}>
                  EduStow Cloud Deployment
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body p-4 text-center">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{ width: '60px', height: '60px', backgroundColor: '#E4F4D9' }}
                >
                  <i className="fa fa-check-circle fs-2" style={{ color: '#8CC641' }}></i>
                </div>
                <h4 className="fw-bold mb-2 text-dark">{formData.schoolName || 'Your School'} is Live!</h4>
                <p className="text-secondary small mb-4" style={{ color: '#64748B' }}>
                  Your dedicated school tenant has been initialized. You can now configure academic terms, add classrooms, manage teachers, and start recording students.
                </p>
                <div className="d-grid gap-2">
                  <button 
                    onClick={handleFinishToDashboard} 
                    className="btn rounded-pill py-2.5 fw-bold text-white shadow-sm"
                    style={{ backgroundColor: '#8CC641', borderColor: '#8CC641' }}
                  >
                    Enter School Admin Dashboard <i className="fa fa-arrow-right ms-1"></i>
                  </button>
                  <button 
                    onClick={() => setShowModal(false)} 
                    className="btn btn-outline-dark rounded-pill py-2 small"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
