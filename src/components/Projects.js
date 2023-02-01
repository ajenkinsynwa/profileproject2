import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCard2} from "./ProjectCard2";
import projImg1 from "../assets/img/queen.png";
import projImg2 from "../assets/img/note.png";
import projImg3 from "../assets/img/weather.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'App/css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      
      title: "Queen City Pups Project",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://evening-river-11733.herokuapp.com/",
      link2: "https://github.com/tedtalktimmy/queen-city-pup" 
    },
    {
      title: "Notetaker Application",
      description: "Express.js, RESTful APIs",
      imgUrl: projImg2,
      link: "https://mighty-ocean-87757.herokuapp.com/",
      link2: "https://github.com/ajenkinsynwa/express.js-notetaker" 
    },
    {
      title: "Weather Dashboard",
      description: "Thrid Party API",
      imgUrl: projImg3,
      link:"https://ajenkinsynwa.github.io/weatherdashboard/",
      link2: "https://github.com/ajenkinsynwa/weatherdashboard" 
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>You can find all of my projects on my Github</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Repository's</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Future Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard2
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>future projects</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-center" src={colorSharp2}></img> */}
    </section>
  )
}