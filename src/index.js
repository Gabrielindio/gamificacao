import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Video from './components/Home/video'
import Quizz from './components/Jogo/quizz'
import Pag from './components/Pag/landingPage';
import Sobre from './components/Sobre/sobre';
import Contato from './components/Contato/contato'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pag />}/>
        <Route path='/video' element={<Video />}/>
        <Route path='/sobre' element={<Sobre />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/quizz' element={<Quizz   />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
