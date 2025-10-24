import React from 'react';
import Link from 'next/link';
import CounterUp from '../../elements/CounterUp';

export default function Section1() {
  return (
    <section className="banner-section-one">
      <div className="banner-slider">
        <div className="banner-slide">
          <div className="anim-icons">
            <img className="image-1" src="assets/images/icons/shape-style1.png" alt="" />
            <img className="image-2 tm-gsap-animate-circle" data-fade-from="top" data-fade-offset="100" data-ease="bounce" src="assets/images/icons/shape-style4.png" alt="" />
            <img className="image-3" src="assets/images/icons/shape-style43.png" alt="" />
          </div>
          <div className="container">
            <div className="outer-box">
              <div className="row">
                <div className="content-box col-12">
                  <div className="inner-box">
                    <div className="title-box">
                      <h1 className="title tm-split-text split-in-right">
                        Smart Marketing.<img className="shape-image-2" src="assets/images/icons/shape-style3.png" alt="" /> <br />
                        Real <span><img className="shape-image-1" src="assets/images/icons/shape-style2.png" alt="" /> Growth.</span>
                      </h1>
                      <p className="subtitle">We help ambitious brands scale faster by combining elite sales talent, strategic social media management, and high-converting performance marketing campaigns—all under one roof.</p>
                      <div className="tagline">
                        <strong>Where Talent Meets Traffic. Results Meet Reality.</strong>
                      </div>
                      <div className="hero-features">
                        <div className="feature-item">
                          <span>Commission-Ready Sales Talent</span>
                        </div>
                        <div className="feature-item">
                          <span>ROI-Focused Ad Campaigns</span>
                        </div>
                        <div className="feature-item">
                          <span>Smart Social Media Systems</span>
                        </div>
                      </div>
                    </div>
                    <div className="image-box">
                      <figure className="image-1 anim-fade-move" data-fade-from="right"><img src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Marketing Team" /></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
