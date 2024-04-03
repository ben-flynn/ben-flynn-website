import About from "./components/about";
import Job from "./components/job";
import Project from "./components/project";
import SideNav from "./components/sideNav";
import SpotifyPlayer from "./components/spotifyPlayer";
import "./globals.css";



export default function Home() {
  return (
    <>
      <div className="container">
        <About/>
        <SpotifyPlayer url={"https://open.spotify.com/embed/track/1yCE0X5qLWOrLkR8NC0ZUJ?utm_source=generator"}/>
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
        </div>
      </div>
      <SideNav/>
    </>
  );
}
