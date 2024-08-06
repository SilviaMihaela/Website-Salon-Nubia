import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

function SocialMediaBar() {
  return (
    <div className="social-media-bar">
      <a className="contact-icon" href="https://www.facebook.com/Bodyslim4you">
        <FacebookRoundedIcon aria-label="facebook link" />
      </a>
      <a
        className="contact-icon"
        href="https://www.instagram.com/salon.nubia.epil/"
      >
        <InstagramIcon aria-label="instagram link" />
      </a>
      <a className="contact-icon" href="tel:0040748662875">
        <PhoneRoundedIcon aria-label="phone number" />
      </a>
    </div>
  );
}

export default SocialMediaBar;
