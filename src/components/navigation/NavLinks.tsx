import Link from 'next/link';
import React from 'react';

const NavLinks = () => {
    return (

    <ul className="navigation">
        <li className="current"><Link href="/">Home</Link>
            {/* Commented out extra home pages - only using main homepage for SFB Marketing
            <ul>
            <li><Link href="/">Home page 01</Link></li>
            <li><Link href="/index-2">Home page 02</Link></li>
            <li><Link href="/index-3">Home page 03</Link></li>
            <li><Link href="/index-4">Home page 04</Link></li>
            <li><Link href="/index-5">Home page 05</Link></li>
            <li><Link href="/index-6">Home page 06</Link></li>
            <li><Link href="/index-7">Home page 07</Link></li>                      
            </ul>
            */}
        </li>
        <li><Link href="/page-about">About</Link></li>                  
        <li className="dropdown"><Link href="#">Services</Link>
            <ul>
            <li><Link href="/service-talent-placement">Prospect-to-Placement Program</Link></li>
            <li><Link href="/service-social-media">Social Media Growth & Management</Link></li>
            <li><Link href="/service-paid-advertising">Paid Advertising Campaigns</Link></li>
            <li><Link href="/service-account-setup">Business Account Setup</Link></li>
            <li><Link href="/service-email-marketing">Email Marketing Campaigns</Link></li>
            <li><Link href="/service-affiliate-marketing">Affiliate Marketing Systems</Link></li>
            </ul>
        </li>
        <li className="dropdown"><Link href="#">Projects</Link>
            <ul>
            <li><Link href="/page-project">Projects</Link></li>
            <li><Link href="page-project-details">Project Details</Link></li>
            </ul>
        </li>                                   
        <li><Link href="/page-contact">Contact</Link></li>
    </ul>

    );
};

export default NavLinks;