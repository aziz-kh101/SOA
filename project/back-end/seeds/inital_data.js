/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("presence").del();
  await knex("note").del();
  await knex("user_class").del();
  await knex("class").del();
  await knex("user").del();

  await knex("user").insert([
    // super admin
    {
      email: "aziz@mail.com",
      password: "123456",
      first_name: "aziz",
      last_name: "kh",
      type: 0,
    },

    // admins
    {
      email: "AAAA@mail.com",
      password: "123456",
      first_name: "AAAA",
      last_name: "AAAA",
      type: 1,
    },
    {
      email: "BBBB@mail.com",
      password: "123456",
      first_name: "BBBB",
      last_name: "BBBB",
      type: 1,
    },

    // teachers
    {
      email: "CCCC@mail.com",
      password: "123456",
      first_name: "CCCC",
      last_name: "CCCC",
      type: 2,
    },
    {
      email: "DDDD@mail.com",
      password: "123456",
      first_name: "DDDD",
      last_name: "DDDD",
      type: 2,
    },
    {
      email: "EEEE@mail.com",
      password: "123456",
      first_name: "EEEE",
      last_name: "EEEE",
      type: 2,
    },
    {
      email: "FFFF@mail.com",
      password: "123456",
      first_name: "FFFF",
      last_name: "FFFF",
      type: 2,
    },
    {
      email: "GGGG@mail.com",
      password: "123456",
      first_name: "GGGG",
      last_name: "GGGG",
      type: 2,
    },

    // students
    {
      email: "HHHH@mail.com",
      password: "123456",
      first_name: "HHHH",
      last_name: "HHHH",
      type: 3,
    },
    {
      email: "IIII@mail.com",
      password: "123456",
      first_name: "IIII",
      last_name: "IIII",
      type: 3,
    },
    {
      email: "JJJJ@mail.com",
      password: "123456",
      first_name: "JJJJ",
      last_name: "JJJJ",
      type: 3,
    },
    {
      email: "KKKK@mail.com",
      password: "123456",
      first_name: "KKKK",
      last_name: "KKKK",
      type: 3,
    },
    {
      email: "LLLL@mail.com",
      password: "123456",
      first_name: "LLLL",
      last_name: "LLLL",
      type: 3,
    },
    {
      email: "MMMM@mail.com",
      password: "123456",
      first_name: "MMMM",
      last_name: "MMMM",
      type: 3,
    },
    {
      email: "NNNN@mail.com",
      password: "123456",
      first_name: "NNNN",
      last_name: "NNNN",
      type: 3,
    },
    {
      email: "OOOO@mail.com",
      password: "123456",
      first_name: "OOOO",
      last_name: "OOOO",
      type: 3,
    },
    {
      email: "PPPP@mail.com",
      password: "123456",
      first_name: "PPPP",
      last_name: "PPPP",
      type: 3,
    },
    {
      email: "QQQQ@mail.com",
      password: "123456",
      first_name: "QQQQ",
      last_name: "QQQQ",
      type: 3,
    },
    {
      email: "RRRR@mail.com",
      password: "123456",
      first_name: "RRRR",
      last_name: "RRRR",
      type: 3,
    },
    {
      email: "SSSS@mail.com",
      password: "123456",
      first_name: "SSSS",
      last_name: "SSSS",
      type: 3,
    },
    {
      email: "TTTT@mail.com",
      password: "123456",
      first_name: "TTTT",
      last_name: "TTTT",
      type: 3,
    },
    {
      email: "UUUU@mail.com",
      password: "123456",
      first_name: "UUUU",
      last_name: "UUUU",
      type: 3,
    },
    {
      email: "VVVV@mail.com",
      password: "123456",
      first_name: "VVVV",
      last_name: "VVVV",
      type: 3,
    },
    {
      email: "WWWW@mail.com",
      password: "123456",
      first_name: "WWWW",
      last_name: "WWWW",
      type: 3,
    },
    {
      email: "XXXX@mail.com",
      password: "123456",
      first_name: "XXXX",
      last_name: "XXXX",
      type: 3,
    },
    {
      email: "YYYY@mail.com",
      password: "123456",
      first_name: "YYYY",
      last_name: "YYYY",
      type: 3,
    },
    {
      email: "ZZZZ@mail.com",
      password: "123456",
      first_name: "ZZZZ",
      last_name: "ZZZZ",
      type: 3,
    },
  ]);

  await knex("class").insert([
    {
      code: "CII-2-DMWM-A",
      name: "Développement Mobile Web et Multimédia (A)",
    },
    {
      code: "CII-2-DMWM-B",
      name: "Développement Mobile Web et Multimédia (B)",
    },
  ]);

  await knex("user_class").insert([
    // teachers
    {
      uc_user_email: "CCCC@mail.com",
      uc_class_code: "CII-2-DMWM-A",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "DDDD@mail.com",
      uc_class_code: "CII-2-DMWM-A",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "EEEE@mail.com",
      uc_class_code: "CII-2-DMWM-B",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "FFFF@mail.com",
      uc_class_code: "CII-2-DMWM-B",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "GGGG@mail.com",
      uc_class_code: "CII-2-DMWM-A",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "GGGG@mail.com",
      uc_class_code: "CII-2-DMWM-B",
      year: new Date().toISOString().split("T")[0],
    },
    // student
    // class : CII-2-DMWM-A
    {
      uc_user_email: "HHHH@mail.com",
      uc_class_code: "CII-2-DMWM-A",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "IIII@mail.com",
      uc_class_code: "CII-2-DMWM-A",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "JJJJ@mail.com",
      uc_class_code: "CII-2-DMWM-A",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "KKKK@mail.com",
      uc_class_code: "CII-2-DMWM-A",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "LLLL@mail.com",
      uc_class_code: "CII-2-DMWM-A",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "MMMM@mail.com",
      uc_class_code: "CII-2-DMWM-A",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "NNNN@mail.com",
      uc_class_code: "CII-2-DMWM-A",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "OOOO@mail.com",
      uc_class_code: "CII-2-DMWM-A",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "PPPP@mail.com",
      uc_class_code: "CII-2-DMWM-A",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "QQQQ@mail.com",
      uc_class_code: "CII-2-DMWM-A",
      year: new Date().toISOString().split("T")[0],
    },
    // class : CII-2-DMWM-B
    {
      uc_user_email: "RRRR@mail.com",
      uc_class_code: "CII-2-DMWM-B",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "SSSS@mail.com",
      uc_class_code: "CII-2-DMWM-B",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "TTTT@mail.com",
      uc_class_code: "CII-2-DMWM-B",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "UUUU@mail.com",
      uc_class_code: "CII-2-DMWM-B",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "VVVV@mail.com",
      uc_class_code: "CII-2-DMWM-B",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "WWWW@mail.com",
      uc_class_code: "CII-2-DMWM-B",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "XXXX@mail.com",
      uc_class_code: "CII-2-DMWM-B",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "YYYY@mail.com",
      uc_class_code: "CII-2-DMWM-B",
      year: new Date().toISOString().split("T")[0],
    },
    {
      uc_user_email: "ZZZZ@mail.com",
      uc_class_code: "CII-2-DMWM-B",
      year: new Date().toISOString().split("T")[0],
    },
  ]);

  await knex("note").insert([
    { n_user_email: "HHHH@mail.com", note: 6, status: "FAIL" },
    { n_user_email: "IIII@mail.com", note: 11, status: "PASS" },
    { n_user_email: "JJJJ@mail.com", note: 17, status: "PASS" },
    { n_user_email: "KKKK@mail.com", note: 10, status: "PASS" },
    { n_user_email: "LLLL@mail.com", note: 1, status: "FAIL" },
    { n_user_email: "MMMM@mail.com", note: 14, status: "PASS" },
    { n_user_email: "NNNN@mail.com", note: 13, status: "PASS" },
    { n_user_email: "OOOO@mail.com", note: 3, status: "FAIL" },
    { n_user_email: "PPPP@mail.com", note: 8, status: "FAIL" },
    { n_user_email: "QQQQ@mail.com", note: 5, status: "FAIL" },
    { n_user_email: "RRRR@mail.com", note: 20, status: "PASS" },
    { n_user_email: "SSSS@mail.com", note: 10, status: "PASS" },
    { n_user_email: "TTTT@mail.com", note: 4, status: "FAIL" },
    { n_user_email: "UUUU@mail.com", note: 13, status: "PASS" },
    { n_user_email: "VVVV@mail.com", note: 17, status: "PASS" },
    { n_user_email: "WWWW@mail.com", note: 13, status: "PASS" },
    { n_user_email: "XXXX@mail.com", note: 1, status: "FAIL" },
    { n_user_email: "YYYY@mail.com", note: 12, status: "PASS" },
    { n_user_email: "ZZZZ@mail.com", note: 3, status: "FAIL" },
  ]);

  await knex("presence").insert([
    {
      p_user_email: "HHHH@mail.com",
      present: true,
      session_date: "2023-10-17 20:35:42.473",
    },
    {
      p_user_email: "IIII@mail.com",
      present: true,
      session_date: "2023-10-17 20:35:42.473",
    },
    {
      p_user_email: "JJJJ@mail.com",
      present: true,
      session_date: "2023-10-17 20:35:42.473",
    },
    {
      p_user_email: "KKKK@mail.com",
      present: true,
      session_date: "2023-10-17 20:35:42.473",
    },
    {
      p_user_email: "LLLL@mail.com",
      present: true,
      session_date: "2023-10-17 20:35:42.473",
    },
    {
      p_user_email: "MMMM@mail.com",
      present: true,
      session_date: "2023-10-17 20:35:42.473",
    },
    {
      p_user_email: "NNNN@mail.com",
      present: false,
      session_date: "2023-10-17 20:35:42.473",
    },
    {
      p_user_email: "OOOO@mail.com",
      present: true,
      session_date: "2023-10-17 20:35:42.473",
    },
    {
      p_user_email: "PPPP@mail.com",
      present: true,
      session_date: "2023-10-17 20:35:42.473",
    },
    {
      p_user_email: "QQQQ@mail.com",
      present: true,
      session_date: "2023-10-17 20:35:42.473",
    },
    {
      p_user_email: "RRRR@mail.com",
      present: true,
      session_date: "2023-10-17 20:35:42.473",
    },
    {
      p_user_email: "SSSS@mail.com",
      present: true,
      session_date: "2023-10-17 20:35:42.473",
    },
    {
      p_user_email: "TTTT@mail.com",
      present: false,
      session_date: "2023-10-17 20:35:42.473",
    },
    {
      p_user_email: "UUUU@mail.com",
      present: false,
      session_date: "2023-10-17 20:35:42.473",
    },
    {
      p_user_email: "VVVV@mail.com",
      present: false,
      session_date: "2023-10-17 20:35:42.473",
    },
    {
      p_user_email: "WWWW@mail.com",
      present: false,
      session_date: "2023-10-17 20:35:42.473",
    },
    {
      p_user_email: "XXXX@mail.com",
      present: true,
      session_date: "2023-10-17 20:35:42.473",
    },
    {
      p_user_email: "YYYY@mail.com",
      present: false,
      session_date: "2023-10-17 20:35:42.473",
    },
    {
      p_user_email: "ZZZZ@mail.com",
      present: false,
      session_date: "2023-10-17 20:35:42.473",
    },
  ]);
};
