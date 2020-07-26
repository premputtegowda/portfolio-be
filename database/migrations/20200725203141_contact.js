
exports.up = function(knex) {
  return knex.schema.createTable("contacts", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl.varchar("email", 255).notNullable();
      tbl.string("message", 280).notNullable();

  })
};

exports.down = function(knex) {

    return knex.schema.dropTableIfExists("contacts");
};
  

