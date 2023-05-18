import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
    return (
        <footer className="container nav bottom ">
            <div className="row">
                <div className="left">
                    <Link to="/pristatymo-salygos" className="nav">
                        Pristatymo sąlygos
                    </Link>
                </div>
            </div>
        </footer>
    );
}
