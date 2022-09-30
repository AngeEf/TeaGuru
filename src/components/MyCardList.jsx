import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MyCard from './MyCard';

export default function MyCardList({ items, currUser }) {
  return (
    <Row className="mt-3">
      {items.map((el) => (
        <MyCard
          key={el.id}
          item={el}
          currUser={currUser}
        />
      ))}
    </Row>
  );
}
