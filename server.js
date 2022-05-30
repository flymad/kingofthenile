require("dotenv").config();
const express = require("express");
const app = express();
const port = 2700;
const mongoose = require("mongoose");
const Product = require("./model/model");

// ===== MongoDB connection =====
mongoose.connect(process.env.MONGO_URI,{
    useNewURLParser:true,
    useUnifiedTopology:true
})
mongoose.connection.once('open', () => console.log("Connected to Mongo"));

// ===== Middleware ===== 
app.use(express.urlencoded({extended:false}));
app.use(express.static("pictures"))

// Use Express middleware to parse JSON.
app.use(express.json())
app.use((req, res, next) =>{
    console.log("Code working Fine")
        next();
})

// defining .jsx engine
app.set("view engine","jsx")
app.engine('jsx', require('express-react-views').createEngine()
);

// ===== Routes =====

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Index
app.get("/shop", (req, res)=> {
    // Query model to return all products
    Product.find({}, (err, foundProduct) => {
        res.render('Shop',{product: foundProduct})
    })  
});

// NEW
app.post('/register', (req, res) =>{
    Product.find.creat(req.body, (err, productCreated)=>{

    })
    res.render('/register');
});

//DELETE
app.delete('/shop/product/:id', (req, res)=>{
    model.findByIdAndDelete(req.params.id, (err)=>{
        if (!err){
            res.status(200).redirect('/shop');
        }else{
            res.status(400).json(err);
        }
    })
})


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




//calling the browser port here
app.listen(port, () => console.log(`listening the port ${port}`))



