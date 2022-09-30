import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard({ item, currUser}) {
  return (
    <Container>
      <Row md={3}>
        <Card style={{ width: 300 }}>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.location}
            </Card.Text>
            {/* <Link to={`/user/cardpage/${item.id}`}>See more</Link> */}

        </Card>
      </Row>
    </Container>
  );
}

export default MyCard;
