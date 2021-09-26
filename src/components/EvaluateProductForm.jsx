/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function EvaluateProductForm() {
  const payModes = ['Boleto', 'Visa', 'Mastercard', 'Elo'];

  return (
    <Container>
      <h1 className="fs-4 my-4">Informações pessoais</h1>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="form-name">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Nome" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="form-email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="form-cpf">
              <Form.Label>CPF</Form.Label>
              <Form.Control type="number" placeholder="CPF" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="form-phone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="number" placeholder="Número de telefone" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="form-cep">
              <Form.Label>CEP</Form.Label>
              <Form.Control type="number" placeholder="CEP" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="form-address">
              <Form.Label>Rua</Form.Label>
              <Form.Control type="number" placeholder="Endereço" />
            </Form.Group>
          </Col>

        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="form-address">
              <Form.Label>Número</Form.Label>
              <Form.Control type="number" placeholder="Número da casa" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="form-address">
              <Form.Label>Complemento</Form.Label>
              <Form.Control type="text" placeholder="Complemento" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="form-address">
          <div>
            <Form.Label>Método de pagamento</Form.Label>
          </div>

          <Form.Check
            inline
            label={ payModes[0] }
            name="group1"
            type="button"
            id="paymode"
          />
          <Form.Check
            inline
            label={ payModes[1] }
            name="group1"
            type="button"
            id="paymode"
          />
          <Form.Check
            inline
            label={ payModes[2] }
            type="button"
            id="paymode"
          />
          <Form.Check
            inline
            label={ payModes[3] }
            type="button"
            id="paymode"
          />
        </Form.Group>

        <Container
          className="d-flex justify-content-center my-5"
        >
          <Button variant="primary">Finalizar compra</Button>
        </Container>
      </Form>
    </Container>

  );
}

export default EvaluateProductForm;
