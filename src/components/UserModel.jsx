import React from 'react'

function UserModel({handleUpdate, editUser, setEditUser,closeModal}) {
  const handleChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#e5e7eb6b] bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-center">Edit User</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                type="text"
                name="first_name"
                value={editUser.first_name}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="last_name"
                value={editUser.last_name}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                name="email"
                value={editUser.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
              <button type="submit" className="bg-green-600 cursor-pointer text-white w-full py-2 rounded">
                Update
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="bg-gray-400 text-white cursor-pointer w-full py-2 rounded mt-2"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
  )
}

export default UserModel