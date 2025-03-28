import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import UsersList from "./components/UsersList";
import EditUser from "./components/EditUser";
import PrivateRoute from "./components/PrivateRoute";

const App = () => (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<PrivateRoute><UsersList /></PrivateRoute>} />
      <Route path="/edit/:id" element={<EditUser />} />
    </Routes>
);

export default App;
