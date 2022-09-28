import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard() {
  return (
    <Container>
      <Row md={3}>

        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Click</Button>
          </Card.Body>
        </Card>

      </Row>
    </Container>
  );
}

export default MyCard;
