/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("user", (table) => {
      table.string("email").primary();
      table.string("password");
      table.string("first_name");
      table.string("last_name");
      table.integer("type"); //0 -> super_admin; 1 -> admin ;  2 -> teacher ; 3 -> student
    })
    .createTable("class", (table) => {
      table.string("code").primary();
      table.string("name");
    })
    .createTable("user_class", (table) => {
      table
        .string("uc_user_email")
        .references("email")
        .inTable("user")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .string("uc_class_code")
        .references("code")
        .inTable("class")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.date("year");
    })
    .createTable("note", (table) => {
      table
        .string("n_user_email")
        .references("email")
        .inTable("user")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.float("note");
      table.enum("status", ["PASS", "FAIL"]);
    })
    .createTable("presence", (table) => {
      table
        .string("p_user_email")
        .references("email")
        .inTable("user")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.boolean("present");
      table.dateTime("session_date");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("presence")
    .dropTable("note")
    .dropTable("user_class")
    .dropTable("class")
    .dropTable("user");
};
