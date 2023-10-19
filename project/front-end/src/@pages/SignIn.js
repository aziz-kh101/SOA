import React, { useCallback, useState } from "react";
import { signIn } from "../@services/AuthService";
import CenterContainer from "../@Components/CenterContainer";
import SignInBox from "../@Components/FormBox";
import CustomField from "../@Components/CustomField";
import { Alert, Button } from "@mui/material";
import { setToken } from "../@helpers/token";

function SignIn({ setUser }) {
  const [form, setForm] = useState({
    email: { value: "", valid: false },
    password: { value: "", valid: false },
  });

  const [error, setError] = useState("");

  const HandleLogIn = useCallback(
    (e) => {
      if (form.email.valid && form.password.valid) {
        signIn({ email: form.email.value, password: form.password.value }).then(
          (data) => {
            if (data.error) {
              setError(data.error);
              return;
            }

            setToken(data.token);
            setUser(data.user);
          }
        );
      }
    },
    [form, setUser]
  );

  const HandleInputCheck = useCallback((value) => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !value.match(validRegex);
  }, []);

  const HandlePasswordChange = useCallback((value) => {
    setForm((prev) => ({ ...prev, password: value }));
  }, []);

  const HandleEmailChange = useCallback((value) => {
    setForm((prev) => ({ ...prev, email: value }));
  }, []);

  return (
    <CenterContainer>
      <SignInBox>
        <h1>Sign In</h1>
        <CustomField
          id="email"
          name="email"
          type="email"
          required
          value={form.email.value}
          onChange={HandleEmailChange}
          inputErrorCallback={HandleInputCheck}
          inputErrorMessage="email required"
        />
        <CustomField
          id="password"
          name="password"
          type="password"
          value={form.password.value}
          onChange={HandlePasswordChange}
          required
        />
        {error && <Alert severity="error">{error}</Alert>}
        <Button onClick={HandleLogIn}>log in</Button>
      </SignInBox>
    </CenterContainer>
  );
}

export default React.memo(SignIn);
