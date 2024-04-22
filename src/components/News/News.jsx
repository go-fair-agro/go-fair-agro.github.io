import React from "react";
import pdf from "../../assets/23-10-17_OFAIRe_GO-FAIR-Agro-Brazil_Jonquet.pdf";
import "./news.css";
import Carousel from 'react-bootstrap/Carousel';

export const News = () => {
    return (
        <div id="Novidades" className="postContainer">
                <h1>Novidades</h1>
                <div className="postCarouselDesktop">
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <div className="postCarouselItem">
                                <Carousel.Caption>
                                    <div className="newCardDeck">

                                    <div className="newCard" style={{textAlign: "left"}}>
                                            <h2>O impacto das ontologias na interoperabilidade semântica para gestão de dados, informação e conhecimento.</h2>
                                            <p style={{marginTop: 0}}>A REDE GO FAIR Agro e a Comissão Permanente em Vocabulários Controlados, Agroterminologias e Agrossemântica da Embrapa (GTermos) convidam para a mesa-redonda "O impacto das ontologias na interoperabilidade semântica para gestão de dados, informação e conhecimento."</p>
                                            <p style={{marginTop: 0}}>Todos os interessados no tema podem participar. As inscrições estão abertar e o evento será presencial e híbrido.</p>
                                            <p style={{marginTop: 0}}><b>Evento presencial</b></p>
                                            <p style={{marginTop: 0}}>Local: Embrapa Sede, Bloco D, Sala Paule Jeanne. Parque Estaçção Biológica - PqEB, s/nº, Brasília, DF.</p>
                                            <a id="buttonGreenSmall" href="https://forms.gle/i8cPzQqTdP49bLf4A">Inscreva-se</a>
                                        </div>

                                        <div className="newCard">
                                            <h2>Palestra com Clement Jonquet: Agroportal - Repositório de Vocabulários e Ontologias para Agronomia</h2>
                                            <p style={{marginTop: 0}}>Estão abertas as inscrições para a palestra "FAIR DATA requires FAIR ONTOLOGIES, how do we do?" ministrada pelo professor doutor Clement Jonquet na próxima terça-feira, dia 17 de outubro. Todos os interessados no tema de construção, organização, disponibilização e uso de ontologias poderão tirar proveito da fala do especialista francês que discutirá na sua palestra as questões relacionadas aos princípios FAIR e à construção e organização de ontologias, por meio da apresentação do AgroPortal e OntoPortal. A palestra é gratuita e será on-line, em inglês, somente para inscritos.</p>
                                            {/* <a id="buttonGreenSmall" href="https://forms.gle/uY78KywEbQbnbAzc7">Inscreva-se</a> */}
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </div>
                            
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="postCarouselItem">
                                <Carousel.Caption>
                                    <div className="newCardDeck">
                                        <div className="newCard">
                                            <h2>Sucesso no Workshop SmartFood: Análise de Redes Lexicais para Agricultura Digital</h2>
                                            <p style={{marginTop: 0}}>Parabéns a todos! Nosso grupo de trabalho Ontologias teve mais uma conquista incrível. Um de nossos trabalhos foi aprovado no "Workshop on Controlled Vocabularies and Data platforms for Smart Food Systems (SmartFood)" com o título "Unveiling Knowledge Organization Systems' Artifacts for Digital Agriculture with Lexical Network Analysis". Isso demonstra nosso comprometimento com a pesquisa e a inovação em agricultura digital. Continuamos avançando e contribuindo para o desenvolvimento do campo. Parabéns a todos os envolvidos por mais essa realização!</p>
                                        </div>

                                        <div className="newCard">
                                            <h2>Aniversário de 25 Anos da Scielo e Sessão Especial do GO FAIR Brasil</h2>
                                            <p style={{marginTop: 0}}>Não poderíamos deixar passar em branco! Na próxima semana, celebraremos o aniversário de 25 anos da Scielo em São Paulo. Vale destacar que a Rede GO FAIR Brasil nasceu no aniversário de 20 anos da Scielo, e este ano não será diferente. Teremos uma sessão especial dedicada ao GO FAIR Brasil. Embora tenhamos sido informados em cima da hora e ainda não tenhamos todos os detalhes, parece que esta sessão será exclusiva para os participantes do evento e exigirá inscrição paga. </p>
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="postCarouselMobile">
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <div className="postCarouselItem">
                                <Carousel.Caption>
                                    <div className="newCardDeck">
                                        <div className="newCard" style={{textAlign: "left"}}>
                                            <h2>O impacto das ontologias na interoperabilidade semântica para gestão de dados, informação e conhecimento.</h2>
                                            <p style={{marginTop: 0}}>A REDE GO FAIR Agro e a Comissão Permanente em Vocabulários Controlados, Agroterminologias e Agrossemântica da Embrapa (GTermos) convidam para a mesa-redonda "O impacto das ontologias na interoperabilidade semântica para gestão de dados, informação e conhecimento."</p>
                                            <p style={{marginTop: 0}}>Todos os interessados no tema podem participar. As inscrições estão abertar e o evento será presencial e híbrido.</p>
                                            <p style={{marginTop: 0}}><b>Evento presencial</b></p>
                                            <p style={{marginTop: 0}}>Local: Embrapa Sede, Bloco D, Sala Paule Jeanne. Parque Estaçção Biológica - PqEB, s/nº, Brasília, DF.</p>
                                            <a id="buttonGreenSmall" href="https://forms.gle/i8cPzQqTdP49bLf4A">Inscreva-se</a>
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="postCarouselItem">
                                <Carousel.Caption>
                                    <div className="newCardDeck">
                                        <div className="newCard">
                                            <h2>Palestra com Clement Jonquet: Agroportal - Repositório de Vocabulários e Ontologias para Agronomia</h2>
                                            <p style={{marginTop: 0}}>Estão abertas as inscrições para a palestra "FAIR DATA requires FAIR ONTOLOGIES, how do we do?" ministrada pelo professor doutor Clement Jonquet na próxima terça-feira, dia 17 de outubro. Todos os interessados no tema de construção, organização, disponibilização e uso de ontologias poderão tirar proveito da fala do especialista francês que discutirá na sua palestra as questões relacionadas aos princípios FAIR e à construção e organização de ontologias, por meio da apresentação do AgroPortal e OntoPortal. A palestra é gratuita e será on-line, em inglês, somente para inscritos.</p>
                                            {/* <a id="buttonGreenSmall" href="https://forms.gle/uY78KywEbQbnbAzc7">Inscreva-se</a> */}
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="postCarouselItem">
                                <Carousel.Caption>
                                    <div className="newCardDeck">
                                        <div className="newCard">
                                            <h2>Sucesso no Workshop SmartFood: Análise de Redes Lexicais para Agricultura Digital</h2>
                                            <p style={{marginTop: 0}}>Parabéns a todos! Nosso grupo de trabalho Ontologias teve mais uma conquista incrível. Um de nossos trabalhos foi aprovado no "Workshop on Controlled Vocabularies and Data platforms for Smart Food Systems (SmartFood)" com o título "Unveiling Knowledge Organization Systems' Artifacts for Digital Agriculture with Lexical Network Analysis". Isso demonstra nosso comprometimento com a pesquisa e a inovação em agricultura digital. Continuamos avançando e contribuindo para o desenvolvimento do campo. Parabéns a todos os envolvidos por mais essa realização!</p>
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="postCarouselItem">
                                <Carousel.Caption>
                                    <div className="newCardDeck">
                                        <div className="newCard">
                                            <h2>Aniversário de 25 Anos da Scielo e Sessão Especial do GO FAIR Brasil</h2>
                                            <p style={{marginTop: 0}}>Não poderíamos deixar passar em branco! Na próxima semana, celebraremos o aniversário de 25 anos da Scielo em São Paulo. Vale destacar que a Rede GO FAIR Brasil nasceu no aniversário de 20 anos da Scielo, e este ano não será diferente. Teremos uma sessão especial dedicada ao GO FAIR Brasil. Embora tenhamos sido informados em cima da hora e ainda não tenhamos todos os detalhes, parece que esta sessão será exclusiva para os participantes do evento e exigirá inscrição paga. </p>
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
        </div>
    );
}

