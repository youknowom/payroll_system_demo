import React from 'react'
import './dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-summary">
        <div className="card">
          <h3>Total Employees</h3>
          <p>150</p>
        </div>
        <div className="card">
          <h3>New Employees</h3>
          <p>10</p>
        </div>
        <div className="card">
          <h3>Pending Payrolls</h3>
          <p>3</p>
        </div>
        <div className="card">
          <h3>Last Payroll Processed</h3>
          <p>October 10, 2024</p>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-card">
          <h3>Payroll Distribution</h3>
          <div className="chart-placeholder"></div>
        </div>
        <div className="chart-card">
          <h3>Employee Growth</h3>
          <div className="chart-placeholder"></div>
        </div>
      </div>

      <div className="recent-activities">
        <h3>Recent Activities</h3>
        <ul>
          <li>Payroll processed for October 2024</li>
          <li>Solanki added as a new employee</li>
          <li>Salary revised for Taskar</li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
