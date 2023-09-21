const mongoose = require('mongoose')
require('dotenv').config('mongodb+srv://andressabohler:IuekILqhMqcnNIEG@clustermulheres.ykjcipm.mongodb.net/?retryWrites=true&w=majority')

async function conectaBancoDeDados() {
   try {
    console.log('Conexão com o banco de dados iniciou') 

    await mongoose.connect(process.env.MONGO_URL)

    console.log('Conexão com o banco de dados feita com sucesso!')
} catch(erro) {
    console.log(erro)
    } 
}

module.exports = conectaBancoDeDados