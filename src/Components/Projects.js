import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { projects } from '../constants';



const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
              <div>
                <h2>Projects</h2>
                <p>Here, you'll find a few small projects that reflect my early journey in frontend development, blockchain, and Web3. As a self-taught web developer currently pursuing a Master’s degree, I’m still in the process of honing my skills and knowledge. I appreciate your understanding as I continue to grow, and I hope these works give you a glimpse of my potential and eagerness to contribute to more significant projects in the future.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Frontend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Blockchain</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Web3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row className="justify-content-center">
                        {projects
                          .filter((project) => project.type === "frontend")
                          .map((project, index) => (
                            <Col key={index} sm={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
                              <ProjectCard {...project} />
                            </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row className="justify-content-center gap-5">
                      {projects
                        .filter((project) => project.type === "blockchain")
                        .map((project, index) => (
                          <Col key={index} sm={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
                            <ProjectCard {...project} />
                          </Col>
                      ))}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row className="justify-content-center">
                          {
                            projects
                            .filter(project => project.type === 'web3') 
                            .map((project, index) => (
                              <Col key={index} sm={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
                                <ProjectCard {...project} />
                              </Col>
                          ))}
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;