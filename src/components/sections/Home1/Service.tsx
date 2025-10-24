import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation ],
    slidesPerView: 3,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    navigation:{
        clickable: true,
        prevEl: ".swiper-arry-prev",
        nextEl: ".swiper-arry-next",
    },
    loop: true,
    breakpoints : {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 3,
        },
    }
}
function Service() {
    return (
        <>
        <section className="services-section">
          <div className="anim-icons">
            <div className="image-1"><img src="assets/images/icons/shape-style15.png" alt="" /></div>
          </div>
          <div className="container">
            <div className="sec-title">
              <span className="sub-title"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="" />Our Services</span>
              <h2 className="title title-image anim-text-flip-move">
                We don't just offer services— <br />we deliver <span className="color1"><img className="shape-image-1" src="assets/images/icons/title-image.png" alt="" /> growth engines</span>
              </h2>
            </div>
            <div className="outer-box p-0">
              <div className="swiper-outer">
                <div className="swiper services-swiper">
                  <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="service-block anim-fade-move" data-fade-from="right" data-delay="0.15">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Talent Recruitment" />
                              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Talent Recruitment" />
                            </figure>
                            <div className="icon-box">
                              <img className="icon-img" src="assets/images/icons/theme-icon1.png" alt="icon" />
                            </div>
                          </div>
                          <div className="content-box">
                            <h4 className="title"><Link href="/page-service-details">Prospect-to-Placement Program</Link></h4>
                            <div className="text">Find. Qualify. Place. Perform. We help companies find top-tier, commission-ready sales talent.</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="service-block anim-fade-move" data-fade-from="right" data-delay="0.30">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Social Media" />
                              <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Social Media" />
                            </figure>
                            <div className="icon-box">
                              <img className="icon-img" src="assets/images/icons/theme-icon2.png" alt="icon" />
                            </div>
                          </div>
                          <div className="content-box">
                            <h4 className="title"><Link href="/page-service-details">Social Media Growth & Management</Link></h4>
                            <div className="text">Stand out. Stay consistent. Get results. Turn your social media into powerful brand magnets.</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="service-block anim-fade-move" data-fade-from="left" data-delay="0.45">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Paid Advertising" />
                              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Paid Advertising" />
                            </figure>
                            <div className="icon-box">
                              <img className="icon-img" src="assets/images/icons/theme-icon3.png" alt="icon" />
                            </div>
                          </div>
                          <div className="content-box">
                            <h4 className="title"><Link href="/page-service-details">Paid Advertising Campaigns</Link></h4>
                            <div className="text">Spend smart. Scale fast. ROI-focused ad campaigns across Meta, Google, and beyond.</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="service-block anim-fade-move" data-fade-from="left" data-delay="0.60">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Account Setup" />
                              <img src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Account Setup" />
                            </figure>
                            <div className="icon-box">
                              <img className="icon-img" src="assets/images/icons/theme-icon1.png" alt="icon" />
                            </div>
                          </div>
                          <div className="content-box">
                            <h4 className="title"><Link href="/page-service-details">Business Account Setup</Link></h4>
                            <div className="text">Your online identity, built right from Day 1. Professional, conversion-ready profiles.</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="service-block anim-fade-move" data-fade-from="right" data-delay="0.75">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Email Marketing" />
                              <img src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Email Marketing" />
                            </figure>
                            <div className="icon-box">
                              <img className="icon-img" src="assets/images/icons/theme-icon2.png" alt="icon" />
                            </div>
                          </div>
                          <div className="content-box">
                            <h4 className="title"><Link href="/page-service-details">Email Marketing Campaigns</Link></h4>
                            <div className="text">Emails people actually want to open. Turn your email list into a sales machine.</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="service-block anim-fade-move" data-fade-from="left" data-delay="0.90">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Affiliate Marketing" />
                              <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Affiliate Marketing" />
                            </figure>
                            <div className="icon-box">
                              <img className="icon-img" src="assets/images/icons/theme-icon3.png" alt="icon" />
                            </div>
                          </div>
                          <div className="content-box">
                            <h4 className="title"><Link href="/page-service-details">Affiliate Marketing Systems</Link></h4>
                            <div className="text">Turn Your Customers Into Your Sales Team. Scalable, low-risk revenue through referrals.</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="swiper-arry">
                <button className="arry-prev swiper-arry-prev"><i className="fa-solid fa-chevron-left"></i></button>
                <button className="arry-next swiper-arry-next"><i className="fa-solid fa-chevron-right"></i></button>
              </div>
            </div>
            <div className="bottom-text anim-fade-move" data-fade-from="left">
              <span>Ready to grow?</span>
              <div className="text">Let's build systems that deliver real results</div>
              <Link className="btn-link" href="page-contact">Book a Free Call</Link>
            </div>
          </div>
        </section>
        </>
    )
}
export default Service;