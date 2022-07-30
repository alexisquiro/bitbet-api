const express=require('express');
const morgan = require('morgan')
const app=express();


//setting

app.set('port',process.env.PORT||4000);



//middlewares
app.use(express.json());
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}));
app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    next();
  
  });



//routes 

app.use(require('./routes/user/user-routes'));



//start server
app.listen(app.get('port'));


