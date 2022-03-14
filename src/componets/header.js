import React from 'react';



function NavBar(props) {

    return (
        <header className="d-flex justify-content-between header">
            <div>
            <h3>Kodemia</h3>
            </div>
            <nav className="d-flex justify-content-around gap-3 align-items-center">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#"> Favorites</a>
            <img className="profile"  src={props.img} alt="profile" />
               
            </nav>

        </header>
    )
}

export default NavBar;