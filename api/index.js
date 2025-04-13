const express = require('express');
const cors = require('cors');//Cress-Origin Resource Sharing, permite que tu API pueda ser accedida desde otros dominios
const app = express();
app.use(cors());
app.use(express.json());
const productosRouter = require('./routes/productos');
app.use('/api/productos', productosRouter);
app.listen(3000, () =>{
    console.log('API corriendo en http://localhost:3000');
});