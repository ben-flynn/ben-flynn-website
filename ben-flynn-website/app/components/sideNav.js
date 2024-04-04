import Link from "next/link";

export default function SideNav() {
    return (
        <div className="side-nav">
            <Link id="home-link" href={"#home"}>&lt; cd '/Home' </Link>
            <Link id="about-link" href={"#about"}>&lt; cd '/About' </Link>
            <Link id="exp-link" href={"#expierence"}>&lt; cd '/Expierence'</Link>
            <Link id="projects-link" href={"#projects"}>&lt; cd '/Projects'</Link>
        </div>
    )
}