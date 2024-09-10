import "./aboutUs.css";
import logo from "../../assets/go-fair.png";

export const AboutUs = () => {
    return(
        <div id="Rede" className="aboutUsContainer">
            <div className="aboutUsText">
                <div className="aboutUsRede">
                    <h3>SOBRE A </h3>
                    <h2>Rede GO FAIR</h2>
                    <p>GO-FAIR é uma iniciativa global que promove a implantação dos princípios FAIR nas ações de governança e de gestão de dados e de objetos digitais, a fim de torná-los localizáveis, acessíveis, interoperáveis e reutilizáveis (do inglês FAIR - Findable, Accessible, Interoperable, Reusable).</p>
                </div>
                <div className="aboutUsImage">
                    <img src={logo} alt="logo go fair agro brasil" />
                </div>
            </div>
            <div className="aboutUsMissao">
                <h2>NOSSA MISSÃO</h2>
                <p>A missão da Rede GO-FAIR Brasil Agro consiste em trabalhar de modo articulado e colaborativo para fomentar o compartilhamento e reuso dos dados produzidos no âmbito dos sistemas produtivos agropecuários e também aqueles oriundos de pesquisas em ciências agrárias, bem como a adoção dos princípios FAIR. </p>
                <p>Entre em nossa lista de discussão para para compartilhamento de informes, referências, eventos e outros assuntos de interesse da Rede GO FAIR Agro Brasil.</p>
                <a id="buttonGreen" target="blank" href="https://listas.rnp.br/mailman/listinfo/gofairbr-agro">Inscreva-se</a>
            </div>
        </div>
    );
}