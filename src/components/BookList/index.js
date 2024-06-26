import { Component } from "react";
import {Link} from 'react-router-dom'
import './index.css'

import Header from "../Header";

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    inProgress: 'IN_PROGRESS',
  }

class BookList extends Component {
    state = {booksData: [], apiStatus: apiStatusConstants.initial}

    componentDidMount () {
        this.getBooksList()
    }

    getBooksList = async () => {
        this.setState({apiStatus: apiStatusConstants.inProgress})
        const apiUrl = "https://api.itbook.store/1.0/new"
        const options = {
            method: 'GET'
        }
        let updatedData
        const response = await fetch(apiUrl, options)
        
        .then(function(response){ return response.json(); })
        .then(function(data) {
            const items = data;
        
            updatedData = items.books.map(each => ({
                image: each.image,
                id: each.isbn13,
                price: each.price,
                title: each.title,
                url: each.url,
            }))
        })
        this.setState({booksData: updatedData, apiStatus: apiStatusConstants.success})  
    }

    renderBookList = () => {
        const {booksData} = this.state 
        return (
            <ul className="book-list-container-element">
                {booksData.map(eachBook => (
                    <li className="book-item">
                        <Link to={`books/${eachBook.id}`} className="book-link-item">
                            <img src={eachBook.image} alt="book" className="book-image" />
                            <p className="book-heading">{eachBook.title}</p>
                            <p className="book-price">{eachBook.price}</p>
                            <button type="button" className="book-button">View Details</button>
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }

    renderLoadingView = () => (
        <div className="products-details-loader-container loader" data-testid="loader">
          Loading....
        </div>
      )

    renderResult = () => {
        const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderBookList()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }

    }

    render() {
        const {booksData} = this.state
        return (
            <div>
                <Header />
                <div className="book-list-container">
                    <h1 className="book-list-heading">BookList</h1>
                    <div className="book-list">
                        {this.renderResult()}
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default BookList