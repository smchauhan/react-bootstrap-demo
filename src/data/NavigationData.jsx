import { Children } from "react";

export const NavigationData = [
    {
        id: 1,
        menuName: "Non Interactive Comp.",
        children: [
            {
                id: 11,
                menuName: "Home",
                link: "/"
            },
            {
                id: 12,
                menuName: "Badge",
                link: "/rb-badge"
            },
            {
                id: 13,
                menuName: "Button",
                link: "/rb-button"
            },
            {
                id: 14,
                menuName: "Breadcrumb",
                link: "/rb-breadcrumb"
            },
            { id: 15, link: "/rb-button-group", menuName: "ButtonGroup " },
            { id: 16, link: "/rb-cards", menuName: "Cards " },
            { id: 17, link: "/rb-image", menuName: "Images " },
            { id: 18, link: "/rb-list-group", menuName: "ListGroup " },
            { id: 19, link: "/rb-figure", menuName: "Figure " },
            { id: 110, link: "/rb-pagination", menuName: "Pagination " },
            { id: 112, link: "/rb-progressbars", menuName: "PrgressBars " },
            { id: 113, link: "/rb-spinners", menuName: "Spinners " },
            { id: 114, link: "/rb-tables", menuName: "Tables " },
        ]
    },
    {
        id: 2,
        menuName: "Interactive Comp.",
        children: [
            { id: 21, link: "/rb-accordion", menuName: "Accordion " },
            { id: 22, link: "/rb-carousels", menuName: "Carousels " },
            { id: 23, link: "/rb-dropdowns", menuName: "Dropdowns " },
            { id: 24, link: "/rb-modal", menuName: "Modals " },
            { id: 25, link: "/rb-navbar-offcanvas", menuName: "Navbar" },
            { id: 26, link: "/rb-nav-tabs", menuName: "NavTabs" },

        ]
    },
    {
        id: 3,
        menuName: "Forms Comp",
        children: [
            { id: 31, link: "/forms/rb-basic-form", menuName: "RB Formik Form" },
            { id: 32, link: "/forms/react-hook-form", menuName: "React Hook Form" },
            { id: 33, link: "/forms/react-hook-form-yup", menuName: "React Hook Form Yup" },

        ]
    },

    {
        id: 4,
        menuName: "Blog",
        children: [
            { id: 41, link: "/blog", menuName: "Blog" },

        ]
    },

    {
        id: 5,
        menuName: "Context API",
        children: [
            { id: 51, link: "/context-api", menuName: "Context" },
            { id: 52, link: "/products", menuName: "Products" },
            { id: 53, link: "/wishlist", menuName: "Wishlist" },

        ]
    },





]