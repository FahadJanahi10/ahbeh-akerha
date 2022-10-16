const express = require("express")
const app = express()
const PORT = 3000
const ejsLayouts = require("express-ejs-layouts")

// middleware
app.set("view engine", "ejs")
app.use(ejsLayouts)

// ROUTES
// home
app.get("/", (req, res)=>{
    res.render("home.ejs")
})
// animals
app.get("/animals", (req, res)=>{
    res.render("animals.ejs", {animals: ["dogs", "cats", "monkeys", "alligators", "dinasors"]})
})

// foods
app.get("/foods", (req, res)=>{
    res.render("foods.ejs", {foods: ["moms food", "healthy calory"]})
})

// movies
app.get("/movies", (req, res)=>{
    res.render("movies.ejs", {movies: ["south park"]})
})

// products
app.get("/products", (req, res)=>{
    res.render("products.ejs", {products: ["shampoo", "coffee"]})
})

app.listen(PORT, ()=>{
    console.log("hi")
})