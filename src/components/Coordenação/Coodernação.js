import React from "react";
import "./coordenação.css";
import embrapa from "../../images/logoEmbrepa.png";
import unipampa from "../../images/logoUnipampa.jpg";
import ufrrj from "../../images/logoUfrrj.png";
import usp from "../../images/logoUsp.png";
import ufrj from "../../images/logoUfrj.png";

export const Coordenação = () => {
    return (
        <div className="coordenaçãoContainer">
            <div className="textManifesto">
                <div className="textTitle">
                    <h1 style={{fontFamily: 'Archivo Black', fontSize: "400%"}}>Coordenação</h1>
                </div>
                <div className="coodernaçãoParceiros">
                    <a href="">
                        <img style={{width:"70%"}} src={embrapa} alt="embrapa" />
                    </a>
                    <a href="">
                        <img style={{width: "60%"}} src={unipampa} alt="unipampa" />
                    </a>
                    <a href="">
                        <img style={{width: "60%"}} src={ufrrj} alt="ufrrj" />
                    </a>
                    <a href="">
                        <img style={{width: "50%"}} src={usp} alt="usp" />
                    </a>
                    <a href="">
                        <img style={{width: "140%"}} src={ufrj} alt="ufrj" />
                    </a>
                </div>
                <p style={{fontSize: "150%", fontFamily: 'Archivo'}}>A Rede GO-FAIR Agro Brasil é coordenada pela Empresa Brasileira de Pesquisa Agropecuária (Embrapa) em gestão colegiada com a Universidade Federal Rural do Rio de Janeiro (UFRRJ), a Universidade de São Paulo (USP), a Universidade Federal do Pampa (Unipampa) e a Universidade Federal do Rio de Janeiro (UFRJ) com a possibilidade de ampliação de acordo com o engajamento de outras instituições e organizações.</p>
            </div>
        </div>
    )
}