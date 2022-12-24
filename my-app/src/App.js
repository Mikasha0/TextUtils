import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Signin from "./components/Signin";
// import Body from './components/Body';
import Register from "./components/Register";
import Errorpage from "./components/Errorpage";
import FetchAPI from "./components/FetchAPI";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./components/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Form from "./components/Form";
// import Signup from './components/signup';
// import Trial from './components/trial';

function App() {
  const [mode, setMode] = useState("light");
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
        <Alert alertMsg={alert} />
        <Router>
        <Navbar
          title="textUtils"
          aboutText="About"
          registerText="Register"
          validationText="Validation"
          btnMode={mode}
          toggleBtn={toggleMode}
        />
          <div className="container my-3">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route
                path="/home"
                element={<TextForm btnMsg={showAlert} btnMode={mode} />}
              />
              <Route
                path="/register"
                element={<Register btnName="Register" />}
              />
              <Route
                path="*"
                element={
                  <Errorpage
                    btn="Increase"
                    btn2="Show Magic"
                    btn3="Add toDoList"
                  />
                }
              />
              <Route path="/fetchAPI" element={<FetchAPI />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <div className="container">
            <Routes>
              <Route path="/home" element={<Form />} />
            </Routes>
          </div>
        </Router>
        <Footer btnMode={mode} />
        <Signin />
        {/* <div className='container mx-8'>
        <Trial/>
      </div> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
