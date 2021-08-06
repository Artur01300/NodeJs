'use strict'

//Lit de manière asynchrone tout le contenu d'un fichier.
const {readFile} = require('fs');

//promisify est un fonction intégré dans le node, cet fonction est disponible dans le packet util
//promisify va nous permet de conversire nodre méthode readFile qui utilise coleback
const {promisify} = require('util');
const readFileAsync = promisify(readFile);

const INDEX_URL = 'C:/Users/Luys/Desktop/Integration_Template_Furnitur 2/index.html';
const READ_OPTIONS = { encoding: 'UTF-8' };

module.exports = async() =>{
    //récupérer le contenyu du fichier html index.html
    const contenu = await readFileAsync(INDEX_URL, READ_OPTIONS);
    
    //retourner la page html
    return contenu;
}