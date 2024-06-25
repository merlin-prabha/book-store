import {Link} from 'react-router-dom'
import './index.css'
import { FaHome } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { FaCartShopping } from "react-icons/fa6";
import CartContext from '../../context/CartContext';

const Header = () => {
    const renderCartItemCount = () => {
        <CartContext.Consumer>
            {value => {
                const {cartList} = value 
                const cartItemCount = cartList.length 
                console.log(cartItemCount)

                return (
                    <>
                        {cartItemCount > 0 ? (
                            <span className='header-cart-count'>{cartList.length}</span>
                        ) : null}
                    </>
                )
            }}
        </CartContext.Consumer>
    }
    return (
    <nav className='navbar'>
            <div className='nav-logo-name'>
                <div className='nav-logo'>B</div>
                <h1 className='nav-heading'>BOOKSTORE</h1>
            </div>
            <ul className='nav-home-booklist-cart-logos'>
                <Link to="/" className="nav-link-ele">
                    <li className='nav-list-element'>
                        <FaHome className='nav-icon' />
                        <p className='nav-icon-text'>Home</p>
                    </li>
                </Link>
                <Link to="/books" className="nav-link-ele">
                    <li className='nav-list-element'>
                        <SiBookstack className='nav-icon' />
                        <p className='nav-icon-text'>Books</p>
                    </li>
                </Link>
                <Link to="/cart" className="nav-link-ele">
                    <li className='nav-list-element'>
                        <FaCartShopping className='nav-icon' />
                        {renderCartItemCount()}
                        <p className='nav-icon-text'>Cart</p>
                    </li>
                </Link>
                        
            </ul>

    </nav>
)}

export default Header