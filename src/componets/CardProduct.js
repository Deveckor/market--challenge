import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

function CardProduct(props) {
  const { src, title, price } = props;

  return (
    <Card style={{ width: "18rem" }} className="card-product mb-5">
      <Card.Img className="img-Card" variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;
