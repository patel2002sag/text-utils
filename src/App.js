import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import About from "./Components/About";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, changecolorMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  let changeColor = () => {
    if(mode === "light"){
      changecolorMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark';
    }else if (mode === "dark") {
      changecolorMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light';
    }
    setTimeout(()=>{
      setAlert(null);
    }, 1200)
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" mode = {mode} changeColor = {changeColor} />
      <Alert alert = {alert}/>
    
      <Routes>
        < Route exact path = "/"
          element = {
              <div className="container my-3">
                <Textform heading = "Enter the text to analyze" mode = {mode} showAlert = {showAlert}/>
              </div>
          }
        />
        <Route exact path = "/about" element = {<About/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
