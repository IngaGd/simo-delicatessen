import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const logo = require('../../back/images/logo/logo.png');

const Header = ({ cartItems }) => {
    return (
        <header className="container nav">
            <div className="row">
                <div className="left">
                    <Link to="/simo-delicatessen">
                        <img src={logo} className="logo" />
                    </Link>
                </div>
                <div className="right">
                    <div className="nav-main">
                        <Link to="/produktai" className="products-link">
                            <i class="fa fa-glass" aria-hidden="true">
                                <span>ot couture</span>
                            </i>
                        </Link>
                        <button className="custom-button">
                            <span className="track">
                                <i className="fa fa-instagram">
                                    <span>simo.delicatessen</span>
                                </i>
                            </span>
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
                    <div className="nav-mob">
                        <Link to="/produktai" className="products-link">
                            <i class="fa fa-glass" aria-hidden="true"></i>
                        </Link>
                        <a
                            href="https://www.instagram.com/simo.delicatessen/"
                            className=""
                        >
                            <i className="fa fa-instagram" />
                        </a>
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
