import React, { useState } from 'react'
import { NavDropdown } from 'react-bootstrap'

const CustomNavDropdown = ({ title }) => {
    const [showDropdown, setShowDropdown] = useState(false)
    return (
        <NavDropdown
            show={showDropdown}
            title={title}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            onClick={() => setShowDropdown(false)}
            id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
                Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                Separated link
            </NavDropdown.Item>
        </NavDropdown>
    )
}

export default CustomNavDropdown
