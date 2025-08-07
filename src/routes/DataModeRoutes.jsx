import { createBrowserRouter, Navigate } from "react-router-dom";
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
import RBDropdowns from "../pages/RBDropdowns";
import RBModal from "../pages/RBModal";
import RBNavbarOffcanvas from "../pages/RBNavbarOffcanvas";
import RBNavTabs from "../pages/RBNavTabs";
import RBBasicForm from "../pages/RBBasicForm";
import RBReactHookForm from "../pages/RBReactHookForm";
import RBReactHookFormYup from "../pages/RBReactHookFormYup";
import AllForms from "../pages/AllForms";
import BlogListing from "../pages/blog/BlogListing";
import BlogDetails from "../pages/blog/BlogDetails";
import NestedHome from '../pages/NestedHome';
import Login from "../pages/auth/Login";
import ProtectedRoute from "../utils/ProtectedRoute";
import NotFound404 from "../pages/NotFound404";
import ContextAPI from "../pages/ContextAPI";
import Products from "../pages/products/Products";
import Wishlist from "../pages/products/Wishlist";

export const DataModeRoutes = createBrowserRouter([
    { path: "*", element: <Navigate to="/404" /> },
    { path: "/404", element: <NotFound404 /> },
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
            { path: "/rb-dropdowns", element: <RBDropdowns /> },
            { path: "/rb-modal", element: <RBModal /> },
            { path: "/rb-navbar-offcanvas", element: <RBNavbarOffcanvas /> },
            { path: "/rb-nav-tabs", element: <RBNavTabs /> },
            { path: "/forms", element: <AllForms /> },

            {
                element: <ProtectedRoute />,
                children: [
                    { path: "/blog", element: <BlogListing /> },
                    { path: "/blog/:id/", element: <BlogDetails /> },
                ]
            },
            // { path: "/blog/:slug", element: <BlogDetails /> },


            {
                path: "/forms",
                element: <AllForms />,
                children: [
                    { index: true, element: <NestedHome /> },
                    { path: "rb-basic-form", element: <RBBasicForm /> },
                    { path: "react-hook-form", element: <RBReactHookForm /> },
                    { path: "react-hook-form-yup", element: <RBReactHookFormYup /> }
                ]
            },

            { path: "/context-api", element: <ContextAPI /> },
            { path: "/products", element: <Products /> },
            { path: "/wishlist", element: <Wishlist /> },


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

    { path: "/login", element: <Login /> },


])