import { Component } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import './index.css'
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

class Checkout extends Component {
    state = {showOrderSummery: false, email: '', name: '', address: '', city: '', pincode: '', phone: '', orderConfirmed: false, error: false}

    onClickDropDown = () => {
        this.setState(prevState => ({showOrderSummery: !prevState.showOrderSummery}))
    }

    onChangeEmail = (e) => {
        this.setState({email: e.target.value})
    }
    
    onChangeName = (e) => {
        this.setState({name: e.target.value})
    }

    onChangeAddress = (e) => {
        this.setState({address: e.target.value})
    }

    onChangeCity = (e) => {
        this.setState({city: e.target.value})
    }

    onChangePincode = (e) => {
        this.setState({pincode: e.target.value})
    }

    onChangePhone = (e) => {
        this.setState({phone: e.target.value})
    }

    onSubmitForm = (e) => {
        e.preventDefault()
        const {email, name, address, pincode, city, phone} = this.state
        if (email !== "" && name !== "" && address !== "" && pincode !== "" && city !== "" && phone !== "") {
            this.setState({orderConfirmed: true})
        }
        else {
            this.setState({error: true})
        }
    }

    render() {
        const {showOrderSummery, email, name, address, city, pincode, phone, error, orderConfirmed} = this.state
        return (
            <CartContext.Consumer>
                {value => {
                    
                    const {cartList} = value 
                    let total = 0
                    let totalCost = 0
                    cartList.forEach(eachCartItem => {
                        const cost = eachCartItem.price.split("$")
                        total += cost[1] * eachCartItem.quantity
                        totalCost = total.toFixed(2)
                    })

                    const renderCartItems = () => (
                        <>
                            {cartList.map(eachItem => (
                                <div className="cart-item-details">
                                    <div className="image-quantity">
                                        <img src={eachItem.image} alt="eachItem" className="each-item-image" />
                                        <p className="each-item-quantity">{eachItem.quantity}</p>
                                    </div>
                                    <p className="each-item-title">{eachItem.title}</p>
                                    <p className="each-item-price">{eachItem.price}</p>
                                    
                                </div>
                            ))}
                        </>
                    )

                    return (
                        <>
                            <nav className="navbar">
                                <div className='nav-logo-name'>
                                    <div className='nav-logo'>B</div>
                                    <h1 className='nav-heading'>BOOKSTORE</h1>
                                </div>
                            </nav>
                            <div className="order-summery-price-container">
                                <div className="order-summery-drop-down">                    
                                    {showOrderSummery ? <p className="order-summery-text">Hide order summery</p> : <p className="order-summery-text">Show order summery</p>}
                                    <button type="button" onClick={this.onClickDropDown} className="drop-down-button">
                                        {showOrderSummery ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                                    </button>
                                </div>
                                <p className="checkout-total-price">$ {totalCost}</p>
                            </div>
                            {showOrderSummery && 
                                <div className="cart-order-summery"> 
                                    {renderCartItems()}
                                    <div className="total-amount">
                                        <p>Total</p>
                                        <p>$ {totalCost}</p>
                                    </div>
                                </div>
                            }
                            <div className="form-cart-large-container">
                            <form className="contact-form" onSubmit={this.onSubmitForm}>
                                <h1>Contact</h1>
                                <input placeholder="Email" className="input-box" type="text" onChange={this.onChangeEmail} value={email} />
                                <h1>Shipping Address</h1> 
                                <select className="form-control input-box" placeholder="Country/Region">
                                    <option value="India" selected>India</option>
                                </select>
                                
                                <input placeholder="Name" className="input-box" type="text" onChange={this.onChangeName} value={name} />
                                <input placeholder="Address" className="input-box" type="text" onChange={this.onChangeAddress} value={address} />
                                <div className="city-pincode-input">
                                    <input placeholder="City" type="text" className="input-half-box" onChange={this.onChangeCity} value={city} />
                                    <input placeholder="PIN code" type="text" className="input-half-box" onChange={this.onChangePincode} value={pincode} />
                                </div>
                                <input placeholder="Phone" className="input-box" type="text" onChange={this.onChangePhone} value={phone} />
                                <button type="submit" className="continue-button">Continue to Shipping</button>
                                {error && <p className="error-msg">Please fill all the details</p>}
                                {orderConfirmed && <p className="order-confirmed">Order confirmed. Thank you!</p>}
                                <br />
                                <Link to="/cart" className="link-element-checkout">
                                    <button type="button" className="back-button">
                                        <IoIosArrowBack className="back-icon" />
                                        Return to cart
                                    </button>
                                </Link>
                            </form>
                            <div className="cart-order-summery-large"> 
                                    {renderCartItems()}
                                    <div className="total-amount">
                                        <p>Total</p>
                                        <p>$ {totalCost}</p>
                                    </div>
                            </div>
                        </div>
                                
                        </>
                    )
                }}
            
            </CartContext.Consumer>
        )
    }
}

export default Checkout