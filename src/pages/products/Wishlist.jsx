import React, { useContext } from 'react'
import { WishlistContext } from '../../context/context'
import { Button, Col, Container, Image, Table } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';

const Wishlist = () => {
    const { wishlistState, wishlistDispatch } = useContext(WishlistContext)
    return (
        <Container>
            <h1>Wishlist</h1>
            {/* {JSON.stringify(wishlistState, null, 2)} */}

            {wishlistState?.wishlistItems?.length <= 0 ?
                <div>There are no items added in your wishlist yet!!!</div>
                :
                <Table >
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishlistState?.wishlistItems?.map((item) => {
                            return (
                                <tr key={item.id} className='border '>
                                    <td>
                                        <Image src={item.thumbnail} style={{ width: '100px' }} />
                                        {item.title}
                                    </td>
                                    <td>
                                        <Button size='sm' variant='outline-danger'
                                            onClick={() => {
                                                wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: item.id })
                                                toast.info("Item has been removed from the wishlist");
                                            }}
                                        >Remove</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            }
            <ToastContainer />
        </Container>
    )
}

export default Wishlist
