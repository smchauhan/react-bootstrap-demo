import { Accordion, Badge, Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap"
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"
import { NavigationData } from '../data/NavigationData';
import { Fragment, useContext } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import ScrollToTop from "../components/ScrollToTop";
import { UserContext } from "../context/context";

const RootLayout = () => {
    const { username } = useContext(UserContext)
    const navigate = useNavigate()
    const login = localStorage.getItem("login")
    const handleLogout = () => {
        localStorage.setItem("login", false)
        navigate("/")
    }
    console.log(login === 'true' ? "Login" : "Logout")
    return (
        <Container className="mt-3" >
            <Row>
                <Col lg={3} md={3}  >
                    <Card className="sidebar p-3" style={{ minHeight: '500px' }}>
                        <Badge className="p-3 mb-2">RB, RHF, RRouter & Context API</Badge>
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
                        <div className="text-end">
                            {login === 'true' ? <>Welcome {username} !{' '} <Button onClick={handleLogout}>Logout</Button></> : <NavLink to="/login" >Login</NavLink>}
                        </div>
                        <hr />
                        <Outlet />
                    </Card>
                </Col>
            </Row>
            <ScrollToTop />
        </Container>
    )
}

export default RootLayout
