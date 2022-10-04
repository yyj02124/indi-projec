import { Box } from "@mui/material";
import { Outlet, useRoutes } from "react-router-dom";
import JspracOne from "./jsprac/JspracOne";
import CheckPage from "./Page/CheckPage";
import ErrorPage from "./Page/ErrorPage";
import LoginPage from "./Page/LoginPage";
import MainPage from "./Page/MainPage";
import MemberJoin from "./Page/MemberJoin";

const routes = [
  {
    path: "/",
    element: (
      <Box>
        <Outlet />
      </Box>
    ),
    children: [
      { path: "", element: <MainPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "check", element: <CheckPage /> },
      { path: "memberjoin", element: <MemberJoin /> },
    ],
  },
  {
    path: "jsprac",
    element: <JspracOne />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default function Router() {
  return useRoutes(routes);
}
