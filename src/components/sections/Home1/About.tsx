import React from 'react';
import Link from 'next/link';
import CounterUp from '../../elements/CounterUp';

export default function Section2() {

  return (
    <section className="about-section-six">
      <div className="anim-icons">
        <div className="image-1 anim-fade-move" data-fade-from="right">
          <img src="assets/images/icons/theme-icon29.png" alt="" />
        </div>
        <div className="image-2 tm-gsap-img-parallax" data-fade-from="right">
          <img src="assets/images/icons/theme-icon30.png" alt="" />
        </div>
        <div className="image-3">
          <img src="assets/images/icons/shape-style64.png" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="outer-box">
          <div className="sec-title">
            <span className="sub-title">
              <img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="" />
              About SFB Marketing
            </span>
            <h2 className="title anim-text-flip-move">
              We don't do guesswork. <span className="color1">We build systems.</span>
            </h2>
          </div>
          <div className="row">
            <div className="content-column col-lg-7">
              <div className="inner-colmun">
                <div className="content-box">
                  <div className="text anim-fade-move">
                    SFB Marketing was built on a simple idea: great marketing should be smart, scalable, and focused on results—not fluff. We're a lean team that combines creative thinking with sharp execution. What sets us apart? Our ability to find real talent, build actual marketing systems, and drive measurable results.
                  </div>
                  <div className="mission-text anim-fade-move">
                    <h5>Our Mission</h5>
                    <p>At SFB Marketing, our mission is to empower growing businesses with smart, scalable marketing systems that deliver real results. From finding top-tier sales talent to building conversion-focused campaigns, we're here to help you grow faster and smarter.</p>
                  </div>
                  <div className="user-info-box anim-fade-move">
                    <Link href="/page-about" className="theme-btn btn-style-four">
                      <span className="btn-title">Read More</span>
                      <span className="dot-box">
                        <span className="dot-item"></span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="funfact-colmun col-lg-5">
              <div className="inner-colmun">
                <div className="funfact-block-two anim-fade-move" data-fade-from="left">
                  <div className="inner-box">
                    <div className="shape-icon">
                      <i className="icon flaticon-scribble"></i>
                    </div>
                    <div className="count-box">
                      <span className="count-text"><CounterUp end={50} /></span>+
                    </div>
                    <div className="text">
                      Successful marketing campaigns delivered with measurable results.
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
