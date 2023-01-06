import { Box, Button, Link, Stack, Typography } from "@mui/material";
import React, { KeyboardEvent, useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import LoginField from "../login/LoginField";
import { LoginFormValues } from "../service/login/loginTypes";
import { BlockPicker, CirclePicker, SketchPicker } from "react-color";

const testcode = 1;
const anothercode = { width: 100, bgcolor: "#125654" };

const LoginPage = () => {
  const [capsVal, setCapsVal] = React.useState<boolean>(false);
  const [colorBound, setColorBound] = React.useState({ backGround: "#fff" });
  const [onClickColorButton, setOnclickColorButton] = React.useState(false);
  const { handleSubmit, control } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const colorPicFunc = (color: any) => {
    setColorBound({ backGround: color.hex });
  };

  const handleClickColorOpenButton = () => {
    setOnclickColorButton(!onClickColorButton);
  };

  const checkCaps = useCallback(
    (event: KeyboardEvent<HTMLImageElement>) => {
      if (event.getModifierState("CapsLock")) {
        console.log("CapsLockOn");
      }
      setCapsVal(!capsVal);
    },
    [capsVal]
  );
  return (
    <>
      <Box sx={{ backgroundColor: colorBound.backGround }}>
        LoginPage
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <LoginField label="이메일" name="email" type="Login" control={control} />
          <LoginField label="비밀번호" control={control} name="password" type="Password" />

          <Button
            variant="contained"
            sx={{ mt: "20px", backgroundColor: "#000000", width: "352px", color: colorBound.backGround }}
            type="submit"
          >
            로그인
          </Button>
        </form>
        <Link href="/memberjoin">회원가입</Link>
      </Box>

      {/* <Button onClick={handleClickColorOpenButton}>Pick Color</Button>
      {onClickColorButton ? (
        <BlockPicker
          color={colorBound.backGround}
          triangle="hide"
          colors={[
            "#000",
            "#111",
            "#222",
            "#333",
            "#444",
            "#555555",
            "#666",
            "#777",
            "#888",
            "#999",
            "#aaa",
            "#bbb",
            "#ccc",
            "#ddd",
            "#eee",
          ]}
          onChangeComplete={colorPicFunc}
        />
      ) : null}

      <CirclePicker color={colorBound.backGround} onChangeComplete={colorPicFunc} /> */}

      <Box sx={testcode === 1 ? { height: 50 } : { height: 100 }}>123456</Box>
    </>
  );
};

export default LoginPage;
