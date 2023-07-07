import React from "react";
import './navBar.css';
import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import imgLogo from '../../assets/logo.jpg';


export const NavBar = () => {
    return (
        <div className="container menu-nav">
            <div className="container-logo">
                <img src={imgLogo} alt="logo" className="img-logo" />
            </div>
            <div>
                <SearchBar />
            </div>
            <div className="container-enlaces">
                <Link to='/' >
                    <li>Inicio </li>
                </Link >
                <Link to='/products'>
                    <li>Productos</li>
                </Link >
                <Link to='/cart' >
                    <li><i className="fa-solid fa-cart-shopping"></i></li>
                </Link >
                <Link to='/login'>
                    <li><i className="fa-regular fa-user"></i> Login</li>
                </Link >
            </div>
        </div>
    )
}