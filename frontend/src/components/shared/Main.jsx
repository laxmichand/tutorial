import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import loadable from '@loadable/component';
import Login from '../login/Login';
import SignUp from '../signup/SignUp';

const Tutorials = loadable(() => import('../dashboard/Tutorials'));
const Header = loadable(() => import('./Header'));
const Footer = loadable(() => import('./Footer'));
const Register = loadable(() => import('../register/Register'));
const PageNotFound = loadable(() => import('./PageNotFound'));

function Main() {
    return (
        <div className='container'>
            <Header />
            <Routes>
                <Route path='/' element={<Tutorials />}></Route>
                <Route path='/tutorials' element={<Tutorials />}></Route>
                <Route path='/signup' element={<SignUp  data={{ title: 'Sign Up Here', create: 'Sign up' }}/>}></Route>
                <Route path='/login' element={<Login  data={{ title: 'Login', create: 'Login' }}/>}></Route>
                <Route path='/register' element={<Register data={{ title: 'Create New Tutorial', create: 'Create' }} />} ></Route>
                <Route path='/update/:id' element={<Register data={{ title: 'Update Tutorial', create: 'Update' }} />} ></Route>
                <Route path='*' element={<PageNotFound />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Main