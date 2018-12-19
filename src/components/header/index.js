import React, { Component } from "react";

class Header extends Component {
   render() {
      return (
         <div className="container">
            <nav className="navbar navbar-expand-md navbar-light nav-white bg-light fixed-top">
               <div className="container">
                  <a className="navbar-brand" href="#">
                     <img
                        src="assets/icons/packmyload.png"
                        width="250"
                        height="50"
                        alt="Logo"
                     />
                  </a>
                  <button
                     className="navbar-toggler"
                     type="button"
                     data-toggle="collapse"
                     data-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent"
                     aria-expanded="false"
                     aria-label="Toggle navigation"
                  >
                     <span className="navbar-toggler-icon" />
                  </button>
                  <div
                     className="collapse navbar-collapse"
                     id="navbarSupportedContent"
                  >
                     <ul className="navbar-nav ml-auto navbar-right">
                        <li className="nav-item">
                           <a
                              className="nav-link js-scroll-trigger"
                              href="#main"
                           >
                              Home
                           </a>
                        </li>
                        <li className="nav-item">
                           <a
                              className="nav-link js-scroll-trigger"
                              href="#features"
                           >
                              About
                           </a>
                        </li>
                        <li className="nav-item">
                           <a
                              className="nav-link js-scroll-trigger"
                              href="#services"
                           >
                              Services
                           </a>
                        </li>
                        <li className="nav-item">
                           <a
                              className="nav-link js-scroll-trigger"
                              href="#testimonials"
                           >
                              Testimonials
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link js-scroll-trigger" href="#">
                              Become a Loader
                           </a>
                        </li>
                        <li className="nav-item">
                           <a
                              className="nav-link js-scroll-trigger"
                              href="contact.html"
                           >
                              Contact
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         </div>
      );
   }
}

export default Header;
