import { Col, Row } from "react-bootstrap"

const SectionHeading = ({ title, description }) => {
    return (
        <Row>
            <Col>
                <h1>{title}</h1>
                <p>{description}</p>
            </Col>
        </Row>
    )
}

export default SectionHeading
