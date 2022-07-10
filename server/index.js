const express = require('express');
const app = express();
//const routes = require("./routes/server.routes");
const morgan = require('morgan');
const {mongoose} = require('./database');

//Practica 10
const cors = require('cors');
//---------------------------------

//settings
app.set('puerto', process.env.PORT|| 3000);

//middleware
app.use(morgan('dev'));
app.use(express.json());
//app.use(routes);

//routes
app.use('/api/gastos', require("./routes/server.routes"));

app.listen(app.get('puerto'), () => {
    console.log('Nombre de la App ', app.get('nombreApp'));
    console.log('Puerto del servidor ', app.get('puerto'));
})