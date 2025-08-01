import React, { useContext, useState } from 'react'
import { UserContext } from '../context/context'
import { Button } from 'react-bootstrap'

const ContextAPI = () => {
    const { username, setUsername } = useContext(UserContext)
    return (
        <div>
            Global Context API Username : {username}<br />
            <Button onClick={() => setUsername("Amit")}>Change Username </Button>
        </div>
    )
}

export default ContextAPI
