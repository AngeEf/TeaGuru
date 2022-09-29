import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MyCardList from './MyCardList';
import MapComponent from './MapComponent';

function MainPage() {
  return (
    <Row>
      <Col sm={4}>
        <MyCardList />
      </Col>
      
      <Col sm={8}>
        <MapComponent />
      </Col>
    </Row>
  );
}

export default MainPage;
