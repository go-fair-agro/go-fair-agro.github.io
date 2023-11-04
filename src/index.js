import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Home';
import { Works } from './Works';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Groups } from './Groups';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/trabalhos" element={<Works />}/>
        <Route path="/grupos_de_trabalho" element={<Groups />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);