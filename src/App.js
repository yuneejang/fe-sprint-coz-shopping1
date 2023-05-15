import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./component/Nav";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Bookmark from "./pages/Bookmark";

function App() {
  return (

      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/products/list" element={<Products/>}/>
          <Route path="/bookmark" element={<Bookmark/>}/>
        </Routes>
        <footer>
          <div className="policy">개인정보 처리방침 | 이용 약관</div>
          <div className="rights">All rights reserved @ Codestates</div>
        </footer>
      </Router>

  );
}

export default App;
