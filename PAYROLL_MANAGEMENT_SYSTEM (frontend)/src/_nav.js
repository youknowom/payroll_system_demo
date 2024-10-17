import React from 'react'
import {
  Person,
  Clock,
  CardChecklist,
  Wallet,
  Pencil,
  Eye,
  Speedometer,
} from 'react-bootstrap-icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <Speedometer className="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Employees',
    to: '/employees',
    icon: <Person className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'View Employees',
        to: '/employees',
        icon: <Eye className="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Add Employee',
        to: '/employees/add',
        icon: <Pencil className="nav-icon" />,
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Attendance',
    to: '/attendance',
    icon: <CardChecklist className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Timeclock',
    to: '/timeclock',
    icon: <Clock className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Payroll',
    to: '/payroll',
    icon: <Wallet className="nav-icon" />,
  },
]

export default _nav
