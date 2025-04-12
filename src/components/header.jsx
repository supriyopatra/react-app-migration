import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex bg-gray-200 p-6'>
        <div className="left flex gap-2 items-center ">
            <div className="logo border-r border-gray-500 pr-3">
                <img src="../../logo_white.png" alt="logo" srcSet="" width={150} />
            </div>
            <div className="mainMenu border-r border-gray-500 pr-3 relative">
                <p className='text-cyan-500 uppercase text-sm font-bold cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>Main Menu</p>
                {isOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-md z-10">
                    <ul className="py-2">
                        <Link to="/agency"><div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">Agency</div></Link>
                        
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">Campaign Managment</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">Advertisers</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">Systems</li>
                        <Link to="/reportBuilder"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">Report Builder</li></Link>
                    </ul>
                    </div>
                )}
            </div>
        </div>
      
    </div>
  )
}

export default Header
