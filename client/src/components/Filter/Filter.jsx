import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, getAllColor, getAllPrice, getAllProducts, getAllSize, getByCategory, getByColor, getByPrice, getBySizes } from "../../redux/action";
import './filter.css'

export const Filter = () => {

    const dispatch = useDispatch();

    const sizes = useSelector((state) => state.sizes)
    const category = useSelector((state) => state.category)

    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedColor, setSelectedColor] = useState('');


    useEffect(() => {
        dispatch(getAllCategory())
        dispatch(getAllSize())
        dispatch(getAllPrice())
        dispatch(getAllColor())
    }, [dispatch]);

    const handlePriceChange = (e) => {
        setSelectedPrice(e.target.value);
    };

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

    const handleClick =(e) =>  {
        e.preventDefault();
        dispatch(getAllProducts());
      }



    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedPrice) {
            dispatch(getByPrice(selectedPrice));
        }
        if (selectedSize) {
            dispatch(getBySizes(selectedSize));
        }
        if (selectedCategory) {
            dispatch(getByCategory(selectedCategory));
        }
        if (selectedColor) {
            dispatch(getByColor(selectedColor));
        }
    };


    return (
        <div className="container-filter">
            <form onSubmit={handleSubmit}>
                <label>
                    Precio:
                    <select value={selectedPrice} onChange={(e) => handlePriceChange(e)} >
                        <option value=''>Todos</option>
                        <option value='low'>Bajo</option>
                        <option value='medium'>Medio</option>
                        <option value='high'>Alto</option>
                    </select>
                </label>
                <label>
                    Talle:
                    <select value={selectedSize} onChange={(e) => handleSizeChange(e)} >
                        <option value=''>Todos</option>
                        <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                        {/*  {sizes ? (
                            sizes.map((s) => (
                                <option value={s.name} key={s.id}>{s.name}</option>
                            ))
                        )
                            : (<option disabled>No existen talles</option>)
                        } */}
                    </select>
                </label>
                <label>
                    Categoria:
                    <select value={selectedCategory} onChange={(e) => handleCategoryChange(e)} >
                        <option value=''>Todos</option>
                        <option value='Remera'>Remera</option>
                        <option value='Camisa'>Camisa</option>
                        <option value='Vestido'>Vestido</option>
                        {/*  {category ? (
                            category.map((s) => (
                                <option value={s.name} key={s.id}>{s.name}</option>
                            ))
                        )
                            : (<option disabled>No existen Categorias</option>)
                        } */}
                    </select>
                </label>
                <label>
                    Color:
                    <select value={selectedColor} onChange={(e) => handleColorChange(e)} >
                        <option value=''>Todos</option>
                        <option value='Negro'>Negro</option>
                        <option value='Blanco'>Blanco</option>
                        <option value='Rojo'>Rojo</option>
                    </select>
                </label>
                <button className="button-filter" type="submit">Filtrar</button>
                <button className="button-filter" onClick={(e) => {handleClick(e)}}>Resetear</button>
            </form>
        </div>
    )
};