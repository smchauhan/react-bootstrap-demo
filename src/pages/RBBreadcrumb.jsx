import { Fragment } from "react";
import BBreadcrumb from "../components/BBreadcrumb";
import { BreadCrumbLinks } from "../data/BreadcrumbData";

const RBBreadcrumb = () => {
    return (
        <Fragment>
            <BBreadcrumb navlinks={BreadCrumbLinks} />
        </Fragment>
    )
}
export default RBBreadcrumb
