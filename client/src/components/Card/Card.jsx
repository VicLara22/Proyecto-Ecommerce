import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ img, title, id }) => {
    return (
        <div>
            <div>
                <img src={img} alt='image producto' />
            </div>
            <div>
                <h3>{title}</h3>
                <Link to={`/home/products/${id}`}> 
                <p>Saber más</p>
                </Link>
            </div>
        </div>
    )
};