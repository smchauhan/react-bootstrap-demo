import React, { useContext } from 'react'
import { Accordion, AccordionContext, Card, useAccordionButton } from 'react-bootstrap'
import { DashCircle, PlusCircle } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

function ToggleAccordionTitle({ children, eventKey }) {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey);
    const isCurrentEventKey = activeEventKey === eventKey;
    return (
        <NavLink onClick={decoratedOnClick} className="d-flex justify-content-between" >
            <div>{children}</div>
            <div>{isCurrentEventKey ? <DashCircle /> : <PlusCircle />} </div>
        </NavLink>
    );
}


const RBAccordion = () => {
    return (
        <Accordion defaultActiveKey="0">
            <div>
                <ToggleAccordionTitle eventKey="0">Click me!</ToggleAccordionTitle>
                <Accordion.Collapse eventKey="0">
                    <div>Hello! I am the body</div>
                </Accordion.Collapse>
            </div>
            <div>
                <ToggleAccordionTitle eventKey="1">Click me!</ToggleAccordionTitle>
                <Accordion.Collapse eventKey="1">
                    <div>Hello! I am another body</div>
                </Accordion.Collapse>
            </div>
        </Accordion>
    )
}

export default RBAccordion
