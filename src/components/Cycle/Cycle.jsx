import logo from "../../assets/logo-go-fair-agro.png"
import oficina1 from "../../assets/oficina1.png";
import oficina2 from "../../assets/oficina2.png";
import oficina3 from "../../assets/oficina3.png";
import oficina4 from "../../assets/oficina4.png";
import oficina5 from "../../assets/oficina4.jpeg";
import ytb from "../../assets/ytb.png";
import miro from "../../assets/miro.png";
import pdf from "../../assets/download.png";
import pdf2 from "../../assets/23-10-17_OFAIRe_GO-FAIR-Agro-Brazil_Jonquet.pdf";


import "./cycle.css";

export const Cycle = () => {
    return (
        <div id="Oficinas" className="cycleCotainer">
            <h1>Ciclo de oficinas 2022</h1>
            <p>O ciclo de eventos voltado para a governança e gestão dos dados da pesquisa agropecuária realizado pela Rede GO FAIR Agro. Foram várias oficinas, precedidas por palestras de profissionais convidados, abordando temas como infraestrutura de repositórios, políticas e planos de gestão de dados, padrões de dados e metadados, modelo conceitual e interoperabilidade semântica. As oficinas aconteceram em formato virtual.</p>
            <div className="cycleOficinasContainer">
                <div className="cycleOficinasDeck">
                    <div className="cycleCard">
                        <p id="cycleCardTitle">Infraestrutura de Repositórios com Fátima Nunes Marques, Professora titular da Universidade de São Paulo.</p>
                        <img src={oficina1} alt="" />
                        <p>Acesse o material:</p>
                        <div className="cardDeckLinks">
                            <a href="https://www.youtube.com/watch?v=OyNUByzgP4A">
                                <img id="linkYtb" src={ytb} alt="" />
                                <p>Youtube</p>
                            </a>
                            <a href="https://miro.com/app/board/uXjVPfr9Uw4=/">
                                <img id="linkMiro"  src={miro} alt="" />
                                <p>Miro</p>
                            </a>
                            <a href="https://drive.google.com/file/d/17ZJ2bnJst_LMiQOD4TvzuDuEnSRKTyKp/view?usp=share_link">
                                <img id="linkPDF"  src={pdf} alt="" />
                                <p>PDF</p>
                            </a>
                        </div>
                    </div>
                    <div className="cycleCard">
                        <p id="cycleCardTitle">Padrões de Dados e Metadados. Tipologia de Dados com Dr. João Luiz Moreira, Professor Assistente da Services and Cyber-Security (SCS).</p>
                        <img src={oficina2} alt="" />
                        <p>Acesse o material:</p>
                        <div className="cardDeckLinks">
                            <a href="https://www.youtube.com/watch?v=QmvO9zk-vPs">
                                <img id="linkYtb" src={ytb} alt="" />
                                <p>Youtube</p>
                            </a>
                            <a href="https://miro.com/app/board/uXjVPfr9Uw4=/">
                                <img id="linkMiro"  src={miro} alt="" />
                                <p>Miro</p>
                            </a>
                            <a href="https://drive.google.com/file/d/1xNgCyOL1FiqyKQrxXADMEipAjuj6vtSA/view?usp=share_link">
                                <img id="linkPDF"  src={pdf} alt="" />
                                <p>PDF</p>
                            </a>
                        </div>

                    </div>
                    <div className="cycleCard">
                        <p id="cycleCardTitle">Palestra Ontologia, ontologias e o “I” de FAIR com Giancarlo Guizzardi, Full Professor da Universidade de Twente.</p>
                        <img src={oficina3} alt="" />
                        <p>Acesse o material:</p>
                        <div className="cardDeckLinks">
                            <a href="https://www.youtube.com/watch?v=B_NbXSJWxgc">
                                <img id="linkYtb" src={ytb} alt="" />
                                <p>Youtube</p>
                            </a>
                            <a href="https://miro.com/app/board/uXjVPdTesSE=/">
                                <img id="linkMiro"  src={miro} alt="" />
                                <p>Miro</p>
                            </a>
                            <a href="https://drive.google.com/file/d/1BfPt-6VSzO_iP18-armDZCPduSc1nSRI/view?usp=share_link">
                                <img id="linkPDF"  src={pdf} alt="" />
                                <p>PDF</p>
                            </a>
                        </div>
                    </div>
                    <div className="cycleCard">
                        <p id="cycleCardTitle">Política e Plano de Gestão de Dados, Viviane Veiga</p>
                        <img src={oficina4} alt="" />
                        <p>Acesse o material:</p>
                        <div className="cardDeckLinks">
                            <a href="https://miro.com/app/board/uXjVPdTesSE=/">
                                <img id="linkMiro"  src={miro} alt="" />
                                <p>Miro</p>
                            </a>
                            <a href="https://drive.google.com/file/d/1CIDrdIsyWbeqG3VxrlyBoZOOB1SZNJuz/view?usp=share_link">
                                <img id="linkPDF"  src={pdf} alt="" />
                                <p>PDF</p>
                            </a>
                        </div>
                    </div>
                </div>
                <hr style={{width: "100%", border: "3px solid #E3BC26", opacity: 1.0}}/>
                <h1>Novas apresentações</h1>
                <div className="cycleOficinasDeck">
                <div className="cycleCard">
                        <p id="cycleCardTitle">Palestra com Clement Jonquet: Agroportal - Repositório de Vocabulários e Ontologias para Agronomia (2023)</p>
                        <img src={oficina5} alt="" />
                        <p>Acesse o material:</p>
                        <div className="cardDeckLinks">
                            <a href="https://youtu.be/PT9LWAom5qw">
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