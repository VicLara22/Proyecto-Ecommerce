import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ image, title, id, price }) => {
    return (
        <div key={id}>
            <div>
                <img src={image} alt='image producto' />
            </div>
            <div>
                <h3>{title}</h3>
                <h3>{price}</h3>
                <Link to={`/products/${id}`}> 
                <p>Saber más</p>
                </Link>
            </div>
        </div>
    )
};