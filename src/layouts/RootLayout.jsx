import { Card, Col, Container, Row } from "react-bootstrap"
import { Link, NavLink, Outlet } from "react-router-dom"
import { NavigationData } from '../data/NavigationData';

const RootLayout = () => {
    return (
        <Container>
            <Row>
                <Col lg={3} md={3} >
                    <Card>
                        <ul>
                            {NavigationData.map((menu) => {
                                return (
                                    <li key={menu.id}>
                                        <NavLink to={menu.link}>{menu.menuName}</NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </Card>
                </Col>
                <Col lg={9} md={9}>
                    <Card>
                        <Outlet />
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default RootLayout
