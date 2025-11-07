import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div className="spinner"></div>}>
        <Root />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div className="spinner"></div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path:'/projects',
        element: <Projects/>
      }
    ],
  },
]);
export default router;
