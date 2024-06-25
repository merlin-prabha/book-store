import {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home'
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Cart from './components/Cart'
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';
import CartContext from './context/CartContext'

import './App.css';

class App extends Component {
  state = {cartList: []}

  removeAllCartItem = () => {
    this.setState({cartList: []})
  }

  incrementCartItemQuantity = isbn13 => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachItem => {
        if (eachItem.isbn13 === isbn13) {
          const updatedQuantity = eachItem.quantity + 1
          return {...eachItem, quantity: updatedQuantity}
        }
        return eachItem
      })
    }))
  }

  decrementCartItemQuantity = isbn13 => {
    const {cartList} = this.state 
    const cartItem = cartList.find(eachItem => eachItem.isbn13 === isbn13)
    if (cartItem.quantity > 1) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachItem => {
          if (eachItem.isbn13 === isbn13) {
            const updatedQuantity = eachItem.quantity - 1 
            return {...eachItem, quantity: updatedQuantity}
          }
          return eachItem
        })
      }))
    } else {
      this.removeCartItem(isbn13)
    }
  }

  removeCartItem = isbn13 => {
    const {cartList} = this.state
    const filteredList = cartList.filter(each => each.isbn13 !== isbn13)
    this.setState({cartList: filteredList})
  }

  addCartItem = product => {
    const {cartList} = this.state 
    const productObject = cartList.find(each => each.isbn13 === product.isbn13)

    if (productObject !== undefined) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (productObject.isbn13 === eachCartItem.isbn13) {
            const updatedQuantity = eachCartItem.quantity + 1 
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        })
      }))
    } else {
      const updatedCartList = [...cartList, product]
      this.setState({cartList: updatedCartList})
    }
  }

  render() {
    const {cartList} = this.state
    console.log(cartList)
    return (
      <CartContext.Provider
        value = {{
          cartList,
          addCartItem: this.addCartItem,
          removeAllCartItems: this.removeAllCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={BookList} />
          <Route exact path="/books/:id" component={BookDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
        </CartContext.Provider>
    )
  }
}

export default App;
