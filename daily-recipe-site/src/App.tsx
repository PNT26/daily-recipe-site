import React, { useEffect } from "react";
import NavBar from "./components/nav-bar/nav-bar";
import Landing from "./components/landing/landing";
import AOS from "aos";
import "../src/assets/stylesheet/styles.scss";
import "aos/dist/aos.css";
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <ThemeProvider>
        <div className="sticky top-0 z-50">
          <NavBar />
        </div>
        <Landing />
      </ThemeProvider>
    </>
  );
}

export default App;
