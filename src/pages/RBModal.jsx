import React, { useState } from 'react'
import { Button, CloseButton, Modal } from 'react-bootstrap'
import ConfirmModal from '../components/ConfirmModal';

const RBModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            <ConfirmModal show={show} onHide={handleClose} />
        </div>
    )
}

export default RBModal
