const knex = require("../helper/knex");

module.exports = {
  async signIn(email, password) {
    console.log(knex("user").where({ email, password }).first().toSQL());
    return await knex("user").where({ email, password }).first();
  },
  async addUser(user) {
    return await knex("user").insert(user);
  },
  async getUser(email) {
    return await knex("user").where({ email }).first();
  },
  async updateUser(email, user) {
    return await knex("user").where({ email }).update(user);
  },
  async deleteUser(email) {
    return await knex("user").where({ email }).del();
  },
  async getAllUsers() {
    return await knex("user");
  },
  async getAllStudents() {
    return await knex("user").where({ type: 3 });
  },
  async getAllTeachers() {
    return await knex("user").where({ type: 2 });
  },
  async getAllAdmins() {
    return await knex("user").where({ type: 1 });
  },
  async getPresenceStat() {
    return await knex({ u: "user" })
      .select(
        "p.present",
        knex.raw(
          "COUNT(present) / (select count(*) from presence) * 100 as percentage"
        )
      )
      .count({ count: "p.present" })
      .leftJoin({ p: "presence" }, "u.email", "p.p_user_email")
      .where({ "u.type": 3 })
      .groupBy("p.present");
  },
  async getSuccessStat() {
    return await knex({ u: "user" })
      .select(
        "n.status",
        knex.raw(
          "COUNT(status) / (select count(*) from note) * 100 as percentage"
        )
      )
      .count({ count: "n.status" })
      .leftJoin({ n: "note" }, "u.email", "n.n_user_email")
      .where({ "u.type": 3 })
      .groupBy("n.status");
  },
};
