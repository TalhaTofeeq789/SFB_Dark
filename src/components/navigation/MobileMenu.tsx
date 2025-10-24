import React, { useState } from "react";
import Link from "next/link";

interface MenuState {
  status: boolean;
  key: string;
}

const MobileMenu: React.FC = () => {
  const [isActive, setIsActive] = useState<MenuState>({ status: false, key: "" });

  const handleClick = (key: string) => {
    setIsActive(prev =>
      prev.key === key ? { status: false, key: "" } : { status: true, key }
    );
  };

  return (
    <ul className="navigation">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/page-about">About</Link>
      </li>
      <li className="dropdown">
        <Link href="#">Services</Link>
        <ul className={isActive.key === "services" ? "sub-menu d-block" : "d-none"}>
          <li><Link href="/service-talent-placement">Prospect-to-Placement Program</Link></li>
          <li><Link href="/service-social-media">Social Media Growth & Management</Link></li>
          <li><Link href="/service-paid-advertising">Paid Advertising Campaigns</Link></li>
          <li><Link href="/service-account-setup">Business Account Setup</Link></li>
          <li><Link href="/service-email-marketing">Email Marketing Campaigns</Link></li>
          <li><Link href="/service-affiliate-marketing">Affiliate Marketing Systems</Link></li>
        </ul>
        <div
          className={`dropdown-btn ${isActive.key === "services" ? "active" : ""}`}
          onClick={() => handleClick("services")}
          aria-expanded={isActive.key === "services"}
        >
          <i className="fa fa-angle-down" />
        </div>
      </li>
      <li>
        <Link href="/page-contact">Contact</Link>
      </li>
    </ul>
  );
};

export default MobileMenu;