import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/mainPage";
import MainLayout from "./layoutes/mainLayout/mainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
]);
export default router;
