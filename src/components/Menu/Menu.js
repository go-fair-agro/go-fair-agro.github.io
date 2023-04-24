import React from "react";
import  "./Menu.css";
import logo from "../../images/go-fair-brasil.png"

export const Menu = () => {
    return (
        <div className="menu">

            <div className="menuLogo">
                <a href="/">
                    <img src={logo} alt="" srcset="" />
                </a>
            </div>

            <div className="linkGroup">
                <a  href="#publicações">
                    Publicações
                </a>
                <a  href="#cicloDeOficinas">
                    Ciclo de Oficinas
                </a>
                <a href="#rede">
                    Contato
                </a>
            </div>
        </div>
    )
}