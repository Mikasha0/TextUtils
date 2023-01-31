import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = (cls) => {
    removeBodyColor();
    document.body.classList.add("bg-" + cls);
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode enabled", "success");
    }
  };

  const removeBodyColor = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
  };

  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
        <Router>
          <Navbar
            title="textUtils"
            aboutText="About"
            registerText="Register"
            validationText="Validation"
            btnMode={mode}
            toggleBtn={toggleMode}
          />
          <Alert alertMsg={alert} />
          <TextForm btnMsg={showAlert} btnMode={mode} />
          <div className="container my-3">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route
                path="/home"
                element={<TextForm btnMsg={showAlert} btnMode={mode} />}
              />
            </Routes>
          </div>
        </Router>
        <Footer btnMode={mode} />
      </QueryClientProvider>
    </>
  );
}

export default App;
