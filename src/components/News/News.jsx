import React from "react";
import pdf from "../../assets/GO_FAIR_Agro_2024.pdf";
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

                                <div className="newCard">
                                        <h2>Inscreva-se já: Programação Especial de Maio sobre Princípios FAIR</h2>
                                        <p style={{ marginTop: 0 }}>
                                            A Rede GO FAIR Agro Brasil promove encontros on-line sobre a aplicação prática dos princípios FAIR em dados. Participe do seminário sobre esquemas de metadados com Filipi Soares (09/05) e da mesa-redonda sobre ontologias com Mara Abel e Patrícia Silva (15/05). Evento gratuito e aberto!
                                        </p>
                                        <a id="buttonGreenSmall" href="https://forms.gle/5nfTE8p5UcWm9KQ97" target="_blank" rel="noopener noreferrer">Inscreva-se</a>
                                        <p id="dateNews"><strong>30/04/2025</strong></p>
                                    </div>

                                    <div className="newCard">
                                        <h2>Resumo das Ações Realizadas pela Rede GO FAIR Agro Brasil em 2024</h2>
                                        <p style={{ marginTop: 0 }}>A Rede GO FAIR Agro Brasil apresentou suas principais ações ao longo de 2024 em diversos eventos. Confira o resumo completo das atividades realizadas pelos Grupos de Trabalho e as apresentações feitas em eventos importantes.</p>
                                        <a href={pdf} download id="buttonGreenSmall" >Saiba mais</a>
                                        <p id="dateNews"><strong>02/04/2025</strong></p>
                                    </div>
    
                                </div>

                            </Carousel.Caption>
                        </div>

                    </Carousel.Item>
                    {/* 
                    <Carousel.Item>
                        <div className="postCarouselItem">
                            <Carousel.Caption>
                                <div className="newCardDeck">

                                    <div className="newCard">
                                        <h2>Sucesso no Workshop SmartFood: Análise de Redes Lexicais para Agricultura Digital</h2>
                                        <p style={{ marginTop: 0 }}>Parabéns a todos! Nosso grupo de trabalho Ontologias teve mais uma conquista incrível. Um de nossos trabalhos foi aprovado no "Workshop on Controlled Vocabularies and Data platforms for Smart Food Systems (SmartFood)" com o título "Unveiling Knowledge Organization Systems' Artifacts for Digital Agriculture with Lexical Network Analysis". Isso demonstra nosso comprometimento com a pesquisa e a inovação em agricultura digital. Continuamos avançando e contribuindo para o desenvolvimento do campo. Parabéns a todos os envolvidos por mais essa realização!</p>
                                    </div>

                                    <div className="newCard">
                                        <h2>Aniversário de 25 Anos da Scielo e Sessão Especial do GO FAIR Brasil</h2>
                                        <p style={{ marginTop: 0 }}>Não poderíamos deixar passar em branco! Na próxima semana, celebraremos o aniversário de 25 anos da Scielo em São Paulo. Vale destacar que a Rede GO FAIR Brasil nasceu no aniversário de 20 anos da Scielo, e este ano não será diferente. Teremos uma sessão especial dedicada ao GO FAIR Brasil. Embora tenhamos sido informados em cima da hora e ainda não tenhamos todos os detalhes, parece que esta sessão será exclusiva para os participantes do evento e exigirá inscrição paga. </p>
                                    </div>
                                </div>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item> */}
                </Carousel>
            </div>
            <div className="postCarouselMobile">
                <Carousel data-bs-theme="dark">

                    <Carousel.Item>
                        <div className="postCarouselItem">
                            <Carousel.Caption>
                                <div className="newCardDeck">
                                    <div className="newCard">
                                        <h2>Inscreva-se já: Programação Especial de Maio sobre Princípios FAIR</h2>
                                        <p style={{ marginTop: 0 }}>
                                            A Rede GO FAIR Agro Brasil promove encontros on-line sobre a aplicação prática dos princípios FAIR em dados. Participe do seminário sobre esquemas de metadados com Filipi Soares (09/05) e da mesa-redonda sobre ontologias com Mara Abel e Patrícia Silva (15/05). Evento gratuito e aberto!
                                        </p>
                                        <a id="buttonGreenSmall" href="https://forms.gle/5nfTE8p5UcWm9KQ97" target="_blank" rel="noopener noreferrer">Inscreva-se</a>
                                        <p id="dateNews"><strong>30/04/2025</strong></p>
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
                                        <h2>Resumo das Ações Realizadas pela Rede GO FAIR Agro Brasil em 2024</h2>
                                        <p style={{ marginTop: 0 }}>A Rede GO FAIR Agro Brasil apresentou suas principais ações ao longo de 2024 em diversos eventos. Confira o resumo completo das atividades realizadas pelos Grupos de Trabalho e as apresentações feitas em eventos importantes.</p>
                                        <a href={pdf} download id="buttonGreenSmall" >Saiba mais</a>
                                        <p id="dateNews"><strong>02/04/2025</strong></p>
                                    </div>

                                </div>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>


                    {/* <Carousel.Item>
                        <div className="postCarouselItem">
                            <Carousel.Caption>
                                <div className="newCardDeck">
                                    <div className="newCard">
                                        <h2>Sucesso no Workshop SmartFood: Análise de Redes Lexicais para Agricultura Digital</h2>
                                        <p style={{ marginTop: 0 }}>Parabéns a todos! Nosso grupo de trabalho Ontologias teve mais uma conquista incrível. Um de nossos trabalhos foi aprovado no "Workshop on Controlled Vocabularies and Data platforms for Smart Food Systems (SmartFood)" com o título "Unveiling Knowledge Organization Systems' Artifacts for Digital Agriculture with Lexical Network Analysis". Isso demonstra nosso comprometimento com a pesquisa e a inovação em agricultura digital. Continuamos avançando e contribuindo para o desenvolvimento do campo. Parabéns a todos os envolvidos por mais essa realização!</p>
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
                                        <p style={{ marginTop: 0 }}>Não poderíamos deixar passar em branco! Na próxima semana, celebraremos o aniversário de 25 anos da Scielo em São Paulo. Vale destacar que a Rede GO FAIR Brasil nasceu no aniversário de 20 anos da Scielo, e este ano não será diferente. Teremos uma sessão especial dedicada ao GO FAIR Brasil. Embora tenhamos sido informados em cima da hora e ainda não tenhamos todos os detalhes, parece que esta sessão será exclusiva para os participantes do evento e exigirá inscrição paga. </p>
                                    </div>
                                </div>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item> */}
                </Carousel>
            </div>
        </div>
    );
}




