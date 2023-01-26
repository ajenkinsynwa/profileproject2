import { Col } from "react-bootstrap";

export const ProjectCard2 = ({ title, description, imgUrl, link2 }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a className='text-white'href={link2}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div 
    className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}