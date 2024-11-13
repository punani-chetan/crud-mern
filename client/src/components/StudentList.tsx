import React from "react";
import StudentCard from "./StudentCard";
import { Student } from "../types/student";
import { Grid } from "@mui/material";

interface StudentListProps {
  students: Student[];
  onDelete: (id: string) => Promise<void>; // Function to handle delete
}

const StudentList: React.FC<StudentListProps> = ({ students, onDelete }) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{ padding: "20px" }}
    >
      {students.map((student) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={student._id}>
          <StudentCard student={student} onDelete={onDelete} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StudentList;
