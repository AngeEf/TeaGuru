import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function MyCard({ item, currUser }) {
  return (
    <Container>
      <Row md={3}>
        <Card style={{ width: 300 }}>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.location}
          </Card.Text>
          <Link to={`/user/cardpage/${item.id}`} className="btn btn-primary">перейти</Link>
          {/* <Button variant="primary">Click</Button> */}

        </Card>
      </Row>
    </Container>
  );
}

export default MyCard;
