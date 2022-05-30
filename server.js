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
    model.find({}, (err, allProduct) => {
        res.render('shop',{shop: allProduct})
    })  
});

// NEW/register
app.post('/shop', (req, res) =>{
    model.find.create(req.body, (err, productCreated)=>{

    })
    res.render('/shop');
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
app.put('/shop/product/:id',(req,res)=>{
    model.findByIdAndUpdate(req.params.id, req.body,{new:true} ,(err, updateProduct)=>{
        if(!err){
            res.status(200).redirect('/shop')
        }else{
            res.status(400).json(err)
        }
    })
})

//EDIT
app.get('/shop/product/:id/edit', (req, res) =>{
    model.findById(req.params.id, (err, editProductById)=> {
        if(!err){
            res.render('edit', {editProduct:editProductById})
        }else{
            res.status(400).json(err);
        }
    })
})


//route to change Quantity
app.put('/shop/product/:id/buyNow', async(req, res)=> {
    const foundproduct = await shopModel.findById(req.params.id);
    shopModel.findByIdAndUpdate(req.params.id, {pstock: foundproduct.pstock - 1}, {new:true}, (err, updateproduct) => {
        res.redirect(`/shop/product/${req.params.id}`)
    })
})

//route to check product
app.get("/shop/product/:id", (req, res)=>{
    shopModel.findById(req.params.id,(err, productByID)=>{
        res.render('product', {product:productByID})
    });
});

//rendering shop page
// 
app.get("/shop/register", (req,res)=>{
    res.render('register')
})



//calling the browser port here
app.listen(port, () => console.log(`listening the port ${port}`))



