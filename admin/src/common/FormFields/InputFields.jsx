import { TextField } from "@mui/material";
import { useController } from "react-hook-form";

export function InputField({ name, label, control, ...inputProps }) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <TextField
      fullWidth
      margin="normal"
      variant="outlined"
      label={label}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      inputProps={inputProps}
      error={Boolean(error)}
      helperText={error?.message}
    />
  );
}
