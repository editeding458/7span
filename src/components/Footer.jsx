import React from "react";
import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaFacebookF,
    FaYoutube,
    FaDiscord,
    FaDribbble,
    FaBehance,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import footerLogo from "../assets/images/logo.svg";
import bannerLogo from "../assets/images/it.svg";
import "../assets/css/Footer.css";

const developerLinks = [ 
    "Hire Node JS Developer",
    "Hire React Developer",
    "Hire Java Developer",
    "Hire Directus Developers",
    "Hire Webflow Developer",
    "Hire AWS Developer",
    "Hire Flutter Developer",
    "See More",
];

const industryLinks = [
    "Manufacturing",
    "Real Estate & Construction",
    "Healthcare & Wellness",
    "Travel & Hospitality",
    "Banking & Finance",
    "Ecommerce & Retail",
    "Government & Public Sector",
];

const companyLinks = [
    "About",
    "Technologies",
    "Testimonials",
    "Career",
    "Contact",
    "Brand Assets",
];

function BrandLogo() {
    return (
        <a className="brand" href="#top" aria-label="7Span Logo">
          <img src={footerLogo} alt="7Span" className="footer-brand-logo" />
        </a>
    );
}
function SocialLinks() {
    const socials = [
        { icon: <FaGithub />, label: "GitHub" },
        { icon: <FaLinkedinIn />, label: "LinkedIn" },
        { icon: <FaInstagram />, label: "Instagram" },
        { icon: <SiX />, label: "X" },
        { icon: <FaFacebookF />, label: "Facebook" },
        { icon: <FaYoutube />, label: "YouTube" },
        { icon: <FaDiscord />, label: "Discord" },
        { icon: <FaBehance />, label: "Behance" },
        { icon: <FaDribbble />, label: "Dribbble" },
    ];

    return (
        <nav className="socials" aria-label="Social media">
            {socials.map((item) => (
                <a href="#social" key={item.label} aria-label={item.label}>
                    {item.icon}
                </a>
            ))}
        </nav>
    );
}

function LinkColumn({ title, links }) {
    return (
        <section className="link-column">
            <h2>{title}</h2>
            <ul>
                {links.map((link) => (
                    <li key={link}>
                        <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function BottomBanner() {
    return (
        <div className="bottom-banner">
            <div className="banner-stripes" />
            <div className="banner-center-mask">
                <img src={bannerLogo} alt="Making IT Possible" />
            </div>
        </div>
    );
}

function Footer() {
    return (
        <footer className="page-footer" id="top">
            <header className="footer-header">
                <BrandLogo />
                <SocialLinks />
            </header>

    
            <div className="dotted-divider" />

            <div className="footer-content">
                <section className="brand-info">
                    <p className="tagline">
                        Whatever your challenge, stage, or vision, we make IT possible.
                    </p>

                    <p className="certification">
                        <TbRosetteDiscountCheckFilled className="cert-icon" />
                        ISO 9001:2015 | ISO 42001:2023 Certified
                    </p>

                    <p className="version">Version: 7.18.0</p>
                </section>

                <LinkColumn title="HIRE DEVELOPERS" links={developerLinks} />
                <LinkColumn title="INDUSTRIES" links={industryLinks} />
                <LinkColumn title="COMPANY" links={companyLinks} />
            </div>

            <BottomBanner />
        </footer>
    );
}

export default Footer;