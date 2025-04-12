import React from 'react';
import { Navigate, NavLink, Outlet } from 'react-router-dom';
import Header from './header';


const PrivateRoute = () => {
    const token = !!localStorage.getItem('token');


  return (
    <>
        <Header/>
        <div className="p-6 shadow-sm bg-gray-100 h-full">
            {token ? <Outlet/> : <Navigate to="/login"/>}
        </div>
    </>
    
  )
}

export default PrivateRoute
