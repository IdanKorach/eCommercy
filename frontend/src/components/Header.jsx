import React from "react";
import { NavLink } from "react-router-dom";
import "../css/global.css";
import "../css/buttons.css";



export default function Header() {

    const activeStyle = {
        fontWeight: "bold",
        color: "black", 
        borderColor: "gray",
        backgroundColor: "white",
        transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
    };
      
    return (
        <header>
            <NavLink className='site-logo' to="/">eCommercy</NavLink>
            <nav>
                <NavLink className='host-button' 
                    to="/host"
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Host
                </NavLink>

                <NavLink className='login-button' 
                    to="/login"
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Login
                </NavLink>

                <NavLink className='signup-button' 
                    to="/signup"
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Signup
                </NavLink>

                <NavLink className='products-button' 
                    to="/products"
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Products
                </NavLink>
            </nav>
      </header>
    )
}