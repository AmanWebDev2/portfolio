import { Link, Route, Routes } from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import CustomPointer from "./components/CustomPointer";
import Loader from "./components/Loader";
import NotFound from "./components/NotFound";
const Home = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./components/Home"));
    }, 500);
  });
});
const About = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./components/AboutMe"));
    }, 500);
  });
});
const Hero = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./components/Hero"));
    }, 500);
  });
});
const Contact = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./components/Contact"));
    }, 500);
  });
});
function App() {
  const [showPointer, setShowPointer] = useState(() => window.innerWidth > 500);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setShowPointer(true);
      } else {
        setShowPointer(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* <Hero/> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Hero />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<Loader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<Loader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loader />}>
                <NotFound />
              </Suspense>
            }
          />


        </Route>
 
      </Routes>
    </>
  );
}

export default App;
