import React from "react";
import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { Student } from "../types/student";

interface StudentCardProps {
  student: Student;
  onDelete: (id: string) => Promise<void>;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, onDelete }) => {
  const navigate = useNavigate(); // React Router navigate hook

  const handleEdit = () => {
    // Navigate to the edit page with the student's id
    navigate(`/edit-student/${student._id}`);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Adds shadow effect
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)", // Gradient background
        overflow: "hidden",
        position: "relative",
        transition: "all 0.3s ease",
      }}
    >
      <CardContent sx={{ position: "relative", padding: "16px" }}>
        {/* Delete Icon */}
        <IconButton
          onClick={() => onDelete(student._id)}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <DeleteIcon />
        </IconButton>

        {/* Edit Icon */}
        <IconButton
          onClick={handleEdit}
          sx={{
            position: "absolute",
            top: 8,
            right: 55,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <EditIcon />
        </IconButton>

        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {student.name}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "8px" }}>
          Age: {student.age}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "8px" }}>
          Email: {student.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StudentCard;
