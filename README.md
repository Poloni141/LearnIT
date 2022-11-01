# LearnIT (Coderhouse Ecommerce Project)

## General info

This project is a work in progress Ecommerce of IT books

## Technologies

The project was created with:

- React
- Materiaul UI
- Sweet Alert 2
- React Dom

### Create react App

- To start the project you have to create the folder first and open CLI in the folder.
- Next you have to do is start an app typing "npx create-react-app name-of-app" in the opened CLI. Once the app is created you have to move to the folder created with the name of your app typing "cd name-of-app" and then you could try start the app with "npm start"

#### Example

```
npx create-react-app name-of-app
cd name-of-app
npm start
```

### Routes

- The route "/" is the home page.
- The route "/category/:categoryId" shows you the filtered products.
- The route "/book/:itemID" shows a detailed information about the product, price, stock, add to cart button.
- The route "/cart" shows you the cart.
