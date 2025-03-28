import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser, updateUser } from "../redux/userSlice";
import Header from "./Header";
import { FaTrashAlt, FaEdit, FaSearch } from "react-icons/fa";
import UserModel from "./UserModel";

const UsersList = () => {
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  // Open Modal and Set Selected User Data
  const openEditModal = (user) => {
    setEditUser(user);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setEditUser(null);
  };

  // Submit Updated User
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: editUser.id, userData: editUser }));
    closeModal();
  };

  // Filter Users Based on Search Query
  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name} ${user.email}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <Header />
      <div className="w-full max-w-4xl p-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Users List</h2>

        {/* Search Input */}
        <div className="flex items-center mb-4 border border-gray-300 shadow-md rounded px-3 py-2 bg-white">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div key={user.id} className="bg-white p-4 rounded-lg text-center shadow-lg">
                <img src={user.avatar} alt="avatar" className="w-24 h-24 rounded-full mx-auto mb-2" />
                <p className="font-semibold">{user.first_name} {user.last_name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
                <div className="mt-3 flex justify-center gap-2">
                  <button
                    onClick={() => openEditModal(user)}
                    className="bg-green-600 text-white px-3 py-1 cursor-pointer rounded hover:bg-green-700"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => dispatch(deleteUser(user.id))}
                    className="bg-red-600 text-white px-3 py-1 cursor-pointer rounded hover:bg-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-3">No users found</p>
          )}
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            className="bg-gray-500 text-white cursor-pointer px-4 py-1 rounded hover:bg-gray-600"
          >
            Prev
          </button>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="bg-green-600 text-white cursor-pointer px-4 py-1 rounded hover:bg-green-700"
          >
            Next
          </button>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <UserModel handleUpdate={handleUpdate} editUser={editUser} setEditUser={setEditUser} closeModal={closeModal} />
      )}
    </div>
  );
};

export default UsersList;
