import React, { useState } from 'react';
import Header from './Components/front/Header/Header';
import Routes from './Components/front/Routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import products from './Components/back/data/products';
import productTypes from './Components/back/data/productTypes';
import Footer from './Components/front/Footer/Footer';

function App() {
    const { productItems } = products;
    const { types } = productTypes;
    const [cartItems, setCartItems] = useState([]);

    const handleAddProduct = (product) => {
        const ProductExist = cartItems.find((item) => item.id === product.id);
        if (ProductExist) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? {
                              ...ProductExist,
                              quantity: ProductExist.quantity + 1,
                          }
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const handleRemoveProduct = (product) => {
        const ProductExist = cartItems.find((item) => item.id === product.id);
        if (ProductExist.quantity === 1) {
            setCartItems(cartItems.filter((item) => item.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? {
                              ...ProductExist,
                              quantity: ProductExist.quantity - 1,
                          }
                        : item
                )
            );
        }
    };

    const handleCartClearance = () => {
        setCartItems([]);
    };

    return (
        <div>
            <Router>
                <Header cartItems={cartItems} />
                <Routes
                    productItems={productItems}
                    cartItems={cartItems}
                    types={types}
                    handleAddProduct={handleAddProduct}
                    handleRemoveProduct={handleRemoveProduct}
                    handleCartClearance={handleCartClearance}
                />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
