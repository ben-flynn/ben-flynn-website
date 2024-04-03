import Tag from "./tag";
import Image from "next/image";

export default function Project({src, title, desc, tags }) {
    return (
        <div className="project">
            <div className="project-widget">
                <Image className="project-img" src={src} height={100} width={190}/>
                <div className="widget-text">
                    <div className="heading-text">{title}</div>
                    <p>{desc}</p>
                </div>
            </div>
            <div className="tags">
                {tags.map((tag, index) => (
                    <Tag key={index} tech={tag}/>
              ))}
            </div>
        </div>
    )

}