# Title

   React JS Fullstack Assignment - Interactive Bookstore Application
## Objective

   The application should allow users to browse and search for books, view book details, add books to a shopping cart, and place an order.

## Tech Stack

    ReactJS, React Router, Redux or React Context API, CSS or CSS frameworks, Git, and GitHub for hosting the repository.

## Completion Instructions

### Functionality

#### Must Have

*   Multiple pages/components, including Home, Book Listing, Book Details, Shopping Cart, and Checkout pages.

*   Implement features such as book search, book filtering, add to cart, remove from cart, and order placement.

#### Pages

    Page: Home
    Page Details:
        Header - links for pages Home, Book List, Cart
        Banner - Heading, description, and “Explore Books” Button
    Navigation:

    Page: Book List
    Page Details: 
        Header - links for pages Home, Book List, Cart, Book Items, Search, Filter
        Book Items, Search, Filter
    Navigation:
        "Book List" link in Header
        "Explore Books" Button
        "Back" Button in Book Details Page

    Page: Book Details
    Page Details: 
        Book detailed Information
        "Add to cart" Button
        "Back" button
    Navigation: Each Book Item in Book List Page

    Page: Cart
    Page Details:
        Cart Items,
        "Remove" Button
        Order Summary
        "Checkout" Button
    Navigation: "Cart" link in Header

    Page: Checkout
    Page Details: 
        "Back" Button,
        Order Form (Personal Details, Summary, Place Order)
    Navigation: Checkout in Cart


#### Nice to Have

*   Implement user authentication

### Guidelines to develop a project

#### Must Have

*   Create a new public repository on GitHub for the        assignment.
*   Commit your code regularly and include clear commit messages.
*   Include a README file explaining the project setup, usage instructions, and any additional information.
*   Ensure the repository is well-organized and easy to navigate.

#### Nice to Have

*   Implement unit tests

### Submission Instructions

#### Must Have

*   Github Repository

#### Nice to Have

*   Deploy the application on a hosting platform.

#### Technical Details

### Routes

|   Page	        |   Route	        |    Path           |
| ----------------- | ----------------- | ----------------- |
|   Home	        |   Home	        |   /               |
|   Book List	    |   Book List	    |   /books          |
|   Book Details	|   Book Details	|   /books/:id      |
|   Cart	        |   Cart	        |   /cart           |
|   Checkout	    |   Checkout	    |   /checkout       |
|   Not Found	    |   Not Found	    |   /not-found      |

Home

|   Component	|   Details	                                            |   State	    |   API (IT Bookstore)  |
| ------------- | ----------------------------------------------------- | ------------- | --------------------  |
|   Home	    |   Heading, Description, and "ExploreBooks" button	    |   -	        |   -                   |
|   Header	    |   links for pages Home, Book List, Cart	            |   -	        |   -                   |

Book List

|   Component	    |   Details                                        |   	State	                                 |  	API (IT Bookstore)  |
| ----------------- | ------------------------------------------------ | ------------------------------------------- | -----------------------  |
|   BookList	    |                                                  |    apiStatus, booksData, priceRangeValue    |      /new                |
|   Header	        |   links for pages Home, Book List, Cart	       |    -	                                     |   	-                   |
|   SearchInput	    |   Search (by title, author)	                   |    searchInputValue                         |   	/search/{query}     |
|   PriceRange	    |   Filter (by price)	                           |    -	                                     |   	-                   |
|   BookItem	    |   Book Items (title, subtitle, image, price)	   |    -	                                     |   	-                   |
|   Loader		    |                                                  |    -	                                     |   	-                   |
|   ErrorMessage    |                                                  |    -	                                     |   	-                   |

Book Details

Component	Details	State	API (IT Bookstore)
BookDetails	Book detailed Information - image, title, subtitle, price, description, etc., “Add to cart” Button, “Back” button	apiStatus, bookDetailsData	/books/{isbn}
Header	links for pages Home, Book List, Cart	-	-
Loader		-	-
ErrorMessage		-	-

Cart

Components	Details	State	API (IT Bookstore)
Cart	Cart Items, “Remove” Button, Order Summary, “Checkout” Button	(Context Consumer)	-
Header	links for pages Home, Book List, Cart	-	-
CartItem	Book Detailed Info (image, title, subtitle, price, description)	(Context Consumer)	-
Checkout

Components	Details	State	API (IT Bookstore)
Checkout	“Back” button	(Context Consumer)	-
UserDetailsForm	Order Form - Personal Details - First Name, Last Name, Email, Mobile No. , Place Order Button, Order Summary	userDetails, isFormSubmitted	-
Not Found

Components	Details	State	API (IT Bookstore)
NotFound	-	-	-
Header	links for pages Home, Book List, Cart	Header	links for pages Home, Book List, Cart
App

Component	Details	State	API (IT Bookstore)
App	-	cartList (Context Provider), Context: cartList, addToCart, deleteFromCart	-

## Resources

### Design files

    Pages: Home, Book List, Book Details, Shopping Cart, Checkout
    Reference: Crossword

### APIs

   Books, Book Details, Search
    Reference: https://api.itbook.store

### Third-party packages

*   React Router (react-router-dom)
*   Loader (react-loader-spinner)
*   Icons (react-icons)
*   Range Slider (rc-slider)
