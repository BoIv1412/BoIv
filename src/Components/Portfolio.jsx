/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/coding.jpg";

const imageAltText = "A way of life, coding.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Skills and Computers for All, UNHCR Internship",
    description:
      "An internship that was pretty much amazing. Although it was something that I was doing for the first time and was not part of my IT studies, I did it fantasticly. We were fixing hardware problems and installing software on computers that were unusable and then we gave them to asylum seekers and poor families, which were of an extreme need of a computer. ",
    url: "",
  },
  {
    title: "JavaScript Academy",
    description:
      "I have successfully completed the JavaScript Academy at one of the best IT companies in my country. I have learned a lot about HTML, CSS, JS and then implementing API's using Node.js and React.js. Also I tried out working with MongoDB.",
    url: "",
  },
  {
    title: "Cyber Security Internship",
    description:
      "An amazing internship at one of the biggest banks in my country, Stopanska Bank. I have worked with banking systems and the improvement of their security with different mechanisims.",
    url: "",
  },
  {
    title: "Cyber Security Internship",
    description:
      "An amazing internship at one of the biggest banks in my country, Stopanska Bank. I have worked with banking systems and the improvement of their security with different mechanisims.",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
