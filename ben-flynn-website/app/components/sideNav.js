import Link from "next/link";

export default function SideNav() {
    return (
        <div className="side-nav">
            <Link id="about-link" href={"#about"}>&gt; cd '/About' </Link>
            <Link id="exp-link" href={"#expierence"}>&gt; cd '/Expierence'</Link>
            <Link id="projects-link" href={"#projects"}>&gt; cd '/Projects'</Link>
        </div>
    )
}