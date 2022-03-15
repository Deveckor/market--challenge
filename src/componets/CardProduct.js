
import { Card, Button } from "react-bootstrap";

function CardProduct(props) {
  const { image, title, price, description, addCart} = props;
  return (
    <Card style={{ width: "18rem" }} className="card-product m-2">
      <Card.Img className="img-Card" variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>${price}</Card.Text>
        <Button onClick={addCart} variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;
