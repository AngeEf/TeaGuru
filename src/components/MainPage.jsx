import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import MyCardList from './MyCardList';
import MapComponent from './MapComponent';

function MainPage({ currUser }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('/api/cardlist')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (

    <Row>
      <Col sm={4}>
        <MyCardList currUser={currUser} items={items} />
      </Col>

      <Col sm={8}>
        <MapComponent />
      </Col>
    </Row>
  );
}

export default MainPage;
