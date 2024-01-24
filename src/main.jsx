import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import App from "./App.jsx";
import Home from "./screens/Home.jsx";
import Productpage from "./screens/Productpage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index={true} path="/" element={<Home />} />
      <Route path="/product/:id" element={<Productpage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="dark text-foreground bg-background flex flex-col min-h-screen justify-between">
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
