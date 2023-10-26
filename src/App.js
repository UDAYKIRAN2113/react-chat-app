import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    // <Login />
    // <Home />
    // <Register />
    <BrowserRouter>
    <Routes>
      <Route path="/">
          <Route index element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />


      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;