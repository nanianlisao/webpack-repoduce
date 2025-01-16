import React from "react";
import ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";

const Page1 = React.lazy(() => import("./page1"));

const Home = () => (
  <div>
    <h1>
      <Link to="/">Home</Link>
    </h1>
    <Link to="/page1">go page1</Link>
    <Outlet />
  </div>
);

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/page1",
        element: <Page1 />,
      },
    ],
  },
];

function App() {
  const router = createHashRouter(routes);
  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
