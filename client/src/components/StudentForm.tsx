import React, { useState } from "react";
import { TextField, Button, Box, Grid, Typography } from "@mui/material";
import { Student } from "../types/student";

interface StudentFormProps {
  initialData?: Student;
  onSubmit: (student: Student) => void;
}

const StudentForm: React.FC<StudentFormProps> = ({ initialData, onSubmit }) => {
  const [student, setStudent] = useState<Student>(
    initialData || { _id: "0", name: "", age: 0, email: "" }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(student);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: "600px", // Limit max width for form
        margin: "0 auto", // Center the form
        padding: "16px", // Add padding inside the form
        borderRadius: "8px", // Rounded corners
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow
        backgroundColor: "#fff", // White background
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: "bold" }}>
        {initialData ? "Edit Student" : "Add Student"}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            name="name"
            value={student.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: "8px", // Rounded input fields
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Age"
            name="age"
            type="number"
            value={student.age}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: "8px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            name="email"
            value={student.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: "8px",
              },
            }}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          marginTop: 2,
          padding: "10px 20px",
          width: "100%",
          borderRadius: "8px", // Rounded button
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default StudentForm;
