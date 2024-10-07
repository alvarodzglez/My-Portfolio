import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Tech from "./Tech";
import { TechStack } from "../constants";


const Skills = () => {
  return (
    <section id="skills" className="text-center skills">
      <Container>
      <h2 className="text-center mb-5">Skills</h2>
      <div className="text-center skills-container">
      <Row className="d-flex justify-content-center">
        <Col md={6}>
            <h3>Tech Stack</h3>
            <div className="d-flex justify-content-center flex-wrap tech-stack-list">
              {TechStack.map((technology, index) => (
                <Tech key={index} tech={technology}/>
              ))}
            </div>
        </Col>
        <Col md={6}>
            <h3>Knowledge</h3>
            <div className="d-flex justify-content-center flex-wrap tech-stack-list knowledge-list">
              <p>DApps & DAOs architecture</p>
              <p>Tokenization</p>
              <p>Hyperledger</p>
              <p>Cryptoeconomy & DeFi</p>
              <p>Blockchain Audit and Security</p>
              <p>Blockchain Compliance and Legal Issues</p>
            </div>
        </Col>
        </Row>
      </div>
      </Container>
    </section>
  );
};

export default Skills;