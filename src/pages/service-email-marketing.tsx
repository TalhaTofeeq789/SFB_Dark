import React from "react";
import Layout from "../layouts/MainLayout";
import Link from "next/link";

function EmailMarketingService() {
  return (
    <>
      <Layout>
        <section className="page-title">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="title">Email Marketing Campaigns</h1>
                <ul className="breadcrumb">
                  <li><Link href="/">Home</Link></li>
                  <li>Services</li>
                  <li>Email Marketing Campaigns</li>
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
                    <img src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Email Marketing" />
                  </div>
                  
                  <div className="content-box">
                    <h2>Emails people actually want to open.</h2>
                    <p>We turn your email list into a sales machine, keeping leads engaged and guiding them toward action.</p>
                    
                    <h3>What's included:</h3>
                    <ul className="service-list">
                      <li><strong>Planning:</strong> Campaign planning and email copywriting</li>
                      <li><strong>Segmentation:</strong> Audience segmentation and automation</li>
                      <li><strong>Analytics:</strong> Performance tracking (open rates, CTRs, conversions)</li>
                      <li><strong>Testing:</strong> A/B testing for constant improvement</li>
                    </ul>
                    
                    <h3>Outcome:</h3>
                    <p>Stronger relationships, better engagement, and increased sales straight from the inbox.</p>
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
                      <li><Link href="/service-paid-advertising">Paid Advertising Campaigns</Link></li>
                      <li><Link href="/service-account-setup">Business Account Setup</Link></li>
                      <li className="active"><Link href="/service-email-marketing">Email Marketing Campaigns</Link></li>
                      <li><Link href="/service-affiliate-marketing">Affiliate Marketing Systems</Link></li>
                    </ul>
                  </div>
                  
                  <div className="widget cta-widget">
                    <div className="widget-content">
                      <h4>Ready to Turn Emails into Sales?</h4>
                      <p>Let's build email campaigns that convert.</p>
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

export default EmailMarketingService;