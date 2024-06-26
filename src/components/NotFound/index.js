import { Component } from "react";
import './index.css'
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

class NotFound extends Component {
    render() {
        return (
            <div className="not-found-container">
                <h1 className="not-found-heading">Your Cart Is Empty</h1>
                <p className="not-found-para">The page you were looking for can't be found.</p>
                <Link to="/" className="link-ele">
                    <button type="button" className="back-button">
                        <IoIosArrowBack className="back-icon" />
                        GO BACK TO HOME PAGE
                    </button>
                </Link>
            </div>
        )
    }
}

export default NotFound