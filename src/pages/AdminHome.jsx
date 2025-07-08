import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            This is AdminHome  Page
            <NavLink to="/">Move to Main Home</NavLink>
        </div>
    )
}

export default Home
