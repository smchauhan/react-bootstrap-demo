import React, { useEffect, useState } from 'react'
import { CommentsData } from '../data/CommentsData'
import { Button, Card, Form, InputGroup, Pagination, Table } from 'react-bootstrap'
import usePagination from '../hooks/usePagination'

const RBPagination = () => {
    const [page, setPage] = useState(1)
    const [pageNo, setPageNo] = useState(1)
    const [limitMessage, setLimitMessage] = useState('')

    const [limit, setLimit] = useState(20)
    //const tempData = CommentsData.slice(0, 40)
    const { totalPages, getData, getPaginationArray, getShowingInfo } = usePagination(CommentsData, page, limit)
    const data = getData();
    const paginationArray = getPaginationArray();
    const paginationInfo = getShowingInfo();

    console.log(paginationArray)
    const handleChangePage = (item) => {
        // console.log("Current Page " + parseInt(item))
        if (isNaN(item)) {
            switch (item) {
                case "FIRST":
                    setPage(1);
                    break;
                case "LAST":
                    setPage(totalPages);
                    break;
                case "NEXT":
                    if (page < totalPages) setPage(page + 1);
                    break;
                case "PREV":
                    if (page > 1) setPage(page - 1);
                    break;
            }
        } else {
            if (pageNo >= 1 && pageNo <= totalPages) {
                setPage(item)
                setLimitMessage('')
            } else {
                setPage(1)
                setLimitMessage('Page No. ' + pageNo + ' is out of the page range')
                console.log("Out of the range or invalid page no.")
            }
        }
    }
    useEffect(() => {
        setPageNo(page);
    }, [page])

    return (
        <div>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            <Card>
                <Card.Body className='d-flex justify-content-between'>

                    <div>
                        <InputGroup style={{ width: "90px" }}>
                            <Form.Control
                                type="text"
                                value={pageNo}
                                onChange={(e) => setPageNo(e.target.value)}
                                placeholder="Page No."
                                aria-label="Page No."
                                aria-describedby="btnGroupAddon"
                            />
                            <Button onClick={() => handleChangePage(pageNo)} size='sm'>Go</Button>
                        </InputGroup>
                        <span className='text-danger fs-6'>{limitMessage}</span> </div>
                    {paginationInfo}
                    {/* {paginationArray} */}
                    <Pagination>
                        <Pagination.First onClick={() => handleChangePage("FIRST")} />
                        <Pagination.Prev onClick={() => handleChangePage("PREV")} />
                        {paginationArray.map((item, index) => {
                            return (
                                <Pagination.Item
                                    key={index}
                                    active={page == item ? true : false}
                                    onClick={() => handleChangePage(item)}
                                >{item}</Pagination.Item>)
                        })}
                        <Pagination.Next onClick={() => handleChangePage("NEXT")} />
                        <Pagination.Last onClick={() => handleChangePage("LAST")} />
                    </Pagination>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RBPagination
