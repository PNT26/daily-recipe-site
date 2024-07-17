import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom/client";
import AOS from "aos";
import "../src/assets/stylesheet/styles.scss";
import "aos/dist/aos.css";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/auth/sign-in/sign-in";
import SignUp from "./components/auth/sign-up/sign-up";
import Landing from "./components/landing/landing";
import Recipes from "./components/recipes/recipes";
import MainLayout from "./components/main-layout/main-layout";
import RecipeDetails from "components/recipe-listing/recipe-details";

export default function App() {
  const routes: { path: string; component: ReactNode }[] = [
    {
      path: "/",
      component: <Landing />,
    },
    {
      path: "/sign-in",
      component: <SignIn />,
    },
    {
      path: "/sign-up",
      component: <SignUp />,
    },
    {
      path: "/recipes",
      component: <Recipes />,
    },
    {
      path: "/about-us",
      component: <Recipes />,
    },
    {
      path: "/recipe-details/:id",
      component: <RecipeDetails />,
    },
  ];

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {routes.map((nav, i) => (
              <Route key={i} path={nav.path} element={nav.component} />
            ))}
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
