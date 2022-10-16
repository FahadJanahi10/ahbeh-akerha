const express = require("express")
const app = express()
const PORT = 3000
const ejsLayouts = require("express-ejs-layouts")

// middleware
app.set("view engine", "ejs")
app.use(ejsLayouts)
// controllers middleware
app.use("/ahebh", require("./controllers/ahebh"))
app.use("/akerha", require("./controllers/akerha"))

// ROUTES
// home
app.get("/", (req, res)=>{
    res.render("home.ejs")
})

app.listen(PORT, ()=>{
    console.log("hi")
})