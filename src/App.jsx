import React, { useState } from "react";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Agency from "./pages/Agency";
import ReportBuilder from "./pages/ReportBuilder";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";



export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      
      <Router>
      
      
          <Routes >
            <Route path="/login" element={<Login/>}/>
            <Route psth="/" element={<PrivateRoute/>}>
              <Route path="/home" element={<Home />} />
              <Route path="/agency" element={<Agency />} />
              <Route path="/reportBuilder" element={<ReportBuilder />} />
            </Route>
          </Routes>

            
      </Router>
      
    </div>
  );
}


