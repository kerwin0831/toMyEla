import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ela from './pages/ela';
import CustomizeName from './pages/others';
const App = () => {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/ela" element={<Ela />} />
          <Route path="/:type/:name" element={<CustomizeName />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App;
