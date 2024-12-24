import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ela from './pages/ela';
import CustomizeName from './pages/others';
import Instruction from './pages/instructions';
import LoveActually from './pages/love-actually/';
import Friends from './pages/friends/';
const App = () => {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Instruction />} />
          <Route path="/ela" element={<Ela />} />
          <Route path="/love-actually" element={<LoveActually />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/:type/:name" element={<CustomizeName />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App;
