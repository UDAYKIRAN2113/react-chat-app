import { useContext } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {

      const {currentUser} = useContext(AuthContext) 

      const ProtectedRoute = ({Children}) => {
        if(!currentUser){
          return <Navigate to="/" />
        }
        return Children
      };


      
      // console.log(currentUser)


  return (
    // <Login />
    // <Home />
    // <Register />
    <BrowserRouter>
    <Routes>
      <Route path="/">
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />


      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;