import React from "react";
import './Footer.scss'
const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="top__left">
            <h2>Contact Us</h2>
          <ul>
            <li>
              <i class="fa-solid fa-location-dot"></i> 8th floor, 379 Hudson St,
              New York, NY 10018
            </li>

            <li>
              <i class="fa-solid fa-phone"></i> (+1) 96 716 6879{" "}
            </li>
            <li>
              <i class="fa-solid fa-envelope"></i> contact@site.com
            </li>
          </ul>
        </div>
        <div className="top__center">
            <h2>Lastest Tweet</h2>
          <span>@colorib</span>
          <p>
            Activello is a good option. It has a slider built into that displays
            the featured image in the slider. <br />
            <span>https://buff.ly/2zaSfAQ</span>
          </p>

          <span>@colorib</span>
          <p>
            Activello is a good option. It has a slider built into that displays
            the featured image in the slider. <br />
            <span>https://buff.ly/2zaSfAQ</span>
          </p>
        </div>
        <div className="top__right">
        <h2>Some Galerry</h2>
            <img src="https://preview.colorlib.com/theme/pato/images/our-menu-16.jpg" alt="" />
        </div>
      </div>
      <hr />
      <div className="bottom">
        <div className="icons">
        <i class="fa-solid fa-radio"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        </div>
        <span>@ 2017 Colorlib. Get The Theme</span>
      </div>
    </footer>
  );
};

export default Footer;
