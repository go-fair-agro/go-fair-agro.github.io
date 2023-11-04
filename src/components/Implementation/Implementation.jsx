import "./implementation.css";

var currentLocation = window.location;

export const Implementation = () => {
    return(
        <div id="Implementação" className="videoContainer">
            <h1>Implementação</h1>
            <p>A rede de implementação temática GO FAIR Agro é responsável por elaborar estratégias e mobilizar parcerias para a implantação dos princípios FAIR no universo dos dados da pesquisa agropecuária brasileira. O primeiro passo para a implantação da rede foi dado em novembro de 2021, durante o XIII Congresso Brasileiro de Agroinformática, com a elaboração do manifesto e a adesão de diversos atores. Em 2022, a rede está se organizando e conta com a participação da comunidade interessada pelo tema para a construção coletiva de sua dinâmica de trabalho. O evento de lançamento e 1ª Oficina de trabalho da Rede GO FAIR Agro Brasil ocorreu em 12 de abril de 2022, no formato virtual, que contou com a apresentação do Dr. Sergio Serra com o tema de GO FAIR Agro Brasil, Perspectivas e Desafios.</p>
            <div className="backgroundVideo">
                <iframe
                    id="videoYtb"
                    src="https://www.youtube.com/embed/_IJZHuJqTSM"
                    width="560" height="315" 
                    frameborder="0"
                    allowfullscreen>
                </iframe>          
            </div>
            <h3>CONHEÇA A ESTRUTURA DO GO FAIR AGRO</h3>
            <div className="implementationCardDeck">
                <div id="implementationGP" className="implementationCard">
                    <ul>
                        <p>Grupos de trabalhos: </p>
                        <li>GT Dados, Metadados e Repositórios</li>
                        <li>GT Políticas e Planos de Gestão de Dados</li>
                        <li>GT Ontologias</li>
                    </ul>
                    <a id="buttonDefault" href={"https://go-fair-agro.github.io/#/grupos_de_trabalho"}>Confira</a>
                </div>
                <div id="implementationMaterial" className="implementationCard">
                    <p>Apresentação  GO FAIR Agro Brasil, Perspectivas e Desafios do Professor Dr.Serra</p>
                    <a id="buttonDefault" href="https://drive.google.com/file/d/1FaAJtmacb7ZwP8j1-xJT9uRLKiQDyBy7/view?usp=share_link">Acesse</a>
                </div>
                <div id="implementationOficina" className="implementationCard">
                    <p>Confira os resultados das oficinas serviram de base para a formação dos grupos de trabalho que vão atuar na construção coletiva dos planos de ação da rede.</p>
                    <a id="buttonDefault" href="https://drive.google.com/file/d/1GJJClgQgGCBiZJwVlq4UJiJs92dr_99j/view?usp=share_link">Confira</a>
                </div>
            </div>
        </div>
    );
}