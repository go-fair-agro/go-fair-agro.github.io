import logo from "../../assets/logo-go-fair-agro.png"
import oficina1 from "../../assets/oficina1.png";
import oficina2 from "../../assets/oficina2.png";
import oficina3 from "../../assets/oficina3.png";
import oficina4 from "../../assets/oficina4.png";
import "./cycle.css";

export const Cycle = () => {
    return (
        <div id="Oficinas" className="cycleCotainer">
            <h1>Ciclo de oficinas</h1>
            <p>O ciclo de eventos voltado para a governança e gestão dos dados da pesquisa agropecuária realizados pela Rede GO FAIR Agro. Foram Quatro oficinas, precedidas por palestras de profissionais convidados e que abordaram temas como infraestrutura de repositórios, políticas e planos de gestão de dados, padrões de dados e metadados, modelo conceitual e interoperabilidade semântica. As oficinas aconteceram em formato virtual.</p>
            <div className="cycleOficinasContainer">
                <h1>Confira Mais</h1>
                <div className="cycleOficinasDeck">
                    <div className="cycleCard">
                        <p>Infraestrutura de Repositórios com Fátima Nunes Marques, Professora titular da Universidade de São Paulo.</p>
                        <img src={oficina1} alt="" />
                        <a href="https://www.youtube.com/watch?v=OyNUByzgP4A">Assistir oficina</a>
                        <a href="https://miro.com/app/board/uXjVPfr9Uw4=/">Acesse o Miro</a>
                        <a id="cycleDrive" href="https://drive.google.com/file/d/17ZJ2bnJst_LMiQOD4TvzuDuEnSRKTyKp/view?usp=share_link">Acessar a apresentação</a>
                    </div>
                    <div className="cycleCard">
                        <p>Padrões de Dados e Metadados. Tipologia de Dados com Dr. João Luiz Moreira, Professor Assistente da Services and Cyber-Security (SCS).</p>
                        <img src={oficina2} alt="" />
                        <a href="https://www.youtube.com/watch?v=QmvO9zk-vPs">Assistir oficina</a>
                        <a href="https://miro.com/app/board/uXjVPeZH5w4=/">Acesse o Miro</a>
                        <a id="cycleDrive" href="https://drive.google.com/file/d/1xNgCyOL1FiqyKQrxXADMEipAjuj6vtSA/view?usp=share_link">Acessar a apresentação</a>
                    </div>
                    <div className="cycleCard">
                        <p>Palestra Ontologia, ontologias e o “I” de FAIR com Giancarlo Guizzardi, Full Professor da Universidade de Twente.</p>
                        <img src={oficina3} alt="" />
                        <a href="https://www.youtube.com/watch?v=B_NbXSJWxgc">Assistir oficina</a>
                        <a href="https://miro.com/app/board/uXjVPdTesSE=/">Acesse o Miro</a>
                        <a id="cycleDrive" href="https://drive.google.com/file/d/1BfPt-6VSzO_iP18-armDZCPduSc1nSRI/view?usp=share_link">Acessar a apresentação</a>
                    </div>
                    <div className="cycleCard">
                        <p>Política e Plano de Gestão de Dados, Viviane Veiga</p>
                        <img src={oficina4} alt="" />
                        <a href="https://miro.com/app/board/uXjVPdTesSE=/">Acesse o Miro</a>
                        <a href="https://drive.google.com/file/d/1CIDrdIsyWbeqG3VxrlyBoZOOB1SZNJuz/view?usp=share_link">Acessar a apresentação</a>
                    </div>
                </div>
            </div>
        </div>
    );
}