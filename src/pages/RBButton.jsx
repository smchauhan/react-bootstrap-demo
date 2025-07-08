import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import SectionHeading from '../components/SectionHeading';

const RBButton = () => {
    return (
        <Container>
            <SectionHeading
                title="Bootstrap Buttons"
                description="Use Bootstrap's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more." />
            <Row>
                <Col>
                    <h3>Variant Example</h3>
                    {["primary", "secondary", "success", "warning", "danger",
                        "info", "light", "dark"].map((btnType, index) => (
                            <Button variant={btnType} key={index} className="me-2">
                                {btnType}
                            </Button>
                        ))}
                </Col>
            </Row>
        </Container>
    )
}

export default RBButton
