const mongoose = require('mongoose');

mongoose.set(`strictQuery`, true)

async function startDB(){
    await mongoose.connect('mongodb+srv://MauricioAlcantara:Xf27COv85P@cluster0.nfln2lz.mongodb.net/API-Italo');
}

module.exports = startDB;