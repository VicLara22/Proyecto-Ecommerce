import React from "react";
import { Link } from "react-router-dom";
import './card.css';

export const Card = ({ image, title, id, price, category }) => {
    return (
        <div key={id}
            className="container-card">
            <div className="container-img-card">
                <img src={image} alt='image producto' />
            </div>
            <div className="container-detail-card">
                <h3>{title}</h3>
                <h2>${price}</h2>

            </div>
            <div className="container-heart">
                <h2>{category}</h2>
                <i class="fa-regular fa-heart"></i>
            </div>
            <div className="container-button-card">
                <Link to={`/products/${id}`}>
                    <button>SABER MÁS</button>
                </Link>
            </div>

        </div>
    )
};