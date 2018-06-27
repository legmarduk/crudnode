const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection =require('express-myconnection');

const app = express();

//import de rutas
const clientesRutas =require('./routes/clientes');



// setting //
app.set('port',process.env.PORT || 3000); //aqui se define el puerto que le entrega el SO   
app.set('view engine','ejs'); // le indico el motor de plantillas 
app.set('views' , path.join(__dirname,'views')) /*el modulo path une los directorios (evito poner la ruta del las
    carpetas al momento de la busqueda) y dirname da la dir de donde se ejecuta*/ 


//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host:'localhost',
    user:'root',
    password:'',
    port: 3306,
    database: 'crudnode'

},'single'));

app.use(express.urlencoded({extended: false})); /*llamo a express para obtener los datos del form y false por que
son datos simples de entender no imagenes etc*/

//routes
app.use('/', clientesRutas);


//archivos estaticos (para imagenes, codigo fuentes, javascript etc) en carpeta public
app.use(express.static(path.join(__dirname,'public')));




app.listen(app.get('port'), () =>{
    console.log('server en el puerto 3000');
});
