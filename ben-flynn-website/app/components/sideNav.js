import Link from "next/link";

export default function SideNav() {
    return (
        <div className="side-nav">
            <Link id="about-link" href={"#about"}>$ cd '/about' </Link>
            <Link id="exp-link" href={"#experience"}>$ cd '/experience'</Link>
            <Link id="projects-link" href={"#projects"}>$ cd '/projects'</Link>
        </div>
    )
}