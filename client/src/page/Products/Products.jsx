import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { Card } from "../../components/Card/Card";
import { getAllProducts } from "../../redux/action";

export const Products = () => {
    const allProducts = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch]);

    return (
        <div>
            <div>
                <NavBar />
            </div>
            {
                allProducts.length ? (
                    allProducts.map((product) => (
                        <Card
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            title={product.name}
                            price={product.price}
                        />
                    ))
                ) :
                    (<p>Cargando Productos</p>)
            }
            <div>
                <Footer />
            </div>
        </div>
    )
};