require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3300;
const mongoose = require("mongoose");
const shopModel = require("./model/shopmodel");
const overRide = require('method-override');




//====== Create DB Connection =======
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () =>
    console.log('Database is connected')
);


//middleware is using here
app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));
app.use(express.json());
app.use(overRide('_method'))
app.use((req, res, next) =>{
    console.log("Code working Fine")
    next();
})


//defining .jsx engine
app.set("view engine","jsx");
app.engine('jsx', require('express-react-views').createEngine());

//======== route to access the views =====
//Index page Route   
app.get('/shop', (req, res) => {
    //Query Model to return all products
    shopModel.find({}, (err, allProduct)=> {
        res.render('shop',{
            shop: allProduct
        })
    });
});
//route to register product 
app.post('/shop', (req,res) =>{
    shopModel.create(req.body, (err, productCreated)=>{
        // res.send(productCreated);
    })
    res.redirect('/shop');
})
//Delete Route to Delete Product
app.delete('/shop/product/:id', (req, res)=>{
    shopModel.findByIdAndDelete(req.params.id, (err)=>{
        if (!err){
            res.status(200).redirect('/shop');
        }else{
            res.status(400).json(err);
        }
    })
})

//Update Route to update db Value from edit page
app.put('/shop/product/:id',(req,res)=>{
    shopModel.findByIdAndUpdate(req.params.id, req.body,{new:true} ,(err, updateProduct)=>{
        if(!err){
            res.status(200).redirect('/shop')
        }else{
            res.status(400).json(err)
        }
    })
})



//Edit Route to read DB Data to Form
app.get('/shop/product/:id/edit', (req, res) =>{
    shopModel.findById(req.params.id, (err, editProductById)=> {
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



// console.log("testing");

//calling the browser port here
app.listen(port, ()=> console.log(`listening the port ${port}`))