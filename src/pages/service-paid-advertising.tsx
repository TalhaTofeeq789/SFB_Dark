import React from "react";
import Layout from "../layouts/MainLayout";
import Link from "next/link";

function PaidAdvertisingService() {
  return (
    <>
      <Layout>
        <section className="page-title">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="title">Paid Advertising Campaigns</h1>
                <ul className="breadcrumb">
                  <li><Link href="/">Home</Link></li>
                  <li>Services</li>
                  <li>Paid Advertising Campaigns</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-details-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="service-details">
                  <div className="image-box">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Paid Advertising" />
                  </div>
                  
                  <div className="content-box">
                    <h2>Spend smart. Scale fast.</h2>
                    <p>Get in front of the right people at the right time with ROI-focused ad campaigns across Meta, Google, and beyond.</p>
                    
                    <h3>What's included:</h3>
                    <ul className="service-list">
                      <li><strong>Strategy:</strong> Campaign strategy and audience targeting</li>
                      <li><strong>Creative:</strong> Ad creative and copywriting</li>
                      <li><strong>Testing:</strong> A/B testing and optimization</li>
                      <li><strong>Management:</strong> Budget management</li>
                      <li><strong>Reporting:</strong> Weekly performance reports</li>
                    </ul>
                    
                    <h3>Outcome:</h3>
                    <p>High-converting traffic, more leads, and measurable results—all from ads that actually work.</p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4">
                <div className="service-sidebar">
                  <div className="widget service-widget">
                    <h4 className="widget-title">All Services</h4>
                    <ul className="service-links">
                      <li><Link href="/service-talent-placement">Prospect-to-Placement Program</Link></li>
                      <li><Link href="/service-social-media">Social Media Growth & Management</Link></li>
                      <li className="active"><Link href="/service-paid-advertising">Paid Advertising Campaigns</Link></li>
                      <li><Link href="/service-account-setup">Business Account Setup</Link></li>
                      <li><Link href="/service-email-marketing">Email Marketing Campaigns</Link></li>
                      <li><Link href="/service-affiliate-marketing">Affiliate Marketing Systems</Link></li>
                    </ul>
                  </div>
                  
                  <div className="widget cta-widget">
                    <div className="widget-content">
                      <h4>Ready to Scale with Paid Ads?</h4>
                      <p>Let's build campaigns that deliver ROI.</p>
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

export default PaidAdvertisingService;