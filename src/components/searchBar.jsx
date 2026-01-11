import { useState } from "react";
import { carros } from "./carros";

export const SearchBar = ({ onSearch }) => {
    return (
        <input 
            className="input-busca"
            type='text'
            placeholder="Pesquisar modelo ou marca..."
            onChange={(e) => onSearch(e.target.value)} 
        />
    );
}