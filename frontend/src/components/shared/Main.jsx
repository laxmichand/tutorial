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
                <Route path='/register' element={<Register data={{ title: 'Create New Tutorial', create: 'Create'}} />} ></Route>
                <Route path='/update/:id' element={<Register data={{ title: 'Update Tutorial', create: 'Update' }} />} ></Route>
            </Routes>
            <Footer />
        </div>
    )
}

export default Main