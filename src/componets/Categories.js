import React from 'react';
import { Button } from 'react-bootstrap';


function Categories(props) {

    return (
        <div className="d-flex flex-column m-4 categories">
            <h3>Categories</h3>
            <section>
                <Button variant="primary" className="btn-Category">Men´s clothing</Button>
                <Button variant="primary" className="btn-Category">Jewelery</Button>
                <Button variant="primary" className="btn-Category">Electronics</Button>
                <Button variant="primary" className="btn-Category">Wommen´s clothing</Button>

            </section>
        </div>
    )
}

export default Categories