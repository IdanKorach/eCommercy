import React, { useEffect, useParams, useState }  from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function ListingsLayout() {

    return (
        <>  
            <nav className="listing-nav">
            <NavLink className="details-button"
                to=''
            >
                Details
            </NavLink>

            <NavLink className="pricing-button"
                to='pricing'
            >
                Pricing
            </NavLink>

            <NavLink className="photos-button"
                to='photos'
            >
                Photos
            </NavLink>

            </nav>
            <Outlet/>
        </>
    )
}