import React, { Fragment } from 'react'
import { CommentsData } from "../data/CommentsData"
const RBPagination = () => {
    return (
        <Fragment>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                {CommentsData.map((data, index) => {
                    return (
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                        </tr>
                    )
                })}
            </table>
        </Fragment>
    )
}

export default RBPagination
