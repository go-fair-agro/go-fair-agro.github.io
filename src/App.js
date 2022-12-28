import React from "react";
import { Menu } from "./components/Menu/Menu";
import { Text } from "./components/Text/Text";
import bannerHome from "./images/goFairAgroHeader.jpg"
import { Video } from "./components/Video/Video";
import { Missão } from "./components/Missão/Missão";
import { Rede } from "./components/Rede/Rede";
import { Publicações } from "./components/Publicações/Publicações";
import { Coordenação } from "./components/Coordenação/Coodernação";
import { Ciclo } from "./components/Ciclo/Ciclo";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Menu/>
      <img src={bannerHome} style={{width: "100%", marginTop: "4%"}}/>
      <Text/>
      <Video/>
      <Missão/>
      <Publicações/>
      <Rede/> 
      <Ciclo/>
      <Coordenação/>
      <Footer/>
    </>
  );
}

export default App;
