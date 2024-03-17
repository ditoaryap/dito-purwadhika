import { useEffect, useState } from "react";
// import axios from "axios";
import instance from "../../../api/api_instance";

interface UsersProps {
  id: number;
  name: string;
  email: string;
  password: string;
}

export default function UsersTable() {
  const [users, setUsers] = useState<UsersProps[]>([]);

  const fetchUsers = async () => {
    const { data } = await instance.get("users");
    setUsers(data);
    console.log(data.length)
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="overflow-x-auto flex justify-center mt-10">
      <table className="table-auto w-[700px] text-sm text-left text-gray-500">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Password</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
