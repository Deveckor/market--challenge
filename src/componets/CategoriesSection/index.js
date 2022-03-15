import React from "react";
import {Badge} from "react-bootstrap"
import categories from "../../data/categories.json"
import Categories from "../../componets/Categories"


function CategoriesSection(){
    return(
        <div className="m-4">
            <h4 style={{color:'white'}}>Categories</h4>

            {categories.map(category =>{
                return(
                    <Badge key={category} pill className="m-4" style={{cursor: 'pointer'}}>
                        {category}
                    </Badge>
                )
            })}
        </div>
    )
}

export default CategoriesSection