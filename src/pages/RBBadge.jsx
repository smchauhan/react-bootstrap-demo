import { Badge, Container, Row } from 'react-bootstrap';
import SectionHeading from '../components/SectionHeading';

const RBBadge = () => {
    return (
        <Container>


            <SectionHeading
                title="Bootstrap Badges"
                description="Use Bootstrap's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more." />


            <Badge bg="primary" text="dark" className='custom-badge'>Primary</Badge>


        </Container>
    )
}

export default RBBadge
