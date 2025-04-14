import React, { useState } from "react";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Agency from "./pages/Agency";
import ReportBuilder from "./pages/ReportBuilder";
import Login from "./pages/Login";
import ProductLogin from "./pages/Product/Login";
import PrivateRoute from "./components/PrivateRoute";
import Category from "./pages/Product/Category";
import AddCategory from "./pages/Product/AddCategory";
import PrivateProductRoute from "./components/PrivateProductRoute";
import EditCategory from "./pages/Product/EditCategory";



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
              <Route path="/product" >
                <Route path="" element={<Navigate to="/login" replace/>} />
                <Route path="login" element={<ProductLogin />} />
                <Route element={<PrivateProductRoute/>}>
                  <Route path="category" element={<Category />} />
                  <Route path="addCategory" element={<AddCategory />} />
                  <Route path="edit/:id" element={<EditCategory />} />
                  <Route path="add" element={<EditCategory />} />
                  <Route path="reportBuilder" element={<ReportBuilder />} />
                </Route>
              </Route>
        
          </Routes>

            
      </Router>
      
    </div>
  );
}


