import React from 'react';
import '../Items/Item.scss';

export default function Item4({ productItems, handleAddProduct }) {
    return (
        <div className="container item">
            <div className="row">
                <div className="left">
                    <div className="item-img">
                        <img
                            src={productItems[3].image}
                            className="img"
                            alt=""
                        />
                    </div>
                </div>
                <div className="right">
                    <div className="item-title">{productItems[3].title}</div>
                    <div className="item-description">
                        {productItems[3].description}
                    </div>
                    <div className="item-price">
                        {productItems[0].price} EUR / vnt.
                    </div>
                    <button
                        className="btn"
                        onClick={() => handleAddProduct(productItems[3])}
                    >
                        Pridėti į krepšelį
                    </button>
                </div>
            </div>
        </div>
    );
}
