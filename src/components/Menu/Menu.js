import React from "react";
import  "./Menu.css";
import logo from "../../images/go-fair-brasil-agro-logo.svg"

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
                <a  href="#publicações">
                    Participantes
                </a>
                <a  href="#cicloDeOficinas">
                    Ciclo de Oficinas
                </a>
                <a href="#Contato">
                    Contato
                </a>
            </div>
        </div>
    )
}