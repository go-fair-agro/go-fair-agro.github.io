import './home.css';
import { Header } from './components/Header/Header';
import { Text } from './components/Text/Text';
import { Manifest } from './components/Manifest/Manifest';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Implementation } from './components/Implementation/Implementation';
import { Footer } from './components/Footer/Footer';
import { Coordination } from './components/Coordination/Coordination';
import { Contact } from './components/Contact/Contact.tsx';
import banner from "./assets/banner.png";
import { News } from './components/News/News';
import { Cycle } from './components/Cycle/Cycle.jsx';
import { Publications } from './components/Publications/Publications.jsx';

export const Home = () => {
  return (
    <>
      <Header/>
      <div className="bannerGOFAIR">
        <img src={banner} alt="Banner Rede GO FAIR AGRO"/>
      </div>
      <Text/>
      <Manifest/>
      <AboutUs/>
      <Implementation/>
      <News/>
      <Cycle/>
      <Publications/>
      <Coordination/>
      <Contact/>
      <Footer/>
    </>
  );
} 

