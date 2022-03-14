import React from 'react';



function Greeting(props) {

    const {name} = props;

    return (
        <div className="greeting">
        <h5>Hi, {name}</h5>
        <h3>What are you looking for today?</h3>
        </div>
    )
}

export default Greeting;