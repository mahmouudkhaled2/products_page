# E-commerce Product Listing Page


This project is a simple e-commerce product listing page that fetches product data from the Fake Store API. The aim is to demonstrate front-end skills, focusing on clean, user-friendly design and responsive layouts.


### Live Demo: 
Check out the live version of the project [here](https://products-page-eosin.vercel.app/).

### Features:
- #### Product Listing:
    Displays products with an image, title, price, and rating in a  card format.
- #### Responsive Design: 
    Built using CSS Flexbox/Grid for a seamless experience across devices.
- #### Loading Indicator: 
    Shows a spinner or loading message while fetching data.
- #### Error Handling: 
    Displays an error message if data fetching fails.


### Technologies Used

- #### Framework: 
    React JS

- #### Styling: 
    Tailwind CSS


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Approach

1. `Data Fetching`: Used `axios` to retrieve product data from the [Fake Store API](https://fakestoreapi.com/).
2. `Responsive Layout`: Designed with `Tailwind CSS` to create a mobile-friendly interface.
3. `Loading and Error Handling`: Added a loading spinner to improve user experience during data retrieval and an error message for failed requests.

## Challenges

+ `Responsive Layout`: Ensuring that the product cards look good on both mobile and desktop required careful layout and media queries.

+ `Error Handling`: Implemented error handling for potential API issues, ensuring that users receive feedback if data fails to load.

