import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
// import "./studenttable.css";

const API_URL = 'http://localhost:8080/student'

const Employees = () => {
  const [student, setStudent] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchStudent()
  }, [])

  const fetchStudent = async () => {
    try {
      const response = await axios.get(`${API_URL}/findall`)
      setStudent(response.data.data)
    } catch (error) {
      console.error('Error fetching employees:', error)
    }
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleDelete = async (id) => {
    try {
      // await axios.delete(`${API_URL}/delete/${id}`)
      fetchStudent()
    } catch (error) {
      alert('Error deleting student')
      console.error('Error deleting student:', error)
    }
  }

  // const filteredStudent = student.filter(
  //   (student) =>
  //     student.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     student.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     student.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     student.email.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const filteredStudent = student.filter(
    (student) =>
      student.fname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.course?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email?.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  return (
    <div className="main">
      <h2>Student Registration Form</h2>
      <p>
        Fill out the form to apply for the training courses. You can consider your application
        accepted after you receive a confirmation email.
      </p>
      <h2>Student Information</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Link to="/add">Add Students</Link>
      </div>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="formbody">
          {filteredStudent.map((student) => (
            <tr key={student._id}>
              <td>{student.fname}</td>
              <td>{student.lname}</td>
              <td>{student.email}</td>
              <td>{student.contact}</td>
              <td>{student.course}</td>
              <td>
                <Link to={`/update/${student._id}`}>Update</Link>
                <button onClick={() => handleDelete(student._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Employees
