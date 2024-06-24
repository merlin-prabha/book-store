import { Component } from "react";
import {Link} from 'react-router-dom'
import './index.css'

import Header from "../Header";

class BookList extends Component {
    state = {booksData: []}

    componentDidMount () {
        this.getBooksList()
    }

    getBooksList = async () => {
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
        this.setState({booksData: updatedData})  
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
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }
    render() {
        const {booksData} = this.state
        console.log(booksData)
        return (
            <div>
                <Header />
                <div className="book-list-container">
                    <h1 className="book-list-heading">BookList</h1>
                    <div className="book-list">
                        {this.renderBookList()}
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default BookList