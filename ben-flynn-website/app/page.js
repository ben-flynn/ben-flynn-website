'use client'

import About from "./components/about";
import Job from "./components/job";
import Project from "./components/project";
import "./globals.css";
import Main from "./components/main";
import { useEffect } from "react";
import Head from "next/head";

let about;
let exp;
let projects;


export default function Home() {


  useEffect(() => {
    window.scrollTo(0, 0);
    handleSideNavChanges();
  }, []);


  
  return (
    <div className="container" id="app">
      <div className="page-container">
        <Main/>
        <div className="content-container">
          <About/>
          <div className="experience" id="experience">
            <Job
              timeWindow="May 2023 - September 2023"
              title="Software Developer"
              company="Interac Corp. / 2Keys"
              description="Worked on the development of a full stack application, which allowed users to test the authentication flow of any platform using the open-id- connect protocol.
              Updated a financial data exchange simulator application, enhancing testing capabilities and used AI to automate dummy data production.
              Created multiple Keycloak environments in order to secure applications.
              Embraced agile development methodologies, fostering collaboration within cross-functional teams, participating in daily stand-ups, and using Jira to facilitate efficient project management and progress tracking. 
              "
              tags={["Java", "Docker", "Springboot", "Keycloak", "Open-ID connect"]}
              link={"https://www.interac.ca/"}
            />
            <Job
              timeWindow="May 2023 - October 2023"
              title="Backend Developer"
              company="Advanced Environmental Molecular Analytics "
              description="Engineered a backend application with SpringBoot and MySql to process and store wastewater reports, ensuring seamless data management and retrieval.
              Implemented Amazon Web Services Elastic Beanstalk and RDS for the deployment of the application, optimizing scalability and reliability while adhering to industry best practices for cloud infrastructure.
              "
              tags={["Java", "Springboot", "AWS", "MySQL"]}
              link={"https://www.aema-canada.com/"}
            />
            <Job
              timeWindow="September 2022 - December 2022"
              title="Web Developer"
              company="Information Technologie - University of Ottawa"
              description="Spearheaded the redesign and transformation of the Information Technology website to align with uOttawa's refreshed brand, ensuring a cohesive and contemporary online presence.
              Designed and developed engaging web pages, incorporating user-centric design principles and enhancing the overall user experience.
              "
              tags={["Drupal", "HTML", "CSS", "Google Analytics"]}
              link={"https://www.uottawa.ca/about-us/information-technology"}
            />
          </div>
          <div className="projects" id="projects">
            <Project
            title="mapcats.ca"
            desc={"Next.js application which uses google-maps api to map stray cat colonies"}
            tags={["Next.js", "HTML", "Javascript", "CSS", "Google-maps api"]}
            link={"https://www.mapcats.ca/"}
            />
            <Project
            title="benflynn.dev"
            desc={"Github repository for this website that was built using NEXT.js"}
            tags={["Next.js", "HTML", "Javascript", "CSS"]}
            link={"https://github.com/ben-flynn/ben-flynn-website"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function handleSideNavChanges() {

    about = document.getElementById("about").getBoundingClientRect();
    exp = document.getElementById("experience").getBoundingClientRect();
    projects = document.getElementById("projects").getBoundingClientRect();

    OnScroll();

    document.addEventListener("scroll" , OnScroll, false);
    document.addEventListener("reload" , OnScroll, false);

}

function OnScroll() {

    console.log("OnScroll()");

    var aboutLink = document.getElementById("about-link");
    var expLink = document.getElementById("exp-link");
    var projectsLink = document.getElementById("projects-link");
    var position = document.getElementById("app").getBoundingClientRect().y;


    if (position < 0)
      position = position * -1;
  

  
    if (position < exp.y) {
      aboutLink.style.color = "#88FF6A";
      expLink.style.color = "#393F46";
      projectsLink.style.color = "#393F46";
    }
  
    if (position >= exp.y && position <= projects.y) {
      expLink.style.color = "#88FF6A";
      aboutLink.style.color = "#393F46";
      projectsLink.style.color = "#393F46";
    }

    if (position >= projects.y) {
      projectsLink.style.color = "#88FF6A";
      aboutLink.style.color = "#393F46";
      expLink.style.color = "#393F46";
    }
}


