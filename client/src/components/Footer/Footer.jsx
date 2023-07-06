import React from "react";
import './footer.css';
import imgLogo from '../../assets/logo.jpg';

export const Footer = () => {
    return (
        <div className="container-footer">
            <div className="menu-footer">
                <div className="container-botton-footer">
                    <button className="button-footer">Contactanos</button></div>
                <div className="container-img-footer">
                    <img src={imgLogo} alt="logo" className="img-footer" />
                </div>
                <div className="container-redes">
                    <li><a href="https://www.linkedin.com/laravictoriamoyano/in" target="_black"><i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://www.twiter.com/VicLara/" target="_black"><i className="fa-brands fa-square-twitter"></i></a></li>
                    <li><a href="https://www.github.com/VicLara22/" target="_black"><i className="fa-brands fa-square-github"></i></a></li>
                </div>
            </div>
            <p>2023 LVM Todos los derechos reservados</p>
        </div>
    )
}