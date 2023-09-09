import React from 'react'
import {NavLink } from "react-router-dom";


function Header() {
    return (
        <nav className="py-2 my-3 navbar navbar-expand-lg navbar-light  bg-warning text-white fw-semibold">
            <div className="container-fluid bg-warning">
                <NavLink className="navbar-brand text-white fw-semibold" to='/tutorials'>Tutorial Adda</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <NavLink className="nav-link active text-white fw-semibold" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white fw-semibold" to="/tutorials">Tutorials</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link text-white fw-semibold" to="/register">Register</NavLink>
                        </li> */}
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white fw-semibold" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li> */}
                    </ul>
                    <div className="dropstart">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 show  text-small dropdown-menu-lg-start" data-popper-placement="bottom-start">
                            <li className="nav-item dropdown">
                                <NavLink to="/" className="d-block link-body-emphasis text-decoration-none dropdown-toggle show"
                                    data-bs-toggle="dropdown" aria-expanded="true">
                                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" to="/">Profile</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/">Change Password</NavLink></li>
                                    <li><NavLink className="dropdown-item" href="/">Sign out</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header