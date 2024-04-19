import Tag from "./tag";

export default function Project({src, title, desc, tags }) {
    return (
        <div className="project">
            <div className="project-widget">
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