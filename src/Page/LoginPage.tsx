import { Box, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import LoginField from "../login/LoginField";
import { LoginFormValues } from "../service/login/loginTypes";

const LoginPage = () => {
  const { handleSubmit, control } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Box>
      LoginPage
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <LoginField label="이메일" name="email" type="Login" control={control} />
        <LoginField label="비밀번호" control={control} name="password" type="Password" />

        <Button variant="contained" sx={{ mt: "20px", backgroundColor: "#000000", width: "352px" }} type="submit">
          로그인
        </Button>
      </form>
    </Box>
  );
};

export default LoginPage;
