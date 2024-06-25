import { Component } from "react";
import {Link} from 'react-router-dom'
import './index.css'

import CartContext from "../../context/CartContext";
import Header from "../Header";
import CartItem from "../CartItem";

class Cart extends Component {
    render() {
        return (
            <CartContext.Consumer>
                {value => {
                    const {cartList, removeAllCartItems} = value
                    const showEmptyView = cartList.length === 0
                    const onClickRemoveAll = () => {
                        removeAllCartItems()
                    }
                    let total = 0
                    let totalCost = 0
                    cartList.forEach(eachCartItem => {
                        const cost = eachCartItem.price.split("$")
                        total += cost[1] * eachCartItem.quantity
                        totalCost = total.toFixed(2)
                    })
                    return (
                        <>
                            <Header />
                            <div className="cart-container">
                                {showEmptyView ? (
                                    <div className="cart-empty-container">
                                        <h1 className="cart-heading">Your Cart Is Empty</h1>
                                        <Link to="/books">
                                            <button type="button" className="cart-shop-now-button">Shop Now</button>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="cart-content-container">
                                        <h1 className="cart-heading">My Cart</h1>
                                        <button
                                            className="remove-all-button"
                                            type="button"
                                            onClick={onClickRemoveAll}
                                            >
                                            Remove All
                                        </button>
                                        <div className="large-cart-items-order-summery">
                                            <div>
                                                <ul className="cart-list">
                                                    {cartList.map(eachCartItem => (
                                                        <CartItem key={eachCartItem.isbn13} cartItemDetails={eachCartItem} />
                                                    ))}
                                                </ul>
                                                
                                                <Link to="/books">
                                                    <button type="button" className="cart-shop-now-button">Continue Shopping</button>
                                                </Link>
                                            </div>
                                            <div className="order-summery">
                                                <h1 className="order-summery-heading">
                                                    Order Summery
                                                </h1>
                                                <div className="summery-total-amount">
                                                    <p className="summery-amount-heading">Amount Payable: </p>
                                                    <p className="summery-amount">$ {totalCost}</p>
                                                </div>
                                                <p className="cart-items-count">{cartList.length} Items in cart</p>
                                                <p>Tax included. Shipping calculated at checkout.</p>
                                                <Link to="/checkout">
                                                    <button type="button" className="checkout-button">
                                                        Checkout
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </>
                        
                    )
                }}
            </CartContext.Consumer>
        )
    }
}

export default Cart