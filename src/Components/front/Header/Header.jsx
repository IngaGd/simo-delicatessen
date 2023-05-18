import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const logo = require('../../back/images/logo/logo.png');

const Header = ({ cartItems }) => {
    return (
        <header className="container nav">
            <div className="row">
                <div className="left">
                    <Link to="/">
                        <img src={logo} className="logo" />
                    </Link>
                </div>
                <div className="right">
                    <div className="nav">
                        <div>
                            <Link to="/produktai" className="products-link">
                                ot couture
                            </Link>
                        </div>
                        <button className="custom-button">
                            <span className="track">simo.delicatessen</span>
                            <a
                                href="https://www.instagram.com/simo.delicatessen/"
                                className="sekti-link"
                            >
                                Sekti
                            </a>
                        </button>
                        <Link to="/cart" className="cart">
                            <i className="fa fa-shopping-cart">
                                <span className="basket-qnt">
                                    {cartItems.length === 0
                                        ? ''
                                        : cartItems.length}
                                </span>
                            </i>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
