import React from 'react'
import Attendance from './views/attendance/Attendance'
import Timeclock from './views/timeclock/Timeclock'
import Payroll from './views/payroll/Payroll'
import Employees from './views/employees/Employees'
import Dashboard from './views/dashboard/Dashboard'
// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/employees', name: 'Employees', element: Employees },
  { path: '/attendance', name: 'Attendance', element: Attendance },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/timeclock', name: 'Timeclock', element: Timeclock },
  { path: '/payroll', name: 'Payroll', element: Payroll },
]

export default routes
