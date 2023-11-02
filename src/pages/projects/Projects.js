import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../../components/project-card/ProjectCard";
import covidTrackerImage from "../../assets/project-images/covid-tracker.png";
import vsCodePortfolioImage from "../../assets/project-images/vs-code-portfolio.png";
import encodeImage from "../../assets/project-images/encode.png";

const projectsData = [
  // {
  //   id: 1,
  //   name: "Encode",
  //   image: encodeImage,
  //   description:
  //     "A platform for programmers to run their code online in any web browser.",
  //   tags: ["javascript", "react", "react-redux", "bootstrap", "codemirror"],
  //   source_code: "https://github.com/anshphirani/encode",
  //   demo: "https://anshphirani.github.io/encode/",
  // },
  {
    id: 1,
    name: "VSCode Portfolio",
    image: vsCodePortfolioImage,
    description:
      "A themeable and developer-centric portfolio with a sleek VS Code theme to showcase my work and skills.",
    tags: ["javascript", "react", "css-modules"],
    source_code: "https://github.com/A-maan18/vs-code-portfolio",
    demo: "https://a-maan18.github.io/vs-code-portfolio/",
  },
  {
    id: 2,
    name: "AD-Kart",
    image: covidTrackerImage,
    description:
      "A user-friendly web application to list real estate property",
    tags: ["javascript", "css"],
    source_code: "https://github.com/A-maan18/Adkart",
    demo: "https://a-maan18.github.io/Adkart/",
  },
  {
    id: 3,
    name: "travel-list",
    description: "a web app to add essential list of items to your list",
    tags: ["javascript", "react"],
    source_code: "https://github.com/A-maan18/travel-list",
    demo: "https://a-maan18.github.io/travel-list/",
  },
  {
    id: 3,
    name: "E-Istihaar",
    description:
      "A Web-Application that enhance PG/Flat businesses by providing tenant to design a Pamplet after collecting data from user that connect to the web page containing all      information about Facilities, Photos, Location, Reviews ",
    tags: ["javascript", "HTML", "CSS"],
    source_code: "https://github.com/A-maan18/E-istihaar",
    demo: "https://a-maan18.github.io/E-istihaar/",
  },
];

const Projects = () => {
  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container}>
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </>
  );
};

export default Projects;
