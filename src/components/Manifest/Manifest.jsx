import logo  from "../../assets/logo-go-fair-agro.png";
import pdf  from "../../assets/manifesto.pdf";
import "./manifest.css";

export const Manifest = () => {
    return (
        <div id="Manifesto" className="manifestContainer">
                <h3>SOBRE O</h3>
                <h2>Manifesto</h2>
                <p id="manifestP">O Escritório de Apoio de Coordenação Rede GO FAIR Brasil é um dos escritórios regionais da Rede GO FAIR Brasil e tem a responsabilidade de difundir, apoiar e coordenar as atividades preconizadas pela Rede para a adoção e implementação dos princípios FAIR em todo o território brasileiro.</p>
                {/* <img src={logo} alt="logo go fair agro brasil" /> */}
                <p id="manifestDescription">Acesse o manifesto aberto da rede de implementação temática Rede GO FAIR Agro Brasil</p>
                <a id="buttonDefault" href={pdf} download="manifesto">Manifesto GO FAIR Agro</a>
        </div>
    )
}