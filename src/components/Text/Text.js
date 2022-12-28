import React from "react";
import  "./text.css";
import pdf from "../../images/manifesto.pdf";
import logo from "../../images/go-fair-brasil-agro-logo.svg"

export const Text = () => {
    return (
        <div className="textContainer">
            <div className="textGoFair">
                <div className="textTitle">
                    <h1>GO FAIR AGRO</h1>
                </div>
                <p>A Rede de Implementação Temática  GO FAIR Agro será responsável por elaborar estratégias e mobilizar parcerias para a implantação dos princípios FAIR no universo dos dados da pesquisa agropecuária brasileira, ou seja, desenvolver metodologias e soluções para que os dados, que hoje se encontram dispersos, sejam interoperáveis do ponto de vista tecnológico e semântico, respeitando as especificidades dos diferentes domínios do conhecimento agropecuário e fomentando assim a pesquisa e a inovação intensiva em dados.</p>
                <p>A Rede GO-FAIR Agro Brasil é uma rede de implementação temática que se propõe a fortalecer a disseminação dos princípios FAIR no campo das ciências agrárias.</p>
            </div>

            <div className="textManifesto">
                <div className="textTitle">
                    <h1>Manifesto</h1>
                </div>
                <p>O Escritório de Apoio de Coordenação GO-FAIR Brasil é um dos escritórios regionais de apoio e coordenação da rede GO-FAIR e tem a responsabilidade de difundir, apoiar e coordenar as atividades relacionadas à adoção da estratégia de implementação dos princípios FAIR definida pela iniciativa GO-FAIR em todo o território brasileiro.</p>
                <img src={logo} style={{width: "20%"}} alt="manifesto"/>
                <p style={{color: "#9D9D9D"}}>Acesse o manifesto aberto da rede de implementação temática go-fair agro brasil</p>
                <a href={pdf} download="manifesto"><button id="dowloadManifesto">Baixar o manifesto em pdf</button></a>
            </div>

        </div>
    )
}