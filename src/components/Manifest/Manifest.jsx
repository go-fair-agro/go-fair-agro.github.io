import logo  from "../../assets/logo-go-fair-agro.png";
import pdf  from "../../assets/manifesto.pdf";
import "./manifest.css";

export const Manifest = () => {
    return (
        <div id="Manifesto">
        <div className="questionarioContainer">
            <h2>Pesquisa em Dados Agropecuários</h2>
            <p>Esta pesquisa é uma iniciativa do GO FAIR Agro Brasil para identificar como ocorre a coleta, tratamento e armazenamento de dados na pesquisa agropecuária. A partir do resultado do survey teremos um diagnóstico das práticas de gestão de dados adotadas pelos pesquisadores. Este diagnóstico subsidiará a construção de diretrizes para o compartilhamento e reúso de dados entre as instituições agropecuárias</p>
            <a id="buttonDefault" href="/">Questionário GO FAIR Agro</a>
        </div>
        <div className="manifestContainer">
                <h3>SOBRE O</h3>
                <h2>Manifesto</h2>
                <p id="manifestP">O Escritório de Apoio de Coordenação Rede GO FAIR Brasil é um dos escritórios regionais da Rede GO FAIR Brasil e tem a responsabilidade de difundir, apoiar e coordenar as atividades preconizadas pela Rede para a adoção e implementação dos princípios FAIR em todo o território brasileiro.</p>
                {/* <img src={logo} alt="logo go fair agro brasil" /> */}
                <p id="manifestDescription">Acesse o manifesto aberto da rede de implementação temática Rede GO FAIR Agro Brasil</p>
                <a id="buttonDefault" href={pdf} download="manifesto">Manifesto GO FAIR Agro</a>
        </div>
        </div>
    )
}