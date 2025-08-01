import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'

const RBNavTabs = () => {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav className='navtabs'>
                <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
            </Nav>

            <Tab.Content>
                <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
            </Tab.Content>
        </Tab.Container>
    )
}

export default RBNavTabs
