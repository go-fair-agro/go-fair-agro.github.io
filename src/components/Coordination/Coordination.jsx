import "./coordination.css";
import embrapa from "../../assets/logoEmbrepa.png";
import unipampa from "../../assets/logoUnipampa.jpg";
import ufrrj from "../../assets/logoUfrrj.png";
import usp from "../../assets/logoUsp.png";
import ufrj from "../../assets/logoUfrj.png";
import mctic from "../../assets/logoMCTIC.jpeg"

export const Coordination = () =>{
    return (
        <div className="coordinationContainer">
            <h1>Coordenação</h1>
            <div className="coordinationImages">
                <a href="https://www.embrapa.br/">
                    <img id="embrapa" src={embrapa} alt="logo embrapa" />
                </a>
                <a href="https://www5.usp.br/">
                    <img id="usp" src={usp} alt="logo usp" />
                </a>
                <a href="https://unipampa.edu.br/portal/">
                    <img id="unipampa" src={unipampa} alt="logo unipampa" />
                </a>
                <a href="https://ufrj.br/">
                    <img id="ufrj" src={ufrj} alt="logo ufrj" />
                </a>
                <a href="https://portal.ufrrj.br/">
                    <img id="ufrrj" src={ufrrj} alt="logo ufrrj" />
                </a>
                <a href="https://www.gov.br/mcti/pt-br/">
                    <img id="mctic" src={mctic} alt="logo Ministério da Ciência, Tecnologia e Inovação" />
                </a>
            </div>
            <p>A Rede GO-FAIR Agro Brasil é coordenada pela Empresa Brasileira de Pesquisa Agropecuária (Embrapa) em gestão colegiada com a Universidade Federal Rural do Rio de Janeiro (UFRRJ), a Universidade de São Paulo (USP), a Universidade Federal do Pampa (Unipampa) e a Universidade Federal do Rio de Janeiro (UFRJ) com a possibilidade de ampliação de acordo com o engajamento de outras instituições e organizações.</p>
        </div>
    );
}