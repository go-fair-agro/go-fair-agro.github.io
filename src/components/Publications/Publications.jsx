import React from "react";
import "./publications.css";
import logo from "../../assets/go-fair.png";
import post1 from "../../assets/post1.png";
import post2 from "../../assets/post3.png";
import post3 from "../../assets/post4.png";
import post5 from "../../assets/post5.png";
import pdf  from "../../assets/digital_agriculture_with_lexical_network_analysis.pdf";
import pdf2  from "../../assets/Desdobramentos-implementacao-SBIAgro-2023.pdf";
import pdf3  from "../../assets/Planos-de-gestão-de-dados.pdf";

export const Publications = () => {
    return (
        <div id="Publicações" className="postContainer">
                <h1>Publicações</h1>

                <div className="postCardDeck">
                    <div className="postCard">
                        <img style={{width: "50%", alignSelf: "center"}} src={post1} alt="postImage" />
                        <h2>Implantação da Rede Temática GO-FAIR Agro Brasil: Primeiros Passos</h2>
                        <p style={{marginTop: 0}}>O presente trabalho tem o objetivo de apresentar os esforços que estão em curso para a estruturação da Rede de Implementação Temática GO-FAIR Brasil Agro, sua relação com as iniciativas GO-FAIR Internacional e GO-FAIR Brasil.</p>
                        <a id="buttonGreen" href="https://ainfo.cnptia.embrapa.br/digital/bitstream/item/228163/1/PL-Implantacao-Rede-GO-FAIR-SBIAgro-2021.pdf">Ler publicação</a>
                    </div>

                    <div className="postCard">
                        <img style={{width: "50%", alignSelf: "center"}} src={logo} alt="postImage" />
                        <h2>Rumo à rede de implantação GO FAIR 'Agro' Brasil: a experiência de uma organização de PD&I na implantação dos princípios FAIR.</h2>
                        <p style={{marginTop: 0}}>Esse trabalho descreve os esforços que vêm sendo realizados na Embrapa para implantar a gestão de dados de pesquisa fundamentada nos princípios norteadores FAIR e procurou enquadrar as medidas mapeadas de acordo com os pilares da iniciativa GO FAIR.</p>
                        <a id="buttonGreen"  href="https://ainfo.cnptia.embrapa.br/digital/bitstream/item/227340/1/PL-Rumo-a-rede-de-implantacao-2021.pdf">Ler publicação</a>
                    </div>

                    <div className="postCard">
                        <img style={{width: "50%", alignSelf: "center"}} src={post3} alt="postImage" />
                        <h2>Unveiling Knowledge Organization Systems’ Artifacts for Digital Agriculture with Lexical Network Analysis.</h2>
                        <p style={{marginTop: 0}}>O artigo apresenta um estudo sobre modelagem de conhecimento em sistemas agrícolas, analisando 278 artigos. Utilizando ferramentas de análise linguística, identificou-se termos centrais e clusters temáticos que destacam a interação entre tecnologia, semântica e desafios agrícolas. Esse estudo contribui para entender melhor o papel dos Sistemas de Organização do Conhecimento na Agricultura Digital.</p>
                        <a id="buttonGreen"  href={pdf} download="Unveiling Knowledge Organization Systems’ Artifacts for Digital Agriculture with Lexical Network Analysis">Ler publicação</a>
                    </div>

                    <div className="postCard">
                        <img style={{width: "50%", alignSelf: "center"}} src={post2} alt="postImage" />
                        <h2>Desdobramentos da Implementação da Rede GO FAIR Agro Brasil no Biênio 2021-2023.</h2>
                        <p style={{marginTop: 0}}>Este trabalho tem o objetivo de apresentar para a comunidade brasileira os trabalhos desenvolvidos no biênio 2021-2023 para a implantação da Rede de Implementação Temática GO FAIR Agro Brasil. São destacadas as ações interinstitucionais promovidas para disseminar conhecimentos sobre o compartilhamento e o reúso de dados de pesquisa em ciências agrárias apoiados nos princípios FAIR.</p>
                        <a id="buttonGreen"  href={pdf2} download="Desdobramentos da Implementação da Rede GO FAIR Agro Brasil no Biênio 2021-2023">Ler publicação</a>
                    </div>

                    <div className="postCard">
                        <img style={{width: "50%", alignSelf: "center"}} src={post5} alt="postImage" />
                        <h2>Planos de gestão de dados acionáveis por máquina alinhados aos princípios FAIR para o Laboratório Multiusuário de Bioinformática da Embrapa.</h2>
                        <p style={{marginTop: 0}}>Esta publicação traz uma contribuição efetiva para comunidade de dados ômicos da Embrapa ao apresentar modelos de planos de gestão de dados acionáveis por máquina, alinhados aos princípios FAIR, desenvolvidos pelo Laboratório Multiusuário de Bioinformática da Embrapa.</p>
                        <a id="buttonGreen"  href={pdf3} download="Planos de gestão de dados acionáveis por máquina alinhados aos princípios FAIR para o Laboratório Multiusuário de Bioinformática da Embrapa">Ler publicação</a>
                    </div>
                </div>
        </div>
    );
}