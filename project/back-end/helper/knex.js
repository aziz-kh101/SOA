const configFile = require("../knexfile");
const config = configFile[process.env.NODE_ENV || "development"];
module.exports = require("knex")(config);
