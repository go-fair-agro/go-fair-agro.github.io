import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Works } from "./Works";
import { Groups } from "./Groups";

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/trabalhos" element={<Works />}/>
        <Route path="/grupos_de_trabalho" element={<Groups />}/>
      </Routes>
  );
} 

