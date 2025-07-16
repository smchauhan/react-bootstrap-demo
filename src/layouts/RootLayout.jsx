import { Accordion, Badge, Card, Col, Container, ListGroup, Row } from "react-bootstrap"
import { Link, NavLink, Outlet } from "react-router-dom"
import { NavigationData } from '../data/NavigationData';
import { Fragment } from "react";
import { ArrowRight } from "react-bootstrap-icons";

const RootLayout = () => {
    return (
        <Container >
            <Row>
                <Col lg={3} md={3}  >
                    <Card className="sidebar p-3" style={{ minHeight: '500px' }}>
                        <Badge className="p-3 mb-2">Bootstrap Components</Badge>
                        <Accordion defaultActiveKey={[1]} flush>

                            {NavigationData.map((menu) => {
                                return (
                                    <Accordion.Item eventKey={menu.id} key={menu.id}>
                                        <Accordion.Header>{menu.menuName}</Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup variant="flush">
                                                {menu.children.map((item) => {
                                                    return (
                                                        <ListGroup.Item key={item.id}>
                                                            <ArrowRight size={15} />   <NavLink to={item.link}>{item.menuName}</NavLink>
                                                        </ListGroup.Item>
                                                    )
                                                })}
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })}
                        </Accordion>
                    </Card>
                </Col>
                <Col lg={9} md={9}>
                    <Card className="p-3" style={{ minHeight: '500px' }}>
                        <Outlet />
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default RootLayout
