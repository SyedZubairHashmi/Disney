import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Detail from './components/Detail';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
