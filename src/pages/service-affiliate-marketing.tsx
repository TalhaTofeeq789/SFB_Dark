import React from "react";
import Layout from "../layouts/MainLayout";
import Link from "next/link";

function AffiliateMarketingService() {
  return (
    <>
      <Layout>
        <section className="page-title">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="title">Affiliate Marketing Systems</h1>
                <ul className="breadcrumb">
                  <li><Link href="/">Home</Link></li>
                  <li>Services</li>
                  <li>Affiliate Marketing Systems</li>
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
                    <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Affiliate Marketing" />
                  </div>
                  
                  <div className="content-box">
                    <h2>Turn Your Customers Into Your Sales Team.</h2>
                    <p>We build and manage affiliate programs that drive scalable, low-risk revenue through word-of-mouth and referral-based promotion.</p>
                    
                    <h3>What's included:</h3>
                    <ul className="service-list">
                      <li><strong>Strategy:</strong> Strategy and structure for your affiliate program</li>
                      <li><strong>Dashboard:</strong> Branded dashboards for affiliates</li>
                      <li><strong>Recruitment:</strong> Custom affiliate recruitment funnels</li>
                      <li><strong>Tracking:</strong> Commission tracking and payouts</li>
                      <li><strong>Management:</strong> Ongoing management and optimization</li>
                    </ul>
                    
                    <h3>Outcome:</h3>
                    <p>A scalable revenue stream powered by satisfied customers who become your biggest advocates and sales drivers.</p>
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
                      <li><Link href="/service-email-marketing">Email Marketing Campaigns</Link></li>
                      <li className="active"><Link href="/service-affiliate-marketing">Affiliate Marketing Systems</Link></li>
                    </ul>
                  </div>
                  
                  <div className="widget cta-widget">
                    <div className="widget-content">
                      <h4>Ready to Build Your Affiliate Army?</h4>
                      <p>Let's turn your customers into your sales team.</p>
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

export default AffiliateMarketingService;