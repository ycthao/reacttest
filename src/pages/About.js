import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://image.freepik.com/free-vector/digial-circuit-diagram-technology-background_1017-28403.jpg">
        <h1>Yeem Chij Thao</h1>
        <h2>An aspiring web developer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              I'm Yeem Chij Thao, also known as Steve, and currently taking a coding boot camp in hope to learn new
              skills.
            </p>
            <p>
              I have no professional experience in coding. I have some coding knowledge through the boot camp learning
              HTML, CSS, JavaScript, Nodejs, MySQL, Mongo, Reactjs.
            </p>
            <p>
              As I further educate myself either through the boot camp or on my own time, I'd add additional content of
              what I know and learn in my portofolio.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
