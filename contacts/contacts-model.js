const db = require("../database/dbConfig.js")

module.exports = {
    add,
    findById,
}

function add(message){
    return db('contacts')
    .insert(message,)
    .then(ids => {
        const [id] = ids;
        return findById(id)
    })

}

function findById(id){
    return db('contacts')
    .where('id', Number(id))
    .select("id","name","message")
    .first()
}