import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import Home from "./screens/Home.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />'
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="dark text-foreground bg-background flex flex-col min-h-screen justify-between">
        <RouterProvider router={router} />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
