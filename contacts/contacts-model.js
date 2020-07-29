const db = require("../database/dbConfig.js")

module.exports = {
    add,
    findById,
}

function add(message){
    return db('contacts')
    .insert(message,"id")
    .then(ids => {
        const [id] = ids;
        return findById(id)
    })

}

//find by the contact id

function findById(id){
    return db('contacts')
    .where('id', Number(id))
    .select("id","name","email","message")
    .first()
}