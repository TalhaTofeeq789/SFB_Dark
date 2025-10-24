import React from "react";
import Layout from "../layouts/MainLayout";
import Link from "next/link";

function TalentPlacementService() {
  return (
    <>
      <Layout>
        {/* Page Title */}
        <section className="page-title">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="title">Prospect-to-Placement Program</h1>
                <ul className="breadcrumb">
                  <li><Link href="/">Home</Link></li>
                  <li>Services</li>
                  <li>Prospect-to-Placement Program</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="service-details-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="service-details">
                  <div className="image-box">
                    <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Talent Placement" />
                  </div>
                  
                  <div className="content-box">
                    <h2>Find. Qualify. Place. Perform.</h2>
                    <p>We help companies find top-tier, commission-ready sales talent, especially students and young professionals hungry to prove themselves.</p>
                    
                    <h3>How it works:</h3>
                    <ul className="service-list">
                      <li><strong>Research:</strong> We identify high-quality leads based on your ideal candidate profile</li>
                      <li><strong>Outreach:</strong> Personalized outreach via LinkedIn, email, and other platforms</li>
                      <li><strong>Screening:</strong> Pre-screening, shortlisting, and interview coordination</li>
                      <li><strong>Integration:</strong> Onboarding and integration support</li>
                      <li><strong>Performance:</strong> Ongoing performance tracking and coaching</li>
                    </ul>
                    
                    <h3>What You Get:</h3>
                    <p>A fully-managed talent pipeline that delivers motivated salespeople who don't just show up—they close deals and drive revenue for your business.</p>
                    
                    <div className="benefits">
                      <h3>Key Benefits:</h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="benefit-item">
                            <i className="icon flaticon-checked"></i>
                            <span>Commission-based talent acquisition</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="benefit-item">
                            <i className="icon flaticon-checked"></i>
                            <span>Pre-qualified candidates</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="benefit-item">
                            <i className="icon flaticon-checked"></i>
                            <span>Ongoing performance support</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="benefit-item">
                            <i className="icon flaticon-checked"></i>
                            <span>Motivated, hungry talent</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4">
                <div className="service-sidebar">
                  <div className="widget service-widget">
                    <h4 className="widget-title">All Services</h4>
                    <ul className="service-links">
                      <li className="active"><Link href="/service-talent-placement">Prospect-to-Placement Program</Link></li>
                      <li><Link href="/service-social-media">Social Media Growth & Management</Link></li>
                      <li><Link href="/service-paid-advertising">Paid Advertising Campaigns</Link></li>
                      <li><Link href="/service-account-setup">Business Account Setup</Link></li>
                      <li><Link href="/service-email-marketing">Email Marketing Campaigns</Link></li>
                      <li><Link href="/service-affiliate-marketing">Affiliate Marketing Systems</Link></li>
                    </ul>
                  </div>
                  
                  <div className="widget cta-widget">
                    <div className="widget-content">
                      <h4>Ready to Find Your Next Star Salesperson?</h4>
                      <p>Let's build a talent pipeline that delivers results.</p>
                      <Link href="/page-contact" className="theme-btn btn-style-one">
                        <span className="btn-title">Get Started</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default TalentPlacementService;