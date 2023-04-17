import { API_LINK, APPLY_TO_YC_LINK, CONTACT, FAQ_LINK, GUIDELINES_LINK, LEGAL_LINK, LISTS_LINK, SECURITY_LINK } from "@constants/links";
import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <div className="footer">
    <div className="nav">
      <Link to={GUIDELINES_LINK} className="nav__link">
        Guidelines
      </Link>
      <Link to={FAQ_LINK} className="nav__link">
        FAQ
      </Link>
      <Link to={LISTS_LINK} className="nav__link">
        Lists
      </Link>
      <Link to={API_LINK} className="nav__link">
        API
      </Link>
      <Link to={SECURITY_LINK} className="nav__link">
        Security
      </Link>
      <Link to={LEGAL_LINK} className="nav__link">
        Legal
      </Link>
      <Link to={APPLY_TO_YC_LINK} className="nav__link">
        Apply to YC
      </Link>
      <Link to={CONTACT} className="nav__link">
        Contact
      </Link>
    </div>
  </div>
);
