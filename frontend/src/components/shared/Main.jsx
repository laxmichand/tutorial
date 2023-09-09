import React from 'react'
import {
    Routes,
    Route
  } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Dashboard from '../dashboard/Tutorials';
import Login from '../login/Login';
import Register from '../register/Register';

function Main() {
    return (
        <div className='container'>
            <Header />
            <Routes>
                 <Route path='/' element={<Login />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/tutorials' element={<Dashboard />}></Route>
                <Route path='/register' element={<Register />}></Route>
            </Routes>
            <Footer />
        </div>
    )
}

export default Main