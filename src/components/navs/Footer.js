import React from "react";
import Foot from "./footer.module.css";
import { LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className={Foot.footer}>
        &copy; 2023 Made With Love ❤
        <span onClick={() =>{window.open('https://www.linkedin.com/in/papai-singha-532034218', '_blank');}}>
        <LinkedinOutlined className={Foot.hov}/>
        </span>
        <span onClick={() =>{window.open('https://www.instagram.com/papai_004/', '_blank');}}>
          <InstagramOutlined className={Foot.hov} />
        </span>
    </footer>
  );
};
export default Footer;
