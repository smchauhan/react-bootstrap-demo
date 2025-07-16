import React, { useState } from 'react'
import { Button, ProgressBar } from 'react-bootstrap'

const RBPrgressBars = () => {
    const [value, setValue] = useState(5)

    return (
        <div>
            <Button onClick={() => setValue(value + 5)} className='me-2'>Progress +5</Button>
            <Button onClick={() => setValue(value - 5)}>Progress -5</Button>
            <p>Completed {value}%</p>
            <ProgressBar animated now={value} />
            <br />
            <ProgressBar animated now={value} min={20} max={90} />
            <p>min={20}  max={90}</p>


        </div>
    )
}

export default RBPrgressBars
