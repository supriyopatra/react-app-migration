import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import ProductHeader from './ProductHeader';

const PrivateProductRoute = () => {
    const token =localStorage.getItem('userToken');
  return (
    <>
        {
        token ? 
        <>
            <ProductHeader/>
            <div className='p-5 bg-gray-100 h-[90vh]'>
                <Outlet/>
            </div>
        </>
        :
        <Navigate to="/product/login" replace/>
        }
    </>
    
  )
}

export default PrivateProductRoute
