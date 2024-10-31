import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
import MyState from "./components/context/MyState";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

function App() {
  return (
    <MyState>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </MyState>
  );
}

export default App;