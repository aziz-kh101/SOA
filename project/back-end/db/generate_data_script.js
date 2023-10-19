function noteScript() {
  let result = [];

  for (let index = 72; index <= 90; index++) {
    const text = String.fromCharCode(index).repeat(4);
    const note = Math.round(Math.random() * 20);

    result.push({
      n_user_email: `${text}@mail.com`,
      note,
      status: note >= 10 ? "PASS" : "FAIL",
    });
  }

  console.log(result);
}

function presenceScript() {
  let result = [];

  for (let index = 72; index <= 90; index++) {
    const text = String.fromCharCode(index).repeat(4);
    const present = Boolean(Math.round(Math.random()));

    result.push({
      p_user_email: `${text}@mail.com`,
      present,
      session_date: `${new Date().toISOString()}`,
    });
  }

  console.log(result);
}

function genarateSecretToken() {
  console.log(require("crypto").randomBytes(64).toString("hex"));
}

noteScript();
presenceScript();

// genarateSecretToken();
