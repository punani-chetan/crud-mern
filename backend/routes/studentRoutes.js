const express = require("express");
const Student = require("../models/Student");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get all students
router.get("/", authMiddleware, async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a student by ID
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params; // Get the student ID from the URL parameter
    const student = await Student.findById(id); // Find the student by ID
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student); // Send the found student as the response
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a student
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const student = new Student({ name, age, email });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a student
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a student
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
