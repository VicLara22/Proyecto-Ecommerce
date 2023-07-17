import React from "react";
import './home.css'
import { NavBar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { Carrousel } from "../../components/Carrousel/Carrousel";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="container-home">
            <div>
                <NavBar />
            </div>
            <div>
                <Carrousel />
            </div>
            <div className="container-p">
                <p className="p-1">ELEGÍ LA PRENDA QUE MAS TE GUSTA Y RECÍBILA EN TU CASA</p>
                <p className="p-2">ELEGÍ LA PRENDA QUE MAS TE GUSTA Y RECÍBILA EN TU CASA</p>
            </div>
            <div className="container-home-card">
                <div className="card-home">
                    <div className="card-before">
                        <div className="front">
                            <h2 >Remeras</h2>
                        </div>
                        <div className="back">
                            <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <Link to='/products/'>
                                <button className="button-back ">Ir a tienda</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card-home">
                    <div className="card-before">
                        <div className="front">
                            <h2 >Pantalones</h2>
                        </div>
                        <div className="back">
                            <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <Link to='/products/'>
                                <button className="button-back ">Ir a tienda</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card-home">
                    <div className="card-before">
                        <div className="front">
                            <h2>Camisa</h2>
                        </div>
                        <div className="back">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <Link to='/products/'>
                                <button className="button-back ">Ir a tienda</button>
                            </Link>
                        </div>
                    </div>
                </div><div className="card-home">
                    <div className="card-before">
                        <div className="front">
                            <h2 >Vestido</h2>
                        </div>
                        <div className="back">
                            <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <Link to='/products/'>
                                <button className="button-back ">Ir a tienda</button>
                            </Link></div>

                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

