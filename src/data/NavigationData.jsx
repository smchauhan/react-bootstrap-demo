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
            { id: 21, link: "/rb-carousels", menuName: "Carousels " },

        ]
    },
    {
        id: 3,
        menuName: "Forms Comp",
        children: [
            { id: 31, link: "/rb-forms", menuName: "Forms " },
        ]
    }


]