import palestra1 from "../../assets/palestra1.jpeg";
import palestra2 from "../../assets/palestra2.png";
import palestra3 from "../../assets/palestra3.png";
import ytb from "../../assets/ytb.png";
import pdf from "../../assets/download.png";
import pdf2 from "../../assets/23-10-17_OFAIRe_GO-FAIR-Agro-Brazil_Jonquet.pdf";
import pdf3 from "../../assets/PalestraEmbrapa-Fernanda-Farinelli.pdf";
import pdf4 from "../../assets/24-04-24_Embrapa_OntoPortal_Jonquet.pdf";


import "./lecture.css";

export const Lecture = () => {
    return (
        <div id="Palestras" className="cycleCotainer">
            <h1>Palestras</h1>
            <div className="cycleOficinasContainer">
                <div className="cycleOficinasDeck">


                <div className="cycleCard">
                        <p id="cycleCardTitle">Palestra com Clement Jonquet: Ontology Repositories and Semantic Artefact Catalogues with the Ontoportal Technology (2024)</p>
                        <img src={palestra3} alt="" />
                        <p>Acesse o material:</p>
                        <div className="cardDeckLinks">
                            <a target="blank" href="https://www.youtube.com/watch?v=wKxnCkO0uVw">
                                <img id="linkYtb" src={ytb} alt="" />
                                <p>Youtube</p>
                            </a>
                            <a href={pdf4} download>
                                <img id="linkPDF"  src={pdf} alt="" />
                                <p>PDF</p>
                            </a>
                        </div>
                    </div>


                <div className="cycleCard">
                        <p id="cycleCardTitle">Palestra com Fernanda Farinelli: Conectando Mundos - Desafios Semânticos, Interoperabilidade e Ontologias de Domínio (2024)</p>
                        <img src={palestra2} alt="" />
                        <p>Acesse o material:</p>
                        <div className="cardDeckLinks">
                            <a target="blank" href="https://www.youtube.com/watch?v=wKxnCkO0uVw">
                                <img id="linkYtb" src={ytb} alt="" />
                                <p>Youtube</p>
                            </a>
                            <a href={pdf3} download>
                                <img id="linkPDF"  src={pdf} alt="" />
                                <p>PDF</p>
                            </a>
                        </div>
                    </div>

                    <div className="cycleCard">
                        <p id="cycleCardTitle">Palestra com Clement Jonquet: Agroportal - Repositório de Vocabulários e Ontologias para Agronomia (2023)</p>
                        <img src={palestra1} alt="" />
                        <p>Acesse o material:</p>
                        <div className="cardDeckLinks">
                            <a target="blank" href="https://youtu.be/PT9LWAom5qw">
                                <img id="linkYtb" src={ytb} alt="" />
                                <p>Youtube</p>
                            </a>
                            <a href={pdf2} download>
                                <img id="linkPDF"  src={pdf} alt="" />
                                <p>PDF</p>
                            </a>
                        </div>
                    </div>
                    
                    

                    <div id="palestraCard">
                        <p style={{color: "#2D6D2C"}} id="cycleCardTitle">Clique nos links abaixo para conferir mais palestras:</p>
                        <a target="blank" href="https://drive.google.com/file/d/1eAwKKLoillH0BnFzQC2y5leC-DbwFa2n/view?usp=sharing" id="linkPalestras">O Processo de Construção da Política de Governança de Dados, Informação e Conhecimento da Embrapa</a>
                        <a target="blank" href="https://drive.google.com/file/d/1Re3OZHgJXrEnhyek0coG1mAYaKlmiUAk/view?usp=sharing" id="linkPalestras">Plataformas para Criação de Planos de Gestão de Dados Usando os Princípios FAIR</a>
                        <a target="blank" href="https://drive.google.com/file/d/1i5FkAPpVD9baQkUThxNB0yCRMs2IjlvN/view?usp=sharing" id="linkPalestras">Planos de Gestão de Dados Acionáveis por Máquina Alinhados aos Princípios FAIR no LMB da Embrapa </a>
                        <a target="blank" href="https://drive.google.com/file/d/1Zitce4YNc0_OUYiYxtEQ16RIyqui0v9W/view?usp=sharing" id="linkPalestras">Gestão de Dados Científicos: Desafios e Estratégias</a>
                    </div>

                </div>
            </div>
        </div>
    );
}