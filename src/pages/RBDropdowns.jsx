import React, { useState } from "react";
import { Dropdown, Form, Image } from "react-bootstrap"
import { Person } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <NavLink
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </NavLink>
));
const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <Form.Control
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);

const RBDropdowns = () => {
    return (
        <div className="d-flex justify-content-between">


            <Dropdown>
                <Dropdown.Toggle id="dropdown-custom-components">
                    <Person /> Profile
                </Dropdown.Toggle>
                <Dropdown.Menu >
                    <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                    <Dropdown.Item eventKey="3" >
                        Orange
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>


            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    <Image style={{ width: "30px" }} src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_hybrid&w=740" />
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                    <Dropdown.Item eventKey="3" >
                        Orange
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default RBDropdowns
