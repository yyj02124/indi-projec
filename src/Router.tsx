import { Box } from "@mui/material";
import { Outlet, useRoutes } from "react-router-dom";
import CheckPage from "./Page/CheckPage";
import ErrorPage from "./Page/ErrorPage";
import LoginPage from "./Page/LoginPage";
import MainPage from "./Page/MainPage";

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
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default function Router() {
  return useRoutes(routes);
}
