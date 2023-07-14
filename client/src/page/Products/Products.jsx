import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { Card } from "../../components/Card/Card";
import { getAllProducts } from "../../redux/action";
import { Filter } from "../../components/Filter/Filter";
import './products.css'
export const Products = () => {
    const allProducts = useSelector((state) => state.products);
console.log(allProducts,'aca')
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch]);

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <Filter/>
            </div>
            <div> 
            {
                allProducts.length ? (
                    allProducts.map((p) => (
                        <Card
                            key={p.id}
                            id={p.id}
                            img={p.image}
                            title={p.name}
                            price={p.price}
                            size={p.sizes[0].name}
                            category={p.categories[0].name}
                            
                        />
                    )) 
                ) :
                    (<p>No se encontraron Productos</p>)
            }
            </div>
            <div> 
                <Footer />
            </div>
        </div>
    )
};

