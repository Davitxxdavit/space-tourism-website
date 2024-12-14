import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './components/Header';
import "./Root.css";
const Root = () => {
  return (
   <div className='root'>
        <Header /> 
        <main className='outlet'>
            <Outlet/>
        </main>

    </div>
  )
}

export default Root
