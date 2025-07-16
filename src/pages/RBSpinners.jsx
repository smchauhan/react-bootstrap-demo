import React, { Fragment, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'

const RBSpinners = () => {
    const [loading, setLoading] = useState(false)
    return (
        <div>
            <Button variant="primary" disabled={loading} className='me-2'
                onClick={() => setLoading(true)} >
                {loading ?
                    <Fragment>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />{' '}
                        Loading...
                    </Fragment>
                    : <span>Submit</span>
                }
            </Button>
            <Button variant='danger' disabled={!loading} onClick={() => setLoading(false)}>Cancel</Button>
        </div>
    )
}

export default RBSpinners
