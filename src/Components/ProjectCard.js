import { Col } from "react-bootstrap";
import navIcon2 from "../assets/github.svg";

export const ProjectCard = ({ title, description,
   imgUrl, githubUrl, tags = []
}) => {
  return (
      <div className="proj-card">
        <div className="proj-card-top">
         <img src={imgUrl}/>
         <div className="proj-txt">
           <span>{description}</span>
         </div>
        </div>
        <div className="proj-card-bottom">
          <div className="proj-card-bottom-left">
            <h4>{title}</h4>
            <div className="tag-container">
              {tags.map((tag) => (
                <span
                  key={`${title}-${tag.name}`}
                  className={`${tag.color} m-0 p-0`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
          <div className='social-icon'>
            <a href={githubUrl}><img src={navIcon2} alt=''/></a>
          </div>
        </div>
      </div>
  )
}