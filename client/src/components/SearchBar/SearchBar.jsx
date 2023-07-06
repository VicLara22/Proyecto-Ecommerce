import React from "react";
import './searchBar.css'

export const SearchBar = () => {


    return (
        <div className="container-search">
            <input
                type="text"
                placeholder="Buscar producto..."
                className="input-search"
              
            />
            <button className="button-search">Buscar</button>
        </div>
    )
}