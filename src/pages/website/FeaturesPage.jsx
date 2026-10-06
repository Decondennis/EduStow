import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturesPage() {
  const coreFeaturesList = [
    {
      title: 'Complete School Operations Automation',
      desc: 'Digital workflow that eliminates manual paper forms, binders, and spreadsheet tracking across all school branches.',
      icon: 'fa-cogs',
      color: 'yellow',
    },
    {
      title: 'Student Data Analytics & Monitoring',
      desc: 'Helps administration collect, manage, and analyze student academic records, continuous assessments, and health logs.',
      icon: 'fa-chart-line',
      color: 'green',
    },
    {
      title: 'Automated Attendance & Grade Reports',
      desc: 'One-click daily attendance marking, subject-wise attendance logs, automated remark templates, and instant computerized report card compilation.',
      icon: 'fa-calendar-check',
      color: 'yellow',
    },
    {
      title: 'Integrated Fees & Online Billing',
      desc: 'Support for multiple bank gateways, automatic receipting, real-time fee defaulter tracking, and automated reminder alerts to parents.',
      icon: 'fa-file-invoice-dollar',
      color: 'green',
    },
    {
      title: 'Teacher Restricted Mode',
      desc: 'Security policy where teachers only access data for their assigned classrooms and subjects, preserving sensitive institutional data.',
      icon: 'fa-user-shield',
      color: 'yellow',
    },
    {
      title: 'Front Office & Admission Lead Management',
      desc: 'Manage prospective parent inquiries, student phone calls, visitor logs, postal mail records, and complaints efficiently.',
      icon: 'fa-headset',
      color: 'green',
    },
    {
      title: 'Seamless Stakeholder Portals',
      desc: 'Dedicated web portals with custom permissions for Super Admins, Principals, Accountants, Teachers, Parents, and Students.',
      icon: 'fa-network-wired',
      color: 'yellow',
    },
    {
      title: 'Complete HR & Payroll System',
      desc: 'Staff salary structures, earnings, allowances, deductions, biometric clock-in tracking, and automated salary slip generation.',
      icon: 'fa-users',
      color: 'green',
    },
    {
      title: 'Digital Marks Register & Examination',
      desc: 'Complete examination lifecycle management from timetable scheduling to marks entry, broadsheet generation, and grade computation.',
      icon: 'fa-graduation-cap',
      color: 'yellow',
    },
  ];

  const rolePortals = [
    { role: 'Super Admin / Proprietor', icon: 'fa-user-tie', desc: 'Complete executive control, cross-branch financial oversight, and license management.' },
    { role: 'School Admin / Principal', icon: 'fa-school', desc: 'Daily academic operations, teacher oversight, admission approvals, and term configuration.' },
    { role: 'Accountant', icon: 'fa-calculator', desc: 'Fee collections, payment verification, expenditure logging, and financial ledger reports.' },
    { role: 'Class & Subject Teachers', icon: 'fa-chalkboard-teacher', desc: 'Attendance marking, homework assignments, assessment grading, and termly remark entry.' },
    { role: 'Parents', icon: 'fa-user-friends', desc: 'Real-time student attendance monitoring, fee payment, report card download, and teacher messaging.' },
    { role: 'Students', icon: 'fa-user-graduate', desc: 'Class timetable viewing, digital homework submission, library book reservations, and exam results.' },
    { role: 'Librarian', icon: 'fa-book-reader', desc: 'Book cataloging, barcode scanning, member lending records, and overdue penalty tracking.' },
    { role: 'Receptionist', icon: 'fa-concierge-bell', desc: 'Visitor badges, front desk phone logs, admission application inquiries, and postal dispatches.' },
  ];

  return (
    <div className="features-page bg-white">
      {/* Formal Yellow Header Banner */}
      <section 
        className="py-5 text-center text-lg-start position-relative classic-hero-yellow border-bottom"
        style={{ minHeight: '240px', borderColor: '#FCD34D' }}
      >
        <div className="container py-3 position-relative" style={{ zIndex: 1 }}>
          <span className="badge bg-dark text-warning rounded-pill px-3 py-1.5 fw-bold mb-2">
            ENTERPRISE ARCHITECTURE
          </span>
          <h1 className="display-5 fw-bold text-dark mb-2" style={{ letterSpacing: '-0.02em' }}>
            EduStow Platform Features
          </h1>
          <p className="lead text-dark opacity-90 fs-6 mb-0" style={{ maxWidth: '620px', lineHeight: '1.6' }}>
            A comprehensive suite of 40+ modular applications designed for K-12, secondary, and tertiary educational institutions.
          </p>
        </div>
      </section>

      {/* Main Features Content */}
      <section className="py-5 bg-white">
        <div className="container py-lg-3">
          <div className="row g-4 g-lg-5 align-items-center mb-5 pb-3">
            <div className="col-lg-6">
              <span className="classic-badge-green px-3 py-1 rounded-pill d-inline-block mb-3">
                INTEGRATED AUTOMATION
              </span>
              <h2 className="display-6 fw-bold text-dark mb-3">
                Everything Your School Needs In One Single Place
              </h2>
              <p className="text-secondary mb-3 small lh-base" style={{ color: '#475569', fontSize: '14.5px' }}>
                EduStow suits almost every school or educational institution from student admission to graduation, and from fees collection to exam results.
              </p>
              <p className="text-secondary mb-4 small lh-base" style={{ color: '#475569', fontSize: '14.5px' }}>
                By using EduStow, you can easily implement a state-of-the-art cloud platform that provides an affordable, scalable solution for educational institutions of any size.
              </p>
              <div className="d-flex flex-wrap gap-2.5">
                <Link 
                  to="/user" 
                  className="btn rounded-pill px-4 py-2 fw-bold text-white shadow-sm" 
                  style={{ backgroundColor: '#8CC641', borderColor: '#8CC641', fontSize: '14px' }}
                >
                  Register School
                </Link>
                <Link 
                  to="/pricing" 
                  className="btn btn-outline-dark rounded-pill px-4 py-2 fw-bold"
                  style={{ fontSize: '14px' }}
                >
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="rounded-4 overflow-hidden border shadow-sm" style={{ borderColor: '#E2E8F0' }}>
                <img src="/img/About.jpg" alt="EduStow Features" className="w-100 img-fluid" style={{ minHeight: '320px', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          {/* 9 Core Capabilities Grid */}
          <div className="mb-5 pt-3">
            <div className="text-center mx-auto mb-4" style={{ maxWidth: '620px' }}>
              <span className="classic-badge-yellow px-3 py-1 rounded-pill d-inline-block mb-2">
                MODULE CAPABILITIES
              </span>
              <h2 className="display-6 fw-bold text-dark mb-2">
                Key Functional Highlights
              </h2>
              <div className="classic-accent-line mb-3"></div>
              <p className="text-secondary small" style={{ color: '#64748B' }}>
                Engineered for maximum reliability, speed, and ease of use for administrative staff and educators.
              </p>
            </div>

            <div className="row g-3.5">
              {coreFeaturesList.map((item, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="classic-card h-100 p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className={`classic-icon-box classic-icon-box-${item.color} me-3`}>
                        <i className={`fa ${item.icon}`}></i>
                      </div>
                      <h6 className="fw-bold text-dark mb-0 fs-6">
                        {item.title}
                      </h6>
                    </div>
                    <p className="small text-secondary mb-0" style={{ lineHeight: '1.6', color: '#64748B' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 8 Inbuilt Dedicated Roles */}
          <div className="mt-5 pt-3">
            <div className="text-center mx-auto mb-4" style={{ maxWidth: '620px' }}>
              <span className="classic-badge-green px-3 py-1 rounded-pill d-inline-block mb-2">
                ROLE-BASED GOVERNANCE
              </span>
              <h2 className="display-6 fw-bold text-dark mb-2">
                8 Built-In Stakeholder Portals
              </h2>
              <div className="classic-accent-line mb-3"></div>
              <p className="text-secondary small" style={{ color: '#64748B' }}>
                Every stakeholder in your educational community enjoys a tailored, secure portal optimized for their workflow.
              </p>
            </div>

            <div className="row g-3">
              {rolePortals.map((r, i) => (
                <div className="col-lg-3 col-md-6" key={i}>
                  <div className="classic-card h-100 p-3 text-center">
                    <div 
                      className="mx-auto mb-2.5 rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: '48px', height: '48px', backgroundColor: '#FFF9C2', color: '#272630' }}
                    >
                      <i className={`fa ${r.icon} fs-5 text-warning`}></i>
                    </div>
                    <h6 className="fw-bold text-dark mb-1.5 fs-6">{r.role}</h6>
                    <p className="small text-secondary mb-0" style={{ lineHeight: '1.5', color: '#64748B', fontSize: '12.5px' }}>{r.desc}</p>
                  </div>
                </div>
              ))}
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
            Experience EduStow In Action
          </h2>
          <p className="lead fs-6 mb-3 text-dark opacity-90 mx-auto" style={{ maxWidth: '600px', lineHeight: '1.6' }}>
            Set up your school account today and explore how EduStow can eliminate paperwork and supercharge your academic operations.
          </p>
          <Link 
            to="/user" 
            className="btn rounded-pill px-5 py-2.5 fw-bold text-white shadow" 
            style={{ backgroundColor: '#8CC641', borderColor: '#8CC641', fontSize: '15px' }}
          >
            Register Your School Now
          </Link>
        </div>
      </section>
    </div>
  );
}
