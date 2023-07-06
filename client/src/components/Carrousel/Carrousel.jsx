import React, { useState } from "react";
import './carrousel.css';
import img3 from '../../assets/carrusel3.png'
import img2 from '../../assets/carrusel2.jpg'
import img1 from '../../assets/carrusel1.jpg'

export const Carrousel = () => {
    //creamos un array con las imagenes
    const images = [
        img1,
        img2,
        img3
    ]
    //utilizo el hook useState para crear una variable de estado que la utilizo para tener un seguimietno del indice de la imagen actual que se muestra en el carrusel. inicialmente lo establecemos en 0, lo que significa que la primera imagen se mostrara al cargar el carrusel,
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        //el nuevo valor del carrusel se calcula tomadndo el indeice anterior y sumandole . Utilizamos el operador % ppra asegurarnos que el indice quede en el rango validos de indices de las imagenes. 
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
    }
    const prev = () => {
      
        setCurrentIndex(prevIndex => {
              // si el indice esta en 0 mostrara la ultima imagen de array 
            if (prevIndex === 0) {
                return images.length - 1;
                //de lo contario restamos 1 al indice actual
            } else {
                return prevIndex - 1;
            }
        })

    }
    return (
        <div className="container-principal">
            <div className="containerSlide">
                <div className="slide">
                    <img src={images[currentIndex]} alt="image carrusel" />
                </div>
                <div className="controlers">
                    <button className="button-right" onClick={next}><i class="fa-sharp fa-solid fa-angle-right"></i></button>
                    <button className="button-left" onClick={prev}><i class="fa-sharp fa-solid fa-angle-left"></i></button>
                </div>
            </div>
        </div>
    )
}
//Entonces tenemos 3 imagenes, numeradas de 0 a 2 y cuando hacemos click en next tiene que avanzar a la sig imagen. El operador modulo % nos ayuda a aseguranros de que el indice de la imagen actual siempre este detnro del tango valido (0 a 2) Si el indeice actual alcanza el lmite superior(2) el operador modulo nos devuleve al principio, es decir, al indice 0
