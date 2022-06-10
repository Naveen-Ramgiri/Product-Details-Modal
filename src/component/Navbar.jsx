import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = (props) => {
    return (
        <div>
            {/* Navbar starts here */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">
                        <img src='/assets/logo.png' />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li>

                            </li>
                        </ul>
                        <div className="buttons ">
                            <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
                                <li className='nav-item'>
                                    <div className="input-group mr-10">
                                        {/* onChange={e => onChangeHandler(e.target.value)} value={text} */}
                                        <input type="text" className="form-control" placeholder="Search products ..." />
                                        <a href='#'>
                                            <span className="input-group-text">
                                                <span className="bi-person"><i className="fa fa-search" aria-hidden="true"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to="/cart" className=""><i className="fas fa-cart-plus mycart"></i>
                                        {' '}
                                        {props.countCartItems ? (
                                            <span className="cart-count">{props.countCartItems}</span>
                                        ) : (
                                            ''
                                        )}
                                    </NavLink>{' '}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Navbar ends here */}
        </div>
    )
}

export default Navbar