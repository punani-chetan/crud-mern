import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getStudents, deleteStudent } from "../services/studentService";
import { Student } from "../types/student";
import StudentList from "../components/StudentList";

const Home: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  const handleDelete = async (id: string) => {
    await deleteStudent(id);
    fetchStudents();
  };

  return (
    <>
      {/* <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/add-student")}
        sx={{ mb: 2 }}
      >
        Add Student
      </Button> */}
      <StudentList students={students} onDelete={handleDelete} />
    </>
  );
};

export default Home;
