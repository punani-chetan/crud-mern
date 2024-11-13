import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <PrivateRoute path="/dashboard" component={Home} />
          <PrivateRoute path="/add-student" component={AddStudent} />
          <PrivateRoute path="/edit-student/:id" component={EditStudent} /> */}
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
          <Route
            path="/add-student"
            element={<PrivateRoute element={<AddStudent />} />}
          />
          <Route
            path="/edit-student/:id"
            element={<PrivateRoute element={<EditStudent />} />}
          />
          {/* <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/edit-student/:id" element={<EditStudent />} />
          </Route> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
