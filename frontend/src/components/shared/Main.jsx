import React from 'react'
import {
    Routes,
    Route
  } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Dashboard from '../dashboard/Dashboard';
import Login from '../login/Login';

function Main() {
    return (
        <div className='container'>
            <Header />
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/dashbord' element={<Dashboard />}></Route>
            </Routes>
            <Footer />
        </div>
    )
}

export default Main