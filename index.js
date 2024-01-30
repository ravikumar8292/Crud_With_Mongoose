const express = require('express');
require('./config');
const product = require('./product');


const app = express();
app.use(express.json());

app.post('/create', async (req,res)=>{
    const data = new product(req.body);
    const result = await data.save();
    console.log(result);
    res.send(result);

})

app.get('/list', async (req,res)=>{
    const data = await product.find();
    res.send(data);
})

app.delete('/delete/:_id', async (req,res)=>{
    console.log(req.params);
    const data = await product.deleteOne(req.params);
    res.send(data);
})

app.put('/update/:_id', async (req,res)=>{
    console.log(req.params);
    const data = await product.updateOne(
        req.params,
        {
            $set: req.body
        }
    );
    res.send(data);
})

app.listen(5000);