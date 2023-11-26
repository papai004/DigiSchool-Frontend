import React from "react";
import Signup from "../../assets/images/Signup.svg";
import login from "../../assets/images/login.svg";
import add from "../../assets/images/add.svg";
import classes from "../../assets/images/classes.svg";
import Download from "../../assets/images/Download.svg";
import Search from "../../assets/images/Search.svg";
import "./styles/testimonials.css";

const Work = () => {
  const workInfoData = [
    {
      image: Signup,
      title: "Robust Authentication",
      text: "Ensures proper authentication and authorization for secure data access.",
    },
    {
      image: login,
      title: "Integration",
      text: "Considers integrating features like email notifications for important events.",
    },
    {
      image: add,
      title: "Search and Filters",
      text: "Search functionality for classes, sections, and students, Filters for quick navigation based on class, section",
    },
    {
      image: classes,
      title: "Documentation",
      text: "Provides documentation for administrators on how to use the system.",
    },
    {
      image: Download,
      title: "Download Reports",
      text: "Options to download reports in various formats (CSV, Excel). Reports could include class lists, section-wise student details, etc.",
    },
    {
      image: Search,
      title: "Settings:",
      text: "Allows administrators to configure settings such as system preferences.",
    },
  ];
  return (
    <div className="wrapper">
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <h1 className="primary-heading">How It Works</h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img
                  style={{ height: "80px", width: "80px" }}
                  src={data.image}
                  alt=""
                />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
