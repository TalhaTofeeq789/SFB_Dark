import React from 'react';

const ContactPage = () => {
  return (
    <>
      <section className="contact-details pt-120 pb-120">
        <div className="container">
          {/* Quick contact cards */}
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="contact-card h-100 p-4">
                <div className="d-flex align-items-start">
                  <i className="fal fa-phone-plus contact-card__icon" aria-hidden="true" />
                  <div className="ms-3">
                    <h5 className="mb-1">Call us</h5>
                    <a className="d-block" href="tel:+923001234567">+92 300 123 4567</a>
                    <small className="text-muted">Mon–Fri, 9am–6pm PKT</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-card h-100 p-4">
                <div className="d-flex align-items-start">
                  <i className="fal fa-envelope contact-card__icon" aria-hidden="true" />
                  <div className="ms-3">
                    <h5 className="mb-1">Email</h5>
                    <a className="d-block" href="mailto:contact@sfbmarketing.com">contact@sfbmarketing.com</a>
                    <small className="text-muted">We reply within 24 hours</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-card h-100 p-4">
                <div className="d-flex align-items-start">
                  <i className="fal fa-location-arrow contact-card__icon" aria-hidden="true" />
                  <div className="ms-3">
                    <h5 className="mb-1">Visit</h5>
                    <span className="d-block">SFB Marketing, Pakistan</span>
                    <small className="text-muted">By appointment only</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title">
                <span className="sub-title">Contact SFB Marketing</span>
                <h2>Tell us about your project</h2>
              </div>
              <form id="contact_form" name="contact_form" className="" action="/" method="post">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_name" className="form-control" type="text" placeholder="Enter Name"/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject"/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone"/>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea name="form_message" className="form-control required" rows={7} placeholder="Enter Message"></textarea>
                </div>
                <div className="mb-5">
                  <input name="form_botcheck" className="form-control" type="hidden" value=""/>
                  <button type="submit" className="theme-btn btn-style-one mb-3 mb-xl-0" data-loading-text="Please wait..."><span className="btn-title">Send message</span></button>
                  <button type="reset" className="theme-btn btn-style-one bg-theme-color5"><span className="btn-title">Reset</span></button>
                </div>
              </form>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="sec-title">
                  <span className="sub-title">Need any help?</span>
                  <h2>Get in touch with us</h2>
                  <div className="text">
                    We’re a performance-focused team. Share your goals and we’ll propose a clear plan for growth.
                  </div>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li className="d-flex align-items-center mb-4">
                    <div className="icon"><span className="fal fa-phone-plus"></span></div>
                    <div className="text ms-3">
                      <h4>Have any questions?</h4>
                      <a href="tel:+923001234567">+92 300 123 4567</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-4">
                    <div className="icon"><span className="fal fa-envelope"></span></div>
                    <div className="text ms-3">
                      <h4>Write email</h4>
                      <a href="mailto:contact@sfbmarketing.com">contact@sfbmarketing.com</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="icon"><span className="fal fa-location-arrow"></span></div>
                    <div className="text ms-3">
                      <h4>Visit</h4>
                      <span>SFB Marketing, Pakistan</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map-section">
        <iframe
          className="map w-100"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lahore,%20Pakistan+(SFB%20Marketing)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Google Map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
};

export default ContactPage;
