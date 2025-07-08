import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RBBadge from '../pages/RBBadge';
import RBButton from '../pages/RBButton';
import Home from '../pages/Home';
import Admin1 from '../pages/Admin1';
import Admin2 from '../pages/Admin2';
import AdminHome from "../pages/AdminHome";
import RootLayout from '../layouts/RootLayout';
import AdminLayout from '../layouts/AdminLayout';

const DeclartiveRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<RootLayout />} >
                    <Route path='/' element={<Home />} />
                    <Route path='/badge' element={<RBBadge />} />
                    <Route path='/button' element={<RBButton />} />
                </Route>

                <Route element={<AdminLayout />} >
                    <Route path='/admin' element={<AdminHome />} />
                    <Route path='/admin1' element={<Admin1 />} />
                    <Route path='/admin2' element={<Admin2 />} />
                </Route>

            </Routes>

        </BrowserRouter>
    )
}

export default DeclartiveRoutes
