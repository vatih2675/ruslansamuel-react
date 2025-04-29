import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cv from "./Cv";
import Home from "./Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
