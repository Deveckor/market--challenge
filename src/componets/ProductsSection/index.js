import React from "react";
import {Container, Row} from 'react-bootstrap'
import Card from '../../componets/CardProduct'
import products from "../../data/products.json"


function ProductSection(props){

    const {addCart} = props;

    return (
        <div>
            <h4 style={{color: 'white'}}>New Product</h4>
            <Container fluid>
                <Row >
                    {products.map(product =>{
                        const {title, description, price, image, id} = product;
                        return (
                            <Card
                            key={id}
                            title={title}
                            description={description}
                            price={price}
                            image={image}
                            addCart={addCart}
                            />
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
export default ProductSection