import React from "react";
import { Link } from "react-router-dom";
import './card.css';

export const Card = ({ img, title, id, price, category, size }) => {
    return (
        <div key={id}
            className="container-card" >
            <div className="container-card-cd">
                <i className="fa-regular fa-heart container-heart"></i>
                <div className="container-img-card">
                    <img src={img} alt='img producto' />
                </div>
                <div className="container-detail-card">
                    <h3>{title}</h3>
                    <h2>Precio: ${price}</h2>
                    <h2>Talle: {size}</h2>
                </div>

                <div className="container-button-card">
                    <Link to={`/products/${id}`}>
                        <button>SABER MÁS</button>
                    </Link>
                </div>

            </div>
        </div>
    )
};