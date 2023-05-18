import React from 'react';
import { Link } from 'react-router-dom';
import './Products.scss';

function Products({ productItems, handleAddProduct }) {
    return (
        <>
            <div className="container list">
                <div className="row">
                    <div className="list">
                        {productItems?.map((p, index) => (
                            <div key={p.id} className="card">
                                {index === 0 ? (
                                    <Link to="/juoduju-serbentu">
                                        <img
                                            src={p.image}
                                            className="img"
                                            alt=""
                                        />
                                    </Link>
                                ) : index === 1 ? (
                                    <Link to="/kompoto">
                                        <img
                                            src={p.image}
                                            className="img"
                                            alt=""
                                        />
                                    </Link>
                                ) : index === 2 ? (
                                    <Link to="/obuoliu">
                                        <img
                                            src={p.image}
                                            className="img"
                                            alt=""
                                        />
                                    </Link>
                                ) : (
                                    <Link to="/obuoliu-aroniju">
                                        <img
                                            src={p.image}
                                            className="img"
                                            alt=""
                                        />
                                    </Link>
                                )}
                                <div className="description">
                                    <div className="left">
                                        <div className="title">{p.title}</div>
                                        <div className="price">
                                            {p.price} EUR
                                        </div>
                                    </div>
                                    <div className="right">
                                        <button
                                            className="btn"
                                            onClick={() => handleAddProduct(p)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;
