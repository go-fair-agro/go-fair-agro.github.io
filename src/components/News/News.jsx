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

                                    <div className="newCard" style={{width: "100%", justifyContent: "space-evenly"}}>
                                        <h2>Apresentação da Rede GO FAIR Agro Brasil na 38ª Reunião da CBAPD</h2>
                                        <p style={{ marginTop: 0 }}>Na quarta-feira, 16 de outubro de 2024, Sylvia Christina Sanchez, da Brasscom, apresentou o Plano Brasil Digital 2030+ durante a 38ª Reunião Ordinária da Comissão Brasileira de Agricultura de Precisão e Digital (CBAPD). O evento contou com a presença de Sergio Sgobbi e Alexandre Conceição e foi conduzido por Christian Bredemeier. Débora Drucker, da EMBRAPA Agricultura Digital, destacou a Rede GO FAIR Agro Brasil, ressaltando sua importância na agricultura digital. O plano, desenvolvido em colaboração com vários setores, visa acelerar a transformação digital no país.</p>
                                        <a id="buttonGreenSmall" href=" https://www.linkedin.com/posts/brasscom_paratodosverem-brasscom-macrossetordetic-activity-7254239901196451840-MkL9/?utm_source=share&utm_medium=member_desktop">Saiba mais</a>
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
                                        <p style={{ marginTop: 0 }}>Parabéns a todos! Nosso grupo de trabalho Ontologias teve mais uma conquista incrível. Um de nossos trabalhos foi aprovado no "Workshop on Controlled Vocabularies and Data platforms for Smart Food Systems (SmartFood)" com o título "Unveiling Knowledge Organization Systems' Artifacts for Digital Agriculture with Lexical Network Analysis". Isso demonstra nosso comprometimento com a pesquisa e a inovação em agricultura digital. Continuamos avançando e contribuindo para o desenvolvimento do campo. Parabéns a todos os envolvidos por mais essa realização!</p>
                                    </div>

                                    <div className="newCard">
                                        <h2>Aniversário de 25 Anos da Scielo e Sessão Especial do GO FAIR Brasil</h2>
                                        <p style={{ marginTop: 0 }}>Não poderíamos deixar passar em branco! Na próxima semana, celebraremos o aniversário de 25 anos da Scielo em São Paulo. Vale destacar que a Rede GO FAIR Brasil nasceu no aniversário de 20 anos da Scielo, e este ano não será diferente. Teremos uma sessão especial dedicada ao GO FAIR Brasil. Embora tenhamos sido informados em cima da hora e ainda não tenhamos todos os detalhes, parece que esta sessão será exclusiva para os participantes do evento e exigirá inscrição paga. </p>
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
                                    <div className="newCard">
                                        <h2>Apresentação da Rede GO FAIR Agro Brasil na 38ª Reunião da CBAPD</h2>
                                        <p style={{ marginTop: 0 }}>Na quarta-feira, 16 de outubro de 2024, Sylvia Christina Sanchez, da Brasscom, apresentou o Plano Brasil Digital 2030+ durante a 38ª Reunião Ordinária da Comissão Brasileira de Agricultura de Precisão e Digital (CBAPD). O evento contou com a presença de Sergio Sgobbi e Alexandre Conceição e foi conduzido por Christian Bredemeier. Débora Drucker, da EMBRAPA Agricultura Digital, destacou a Rede GO FAIR Agro Brasil, ressaltando sua importância na agricultura digital. O plano, desenvolvido em colaboração com vários setores, visa acelerar a transformação digital no país.</p>
                                        <a id="buttonGreenSmall" href=" https://www.linkedin.com/posts/brasscom_paratodosverem-brasscom-macrossetordetic-activity-7254239901196451840-MkL9/?utm_source=share&utm_medium=member_desktop">Saiba mais</a>
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
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}




