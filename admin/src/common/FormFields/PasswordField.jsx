import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormHelperText } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";
import { useController } from "react-hook-form";

export function PasswordField({ name, control, label, ...inputProps }) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { error },
  } = useController({ name, control });

  const handleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <FormControl
      variant="outlined"
      fullWidth
      margin="normal"
      error={Boolean(error)}
    >
      <InputLabel htmlFor={`${name}_label`}>{label}</InputLabel>
      <OutlinedInput
        id={`${name}_label`}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        label={label}
        inputRef={ref}
        inputProps={inputProps}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleShowPassword}
              edge="end"
            >
              {!showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}
