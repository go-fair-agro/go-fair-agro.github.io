import palestra1 from "../../assets/palestra1.jpeg";
import palestra2 from "../../assets/palestra2.png";
import palestra3 from "../../assets/palestra3.png";
import palestra4 from "../../assets/palestra4.png";
import palestra5 from "../../assets/palestra5.png";
import palestra6 from "../../assets/mesa_redonda_ontologias.png";


import ytb from "../../assets/ytb.png";
import pdfPng from "../../assets/download.png";
import pdf1 from "../../assets/23-10-17_OFAIRe_GO-FAIR-Agro-Brazil_Jonquet.pdf";
import pdf2 from "../../assets/PalestraEmbrapa-Fernanda-Farinelli.pdf";
import pdf3 from "../../assets/24-04-24_Embrapa_OntoPortal_Jonquet.pdf";
import pdf4 from "../../assets/2024-10-17-Tools_to_characterize_FAIR_and_measure_FAIRness.pdf";
import pdf5 from "../../assets/esquemas_de_metadados_fair.pdf";
import pdf6 from "../../assets/mesa_redonda_ontologias.pdf";

// import pdf5 from "../../assets/esquemas_de_metadados_fair.pdf";



import "./lecture.css";

export const Lecture = () => {
    return (
        <div id="Palestras" className="cycleCotainer">
            <h1>Palestras</h1>
            <div className="cycleOficinasContainer">
                <div className="cycleOficinasDeck">

                    <div className="cycleCard">
                        <p id="cycleCardTitle">Mesa-redonda Ontologias: o que são e como aplicar, com Patricia Ferreira da Silva e Mara Abel (2025)</p>
                        <img src={palestra6} alt="" />
                        <p>Acesse o material:</p>
                        <div className="cardDeckLinks">
                            <a target="blank" href="https://www.youtube.com/watch?v=-3tjlO0Z4wI&t=4933s">
                                <img id="linkYtb" src={ytb} alt="" />
                                <p>Youtube</p>
                            </a>
                            <a href={pdf6} download>
                                <img id="linkPDF" src={pdfPng} alt="" />
                                <p>PDF</p>
                            </a>
                        </div>
                    </div>


                    <div className="cycleCard">
                        <p id="cycleCardTitle">Palestra com Filipi Miranda Soares: Esquemas de Metadados FAIR, fundamentos e aplicações (2025)</p>
                        <img src={palestra5} alt="" />
                        <p>Acesse o material:</p>
                        <div className="cardDeckLinks">
                            <a target="blank" href="https://www.youtube.com/watch?v=8_dkfFHV0JE">
                                <img id="linkYtb" src={ytb} alt="" />
                                <p>Youtube</p>
                            </a>
                            <a href={pdf5} download>
                                <img id="linkPDF" src={pdfPng} alt="" />
                                <p>PDF</p>
                            </a>
                        </div>
                    </div>

                    <div className="cycleCard">
                        <p id="cycleCardTitle">Palestra com Leonardo Guerreiro Azevedo: Ferramentas para caracterizar e medir a adequação aos princípios FAIR (2024)</p>
                        <img src={palestra4} alt="" />
                        <p>Acesse o material:</p>
                        <div className="cardDeckLinks">
                            <a target="blank" href="https://www.youtube.com/watch?v=dinb7D717-k">
                                <img id="linkYtb" src={ytb} alt="" />
                                <p>Youtube</p>
                            </a>
                            <a href={pdf4} download>
                                <img id="linkPDF" src={pdfPng} alt="" />
                                <p>PDF</p>
                            </a>
                        </div>
                    </div>


                    <div className="cycleCard">
                        <p id="cycleCardTitle">Palestra com Clement Jonquet: Ontology Repositories and Semantic Artefact Catalogues with the Ontoportal Technology (2024)</p>
                        <img src={palestra3} alt="" />
                        <p>Acesse o material:</p>
                        <div className="cardDeckLinks">
                            <a target="blank" href="https://www.youtube.com/watch?v=wKxnCkO0uVw">
                                <img id="linkYtb" src={ytb} alt="" />
                                <p>Youtube</p>
                            </a>
                            <a href={pdf3} download>
                                <img id="linkPDF" src={pdfPng} alt="" />
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
                            <a href={pdf2} download>
                                <img id="linkPDF" src={pdfPng} alt="" />
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
                            <a href={pdf1} download>
                                <img id="linkPDF" src={pdfPng} alt="" />
                                <p>PDF</p>
                            </a>
                        </div>
                    </div>



                    <div id="palestraCard">
                        <p style={{ color: "#2D6D2C" }} id="cycleCardTitle">Clique nos links abaixo para conferir mais palestras:</p>
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