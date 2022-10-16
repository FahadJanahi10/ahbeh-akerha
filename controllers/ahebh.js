const express = require("express")
const router = express.Router()

module.exports = router

// animals
router.get("/animals", (req, res)=>{
    res.render("animals.ejs", {animals: ["dogs", "cats", "monkeys", "alligators", "dinasors"]})
})

// foods
router.get("/foods", (req, res)=>{
    res.render("foods.ejs", {foods: ["moms food", "healthy calory"]})
})