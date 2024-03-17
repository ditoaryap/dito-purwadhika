import { useNavigate } from "react-router-dom";
import instance from "../../../api/api_instance";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get("users");
      const users = response.data;
      setCount(users.length);
    };

    fetchData();
  }, []);

  return (
    <nav className="bg-slate-500 px-4 py-7">
      <div className="flex justify-between mx-auto">
        <div>LOGIN PAGE</div>
        <div>
          Jumlah : {count}
          <button
            className="bg-red-300 py-2 px-6 mx-4 rounded-md hover:bg-green-500"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <button
            className="bg-red-300 py-2 px-6 rounded-md hover:bg-green-500"
            onClick={() => navigate("/")}
          >
            Users
          </button>
        </div>
      </div>
    </nav>
  );
}
