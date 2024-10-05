import React from "react";

//MY PAGES:plug them first so we can verifyy the routing
import { Login } from "../pages/login/Login";
import { Signup } from "../pages/signup/Signup";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Profile } from "../pages/profile/Profile";
import { ChatBox } from "../pages/chatbox/ChatBox";

//MY COMPS: verifyeach PAge after build
import Nav from "../components/nav/Nav";
import LeftBar from "../components/leftbar/LeftBar";
import { RightBar } from "../components/rightbar/RightBar";
export default function LayOut() {
  //How to show feed:

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

  //Router SEttings for initialising paths
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Feed />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/chatbox/:id",
          element: <ChatBox />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
