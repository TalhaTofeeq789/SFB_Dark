import React from "react";
import Layout from "../layouts/MainLayout";
import Link from "next/link";

function SocialMediaService() {
  return (
    <>
      <Layout>
        {/* Page Title */}
        <section className="page-title">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="title">Social Media Growth & Management</h1>
                <ul className="breadcrumb">
                  <li><Link href="/">Home</Link></li>
                  <li>Services</li>
                  <li>Social Media Growth & Management</li>
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
                    <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Social Media Management" />
                  </div>
                  
                  <div className="content-box">
                    <h2>Stand out. Stay consistent. Get results.</h2>
                    <p>We turn your social media channels into powerful brand magnets. Whether you're building authority on LinkedIn or going viral on Instagram, we plan, post, and grow with purpose.</p>
                    
                    <h3>What's included:</h3>
                    <ul className="service-list">
                      <li><strong>Strategy:</strong> Custom content strategy (posts, stories, reels, etc.)</li>
                      <li><strong>Creation:</strong> Weekly content creation & scheduling</li>
                      <li><strong>Engagement:</strong> Engagement tactics to grow your audience</li>
                      <li><strong>Analytics:</strong> Analytics and monthly reports</li>
                      <li><strong>Growth:</strong> Platform-specific growth (Instagram, LinkedIn, Facebook)</li>
                    </ul>
                    
                    <h3>Outcome:</h3>
                    <p>A consistent, branded presence that attracts, educates, and converts your ideal audience into paying customers.</p>
                    
                    <div className="platforms">
                      <h3>Platforms We Manage:</h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="platform-item">
                            <i className="icon fab fa-instagram"></i>
                            <span>Instagram</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="platform-item">
                            <i className="icon fab fa-linkedin-in"></i>
                            <span>LinkedIn</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="platform-item">
                            <i className="icon fab fa-facebook-f"></i>
                            <span>Facebook</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="platform-item">
                            <i className="icon fab fa-twitter"></i>
                            <span>Twitter</span>
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
                      <li><Link href="/service-talent-placement">Prospect-to-Placement Program</Link></li>
                      <li className="active"><Link href="/service-social-media">Social Media Growth & Management</Link></li>
                      <li><Link href="/service-paid-advertising">Paid Advertising Campaigns</Link></li>
                      <li><Link href="/service-account-setup">Business Account Setup</Link></li>
                      <li><Link href="/service-email-marketing">Email Marketing Campaigns</Link></li>
                      <li><Link href="/service-affiliate-marketing">Affiliate Marketing Systems</Link></li>
                    </ul>
                  </div>
                  
                  <div className="widget cta-widget">
                    <div className="widget-content">
                      <h4>Ready to Transform Your Social Presence?</h4>
                      <p>Let's build a social media strategy that converts.</p>
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

export default SocialMediaService;