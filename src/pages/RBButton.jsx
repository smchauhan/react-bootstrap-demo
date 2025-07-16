import { Col, Container, Row, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import SectionHeading from '../components/SectionHeading';
import { useState } from 'react';

const RBButton = () => {
    const [value, setValue] = useState([]);
    const handleChange = (val) => setValue(val);
    return (
        <Container>
            <SectionHeading
                title="Bootstrap Buttons"
                description="Use Bootstrap's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more." />


            <Row>
                <Col>
                    <Button variant="link" href="#" className='bg-primary text-white text-decoration-none me-2'>Link</Button>
                    <Button variant="primary" className='me-2' >Button</Button>
                    <Button variant="primary" as="input" className='me-2' style={{ width: "90px" }} id="inputbutton" name='inputbutton' value="Input" />
                    <Button variant="primary" type="submit" className='me-2'>Submit</Button>
                    <Button variant="primary" type="reset" className='me-2'>Reset</Button>

                </Col>
            </Row><hr />
            <Row>
                <Col>
                    <div className={value.join(' ')}>This is result of below buttons </div>
                    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                        <ToggleButton id="tbg-btn-1" variant='outline-primary' value="fw-bold">
                            Bold
                        </ToggleButton>
                        <ToggleButton id="tbg-btn-2" variant='outline-primary' value="fst-italic">
                            Italic
                        </ToggleButton>
                        <ToggleButton id="tbg-btn-3" variant='outline-primary' value="text-decoration-underline">
                            Underline
                        </ToggleButton>
                        <ToggleButton id="tbg-btn-4" variant='outline-primary' value="text-decoration-line-through">
                            Line Through
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default RBButton
