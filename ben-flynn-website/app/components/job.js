import Tag from "./tag";

export default function Job({timeWindow, title, company, description, tags}) {
    return (
        <div className="job">
            <div className="date-text">{timeWindow}</div>
            <div className="heading-text">{title} | {company}</div>
            <p>{description}</p>
            <div className="tags">
                {tags.map((tag, index) => (
                    <Tag key={index} tech={tag}/>
              ))}
            </div>
        </div>
    )
}