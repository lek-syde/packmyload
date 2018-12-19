import React, { Component } from "react";
import Header from "../header/index";
import Footer from "../footer/index";

class Homepage extends Component {
   render() {
      return (
         <div className="wrapper">
            <Header />
            <div id="main" className="main">
               <div className="hero-home">
                  <div className="container-m">
                     <div className="app-hero">
                        <div className="intro-block">
                           <h1>
                              Move
                              <span style={{ color: "#5D93DF" }}>
                                 anything!
                              </span>{" "}
                              with the push of a button.
                           </h1>
                        </div>
                        <div className="hero-img">
                           <div className="signup-form wow fadeInUp">
                              <h1>Get Estimate for your delivery</h1>
                              <form
                                 action="#"
                                 method="post"
                                 className="registration-form"
                              >
                                 <div className="form-group">
                                    <label className="sr-only" for="form-name">
                                       Pickup Address
                                    </label>
                                    <input
                                       type="text"
                                       name="form-name"
                                       placeholder="Pickup Address"
                                       className="form-name form-control"
                                       id="form-name"
                                    />
                                 </div>
                                 <div className="form-group">
                                    <label className="sr-only" for="form-email">
                                       Destination Address
                                    </label>
                                    <input
                                       type="text"
                                       name="form-email"
                                       placeholder="Destination address"
                                       className="form-email form-control"
                                       id="form-email"
                                    />
                                 </div>

                                 <button type="submit" className="btn">
                                    Get Estimate
                                 </button>
                                 <p>
                                    *We never share your details and that's a
                                    promise.
                                 </p>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="vid-feature">
                  <div className="container">
                     <div className="row text-center">
                        <div className="col-sm-8 col-lg-8">
                           <h1>
                              Save time, take back your weekend - Pack My Load
                           </h1>
                           <p>
                              Start now and turn your online business into a
                              profitable route. Get started with software and
                              analytics services.
                           </p>
                           <div className="vid-cover">
                              <iframe
                                 src="https://www.youtube.com/embed/W-C4xu5u1ls?autoplay=0"
                                 allowfullscreen="allowfullscreen"
                              />
                           </div>
                           <h6>
                              <b>Pack My Load</b> does more than just delivery,
                              we build relationships -
                              <span>
                                 <a href="#">Get Estimate</a>
                              </span>
                           </h6>
                        </div>
                     </div>
                  </div>
               </div>

               <div id="features" className="lbl-services">
                  <div className="container">
                     <div className="row justify-center">
                        <div className="col-md-8">
                           <div className="service-intro text-center">
                              <h1 className="wow fadeInDown">
                                 Pre-screened Loaders
                              </h1>
                              <p>
                                 We only work with reputable, trustworthy,
                                 experienced Loaders with proven track records.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div
                           className="col-sm-6 col-lg-4 wow fadeInDown"
                           data-wow-delay="0.1s"
                        >
                           <div className="lbl-service-card">
                              <div className="card-icon">
                                 <div className="card-img">
                                    <img
                                       src="assets/icons/i1.png"
                                       width="50"
                                       alt="Feature"
                                    />
                                 </div>
                              </div>
                              <div className="card-text">
                                 <h3>Complete Transparency</h3>
                                 <p>
                                    Choose the best price. Track your goods in
                                    real time. Live Customer Service from start
                                    to finish.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div
                           className="col-sm-6 col-lg-4 wow fadeInDown"
                           data-wow-delay="0.2s"
                        >
                           <div className="lbl-service-card">
                              <div className="card-icon">
                                 <div className="card-img">
                                    <img
                                       src="assets/icons/i1.png"
                                       width="50"
                                       alt="Feature"
                                    />
                                 </div>
                              </div>
                              <div className="card-text">
                                 <h3>Cashless Payments</h3>
                                 <p>
                                    Quickly and simply handle all payments
                                    within the app.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div
                           className="col-sm-6 col-lg-4 wow fadeInDown"
                           data-wow-delay="0.3s"
                        >
                           <div className="lbl-service-card">
                              <div className="card-icon">
                                 <div className="card-img">
                                    <img
                                       src="assets/icons/i1.png"
                                       width="50"
                                       alt="Feature"
                                    />
                                 </div>
                              </div>
                              <div className="card-text">
                                 <h3>Community Ratings</h3>
                                 <p>
                                    Every PML Loader is rated by clients after
                                    transactions ensuring quality service.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="cta-big cta-alt">
                  <div className="container">
                     <div className="row text-center">
                        <div className="col-md-10 col-lg-8">
                           <div className="cta-big-inner wow fadeInRight">
                              <h4>Are you a Loader?</h4>
                              <h1>
                                 Put your moving van or truck to use. PML allows
                                 you to find a variety of moving jobs that work
                                 with your schedule.
                              </h1>
                              <p>Better way to make extra income</p>
                              <a
                                 href="contact.html"
                                 className="btn btn-action btn-white"
                              >
                                 Join now
                              </a>
                              <h5>
                                 Trusted by hundreds of businesses all over
                                 Nigeria.
                              </h5>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div id="services" className="yd-boxed-ft">
                  <div className="container">
                     <div className="row text-center">
                        <div className="col-sm-12">
                           <div className="boxed-intro wow fadeInDown">
                              <h4>Our Services</h4>
                              <h1 />
                              <p />
                           </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeInDown">
                           <div className="box-inner">
                              <div className="box-icon">
                                 <img
                                    src="assets/icons/y1.png"
                                    width="50"
                                    alt="Feature"
                                 />
                              </div>
                              <div className="box-info">
                                 <h1>Home/Office Moves</h1>
                                 <p>
                                    Pick up and delivery to and from storage
                                    Effortlessly move your belongings in and out
                                    of your storage unit. Store your things with
                                    a tap and have them back in as little as an
                                    hour when you need them.
                                 </p>
                              </div>
                           </div>
                        </div>

                        <div className="col-md-6 col-lg-3 wow fadeInDown">
                           <div className="box-inner">
                              <div className="box-icon">
                                 <img
                                    src="assets/icons/y2.png"
                                    width="50"
                                    alt="Feature"
                                 />
                              </div>
                              <div className="box-info">
                                 <h1>Small Moves</h1>
                                 <p>
                                    Enjoy the ease of moving even small items
                                    with Packmyload. We offer effortless pickup
                                    and drop off of items at your specified
                                    location.
                                 </p>
                              </div>
                           </div>
                        </div>

                        <div className="col-md-6 col-lg-3 wow fadeInDown">
                           <div className="box-inner">
                              <div className="box-icon">
                                 <img
                                    src="assets/icons/y3.png"
                                    width="50"
                                    alt="Feature"
                                 />
                              </div>
                              <div className="box-info">
                                 <h1>Store Delivery</h1>
                                 <p>
                                    Store delivery in under 1-hour, Shop that
                                    new sofa from your local furniture store and
                                    let us pick it up and deliver into your
                                    home, right where you want it. Same day.
                                    Effortlessly.
                                 </p>
                              </div>
                           </div>
                        </div>

                        <div className="col-md-6 col-lg-3 wow fadeInDown">
                           <div className="box-inner">
                              <div className="box-icon">
                                 <img
                                    src="assets/icons/y4.png"
                                    width="50"
                                    alt="Feature"
                                 />
                              </div>
                              <div className="box-info">
                                 <h1>Student Moves</h1>
                                 <p>
                                    It's the end of the semester, lets get your
                                    bags and luggages home hassle free. We pick
                                    up at your college or school and deliver it
                                    to your specified destination.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="cta-big">
                  <div className="container">
                     <div className="row">
                        <div className="col-md-6 col-lg-5">
                           <div className="cta-big-inner wow fadeInRight">
                              <h4>Why you need Parker</h4>
                              <h1>
                                 Join millions of users and grow your business.
                              </h1>
                              <p>
                                 Some lorem ipsum text to make this section look
                                 more appealing.Now, it looks okay ish.
                              </p>
                              <a href="#" className="btn btn-action btn-white">
                                 Join now
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div id="testimonials" className="pricing-section text-center">
                  <div className="container">
                     <div className="row">
                        <div className="col-sm-12">
                           <div className="pricing-intro">
                              <h1
                                 className="wow fadeInDown"
                                 data-wow-delay="0s"
                              >
                                 Testimonials
                              </h1>
                              <p
                                 className="wow fadeInDown"
                                 data-wow-delay="0.2s"
                              >
                                 Sometimes the best discoveries are the result
                                 of simple observations.{" "}
                                 <br className="hidden-xs" />
                                 What our customers are saying.
                              </p>
                           </div>
                           <div className="row">
                              <div className="col-md-4">
                                 <div
                                    className="table-left wow fadeInDown"
                                    data-wow-delay="0.4s"
                                 >
                                    <div className="pricing-details">
                                       <h2>Lekan</h2>
                                       <div className="box-icon">
                                          <img
                                             src="assets/icons/y1.png"
                                             width="150"
                                             alt="Feature"
                                          />
                                       </div>

                                       <ul>
                                          <li>
                                             Absolutely fantastic experience
                                             with PML. Punctual and courteous.
                                             Highly recommended.
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-4">
                                 <div
                                    className="table-right table-center wow fadeInDown"
                                    data-wow-delay="0.6s"
                                 >
                                    <div className="pricing-details">
                                       <h2>Konye Odey</h2>
                                       <div className="box-icon">
                                          <img
                                             src="assets/icons/y1.png"
                                             width="150"
                                             alt="Feature"
                                          />
                                       </div>

                                       <ul>
                                          <li>
                                             Michael did an incredible job in 10
                                             minutes. He is very kind, friendly
                                             and professional
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-4">
                                 <div
                                    className="table-right wow fadeInDown"
                                    data-wow-delay="0.6s"
                                 >
                                    <div className="pricing-details">
                                       <h2>Adegoke Prince</h2>
                                       <div className="box-icon">
                                          <img
                                             src="assets/icons/y1.png"
                                             width="150"
                                             alt="Feature"
                                          />
                                       </div>
                                       <ul>
                                          <li>
                                             PML is THE best! Solomon and Yuri
                                             were great! For my most recent
                                             purchase I coordinated a pickup
                                             elsewhere and drop off at my place.
                                             They were fast, efficient,
                                             friendly, and extremely helpful (I
                                             needed to move a piece of furniture
                                             to make some room for the item they
                                             picked up). They were in and out in
                                             10 minutes! Thanks a ton!
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div id="buy" className="cta-sm">
                  <div className="container-m text-center">
                     <div className="cta-content">
                        <h4>WHAT ARE YOU WAITING FOR?</h4>
                        <h1>
                           Become a Loader today and make money as your own
                           boss.
                        </h1>
                        <a className="btn-cta" href="contact.html">
                           Become a Loader
                        </a>
                     </div>
                  </div>
               </div>

               <Footer />

               <div id="back-top" className="bk-top">
                  <div className="bk-top-txt">
                     <a className="back-to-top js-scroll-trigger" href="#main">
                        top
                     </a>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Homepage;
