require("dotenv").config()
const express = require("express")
const app = express();
const port = 2700;
const mongoose = require("mongoose")
const Product = require("./model/model")
//MongoDB connection

mongoose.connect(process.env.MONGO_URI,{
    useNewURLParser:true,
    useUnifiedTopology:true
})
mongoose.connection.once("open",() => console.log("Tuan is the man"))

// middleware 

app.use(express.urlencoded( {extended:false}))
app.use(express.static("pictures"))
app.use(express.json())

// app.use((req, res, next) =>{
//     console.log("Code working Fine")
//         next();
// })

// defining .jsx engine
app.set("view engine","jsx")
app.engine('jsx', require('express-react-views').createEngine()
);
//I.N.D.U.C.E.S
//index
app.get("/shop", (req,res)=>{
    Product.find({},(error,foundProduct)=> {
        res.render('Shop',{product:foundProduct})
    })
    
})
//NEW
app.get('/register', (req,res) => {
    res.render('register')
})
//DELETE
//UPDATE
//CREATE
app.post("/shop", (req,res) => {
    console.log(req.body)
    Product.create(req.body,(error,createdProduct)=> {
        res.redirect("/shop")
    })
})
//EDIT
//SHOW
//just reading the attributes of views
//registeration page view

let tuan =""



//calling the browser port here
app.listen(port, ()=> console.log(`listening the port ${port}`))



