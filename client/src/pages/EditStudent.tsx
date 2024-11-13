import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getStudentById, updateStudent } from "../services/studentService"; // Make sure to define these functions
import { Student } from "../types/student";
import StudentForm from "../components/StudentForm";

const EditStudent = () => {
  const { id } = useParams<{ id: string }>(); // Get the student ID from URL
  const [student, setStudent] = useState<Student | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      if (id) {
        const data = await getStudentById(id); // Fetch student by ID
        setStudent(data);
      }
    };
    fetchStudent();
  }, [id]);

  const handleSubmit = async (updatedStudent: Student) => {
    if (id) {
      await updateStudent(id, updatedStudent); // Update the student in the database
      navigate("/"); // Redirect to the home page after update
    }
  };

  if (!student) {
    return <div>Loading...</div>; // Show loading state while fetching student data
  }

  return (
    <div>
      <StudentForm initialData={student} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditStudent;
