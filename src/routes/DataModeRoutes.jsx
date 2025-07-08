import { createBrowserRouter } from "react-router-dom";
import RBBadge from '../pages/RBBadge';
import RBButton from '../pages/RBButton';
import Home from '../pages/Home';
import Admin1 from '../pages/Admin1';
import Admin2 from '../pages/Admin2';
import AdminHome from "../pages/AdminHome";
import RootLayout from '../layouts/RootLayout';
import AdminLayout from '../layouts/AdminLayout';

export const DataModeRoutes = createBrowserRouter([
    {
        path: "/", element: <RootLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/rb-button", element: <RBButton /> },
            { path: "/rb-badge", element: <RBBadge /> },
        ]
    },
    {
        path: "/", element: <AdminLayout />,
        children: [
            { path: "/admin", element: <AdminHome /> },
            { path: "/admin1", element: <Admin1 /> },
            { path: "/admin2", element: <Admin2 /> },
        ]
    },
])