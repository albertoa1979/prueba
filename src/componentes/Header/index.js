import React from "react";
import tzy from "../../images/tzy.jpg"
export const Header = ()  => {
    return (
        <header>
            <a href="#">
                <div className="logo">
                    <img src={tzy} alt="logo" width="150"/>
                </div>
            </a>
            <ul>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Acerca de nosotros</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item_total">0</span>
            </div>
        </header>
    )
} 