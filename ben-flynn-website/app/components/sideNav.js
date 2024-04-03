import Link from "next/link";

export default function SideNav() {
    return (
        <div className="side-nav">
            <Link href={"#about"}>&lt; setView('/About') </Link>
            <Link href={"#expierence"}>&lt; setView('/Expierence')</Link>
            <Link href={"#projects"}>&lt; setView('/Projects')</Link>
        </div>
    )
}