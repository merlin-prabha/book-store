import { Component } from "react";
import { Link } from "react-router-dom";
import './index.css'

import Header from "../Header";
import CartContext from "../../context/CartContext";

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }
  

class BookDetails extends Component {
    state = {bookDetails: {}, quantity: 1, apiStatus: apiStatusConstants.initial}

    componentDidMount() {
        this.getBookDetails()
    }

    getBookDetails = async() => {
        const {match} = this.props
        const {params} = match 
        const {id} = params
        this.setState({apiStatus: apiStatusConstants.inProgress})
        const url = `https://api.itbook.store/1.0/books/${id}`
        const options = {
            method: 'GET'
        }
        const response = await fetch(url, options)
        console.log(response)
        if (response.ok) {
            const fetchedData = await response.json()
            console.log(fetchedData)
            this.setState({bookDetails: fetchedData, apiStatus: apiStatusConstants.success})
        }
        else {
            this.setState({apiStatus: apiStatusConstants.failure})
        }
    }

    renderLoadingView = () => (
        <div className="products-details-loader-container" data-testid="loader">
          Loading....
        </div>
      )
    
      renderFailureView = () => (
        <div className="product-details-error-view-container">
          <img
            alt="error view"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
            className="error-view-image"
          />
          <h1 className="product-not-found-heading">Product Not Found</h1>
          <Link to="/products">
            <button type="button" className="button">
              Continue Shopping
            </button>
          </Link>
        </div>
      )
    

    renderBookDetail = () => (
            <CartContext.Consumer>
                {value => {
                    const {bookDetails, quantity} = this.state 
                    const {image, title, desc, authors, price, rating, language} = bookDetails
                    const {addCartItem} = value 
                    const onClickAddToCart = () => {
                        addCartItem({...bookDetails, quantity})
                        console.log("clicked")
                    }
                    return (
                        <div className="book-details-card">
                            <img src={image} alt="book detail" className="book-detail-image" />
                            <div>
                                <p className="book-detail-title">{title}</p>
                                <p className="book-detail-author">{authors}</p>
                                <p className="book-detail-sub-heading">Price: <span>{price}</span></p>
                                <p className="book-detail-sub-heading">Rating: <span>{rating}</span></p>
                                <p className="book-detail-sub-heading">Language: <span>{language}</span></p>
                                <p className="book-detail-sub-heading">Description: <span>{desc}</span></p>
                                <button type="button" className="add-to-cart-button" onClick={onClickAddToCart}>ADD TO CART</button>
                            </div>
                        </div>
                    )
                }}
                
            </CartContext.Consumer>
        )
    

    renderResult = () => {
        const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderBookDetail()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }

    }

    render() {
        return (
            <div>
                <Header />
                <div className="book-details">
                    <h1>Book Details</h1>
                    <div className="book-detail-container">
                        {this.renderResult()}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default BookDetails