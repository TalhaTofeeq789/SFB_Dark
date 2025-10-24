import React from 'react'
import Link from 'next/link';

function CtaSection() {
    return (
        <>
      <section className="cta-section-two">
        <div className="anim-icons">
          <div className="image-1 tm-gsap-animate-circle"><img src="assets/images/icons/shape-style23.png" alt="image" /></div>
          <div className="image-2"><img src="assets/images/icons/dotted-map-5.png" alt="" /></div>
        </div>
        <div className="container">
          <div className="outer-box">
            <div className="sec-title text-center">
              <h2 className="title">Let's Grow <br /><span className="color1">Together.</span></h2>
              <p className="description">You don't need a big agency—you need the right partner. Let's talk about how we can support your growth goals.</p>
            </div>
            <div className="cta-buttons text-center">
              <Link href="/page-contact" className="link-btn">
                <span className="btn-title">Book a Free Call</span>
                <img className="icon" src="assets/images/icons/arrow-border.png" alt="image" />
              </Link>
              <Link href="/page-contact" className="link-btn secondary">
                <span className="btn-title">Send Us a Message</span>
                <img className="icon" src="assets/images/icons/arrow-border.png" alt="image" />
              </Link>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
export default CtaSection;