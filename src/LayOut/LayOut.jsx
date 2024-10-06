import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Signup } from "../pages/signup/Signup";
import { Home } from "../pages/home/Home";
import { Profile } from "../pages/profile/Profile";
import { ChatBox } from "../pages/chatbox/ChatBox";

// MY COMpS: verify each Page after build
import Nav from "../components/nav/Nav";
import LeftBar from "../components/leftbar/LeftBar";
import RightBar from "../components/rightbar/RightBar";

export default function LayOut() {
  const Feed = () => {
    return (
      <>
        <Nav />
        <main>
          <LeftBar />
          <div className="container">
            <Outlet />
          </div>
          <RightBar />
        </main>
      </>
    );
  };

  // Router Settings for initializing paths
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" replace />, // Redirect root path to login
    },
    {
      path: "/",
      element: <Feed />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "profile/:id", // Dynamic route for profile
          element: <Profile />,
        },
        {
          path: "chatbox/:id",
          element: <ChatBox />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />, // Ensure this is the correct Login component
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return <RouterProvider router={router} />;
}
