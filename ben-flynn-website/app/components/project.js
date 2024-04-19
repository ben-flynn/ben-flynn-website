import Link from "next/link";
import Tag from "./tag";

export default function Project({link, title, desc, tags }) {
    return (
        <div className="project">
            <div className="project-widget">
                <div className="widget-text">
                <Link href={link}><div className="heading-text">{title}</div></Link>
                    <p>{desc}</p>
                </div>
            </div>
            <div className="tags">s
                {tags.map((tag, index) => (
                    <Tag key={index} tech={tag}/>
            ))}
            </div>
        </div>
    )
}