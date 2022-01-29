import React from 'react';

export default function Cart(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.price * currentItem.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>{cartItems.length === 0 && <div className="white">Cart Is Empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2 white">{item.name}</div>
                    <div className="col-2">
                        <button onClick={() => onAdd(item)} className="add white">
                            +
                        </button>
                        <button onClick={() => onRemove(item)} className="remove white">
                            -
                        </button>
                    </div>
                    <div className="col-2 white right">
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr />
                    <div className="row white">
                        <div className="col-2">Items Price</div>
                        <div className="col-1 right">${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className="row white">
                        <div className="col-2">Tax Price</div>
                        <div className="col-1 right">${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="row white">
                        <div className="col-2">Shipping Price</div>
                        <div className="col-1 right">${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className="row white">
                        <div className="col-2"><strong>Total Price</strong></div>
                        <div className="col-1 right"><strong>${totalPrice.toFixed(2)}</strong></div>
                    </div>
                </>
            )}
        </aside>
    );
}