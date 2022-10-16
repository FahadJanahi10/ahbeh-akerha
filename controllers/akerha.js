const express = require("express")
const router = express.Router()

// routes go here
module.exports = router
// movies
router.get("/movies", (req, res)=>{
    res.render("movies.ejs", {movies: ["south park"]})
})

// products
router.get("/products", (req, res)=>{
    res.render("products.ejs", {products: ["shampoo", "coffee"]})
})
