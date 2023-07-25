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
            paddingTop: "20px",
          }}
          image={Me}
          alt="About Me"
        />
      </div>

      <div style={{ width: "70%", margin: "0 auto" }}>
        <h1 id="about-me-title">About Me</h1>
        <p id="p-about">
          Hello! I'm a full stack software developer with a background in
          Electrical Engineering. I bring a diverse skill set and a passion for
          pushing boundaries both in my professional and personal life.
        </p>
        <p id="p-about">
          With a B.S. in Electrical Engineering coupled with my work expierence,
          I have a strong foundation in analytical thinking, problem-solving,
          and attention to detail.{" "}
        </p>
        <p id="p-about">
          Outside of software development, I spend my time outdoors, wheather it
          is camping, boating, skiing or exploring new areas, I am an
          adrenaline-seeker looking to push my comfort zone. I thrive on
          excitement and new challenges. My mindset of constantly seeking new
          experiences along with thinking outside of the box, shapes my approach
          with problem-solving.
        </p>
        <p id="p-about">
          As a travel enthusiast, I am always eager to explore new places and
          cultures. I believe that exposure to diverse environments fuels
          creativity and fosters personal growth. I am particularly interested
          in connecting with potential mentors, tech enthusiasts, and anyone
          passionate about full stack development. Collaboration and learning
          from others are essential to my professional development, and I'm
          excited to connect with like-minded individuals who share my
          enthusiasm for technology and its limitless possibilities.
        </p>
        <p id="p-about">
          Let's embark on this journey together, whether it's discussing the
          latest tech trends, exchanging ideas on full stack development, or
          simply sharing stories from our adrenaline-fueled adventures. I'm
          eager to connect, learn, and grow alongside fellow enthusiasts in the
          software community.
        </p>
      </div>
    </>
  );
}
