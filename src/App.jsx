import {Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import UsersList from "./components/UsersList";
import PrivateRoute from "./components/PrivateRoute";

const App = () => (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<PrivateRoute><UsersList /></PrivateRoute>} />
    </Routes>
);

export default App;
