import './index.css'
import CartContext from '../../context/CartContext'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'


const CartItem = props => (
    <CartContext.Consumer>
        {value => {
            const {removeCartItem, incrementCartItemQuantity, decrementCartItemQuantity} = value 
            const {cartItemDetails} = props 
            const {isbn13, image, title, price, quantity} = cartItemDetails
            const cost = price.split("$")

            const onRemoveCartItem = () => {
                removeCartItem(isbn13)
            }
            const onIncrementCount = () => {
                incrementCartItemQuantity(isbn13)
            }
            const onDecrementCount = () => {
                decrementCartItemQuantity(isbn13)
            }

            return (
                <li className='cart-item'>
                    <img src={image} alt="cart item" className='cart-item-image' />
                    <div className='cart-item-detail-container'>
                      
                        <p className='cart-item-detail-heading'>{title}</p>
              
                        <div className="cart-item-quantity-container">
                          <button
                            type="button"
                            className="quantity-controller-button"
                            onClick={onDecrementCount}
                            data-testid="minus"
                          >
                            <BsDashSquare color="#52606D" size={12} />
                          </button>
                          <p className="cart-quantity">{quantity}</p>
                          <button
                            type="button"
                            className="quantity-controller-button"
                            onClick={onIncrementCount}
                            data-testid="plus"
                          >
                            <BsPlusSquare color="#52606D" size={12} />
                          </button>
                        </div>
                        <div className="total-price-remove-container">
                          <p className="cart-total-price">$ {(cost[1] * quantity).toFixed(2)}/-</p>
                          <button className='remove-button' type="button" onClick={onRemoveCartItem}>Remove</button>
                        </div>
                        <button
                          className="delete-button"
                          type="button"
                          onClick={onRemoveCartItem}
                        >
                          <AiFillCloseCircle color="#616E7C" size={20} />
                        </button>
                    </div>
                </li>
            )
        }}
    </CartContext.Consumer>
)

export default CartItem 