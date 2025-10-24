import React from "react";
import Layout from "../layouts/MainLayout";
import Link from "next/link";

function AccountSetupService() {
  return (
    <>
      <Layout>
        <section className="page-title">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="title">Business Account Setup & Optimization</h1>
                <ul className="breadcrumb">
                  <li><Link href="/">Home</Link></li>
                  <li>Services</li>
                  <li>Business Account Setup</li>
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
                    <img src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Account Setup" />
                  </div>
                  
                  <div className="content-box">
                    <h2>Your online identity, built right from Day 1.</h2>
                    <p>Before people trust your brand, they Google you. We make sure you show up strong across all platforms.</p>
                    
                    <h3>What's included:</h3>
                    <ul className="service-list">
                      <li><strong>Setup:</strong> Account creation on key platforms (Instagram, LinkedIn, Facebook)</li>
                      <li><strong>Optimization:</strong> Business info optimization (bios, CTAs, links, highlights)</li>
                      <li><strong>Branding:</strong> Brand-aligned visuals and covers</li>
                      <li><strong>SEO:</strong> Profile SEO for discoverability</li>
                    </ul>
                    
                    <h3>Outcome:</h3>
                    <p>Professional, conversion-ready profiles that make the right first impression and attract your ideal clients.</p>
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
                      <li className="active"><Link href="/service-account-setup">Business Account Setup</Link></li>
                      <li><Link href="/service-email-marketing">Email Marketing Campaigns</Link></li>
                      <li><Link href="/service-affiliate-marketing">Affiliate Marketing Systems</Link></li>
                    </ul>
                  </div>
                  
                  <div className="widget cta-widget">
                    <div className="widget-content">
                      <h4>Ready to Build Your Online Presence?</h4>
                      <p>Let's create profiles that convert visitors into customers.</p>
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

export default AccountSetupService;