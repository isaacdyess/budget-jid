import "./styles/App.css";

import { Routes, Route } from "react-router-dom";

import Header from "./pages/Header";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import Input from "./pages/Input";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="analysis" element={<Analysis />} />
        <Route path="input" element={<Input />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
