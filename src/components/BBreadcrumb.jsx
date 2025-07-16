import { Fragment } from "react";
import { Breadcrumb, Button } from "react-bootstrap"
import { ChevronRight, Folder } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const BBreadcrumb = ({ navlinks }) => {
    const CustomLink = (props) => {
        const { href, children } = props;
        return (
            <Fragment>
                <NavLink to={href}>{children}</NavLink>
                <ChevronRight size={10} className="mx-2" />
            </Fragment>
        )
    };
    return (
        <Breadcrumb className="navigation">
            {navlinks.map((item, index) => {
                return (
                    <Fragment key={index}>
                        {item.active ?
                            <Breadcrumb.Item bsPrefix=" " active >
                                {item.name}
                            </Breadcrumb.Item>
                            :
                            <Breadcrumb.Item bsPrefix=" " linkAs={CustomLink} href={item.link}>
                                {item.name}
                            </Breadcrumb.Item>
                        }
                    </Fragment>
                )
            })}
        </Breadcrumb>
    )
}

export default BBreadcrumb
