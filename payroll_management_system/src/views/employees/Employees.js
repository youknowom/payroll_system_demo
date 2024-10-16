import React, { useState, useEffect } from 'react'
import './employees.css'
// import axios from 'axios'
import { Link } from 'react-router-dom'

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
      fetchStudent()
    } catch (error) {
      alert('Error deleting student')
      console.error('Error deleting student:', error)
    }
  }

  const filteredStudent = student.filter(
    (student) =>
      student.fname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.course?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="main">
      <div className="header-container">
        <h2>Employees</h2>
        <Link to="/add">
          <button className="button-link">Add Employee</button>
        </Link>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <table className="custom-table">
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
              <td>
                <Link to={`/update/${student._id}`} className="update-link">
                  Update
                </Link>
                <button className="delete-btn" onClick={() => handleDelete(student._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Employees
