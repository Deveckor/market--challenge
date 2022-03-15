import React from 'react';
import { Button } from 'react-bootstrap';


function Categories(props) {
    const {categories} = props
    return (
        
                <Button variant="primary" className="btn-Category">{categories}</Button>
               
          
    )
}

export default Categories