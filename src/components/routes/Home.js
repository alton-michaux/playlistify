import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Input from '../elements/Input'
import Nav from '../elements/Nav'
import Main from '../elements/Main'
import Footer from '../elements/Footer'

const Home = () => {
  return (
    <>
      <Row>
        <Input></Input>
        <Col>
          <Nav></Nav>
        </Col>
      </Row>
      <Row>
        <Main></Main>
      </Row>
      <Row>
        <Footer></Footer>
      </Row>
    </>
  );
}

export default Home;
