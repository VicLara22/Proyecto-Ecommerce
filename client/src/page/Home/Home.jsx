import React from "react";
import './home.css'
import { NavBar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { Carrousel } from "../../components/Carrousel/Carrousel";

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
    
            <div>
                <Footer />
            </div>
        </div>
    )
}

