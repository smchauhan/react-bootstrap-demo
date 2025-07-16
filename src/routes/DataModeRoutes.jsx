import { createBrowserRouter } from "react-router-dom";
import RBBadge from '../pages/RBBadge';
import RBButton from '../pages/RBButton';
import Home from '../pages/Home';
import Admin1 from '../pages/Admin1';
import Admin2 from '../pages/Admin2';
import AdminHome from "../pages/AdminHome";
import RootLayout from '../layouts/RootLayout';
import AdminLayout from '../layouts/AdminLayout';
import RBBreadcrumb from "../pages/RBBreadcrumb";
import InteractiveComponents from "../pages/InteractiveComponents"
import RBPagination from "../pages/RBPagination";
import RBButtonGroup from "../pages/RBButtonGroups";
import RBCards from "../pages/RBCards";
import RBImages from "../pages/RBImages";
import RBListGroup from "../pages/RBListGroup";
import RBFigure from "../pages/RBFigure";
import RBPrgressBars from "../pages/RBPrgressBars";
import RBSpinners from "../pages/RBSpinners";
import RBTables from "../pages/RBTables";
import RBAccordion from "../pages/RBAccordion";
import RBCarousels from "../pages/RBCarousels";

export const DataModeRoutes = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/rb-button", element: <RBButton /> },
            { path: "/rb-badge", element: <RBBadge /> },
            { path: "/rb-breadcrumb", element: <RBBreadcrumb /> },
            { path: "/rb-interactive-components", element: <InteractiveComponents /> },
            { path: "/rb-button-group", element: <RBButtonGroup /> },
            { path: "/rb-cards", element: <RBCards /> },
            { path: "/rb-image", element: <RBImages /> },
            { path: "/rb-list-group", element: <RBListGroup /> },
            { path: "/rb-figure", element: <RBFigure /> },
            { path: "/rb-pagination", element: <RBPagination /> },
            { path: "/rb-progressbars", element: <RBPrgressBars /> },
            { path: "/rb-spinners", element: <RBSpinners /> },
            { path: "/rb-tables", element: <RBTables /> },
            { path: "/rb-accordion", element: <RBAccordion /> },
            { path: "/rb-carousels", element: <RBCarousels /> },
        ]
    },
    {
        element: <AdminLayout />,
        children: [
            { path: "/admin", element: <AdminHome /> },
            { path: "/admin1", element: <Admin1 /> },
            { path: "/admin2", element: <Admin2 /> },
        ]
    },
])