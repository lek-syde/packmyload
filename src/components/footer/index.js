import React, { Component } from "react";

class Footer extends Component {
   render() {
      return (
         <div className="footer-sm">
            <div className="container">
               <div className="row">
                  <div className="col-md-4">
                     <a className="footer-logo" href="#">
                        Pack My Load.
                     </a>
                  </div>
                  <div className="col-md-4">
                     <h6>&copy; 2018 Rights Reserved</h6>
                  </div>
                  <div className="col-md-4">
                     <ul>
                        <li>
                           <a href="#">Facebook</a>
                        </li>
                        <li>
                           <a href="#">Twitter</a>
                        </li>
                        <li>
                           <a href="#">Linkedin</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Footer;
