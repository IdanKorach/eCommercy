import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import '../css/navigation.css';

export default function HostLayout() {

    const activeStyle = {
        fontWeight: "bold",
        color: "black", 
        borderColor: "gray",
        backgroundColor: "white",
        transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
    };

    return (
        <>
            <nav className="host-nav">
                <NavLink className="dashboard-button" 
                    to=""
                    end
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Dashboard
                </NavLink>

                <NavLink className="shoppingcart-button"
                    to="shoppingcart"
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Shopping Cart
                </NavLink>

                <NavLink className="listing-button"
                    to="listing"
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Listing
                </NavLink>
                
                <NavLink className="messeges-button"
                    to="messeges"
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Messeges
                </NavLink>
            
            </nav>
            <Outlet/>
        </>
    )
}