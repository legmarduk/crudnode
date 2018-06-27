const express = require('express');
const router = express.Router();

// import
const clienteController = require('../controllers/clientesController');

router.get('/',clienteController.list ); // va al controlador de cliente y usa el metodo list
router.post('/add',clienteController.save);
router.get('/delete/:id', clienteController.delete); //entiende que va a llegar un valor que cambia segun el caso

router.get('/update/:id', clienteController.edit);
router.post('/update/:id', clienteController.update);

module.exports = router; // exportas todo lo que este dentro de router a otros archivos donde lo llames