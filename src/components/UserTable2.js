'use client';
import { useState } from 'react';

const staticUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', isActive: true },
  { id: 2, name: 'Bob Singh', email: 'bob@example.com', isActive: false },
  { id: 3, name: 'Charlie Patel', email: 'charlie@example.com', isActive: true },
];

const UserTable2 = () => {
  const [users, setUsers] = useState(staticUsers);

  const handleToggle = (id) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === id ? { ...user, isActive: !user.isActive } : user
      )
    );
  };

  const handleEdit = (id) => {
    console.log('Edit user:', id);
    // You can open a modal or navigate to an edit page here
  };

  const handleDelete = (id) => {
    console.log('Delete user:', id);
    // You can add a confirmation dialog before removing
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  return (
    <table className="min-w-full table-auto border text-sm">
      <thead className="bg-gray-200 text-[#000000]">
        <tr>
          <th className="px-4 py-2">S.No</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Toggle</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id} className="border-b">
            <td className="px-4 py-2">{index + 1}</td>
            <td className="px-4 py-2">{user.name}</td>
            <td className="px-4 py-2">{user.email}</td>
            <td className="px-4 py-2">
              <input
                type="checkbox"
                checked={user.isActive}
                onChange={() => handleToggle(user.id)}
                className="cursor-pointer"
              />
            </td>
            <td className="px-4 py-2">
              <button
                onClick={() => handleEdit(user.id)}
                className="text-blue-600 hover:underline mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable2;