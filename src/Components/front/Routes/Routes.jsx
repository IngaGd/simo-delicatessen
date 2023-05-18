import React from 'react';
import Products from '../Products/Products';
import { Route, Switch } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Home from '../Home/Home';
import Terms from '../Terms/Terms';
import Item1 from '../Items/Item1';
import Item2 from '../Items/Item2';
import Item3 from '../Items/Item3';
import Item4 from '../Items/Item4';

const Routes = ({
    productItems,
    types,
    cartItems,
    handleAddProduct,
    handleRemoveProduct,
    handleCartClearance,
}) => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Home types={types} />
                </Route>
                <Route path="/produktai" exact>
                    <Products
                        productItems={productItems}
                        handleAddProduct={handleAddProduct}
                    />
                </Route>
                <Route path="/juoduju-serbentu" exact>
                    <Item1
                        productItems={productItems}
                        handleAddProduct={handleAddProduct}
                    />
                </Route>
                <Route path="/kompoto" exact>
                    <Item2
                        productItems={productItems}
                        handleAddProduct={handleAddProduct}
                    />
                </Route>
                <Route path="/obuoliu" exact>
                    <Item3
                        productItems={productItems}
                        handleAddProduct={handleAddProduct}
                    />
                </Route>
                <Route path="/obuoliu-aroniju" exact>
                    <Item4
                        productItems={productItems}
                        handleAddProduct={handleAddProduct}
                    />
                </Route>
                <Route path="/cart" exact>
                    <Cart
                        cartItems={cartItems}
                        handleAddProduct={handleAddProduct}
                        handleRemoveProduct={handleRemoveProduct}
                        handleCartClearance={handleCartClearance}
                    />
                </Route>
                <Route path="/pristatymo-salygos" exact>
                    <Terms />
                </Route>
            </Switch>
        </div>
    );
};

export default Routes;
