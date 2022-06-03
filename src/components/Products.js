import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';

export default function Products() {
  const [product, setProduct] = useState([]);
  async function getProducts() {
    const { data } = await axios.get('/api/inventory/items');
    setProduct(() => [...data.items]);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        {product.map((num) => (
          <Card key={num._id} xs={12} md={4} lg={3}>
            <div className='image-container'>
              <Card.Img variant='top' src={num.image} />
            </div>
            <Card.Body>
              <Card.Title>{num.name}</Card.Title>
              <Card.Text>${num.price}</Card.Text>
              <Button href={num.redirect} target='_blank'>
                More Info
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
}
