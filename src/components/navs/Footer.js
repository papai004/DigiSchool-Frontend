import React from "react";
import Foot from "./footer.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={Foot.footer}>
      <p>
        &copy; 2023 Made With Love ❤😉
        <span onClick={() =>{window.open('https://www.linkedin.com/in/papai-singha-532034218', '_blank');}}>
          <FaLinkedin className={Foot.hov} size={20} />
        </span>
        <span onClick={() =>{window.open('https://www.instagram.com/papai_004/', '_blank');}}>
          <FaInstagram className={Foot.hov} size={20} />
        </span>
      </p>
    </footer>
  );
};
export default Footer;
