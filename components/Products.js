import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

export default function Products() {
  let six = [0, 1, 2, 3, 4, 5];
  return (
    <div>
      <Container>
        <Row>
          {six.map((num) => (
            <Col key={num} xs={12} md={4} lg={3}>
              <Card>
                <Card.Img src='https://via.placeholder.com/150x75' />
                <Card.Body>
                  <Card.Title>{num}</Card.Title>
                  <Card.Text>text goes here</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
