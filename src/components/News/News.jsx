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
                                        <div className="newCard">
                                            <h2>Palestra com Ana Cristina Gomes Santana: O Papel dos Dados FAIR para o Desempenho Sustentável na Agricultura</h2>
                                            <p style={{marginTop: 0}}>Não perca a palestra "O Papel dos Dados FAIR para o Desempenho Sustentável na Agricultura" ministrada pela professora Ana Cristina Gomes Santana da UFRA - Belém do Pará. Descubra como os dados FAIR estão transformando a agricultura para um futuro mais sustentável. A palestra será realizada online no dia 26 de abril.</p>
                                            {/* <a id="buttonGreenSmall" href="link_da_inscricao">Inscreva-se</a> */}
                                        </div>


                                        <div className="newCard">
                                            <h2>Palestra com Jorge Zavaleta: Criação de Planos de Gestão de Dados em Projetos de Ciência de Dados para Detecção de Fake News</h2>
                                            <p style={{marginTop: 0}}>Não perca a palestra "Criação de Planos de Gestão de Dados em Projetos de Ciência de Dados para Detecção de Fake News" ministrada pelo professor Jorge Zavaleta da UERJ. Explore como os princípios FAIR estão sendo aplicados na luta contra as notícias falsas. A palestra será realizada online no dia 10 de maio.</p>
                                            {/* <a id="buttonGreenSmall" href="link_da_inscricao">Inscreva-se</a> */}
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
                                            <h2>Palestra com Patrícia Bertin e Juliana Fonseca: O Processo de Construção da Política de Governança de Dados, Informação e Conhecimento da Embrapa</h2>
                                            <p style={{marginTop: 0}}>Não perca a palestra "O Processo de Construção da Política de Governança de Dados, Informação e Conhecimento da Embrapa" ministrada por Patrícia Bertin e Juliana Fonseca. Explore como a Embrapa está desenvolvendo políticas de governança de dados. A palestra será realizada online no dia 24 de maio.</p>
                                            {/* <a id="buttonGreenSmall" href="link_da_inscricao">Inscreva-se</a> */}
                                        </div>

                                        <div className="newCard">
                                            <h2>Palestra com Maíra Murrieta: Diretrizes para uma Política de Gestão de Dados Científicos no Brasil</h2>
                                            <p style={{marginTop: 0}}>Não perca a palestra "Diretrizes para uma Política de Gestão de Dados Científicos no Brasil" ministrada por Maíra Murrieta do MCT. Descubra as diretrizes para a gestão de dados científicos no Brasil. A palestra será realizada online no dia 07 de junho.</p>
                                            {/* <a id="buttonGreenSmall" href="link_da_inscricao">Inscreva-se</a> */}
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
                                            <h2>Palestra com Ana Cristina Gomes Santana: O Papel dos Dados FAIR para o Desempenho Sustentável na Agricultura</h2>
                                            <p style={{marginTop: 0}}>Não perca a palestra "O Papel dos Dados FAIR para o Desempenho Sustentável na Agricultura" ministrada pela professora Ana Cristina Gomes Santana da UFRA - Belém do Pará. Descubra como os dados FAIR estão transformando a agricultura para um futuro mais sustentável. A palestra será realizada online no dia 26 de abril.</p>
                                            {/* <a id="buttonGreenSmall" href="link_da_inscricao">Inscreva-se</a> */}
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
                                            <h2>Palestra com Jorge Zavaleta: Criação de Planos de Gestão de Dados em Projetos de Ciência de Dados para Detecção de Fake News</h2>
                                            <p style={{marginTop: 0}}>Não perca a palestra "Criação de Planos de Gestão de Dados em Projetos de Ciência de Dados para Detecção de Fake News" ministrada pelo professor Jorge Zavaleta da UERJ. Explore como os princípios FAIR estão sendo aplicados na luta contra as notícias falsas. A palestra será realizada online no dia 10 de maio.</p>
                                            {/* <a id="buttonGreenSmall" href="link_da_inscricao">Inscreva-se</a> */}
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
                                            <h2>Palestra com Patrícia Bertin e Juliana Fonseca: O Processo de Construção da Política de Governança de Dados, Informação e Conhecimento da Embrapa</h2>
                                            <p style={{marginTop: 0}}>Não perca a palestra "O Processo de Construção da Política de Governança de Dados, Informação e Conhecimento da Embrapa" ministrada por Patrícia Bertin e Juliana Fonseca. Explore como a Embrapa está desenvolvendo políticas de governança de dados. A palestra será realizada online no dia 24 de maio.</p>
                                            {/* <a id="buttonGreenSmall" href="link_da_inscricao">Inscreva-se</a> */}
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
                                            <h2>Palestra com Maíra Murrieta: Diretrizes para uma Política de Gestão de Dados Científicos no Brasil</h2>
                                            <p style={{marginTop: 0}}>Não perca a palestra "Diretrizes para uma Política de Gestão de Dados Científicos no Brasil" ministrada por Maíra Murrieta do MCT. Descubra as diretrizes para a gestão de dados científicos no Brasil. A palestra será realizada online no dia 07 de junho.</p>
                                            {/* <a id="buttonGreenSmall" href="link_da_inscricao">Inscreva-se</a> */}
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

