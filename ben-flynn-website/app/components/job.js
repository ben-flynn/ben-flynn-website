import Tag from "./tag";
import Link from "next/link";

export default function Job({timeWindow, title, company, description, tags, link}) {
    return (
        <div className="job">
            <div className="date-text">{timeWindow}</div>
            <Link href={link}><div className="heading-text">{title} | {company}</div></Link>
            <p className="exp">{description}</p>
            <div className="tags">
                {tags.map((tag, index) => (
                    <Tag key={index} tech={tag}/>
            ))}
            </div>
        </div>
    )
}