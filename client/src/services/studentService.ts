import axiosInstance from "./axiosInstance"; // Using axiosInstance for token handling
import { Student } from "../types/student";

// Base URL for student API
const API_URL = "/students";

// Get all students
export const getStudents = async (): Promise<Student[]> => {
  const response = await axiosInstance.get(API_URL);
  return response.data;
};

// Add a new student
export const addStudent = async (student: Student): Promise<Student> => {
  const response = await axiosInstance.post(API_URL, student);
  return response.data;
};

// Get a student by ID
export const getStudentById = async (id: string) => {
  const response = await axiosInstance.get(`${API_URL}/${id}`);
  return response.data;
};

// Update an existing student by ID
export const updateStudent = async (
  id: string,
  student: Student
): Promise<Student> => {
  const response = await axiosInstance.put(`${API_URL}/${id}`, student);
  return response.data;
};

// Delete a student by ID
export const deleteStudent = async (id: string) => {
  const response = await axiosInstance.delete(`${API_URL}/${id}`);
  return response.data;
};

// Register a new user
export const registerUser = async (username: string, password: string) => {
  const response = await axiosInstance.post("/register", {
    username,
    password,
  });
  return response.data;
};

// Login user and get token
export const loginUser = async (username: string, password: string) => {
  const response = await axiosInstance.post("/login", { username, password });
  return response.data; // Assumes the response contains the token
};
