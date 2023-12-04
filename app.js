const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const fs = require('fs');

const port = 3000 //.env

app.use(express.static(path.join(__dirname, "public")));

//ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/src/views"))

app.use(expressLayouts);
app.set("layout","layouts/layout")

// configuración PUT y DELETE
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));

//rutas
app.use(require("./src/routes/main.router.js"))

//app.get('/', (req, res)=> res.send('Hello worls..!'));

app.listen(port,()=>console.log(`Comenzó a correr el servidor  en el puerto http://localhost:${port}`));