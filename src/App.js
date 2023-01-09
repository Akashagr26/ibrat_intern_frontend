import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import PrivateRoutes from "./utils/PrivateRoutes";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Routes>
      {/* {user && <Route path="/" element={<Dashboard />} />}
      {user && <Route path="/cart" element={<Cart />} />}

      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/cart" element={<Navigate replace to="/login" />} /> */}

      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
