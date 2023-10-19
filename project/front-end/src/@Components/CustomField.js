import { TextField } from "@mui/material";
import React, { useCallback, useState } from "react";

const CustomField = ({
  id,
  name,
  type,
  value,
  onChange,
  required = false,
  inputErrorCallback,
  inputErrorMessage,
}) => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const HandleInputCheck = useCallback(() => {
    if (required && value === "") {
      setError(true);
      onChange({ value, valid: false });
      setMessage("field required");
      return;
    }

    if (inputErrorCallback && inputErrorCallback(value)) {
      setError(true);
      onChange({ value, valid: false });
      setMessage(inputErrorMessage);
      return;
    }

    onChange({ value, valid: true });
    setError(false);
    setMessage("");
  }, [value, inputErrorCallback, inputErrorMessage, required, onChange]);

  const HandleValueChange = useCallback(
    (event) => {
      onChange({ value: event.target.value, valid: !error });
    },
    [onChange, error]
  );

  return (
    <TextField
      fullWidth
      id={id}
      label={name}
      type={type}
      value={value}
      variant="outlined"
      required={required}
      error={error}
      helperText={message}
      onBlur={HandleInputCheck}
      onChange={HandleValueChange}
    />
  );
};

export default React.memo(CustomField);
