import React from "react";
import { Link } from "react-router-dom";
import './card.css';

export const Card = ({ img, title, id, price, category, size }) => {
    return (
        <div key={id}
            className="container-card">
            <div className="container-img-card">
                <img src={img} alt='img producto' />
            </div>
            <div className="container-detail-card">
                <h3>{title}</h3>
                <h2>${price}</h2>
                <h2>{size}</h2>
            </div>
            <div className="container-heart">
                <h2>{category}</h2>
                <i className="fa-regular fa-heart"></i>
            </div>
            <div className="container-button-card">
                <Link to={`/products/${id}`}>
                    <button>SABER MÁS</button>
                </Link>
            </div>

        </div>
    )
};