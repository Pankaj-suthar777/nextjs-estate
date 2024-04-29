import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./routes/layout/layout";
import HomePage from "./routes/homePage/homePage";
import { Login } from "./routes/login/login";
import Register from "./routes/register/register";
import ListPage from "./routes/listPage/listPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        // {
        //   path: "/:id",
        //   element: <SinglePage />,
        //   loader: singlePageLoader,
        // },

        // {
        //   path: "/login",
        //   element: <Login />,
        // },
        // {
        //   path: "/register",
        //   element: <Register />,
        // },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Register />,
    },
    // {
    //   path: "/",
    //   element: <RequireAuth />,
    //   children: [
    //     {
    //       path: "/profile",
    //       element: <ProfilePage />,
    //       loader: profilePageLoader,
    //     },
    //     {
    //       path: "/profile/update",
    //       element: <ProfileUpdatePage />,
    //     },
    //     {
    //       path: "/add",
    //       element: <NewPostPage />,
    //     },
    //   ],
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
