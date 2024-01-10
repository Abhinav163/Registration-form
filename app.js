const express = require('express');
const app = express();
let port = 3000;
const path = require('path');
const empCollection = require('./model/model')


const template_path = path.join(__dirname, '../template/views');
app.set('view engine','hbs');
app.set('views',template_path);

app.use(express.urlencoded({extended :false}));

require('./db/db');

app.get('/',(req,res) =>{
    res.render('index')
})

app.post('/regdata', async (req,res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.cpassword;

        if(password == cpassword){
        const regData = new empCollection({
            email : req.body.mail,
            password : req.body.password,
            cpassword : req.body.cpassword
        });

        const postData = await regData.save();
        res.send(postData);
        }
        else{
        res.send("password does not match")
        }
    } catch (error) {
        res.send(error);
        console.log(error);
    }
})

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})