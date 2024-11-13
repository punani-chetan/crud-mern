import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"; // Import the context correctly

const Header: React.FC = () => {
  const authContext = useContext(AuthContext); // Access the context

  // Handle the case where the context might be undefined
  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { token, logout } = authContext; // Destructure token and logout safely

  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call logout function to clear session data
    navigate("/login"); // Redirect to home page after logout
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Student Management
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/add-student">
          Add Student
        </Button>

        {/* Conditionally render the Logout button if the user is logged in */}
        {token && (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
