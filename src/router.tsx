import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/mainPage";
import MainLayout from "./layoutes/mainLayout/mainLayout";
import RegisterForm from "./pages/registerForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/register",
        element: <RegisterForm />,

      },
    ],
  },
]);
export default router;
