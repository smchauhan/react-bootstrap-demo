import React from 'react'
import { BagCheck } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

const Home = () => {
    // pin: yup
    //   .string()
    //   .matches(/^\+?[1-9]\d{5,5}$/, "Enter valid PIN value")
    //   .required("Please enter valid Zip/Pin"),
    // terms: yup
    //   .bool()
    //   .required("Terms must be accepted")
    //   .oneOf([true], "Terms must be accepted"),
    // phone: yup
    //   .string()
    //   .matches(/^\+?[1-9]\d{9,14}$/, "Enter a valid phone number")
    //   .required("Phone number is required."),
    // email: yup
    //   .string()
    //   .matches(
    //     /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    //     "Enter a valid email address"
    //   )

    return (
        <div>
            <BagCheck size={50} className='text-primary' />
            This is Home Page<br />
            <NavLink to="/admin">Move to Admin</NavLink>
        </div>
    )
}

export default Home
