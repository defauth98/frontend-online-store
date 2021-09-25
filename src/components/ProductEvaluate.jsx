import React from "react";
import { Container } from "react-bootstrap";

function ProductEvaluate() {
  return (
    <Container className="border w-50 p-4">
      <h3>Avaliar o produto</h3>

      <label htmlFor="product-evaluation-email" className="evaluate-email">
        Email
        <br />
        <input
          type="email"
          placeholder="mail@mail.com"
          className="product-evaluation-email"
          id="product-evaluation-email"
        />
      </label>

      <label htmlFor="input-message" className="evaluate-text">
        Avaliação
        <textarea
          name="message"
          id="input-message"
          cols="30"
          rows="10"
          data-testid="product-detail-evaluation"
          className="product-evaluation-text"
        />
      </label>

      <button
        id="button-evaluate"
        type="button"
        className="product-evaluation-btn btn"
      >
        Avaliar produto
      </button>
    </Container>
  );
}

export default ProductEvaluate;
