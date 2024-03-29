import React from 'react';
import Product from './Product';
function Cart(props) {
    const { items, removeFromCart } = props;
    const list = items.map(item => <Product key={item.id} name={item.name} price={item.price} isCart={true} removeFromCart={removeFromCart} id={item.id}/>)
    return <section>
        <h2>Cart</h2>
        <ul>{list}</ul>
    </section> 
}

export default Cart;