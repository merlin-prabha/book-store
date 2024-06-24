import { Component } from "react";
import './index.css'

import Header from "../Header";

class Home extends Component {
    onClickExploreButton = () => {
        const {history} = this.props 
        history.replace("/books")
    }

    render() {
        return (
            <div>
                <Header />
                <div className="home-small-background">
                    <div className="home-text">
                        <h1 className="home-heading">Welcome to the Bookstore App!</h1>
                        <p>
                            Discover a world of books at your fingertips with our bookstore application. 
                            Whether you're an avid reader or just starting your literary journey, 
                            our app offers a curated collection of books across genres, making it easy to find your next favorite read.
                        <br />
                            Browse through thousands of books from bestsellers to classics, 
                            organized into categories for easy navigation.
                            Get comprehensive information about each book, including summaries, author details, 
                            ratings, and reviews from other readers.
                            Buy physical copies or e-books directly through the app, or rent e-books 
                            for a limited period.
                        </p>
                        <button type="button" className="home-button" onClick={this.onClickExploreButton}>Explore Books</button>
                    </div>
                    <img src="https://res.cloudinary.com/dksovm4dg/image/upload/v1719236178/books_freepik_image_gbm7fj.avif" alt="home" className="home-image" />
                    
                </div>
                
                
                
            </div>
            
        )
    }
}

export default Home