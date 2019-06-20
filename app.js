const express = require('express');
const morgan = require ('morgan');
const layout = require('./views/layout');
const models = require('./models');
const wikirouter = require('./routes/wiki');
const userrouter = require('./routes/user');
const app= express();
const PORT = 3000;
app.use(morgan("dev"))
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.get('/',(req,res)=>{
    res.redirect("/wiki")
})

const init = async() =>{
    await models.db.sync({force: true});
    app.listen(PORT, () => {
        console.log(`Server listening in port ${PORT}`)
    })
}
try{init()}
catch(error){next(error)};

app.use('/wiki', wikirouter);
app.use('/user', userrouter)


//hi
