import { Col, Container, ListGroup, Row } from "react-bootstrap"
import { NavLink, Outlet } from "react-router-dom"

const AllForms = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item><NavLink to="/forms">Nested Home</NavLink></ListGroup.Item>
                        <ListGroup.Item><NavLink to="rb-basic-form">RB Formik Form</NavLink></ListGroup.Item>
                        <ListGroup.Item><NavLink to="react-hook-form">React Hook Form</NavLink></ListGroup.Item>
                        <ListGroup.Item><NavLink to="react-hook-form-yup">React Hook Form Yup</NavLink></ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={9}>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}

export default AllForms
