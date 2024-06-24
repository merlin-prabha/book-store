import { Component } from "react";
import './index.css'

import Header from "../Header";

class BookDetails extends Component {
    state = {bookDetails: []}

    componentDidMount() {
        this.getBookDetails()
    }

    getBookDetails = async() => {
        const {match} = this.props
        const {params} = match 
        const {id} = params
        const url = `https://api.itbook.store/1.0/books/${id}`
        const options = {
            method: 'GET'
        }
        const response = await fetch(url, options)
        console.log(response)
        if (response.ok) {
            const fetchedData = await response.json()
            console.log(fetchedData)
            this.setState({bookDetails: fetchedData})
        }
    }

    renderBookDetail = () => {
        const {bookDetails} = this.state 
        const {url, title, desc, authors, price, rating, language} = bookDetails
        
    }

    render() {
        return (
            <div>
                <Header />
                <div className="book-details">
                    <h1>BookvDetails</h1>
                    <div className="book-detail-container">
                        {this.renderBookDetail()}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default BookDetails