import React from "react";
import  "./video.css";

export const Video = () => {
    return (
        <div id="videoContainer">
            <div className="backgroundVideo">
                <p style={{color: "white", textAlign: "center"}}>Lançamento da Rede Temática GO FAIR Agro Brasil e 1ª Oficina de Trabalho, realizada em 12/04/2022</p>
                <iframe
                    id="videoYtb"
                    src="https://www.youtube.com/embed/_IJZHuJqTSM"
                    width="560" height="315" 
                    frameborder="0"
                    allowfullscreen>
                </iframe>          
            </div>

            <div className="textVideo">
                <div id="textTitleVideo">
                    <h1>Lançamento</h1>
                    </div>
                <p>Aconteceu no dia 12 de abril de 2022, às 9h, o evento on-line de lançamento da Rede GO-FAIR Agro Brasil, iniciativa para promover a governança e a gestão de dados de pesquisa em ciências agrárias. A rede faz parte de um movimento internacional e visa propor estratégias e mobilizar parcerias para fomentar o compartilhamento e reúso dos dados produzidos no âmbito dos sistemas produtivos agropecuários e também aqueles oriundos de pesquisas em ciências agrárias, apoiados nos princípios FAIR (encontráveis, acessíveis, interoperáveis e reusáveis, na tradução do inglês). </p>
            </div>
        </div>
    )
}