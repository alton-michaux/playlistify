import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Input from '../elements/Input'
import Nav from '../elements/Nav'
import Main from '../elements/Main'
import Footer from '../elements/Footer'
import "../../assets/App.css"

const Home = () => {
  return (
    <>
      <main
        // style={{ minHeight: "74vh", marginBottom: "5%" }}
      >
        <Row>
          <Input></Input>
          <Col>
            <Nav></Nav>
          </Col>
        </Row>
        <Row>
          <Main></Main>
        </Row>
      </main>
      <Row>
        <Footer></Footer>
      </Row>
    </>
  );
}

export default Home;
