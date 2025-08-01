import React, { useContext, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/context'

const Login = () => {
    const { username, setUsername } = useContext(UserContext)
    const [name, setName] = useState('')
    const navigate = useNavigate()
    const handleLogin = () => {
        // Need to first check user validation.....
        localStorage.setItem("login", true);
        setUsername(name)
        navigate('/context-api')
    }
    return (
        <Container className='vh-100 d-flex align-items-center' >
            <Card style={{ width: "50%" }} className='mx-auto'>
                <Card.Body>
                    <Card.Title>Please Login </Card.Title>
                    <Form>
                        <Row>
                            <Col md={12} >
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text"
                                        placeholder='Enter username'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder='Enter Password' />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Button onClick={handleLogin}>Login</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </Container >
    )
}

export default Login
