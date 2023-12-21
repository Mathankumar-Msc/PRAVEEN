const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Mathan:Mathan123@cluster0.slq6nhk.mongodb.net/')
.then(()=>{
    console.log("DB connected");
}).catch(()=>{
    console.log("DB not connected");

})
const schema = require('./schema')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.post('/post',(req,res)=>{
    const data = new schema({
       ...req.body
    })
    data.save().then(()=>{
        res.json(data)
    }).catch(()=>{
        res.json("something wrong")
    })

})

app.get('/get',async(req,res)=>{
const data = await schema.find({})
res.json(data)
})
app.put('/put/:id',async(req,res)=>{
    const data = await schema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.json(data)
})

app.delete('/delete/:id',async(req,res)=>{
    const data = await schema.findByIdAndDelete(req.params.id)

    res.json({msg:"data deleted successfully"})
})






app.listen(5000,()=>{
    console.log("server is running on port 5000");
})