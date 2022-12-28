import React from "react";
import  "./ciclo.css";

export const Ciclo = () => {
    return (
        <div id="cicloDeOficinas" className="cicloContainer">
            <div className="textGoFair">
                <div className="textTitle">
                    <h1>Ciclo de oficinas</h1>
                </div>
                <p>O ciclo de eventos voltado para a governança e gestão dos dados da pesquisa agropecuária realizados pela Rede GO FAIR Agro. Foram Quatro oficinas, precedidas por palestras de profissionais convidados e que abordaram temas como infraestrutura de repositórios, políticas e planos de gestão de dados, padrões de dados e metadados, modelo conceitual e interoperabilidade semântica. As oficinas aconteceram em formato virtual.</p>
            </div>
            <div className="cicloOficinas">
                    <h3>Link das Oficinas</h3>
                    <a href="https://www.youtube.com/watch?v=_IJZHuJqTSM">12/04/2022 - Lançamento da Rede Temática GO FAIR Agro Brasil e 1ª Oficina de Trabalho</a>
                    <a href="https://www.youtube.com/watch?v=OyNUByzgP4A">19/08/2022 - Infra-estrutura de Repositórios com Fátima Nunes Marques, Professora titular da Universidade de São Paulo.</a>
                    <a href="https://www.youtube.com/watch?v=QmvO9zk-vPs">31/08/2022 - Padrões de Dados e Metadados. Tipologia de Dados com Dr. João Luiz Moreira, Professor Assistente da Services and Cyber-Security (SCS).</a>
                    <a href="https://www.youtube.com/watch?v=B_NbXSJWxgc">14/09/2022 - Palestra Ontologia, ontologias e o “I” de FAIR com Giancarlo Guizzardi, Full Professor da Universidade de Twente.</a>
                </div>
        </div>
    )
}
