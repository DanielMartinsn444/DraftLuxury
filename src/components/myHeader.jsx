import { useState } from "react";
import "../styles/header.css"
import { SearchBar } from "./searchBar";


export const Header = ({ onSearch, titulo = 'Draft Luxury' }) => {
    return (
        <div className="main-menu">
            <header className="menu-info">
                <h1>{titulo}</h1>
                <nav>
                    <div className="search-bar">
                        <SearchBar onSearch={onSearch} />
                    </div>
                    <ul>
                        <li><a href="#">Luxury</a></li>
                        <li><a href="#">SUV</a></li>
                        <li><a href="#">Sport</a></li>
                        <li><a href="#">Muscle</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}