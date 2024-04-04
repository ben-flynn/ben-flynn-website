'use client'

import About from "./components/about";
import Job from "./components/job";
import Project from "./components/project";
import SideNav from "./components/sideNav";
import "./globals.css";
import Main from "./components/main";
import { useEffect } from "react";
import Socials from "./components/socials";

let home;
let about;
let exp;
let projects;


export default function Home() {


  useEffect(() => {
    window.scrollTo(0, 0);
    handleSideNavChanges();
  }, []);

  
  return (
    <div id="app">
      <Main/>
      <div className="container" id="container">
        <About/>
        <div className="expierence" id="expierence">
          <Job
            timeWindow="April 2021 - present"
            title="UI/UX designer"
            company="Software for love"
            description="Spearheaded the development of a full stack application, which allowed users to test the authentication flow of any platform using the open-id- connect protocol, to ensure the seamless flow of financial data exchange within the organization. Pioneered the creation of a financial data exchange simulator enhancing testing capabilities and streamlining the validation process for financial transactions."
            tags={["Java", "Docker", "Springboot", "AWS"]}
          />
          <Job
            timeWindow="April 2021 - present"
            title="UI/UX designer"
            company="Software for love"
            description="Spearheaded the development of a full stack application, which allowed users to test the authentication flow of any platform using the open-id- connect protocol, to ensure the seamless flow of financial data exchange within the organization. Pioneered the creation of a financial data exchange simulator enhancing testing capabilities and streamlining the validation process for financial transactions."
            tags={["Java", "Docker", "Springboot", "AWS"]}
          />
          <Job
            timeWindow="April 2021 - present"
            title="UI/UX designer"
            company="Software for love"
            description="Spearheaded the development of a full stack application, which allowed users to test the authentication flow of any platform using the open-id- connect protocol, to ensure the seamless flow of financial data exchange within the organization. Pioneered the creation of a financial data exchange simulator enhancing testing capabilities and streamlining the validation process for financial transactions."
            tags={["Java", "Docker", "Springboot", "AWS"]}
          />
        </div>
        <div className="projects" id="projects">
          <Project
          src={"/photos/catmaps.JPG"}
          title="mapcats.ca"
          desc={"Spearheaded the development of a full stack application, which allowed users to test the authentication."}
          tags={["Java", "Docker", "Springboot", "AWS"]}
          />
          <Project
          src={"/photos/catmaps.JPG"}
          title="mapcats.ca"
          desc={"Spearheaded the development of a full stack application, which allowed users to test the authentication."}
          tags={["Java", "Docker", "Springboot", "AWS"]}
          />
          <Project
          src={"/photos/catmaps.JPG"}
          title="mapcats.ca"
          desc={"Spearheaded the development of a full stack application, which allowed users to test the authentication."}
          tags={["Java", "Docker", "Springboot", "AWS"]}
          />
        </div>
      </div>
      <SideNav/>
      <Socials/>
    </div>
  );
}

function handleSideNavChanges() {
    home = document.getElementById("home").getBoundingClientRect();
    about = document.getElementById("about").getBoundingClientRect();
    exp = document.getElementById("expierence").getBoundingClientRect();
    projects = document.getElementById("projects").getBoundingClientRect();

    console.log(document.getElementById("about").getClientRects(), about)


    document.addEventListener("scroll" , OnScroll, false);
}

function OnScroll() {
    var homeLink = document.getElementById("home-link");
    var aboutLink = document.getElementById("about-link");
    var expLink = document.getElementById("exp-link");
    var projectsLink = document.getElementById("projects-link");
    var position = document.getElementById("app").getBoundingClientRect().y;


    if (position < 0)
      position = position * -1;
  
    if (position <= about.y) {
      homeLink.style.color = "#88FF6A";
      aboutLink.style.color = "#ABABAB";
      expLink.style.color = "#ABABAB";
      projectsLink.style.color = "#ABABAB";
    }
  
    if (position >= about.y && position <= exp.y) {
      aboutLink.style.color = "#88FF6A";
      homeLink.style.color = "#ABABAB";
      expLink.style.color = "#ABABAB";
      projectsLink.style.color = "#ABABAB";

    }
  
    if (position >= exp.y && position <= projects.y) {
      expLink.style.color = "#88FF6A";
      aboutLink.style.color = "#ABABAB";
      homeLink.style.color = "#ABABAB";
      projectsLink.style.color = "#ABABAB";
    }

    if (position >= projects.y) {
      projectsLink.style.color = "#88FF6A";
      aboutLink.style.color = "#ABABAB";
      expLink.style.color = "#ABABAB";
      homeLink.style.color = "#ABABAB";
    }
}


