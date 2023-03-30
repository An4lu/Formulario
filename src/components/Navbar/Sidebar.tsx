import React, { useState } from 'react'
import { SiMicrosoftexcel } from 'react-icons/si'
import { GrHomeRounded } from 'react-icons/gr'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'
import wg from './../../assets/img/wp.svg'
import { NavLink } from 'react-router-dom'
import { Container } from './styles'

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const menuItem = [
    {
      path: '/home',
      name: 'Home',
      icon: <GrHomeRounded />,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <MdOutlineSpaceDashboard />,
    },
    {
      path: '/sheets',
      name: 'Sheets',
      icon: <SiMicrosoftexcel />,
    },
  ]
  return (
    <Container>
      <div style={{ width: isOpen ? '200px' : '50px' }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
            Whirlpool
          </h1>
          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? 'block' : 'none' }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </Container>
  )
}

export default Sidebar
