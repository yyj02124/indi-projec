import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { Controller, Control, FieldName } from "react-hook-form";
import { LoginFormValues } from "../service/login/loginTypes";

interface props {
  label: string;
  control: Control<LoginFormValues>;
  name: FieldName<LoginFormValues>;
  type: string;
}

const LoginField = ({ label, control, name, type }: props) => {
  return (
    <Box sx={{ mt: "10px" }}>
      <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>{label}</Typography>
      <Controller
        control={control}
        name={name}
        render={({ field }) => <TextField {...field} type={type} sx={{ width: "352px" }} />}
      />
    </Box>
  );
};

export default LoginField;
