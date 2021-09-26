import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';

function ProductEvaluate() {
  return (
    <Container className="border w-50 p-4">
      <h3>Avaliar o produto</h3>

      <Form>
        <Form.Group className="mb-3" controlId="evaluate-form">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="mail@mail.com" />

          <Form.Label>Descrição</Form.Label>
          <Form.Control as="textarea" rows={ 3 } />

        </Form.Group>
        <Button variant="primary" type="submit">
          Avaliar
        </Button>
      </Form>
    </Container>
  );
}

export default ProductEvaluate;
