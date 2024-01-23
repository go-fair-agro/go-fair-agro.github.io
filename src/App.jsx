import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Groups } from "./Groups";


export const App = () => {
  return (
      <Routes>
        <Route path="" element={<Home />}/>
        <Route path="/grupos_de_trabalho" element={<Groups />}/>
      </Routes>
  );
} 

