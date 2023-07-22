import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Home.scss';

export default function Home({ types }) {
    return (
        <>
            <div className="container types">
                <div className="row">
                    <div className="list">
                        {types?.map((t, index) => (
                            <div key={t.id} className="card">
                                <div className="img-container">
                                    {index === 0 ? (
                                        <a href="https://kuro.lt/collections/12-kuro-buteliuku-pakuotes/products/vysniu-limonadas">
                                            <img
                                                src={t.image}
                                                className="img"
                                                alt=""
                                            />
                                        </a>
                                    ) : index === 1 ? (
                                        <a href="https://kuro.lt/collections/kuro-buteliukai/products/vysniu-limonadas-1">
                                            <img
                                                src={t.image}
                                                className="img"
                                                alt=""
                                            />
                                        </a>
                                    ) : (
                                        <Link to="/produktai">
                                            <img
                                                src={t.image}
                                                className="img"
                                                alt=""
                                            />
                                        </Link>
                                    )}
                                    <div className="description">
                                        <div className="left">
                                            <div className="title">
                                                {t.title}
                                            </div>
                                            <div className="text">
                                                {t.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
