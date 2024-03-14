import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./componets/Header";
import LadingImage from "./componets/LadingImage";
import logo from "./logo.svg";
import LandingPage from "./pages/LandingPage";

import Quiz from "./pages/Quiz";
import End from "./pages/End";
import Makequiz from "./pages/Makequiz";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/quiz",
          element: <Quiz />,
        },
        {
          path: "/result",
          element: <End />,
        },
        {
          path: "/mkquiz",
          element: <Makequiz />,
        },
      ],
    },
  ]);
  return (
    <div className="w-[500px] h-full mx-auto my-0 text-center">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
