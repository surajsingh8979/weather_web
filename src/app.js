const express= require('express');
const app= express();
const port = 8080
const path= require('path');
const hbs= require('hbs');


const static_path= path.join(__dirname,"../");
const template_path= path.join(__dirname,"../views");
const partials_path= path.join(__dirname,"../partials");


app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));


app.get("/",(req,res)=>{
    res.render('index.hbs')
})

app.get("/about",(req,res)=>{
    res.render('about.hbs')
})

app.get("/weather",(req,res)=>{
    res.render('weather.hbs')
})
app.get("*",(req,res)=>{
    res.render('404error.hbs',{
        errorMsg:'opps Page Not Found.'
    })
})
app.listen(port , ()=>{
    console.log('listening to the port at ${port}')
})
