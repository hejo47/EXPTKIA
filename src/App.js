import { Routes, Route } from "react-router-dom";
import './App.css';
import "./css/style.scss";
import Header from "./components/common/Header";
import Visual from "./components/sections/Visual";

function App() {
  return (
    <div className="App">
      <div className="view">
        <Header></Header>
        <Visual></Visual>
        <Routes>
          {/* <Route path="/browse" element={<Browse />}></Route> */}
          {/* <Route path="/home" element={<Home />}></Route> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
