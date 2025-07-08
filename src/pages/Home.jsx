import React from 'react'
import { BagCheck } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <BagCheck size={50} className='text-primary' />
            This is Home Page<br />
            <NavLink to="/admin">Move to Admin</NavLink>
        </div>
    )
}

export default Home
