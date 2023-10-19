import React, { useCallback, useState } from "react";
import CenterContainer from "../@Components/CenterContainer";
import CustomField from "../@Components/CustomField";
import { Alert, Button } from "@mui/material";
import { addTeacher } from "../@services/UserService";
import FormBox from "../@Components/FormBox";

const INITIAL_STATE = {
  email: { value: "", valid: false },
  password: { value: "", valid: false },
  first_name: { value: "", valid: false },
  last_name: { value: "", valid: false },
};

function AddTeacher(props) {
  const [form, setForm] = useState(INITIAL_STATE);

  const [message, setMessage] = useState({});

  const clearAllFields = useCallback(() => {
    setForm(INITIAL_STATE);
  }, []);

  const HandleAdd = useCallback(
    (e) => {
      if (
        form.email.valid &&
        form.password.valid &&
        form.first_name.valid &&
        form.last_name.valid
      ) {
        // add admin

        addTeacher({
          email: form.email.value,
          password: form.password.value,
          first_name: form.first_name.value,
          last_name: form.last_name.value,
        }).then((data) => {
          if (data.error) {
            setMessage({ type: "error", text: data.error });
            return;
          }

          setMessage({ type: "success", text: "user added successfully" });
          clearAllFields();
        });
      }
    },
    [clearAllFields, form]
  );

  const HandleInputCheck = useCallback((value) => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !value.match(validRegex);
  }, []);

  const HandleEmailChange = useCallback((value) => {
    setForm((prev) => ({ ...prev, email: value }));
  }, []);

  const HandlePasswordChange = useCallback((value) => {
    setForm((prev) => ({ ...prev, password: value }));
  }, []);

  const HandleFirstNameChange = useCallback((value) => {
    setForm((prev) => ({ ...prev, first_name: value }));
  }, []);

  const HandleLastNameChange = useCallback((value) => {
    setForm((prev) => ({ ...prev, last_name: value }));
  }, []);

  return (
    <CenterContainer>
      <FormBox>
        <h1>Add Teacher</h1>
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
          required
          value={form.password.value}
          onChange={HandlePasswordChange}
        />
        <CustomField
          id="firstName"
          name="first name"
          type="text"
          required
          value={form.first_name.value}
          onChange={HandleFirstNameChange}
        />
        <CustomField
          id="lastName"
          name="last name"
          type="text"
          required
          value={form.last_name.value}
          onChange={HandleLastNameChange}
        />
        {message.type ? (
          message.type === "error" ? (
            <Alert severity="error">{message.text}</Alert>
          ) : (
            <Alert severity="success">{message.text}</Alert>
          )
        ) : (
          <></>
        )}
        <Button onClick={HandleAdd}>add</Button>
      </FormBox>
    </CenterContainer>
  );
}

export default React.memo(AddTeacher);
