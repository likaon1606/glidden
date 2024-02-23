import Nav2 from "./components/Nav2";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav2 />
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
