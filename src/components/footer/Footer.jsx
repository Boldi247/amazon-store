import React from "react";
import css from "./Footer.module.css";

import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />

      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>amazon</span>
        </div>
        <div className={css.block} id="contact">
          <div className={css.detail}>
            {/* Location */}
            <span>Contact Us!</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>111 North Avenue Orlando, FL 32801</span>
            </span>
            {/* Email */}
            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <span>support@amazon.com</span>
            </span>
            {/* Phone */}
            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <span>302-311-4410</span>
            </span>
          </div>
        </div>

        <div className={css.block} id="account">
          <div className={css.detail}>
            {/* Sign in */}
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <span>Sign In</span>
            </span>
          </div>
        </div>

        <div className={css.block} id="aboutus">
          <div className={css.detail}>
            {/* Company */}
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <span>About Us</span>
            </span>
          </div>
        </div>

        <div className={css.block} id="aboutus">
          <div className={css.detail}>
            {/* Resources */}
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <span>Safety & Privacy</span>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copyright}>
        <span>Copyright 2022 by Amazon Inc</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
