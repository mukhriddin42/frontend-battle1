import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./auth/Login.jsx";
import Signup from "./auth/Register.jsx";
import Profile from "./pages/Profile.jsx";
import Notifactions from "./pages/Notifactions.jsx";
import Group from "./pages/Group.jsx";
import ProtectedRoute from "./components/ProtectRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    children: [
      {
        index: true,
        element: <Signup />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Profile /> },
      { path: "group", element: <Group /> },
      { path: "notifactions", element: <Notifactions /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
