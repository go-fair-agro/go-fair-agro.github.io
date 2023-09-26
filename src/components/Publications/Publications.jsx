import React from "react";
import "./publications.css";
import logo from "../../assets/go-fair.png";
import post1 from "../../assets/post1.png";

export const Publications = () => {
    return (
        <div id="Publicações" className="postContainer">
                <h1>Publicações</h1>

                <div className="postCardDeck">
                    <div className="postCard">
                        <img style={{width: "50%", alignSelf: "center"}} src={post1} alt="postImage" />
                        <h2>Implantação da Rede Temática GO-FAIR Agro Brasil: Primeiros Passos</h2>
                        <p style={{marginTop: 0}}>O presente trabalho tem o objetivo de apresentar os esforços que estão em curso para a estruturação da Rede de Implementação Temática GO-FAIR Brasil Agro, sua relação com as iniciativas GO-FAIR Internacional e GO-FAIR Brasil. (Talvez até aqui com …)</p>
                        <a id="buttonGreen" href="https://ainfo.cnptia.embrapa.br/digital/bitstream/item/228163/1/PL-Implantacao-Rede-GO-FAIR-SBIAgro-2021.pdf">Ler publicação</a>
                    </div>

                    <div className="postCard">
                        <img style={{width: "50%", alignSelf: "center"}} src={logo} alt="postImage" />
                        <h2>Rumo à rede de implantação GO FAIR 'Agro' Brasil: a experiência de uma organização de PD&I na implantação dos princípios FAIR.</h2>
                        <p style={{marginTop: 0}}>Esse trabalho descreve os esforços que vêm sendo realizados na Embrapa para implantar a gestão de dados de pesquisa fundamentada nos princípios norteadores FAIR e procurou enquadrar as medidas mapeadas de acordo com os pilares da iniciativa GO FAIR.</p>
                        <a id="buttonGreen"  href="https://ainfo.cnptia.embrapa.br/digital/bitstream/item/227340/1/PL-Rumo-a-rede-de-implantacao-2021.pdf">Ler publicação</a>
                    </div>
                </div>
        </div>
    );
}