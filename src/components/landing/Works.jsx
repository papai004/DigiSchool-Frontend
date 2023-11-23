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
      title: "Signup",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: login,
      title: "Login",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: add,
      title: "Add Students",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: classes,
      title: "Add Classses And Sections",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Download,
      title: "Download CSV Data",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Search,
      title: "Find Student and Edit",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
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
