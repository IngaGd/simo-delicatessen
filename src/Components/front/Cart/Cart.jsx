import React from 'react';
import './Cart.scss';

function Cart({
    cartItems,
    handleAddProduct,
    handleRemoveProduct,
    handleCartClearance,
}) {
    const totalPrice = parseFloat(
        cartItems.reduce((price, item) => price + item.quantity * item.price, 0)
    ).toFixed(2);

    return (
        <>
            <div className="container cart">
                <div className="row">
                    <div className="title">Prekių krepšelis:</div>
                    <div className="list-empty">
                        {cartItems.length === 0 && (
                            <div className="empty cart">
                                Prekių krepšelis yra tuščias.
                            </div>
                        )}
                    </div>
                </div>

                <div className="row">
                    <div className="list">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-items">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="cart-img"
                                />
                                <div className="item-title">{item.title}</div>
                                <div className="cart-btn">
                                    <button
                                        onClick={() => handleAddProduct(item)}
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleRemoveProduct(item)
                                        }
                                    >
                                        -
                                    </button>
                                </div>
                                <div className="quantity">
                                    {item.quantity} vnt. * {item.price} EUR
                                </div>
                            </div>
                        ))}
                        <div className="totals">Iš viso: {totalPrice} EUR</div>
                        <div className="bottom-btn">
                            <div className="clear-cart">
                                {cartItems.length >= 1 && (
                                    <button
                                        className="clear-cart-btn"
                                        onClick={handleCartClearance}
                                    >
                                        Išvalyti
                                    </button>
                                )}
                            </div>
                            <div className="buy">
                                {cartItems.length >= 1 && (
                                    <button className="buy-btn">Pirkti</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
