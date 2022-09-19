import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import TC from "./TC";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/tc" element={<TC />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App