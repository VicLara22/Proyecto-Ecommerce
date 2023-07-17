import React, { useEffect, useState } from "react";
import './cardetail.css';
import { NavBar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetail } from "../../redux/action";
import { Link, useParams } from "react-router-dom";

export const CardDetail = () => {
  const dispatch = useDispatch()
  const detail = useSelector((state) => state.detail)
  const [idSize, setidSize] = useState(0);
  const [idColor, setidColor] = useState(0);
  const [idStock, setidStock] = useState(0);

  let { id } = useParams();

  useEffect(() => {
    dispatch(getProductsDetail(id))
  }, [dispatch, id])

  return (
    <div>
      <NavBar />
      {
        detail ?
          <div key={detail.id} className="container-cardetail">

            <div className="container-img-cardetail">
              <img src={detail.image} alt={detail.name} />
            </div>

            <div className="container-infoTotal">

              <div className="container-p1">
                {detail.categories && detail.categories.length > 0 && (<h2>{detail.categories[0].name}</h2>)}
                <h1>{detail.name}</h1>

                <div className="container-p4"><h3>${detail.price}</h3></div>
              </div>

              <div className="container-p3">
                <h1>Seleccionar talle:</h1>
                <select
                  name="select"
                  onChange={(e) => { setidSize(e.target.value) }}
                >
                  {detail.sizes?.map((size, index) => (
                    <option value={index} key={index}>{size.name}</option>
                  ))}
                </select>

                <h1 className="color">Seleccionar color:</h1>
                <select name="select"
                  onChange={(e) => { setidColor(e.target.value) }}>
                  {detail.colors?.map((color, index) => (
                    <option value={index} key={index}>{color.name}</option>
                  ))}
                </select>
                <h1>Cantidad de stock:</h1>
                <h2>{detail.stock}</h2>

              </div>

              <div className="container-btn-comprar">
                <button>Comprar Ahora</button>
              </div>

              <div className="container-p2">
                <p>{detail.description}</p>
              </div>
              <div className="container-extra">
                <Link to='/products'> 
              <button>Seguir Comprando</button>
              </Link>
            </div>
            </div>
           
          </div>
          :
          <p>No hay detail</p>
      }

      <Footer />
    </div>
  )
}