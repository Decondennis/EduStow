import React from 'react';
import { Link } from 'react-router-dom';

export default function TechClubPage() {
  const pillars = [
    {
      title: 'Satiates Natural Curiosity',
      desc: 'Teenagers are naturally inquisitive. Participating in Tech Club programs answers their scientific questions and immerses them in practical engineering.',
      icon: 'fa-brain',
      color: 'yellow',
    },
    {
      title: 'Practical Science Endeavours',
      desc: 'Hands-on laboratory experiments, computational robotics, and STEM quizzes prepare young minds for science olympiads and university careers.',
      icon: 'fa-flask',
      color: 'green',
    },
    {
      title: 'Lifelong Love for Technology',
      desc: 'Early exposure to algorithmic thinking and code removes the fear of mathematics and replaces hesitation with confident creativity.',
      icon: 'fa-laptop-code',
      color: 'yellow',
    },
    {
      title: 'Foundational Coding & Robotics',
      desc: 'From visual logic to real-world Python and microcontroller programming, students learn to build websites, software, and automated sensors.',
      icon: 'fa-robot',
      color: 'green',
    },
  ];

  return (
    <div className="tech-club-page bg-white">
      {/* Header Banner: Formal Yellow */}
      <section 
        className="py-5 text-center text-lg-start position-relative classic-hero-yellow border-bottom"
        style={{ minHeight: '240px', borderColor: '#FCD34D' }}
      >
        <div className="container py-3 position-relative" style={{ zIndex: 1 }}>
          <span className="badge bg-dark text-warning rounded-pill px-3 py-1.5 fw-bold mb-2">
            STEM & INNOVATION INITIATIVE
          </span>
          <h1 className="display-5 fw-bold text-dark mb-2" style={{ letterSpacing: '-0.02em' }}>
            EduStow Tech Club
          </h1>
          <p className="lead text-dark opacity-90 fs-6 mb-0" style={{ maxWidth: '620px', lineHeight: '1.6' }}>
            Inspiring the next generation of African scientists, software engineers, and technological innovators from an early age.
          </p>
        </div>
      </section>

      {/* Main Philosophy */}
      <section className="py-5 bg-white">
        <div className="container py-lg-3">
          <div className="row g-4 g-lg-5 align-items-center mb-5 pb-3">
            <div className="col-lg-6">
              <span className="classic-badge-green px-3 py-1 rounded-pill d-inline-block mb-3">
                THE NEED FOR TECH CLUB
              </span>
              <h2 className="display-6 fw-bold text-dark mb-3">
                Raising Engineers & Scientists From A Young Age
              </h2>
              <p className="text-secondary mb-3 small lh-base" style={{ color: '#475569', fontSize: '14.5px' }}>
                The school is undoubtedly the primary place of empowerment for students. However, not all modern technology skills can be acquired solely through conventional textbook lessons. Several of them are forged through specialized club initiatives like ours: <strong>The EduStow Tech Club</strong>.
              </p>
              <p className="text-secondary mb-4 small lh-base" style={{ color: '#475569', fontSize: '14.5px' }}>
                What distinguishes developed nations is their investment in scientific advancement. In 1982, the first secondary school JETS club was founded in Nigeria to expose teenagers to science education. EduStow proudly advances that legacy with modern software engineering, web development, and robotics clubs.
              </p>
              <div className="d-flex flex-wrap gap-2.5">
                <Link 
                  to="/contact" 
                  className="btn rounded-pill px-4 py-2 fw-bold text-white shadow-sm"
                  style={{ backgroundColor: '#8CC641', borderColor: '#8CC641', fontSize: '14px' }}
                >
                  Launch Tech Club in Your School
                </Link>
                <Link to="/about" className="btn btn-outline-dark rounded-pill px-4 py-2 fw-bold" style={{ fontSize: '14px' }}>
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="rounded-4 overflow-hidden border shadow-sm" style={{ borderColor: '#E2E8F0' }}>
                <img src="/img/About.jpg" alt="EduStow Tech Club" className="w-100 img-fluid" style={{ minHeight: '320px', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="mt-5 pt-3">
            <div className="text-center mx-auto mb-4" style={{ maxWidth: '620px' }}>
              <span className="classic-badge-yellow px-2.5 py-1 rounded-pill d-inline-block mb-2">
                FOUR PILLARS
              </span>
              <h2 className="display-6 fw-bold text-dark mb-2">
                Key Focus Areas
              </h2>
              <div className="classic-accent-line mb-3"></div>
              <p className="text-secondary small" style={{ color: '#64748B' }}>
                Engaging, practical programs that cultivate problem-solving skills and ignite technological ambition.
              </p>
            </div>

            <div className="row g-3.5">
              {pillars.map((p, i) => (
                <div className="col-lg-3 col-md-6" key={i}>
                  <div className="classic-card h-100 p-4 text-center">
                    <div className={`classic-icon-box classic-icon-box-${p.color} mx-auto mb-3`}>
                      <i className={`fa ${p.icon}`}></i>
                    </div>
                    <h6 className="fw-bold text-dark mb-1.5 fs-6">{p.title}</h6>
                    <p className="small text-secondary mb-0" style={{ lineHeight: '1.6', color: '#64748B' }}>{p.desc}</p>
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
            Bring The EduStow Tech Club To Your School
          </h2>
          <p className="lead fs-6 mb-3 text-dark opacity-90 mx-auto" style={{ maxWidth: '600px', lineHeight: '1.6' }}>
            We provide full curriculum materials, certified instructor training, and student project showcases for your school.
          </p>
          <Link to="/contact" className="btn btn-dark rounded-pill px-5 py-2.5 fw-bold text-white" style={{ fontSize: '15px' }}>
            Contact Tech Club Coordinator
          </Link>
        </div>
      </section>
    </div>
  );
}
