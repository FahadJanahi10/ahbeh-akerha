const express = require("express")
const app = express()
const PORT = 3000
const ejsLayouts = require("express-ejs-layouts")

// middleware
app.set("view engine", "ejs")
app.use(ejsLayouts)

// route
app.get("/", (req, res)=>{
    res.render("home.ejs")
})

app.get("/animals", (req, res)=>{
    res.render("animals.ejs", {animals: ["dogs", "cats", "monkeys", "alligators", "dinasors"]})
})

app.listen(PORT, ()=>{
    console.log("hi")
})