import { useState } from "react"
import { UserContext } from "../context"

const UserProvider = ({ children }) => {
    const [username, setUsername] = useState("Rakesh")
    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
