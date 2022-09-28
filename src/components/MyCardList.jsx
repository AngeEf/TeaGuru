import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MyCard from './MyCard';

export default function MyCardList() {
  return (
    <Col className="mt-4">
      <MyCard />
      {/* {cards.map((el) => <MyCard key={el.id} card={el} deleteHandler={deleteHandler} />)} */}
    </Col>
  );
}
