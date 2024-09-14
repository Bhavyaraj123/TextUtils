import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Alert from "./components/Alert";
import AboutUs from "./components/AboutUs";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  // Alert and set timeout
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const Bodyremove = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
  };

  const toggleMode = (cls) => {
    Bodyremove();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#155263";
      document.body.style.color = "white";
      showAlert("dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
      showAlert("light mode has been enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar title={"Bhavyaraj Bihola"} mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />

          <div className="container">
            <Routes>
              {/* Home route */}
              <Route path="/" element={<TextForm heading="Word counter, Convert to Uppercase and Lowercase" mode={mode} showAlert={showAlert} />} />
              
              {/* About Us page */}
              <Route path="/AboutUs" element={<AboutUs mode={mode} />} />
              
              {/* Redirect all unknown routes to home */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
