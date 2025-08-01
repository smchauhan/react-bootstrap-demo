import React from 'react'
import { blogPostData } from '../../data/BlogPostData'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

const BlogListing = () => {
    //const navigate = useNavigate()
    // const handleNavigate = () => {
    //     let stateData = {
    //         blogID: 1,
    //         blogTitle: "His mother had always taught him",
    //         action: "redirected using navigate"
    //     }
    //     navigate("/blog/1?result=123#blogsection", { state: stateData })
    // }
    return (
        <Container>
            <Row>

                {blogPostData.map((blog) => {
                    return (
                        <Col md={4} key={blog.id} className='p-2' >
                            <Card >
                                <Card.Img variant="top" src={blog.image} />
                                <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    <NavLink to={`/blog/${blog.id}`}>Read More</NavLink>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default BlogListing
