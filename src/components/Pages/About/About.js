import React from "react";
import "./About.css";
import Me from "../../../images/Me.jpg";
import CardMedia from "@mui/material/CardMedia";

export default function About() {
  return (
    <>
      <div className="image-container">
        <CardMedia
          component="img"
          className="color-img"
          style={{
            height: "auto",
            width: "50%",
            margin: "0 auto",
            border: "5px solid black",
            borderRadius: "500px",
          }}
          image={Me}
          alt="Picture of Me"
        />
      </div>

      <div style={{ width: "70%", margin: "0 auto" }}>
        <h1 id="about-me-title">About Me</h1>
        <p id="p-about">
          I am a full stack software developer with a B.S. in Electrical
          Engineering. I have a passion for pushing boundaries both in my
          professional and personal life.
        </p>
        <p id="p-about">
          Having an Engineering background coupled with my extensive work
          expierence, I have forged a strong foundation in analytical thinking,
          problem-solving, and attention to detail.
        </p>
        <p id="p-about">
          I am an avid outdoorsmen looking for my next adrenaline fix, my wife
          and I love camping, boating, skiing and exploring new areas. I thrive
          on excitement and new challenges. My mindset of constantly seeking new
          experiences along with thinking outside of the box, shapes my approach
          to problem-solving.
        </p>
        <p id="p-about">
          I am eager to hone my developer skills as I enter into my next phase.
          Working alongside established software developers, creating new ideas
          and pushing the boundries of acceptable limits.
        </p>
        <p id="p-about">Thanks for looking.</p>
      </div>
    </>
  );
}
