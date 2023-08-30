import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PdfFile from "../../../resume.pdf";
import "./Resume.css";

export default function Resume() {
  return (
    <Box>
      <div>
        <a
          href={PdfFile}
          id="underline"
          download="Barry Engler Resume"
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "25px",
          }}
          rel="noreferrer"
        >
          <Button id="resume-button" className="pop-on-hover">
            Click Here to Download My Resume
          </Button>
        </a>

        <a
          href={PdfFile}
          id="underline"
          display="Barry Engler Resume"
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "25px",
          }}
          rel="noreferrer"
        >
          <Button id="view-resume-button" className="pop-on-hover">
            Click Here to View My Resume
          </Button>
        </a>

        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
          }}
        >
          Front-End Proficiencies
        </h2>
        <p
          id="p-resume"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "100px",
          }}
        >
          - HTML
          <br></br>- CSS
          <br></br>- JavaScript
          <br></br>- JQuery
          <br></br>- Responsive Design
          <br></br>- React
          <br></br>- Bootstrap
        </p>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
          }}
        >
          Back-End Proficiencies
        </h2>
        <p
          id="p-resume"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "80px",
          }}
        >
          - API's
          <br></br>- Express
          <br></br>- Node
          <br></br>- MySQL, Sequelize
          <br></br>- MongoDB, Mongoose
          <br></br>- REST
          <br></br>- GraphQL
        </p>
      </div>
    </Box>
  );
}
