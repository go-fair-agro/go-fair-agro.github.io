import { Cycle } from "./components/Cycle/Cycle";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Publications } from "./components/Publications/Publications";
import { WorksHeader } from "./components/WorksHeader/WorksHeader";

export const Works = () => {
  return (
    <>
        <WorksHeader/>
        <Cycle/>
        <Publications/>
        <Footer/>
    </>
  );
} 

