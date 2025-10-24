import React from "react";
import Link from 'next/link';

function WorkSection() {
  return (
    <section className="work-section who-we-help-section">
      <div className="anim-icons">
        <div className="image-1">
          <img src="assets/images/icons/dotted-map-4.png" alt="" />
        </div>
      </div>

      <div className="container">
        <div className="sec-title text-center">
          <span className="sub-title">
            <img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="" />
            Who We Help
          </span>
          <h2 className="title anim-text-flip-move">
            Struggling to scale? <span className="color1">You're not alone.</span>
          </h2>
          <p className="description">
            Whether you're a startup founder, agency owner, or small business ready to grow, 
            we help you overcome the bottlenecks from low engagement to weak pipelines.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="help-block anim-fade-move" data-fade-from="left">
              <div className="inner-box">
                <div className="image-box">
                  <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Need Better Leads" />
                </div>
                <div className="content-box">
                  <h4 className="title">Need better leads?</h4>
                  <div className="text">We build systems that attract and convert your ideal customers consistently.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="help-block anim-fade-move" data-fade-from="top">
              <div className="inner-box">
                <div className="image-box">
                  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="No Time for Content" />
                </div>
                <div className="content-box">
                  <h4 className="title">No time for content?</h4>
                  <div className="text">We handle your content creation and social media management so you can focus on your business.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="help-block anim-fade-move" data-fade-from="right">
              <div className="inner-box">
                <div className="image-box">
                  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Commission-based Sales Talent" />
                </div>
                <div className="content-box">
                  <h4 className="title">Want commission-based sales talent?</h4>
                  <div className="text">We find and place motivated salespeople who are hungry to prove themselves and close deals.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-text text-center anim-fade-move" data-fade-from="bottom">
          <h3>You're in the right place.</h3>
          <Link href="/page-contact" className="theme-btn btn-style-four">
            <span className="btn-title">Let's Talk</span>
            <span className="dot-box">
              <span className="dot-item"></span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
