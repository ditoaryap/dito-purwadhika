import { Route, Routes } from "react-router-dom";
import Users from "./pages/users";
import Register from "./pages/register";
import Navbar from "./global/components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
