//https://www.youtube.com/watch?v=09tWCISVU70

'use strict'

/* eslint-env node, es6 */

//importe le paquet express
const express = require('express')

const PORT = 6300

//créé une application expres
const app = express();

//importer la logique de la page d'accueil
const genererPageAcceuil = require('./pages/index-get.js')

//écoute le méthode GET et la route '/'
app.get('/', async(req, res)=>{
    const indexHtml = await genererPageAcceuil()
    res.send(indexHtml)
});

//Routourne les images
app.use('/img', express.static('C:/Users/Luys/Desktop/Integration_Template_Furnitur 2/img'));
//Routourne les styles
app.use('/css', express.static('C:/Users/Luys/Desktop/Integration_Template_Furnitur 2/css'));

//Routourne les fonts
app.use('/fonts', express.static('C:/Users/Luys/Desktop/Integration_Template_Furnitur 2/fonts'));

//Routourne la page living_room.html
app.use('/', express.static('C:/Users/Luys/Desktop/Integration_Template_Furnitur 2/'));


//démarrer le serveur et écvouter un port donné
app.listen(PORT, ()=>{
    console.log(`Serveur démarré: http://localhost:${PORT}`)
})