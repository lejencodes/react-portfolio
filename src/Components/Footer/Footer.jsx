import "./footer.scss";
import React from "react";
import { Facebook, GitHub, Instagram, LinkedIn } from "@material-ui/icons";

export default function Footer() {
  return (
    <div className="footer">
      <h5>You may want to check out my social media profiles!</h5>
      <div className="sm-container">
        <a href="https://github.com/lejencodes" target="_blank">
          <GitHub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/lejencodes/" target="_blank">
          <LinkedIn className="icon" />
        </a>
        <a href="https://www.instagram.com/lejencodes/" target="_blank">
          <Instagram className="icon" />
        </a>
        <a href="#" target="_blank">
          <Facebook className="icon" />
        </a>
      </div>
    </div>
  );
}
