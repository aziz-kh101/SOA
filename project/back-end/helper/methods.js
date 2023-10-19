module.exports = {
  userExist(user) {
    return (
      user &&
      user.hasOwnProperty("email") &&
      user.email !== "" &&
      user.hasOwnProperty("password") &&
      user.password !== "" &&
      user.hasOwnProperty("first_name") &&
      user.first_name !== "" &&
      user.hasOwnProperty("last_name") &&
      user.last_name !== ""
    );
  },
};
