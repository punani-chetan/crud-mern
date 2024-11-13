import React from "react";
import { useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import { addStudent } from "../services/studentService";
import { Student } from "../types/student";

const AddStudent: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (student: Student) => {
    await addStudent(student);
    navigate("/");
  };

  return <StudentForm onSubmit={handleSubmit} />;
};

export default AddStudent;
