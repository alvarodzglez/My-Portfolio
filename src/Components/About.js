import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Card from "./RoleCard";
import { roles } from "../constants";

const About = () => {
  return (
    <section className="about" id="about">
      <Container id="about" >
        <Row>
          <Col md={12} className="text-center text-md-left">
              <h2>About me</h2>
              <p>
              I am an <span>Industrial Electronics Engineer</span> currently pursuing a dual Master’s degree in <span>Blockchain Engineering and Development</span>, as well as <span>Blockchain Management and Web3</span>. With my multidisciplinary background, I am equipped with the technical expertise to explore decentralized applications, smart contracts, and the transformative potential of Industry 4.0.
              <span> As a self-taught web developer, I am eager to find a trainee or junior opportunity</span> where I can apply and expand my skills. More importantly, I am looking for an environment where I can continue to grow professionally, contributing to transformative projects that integrate blockchain, Web3, and advanced web technologies. My goal is to help shape the future of industry through secure, scalable, and efficient digital solutions that promote transparency, sustainability, and technological advancement.
              </p>
            </Col>
        </Row>
          <Row className="roles-list text-center justify-content-center">
            {roles.map((role, index, icon) => (
              <Col xs={12} md={4} lg={2} key={index} className="d-flex justify-content-center mb-4">
              <Card key={index} role={role} icon={icon}/>
              </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;