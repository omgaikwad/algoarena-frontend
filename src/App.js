import "./App.css";
import PrivateRoute from "./Route/PrivateRoute";
import SingleProblemRow from "./components/SingleProblemRow/SingleProblemRow";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ProblemPage from "./pages/ProblemPage/ProblemPage";
import Signup from "./pages/Signup/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route exact path="/problem/:id" element={<PrivateRoute />}>
          <Route exact path="/problem/:id" element={<ProblemPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
