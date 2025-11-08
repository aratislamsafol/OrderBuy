import { motion } from "framer-motion";
import facebookIcon from '../../assets/socialIcon/facebook icon.png';
import twitterIcon from '../../assets/socialIcon/x icon.png';
import googleIcon from '../../assets/socialIcon/google icon.png';

const footerLinks = [
  {
    title: "Contact Us",
    links: [
      "Email: support@orderup.com",
      "Phone: +1 234 567 890",
      "Address: 123 Main Street, City, Country"
    ],
  },
  {
    title: "Terms & Conditions",
    links: [
      "Privacy Policy",
      "Refund Policy",
      "User Agreement"
    ],
  },
  {
    title: "About Us",
    links: [
      "Our Story",
      "Careers",
      "Blog"
    ],
  },
  {
    title: "Policy",
    links: [
      "Shipping Policy",
      "Payment Policy",
      "Cookie Policy"
    ],
  },
];

const socialIcons = [
  { icon: facebookIcon, link: "https://facebook.com" },
  { icon: twitterIcon, link: "https://twitter.com" },
  { icon: googleIcon, link: "https://google.com" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-12">
      {/* Footer Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:justify-items-center gap-8 mb-10">
        {footerLinks.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center sm:text-left"
          >
            <h3 className="font-semibold text-lg md:text-xl mb-4">{section.title}</h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              {section.links.map((link, idx) => (
                <li
                  key={idx}
                  className="hover:text-[#14a800] transition-colors cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Social Icons */}
      <motion.div
        className="flex items-center justify-center gap-8 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {socialIcons.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={item.icon} className="w-8 h-8" alt="socialIcon" />
          </motion.a>
        ))}
      </motion.div>

      {/* Footer Bottom */}
      <p className="text-center text-gray-400 text-sm">
        Follow our social media platforms.<br />
        All rights reserved to OrderUp © 2025
      </p>
    </footer>
  );
};

export default Footer;
