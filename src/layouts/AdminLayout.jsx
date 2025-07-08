import { NavLink, Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div>
            This is Admin Layout - Navigation

            <ul>
                <li>
                    <NavLink to='/admin'>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/admin1">Admin 1</NavLink>
                </li>
                <li>
                    <NavLink to='/admin2'>Admin 2</NavLink>
                </li>
            </ul>

            <Outlet />
        </div>
    )
}

export default AdminLayout
