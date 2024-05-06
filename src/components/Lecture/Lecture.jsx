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
                </div>
            </div>
        </div>
    );
}