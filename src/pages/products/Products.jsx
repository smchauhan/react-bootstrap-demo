import { Button, Card, CardTitle, Col, Container, Image, Row } from "react-bootstrap"
import { ProductsData } from "../../data/ProductsData"
import { useContext } from "react"
import { WishlistContext } from "../../context/context"
import { ToastContainer, toast } from 'react-toastify';
import { Check } from "react-bootstrap-icons";

const Products = () => {
    const { wishlistState, wishlistDispatch } = useContext(WishlistContext)
    const AddToWishlist = ({ product }) => {
        const found = wishlistState.wishlistItems.filter((item) => item.id === product.id).length > 0 ? true : false
        const handleAddToWishlist = () => {
            if (found) {
                toast.error("Item is already added in wishlist");
            } else {
                wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product })
                toast.success("Item added in wishlist");
            }
        }
        return (
            <>
                {/* <button onClick={notify}>Notify!</button> */}
                <Button size="sm" variant="outline-success"
                    onClick={() => handleAddToWishlist(product)}>
                    {found ? <Check size={15} /> : ""}
                    Add To Wishlist
                </Button>
            </>
        )
    }
    return (
        <Container>
            <h1>Our Products</h1>
            <ToastContainer />
            {/* <pre>{JSON.stringify(wishlistState, null, 2)}</pre> */}
            <Row>
                {ProductsData.map((product) => {
                    return (
                        <Col key={product.id} md={4} className="p-2" >
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Img src={product.thumbnail} />
                                    <CardTitle>{product.title}</CardTitle>
                                </Card.Body>
                                <Card.Footer className="bg-white border-0 d-flex justify-content-between">
                                    <AddToWishlist product={product} />
                                    <Button size="sm" variant="outline-primary">Add To Cart</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )
                })}
            </Row>

        </Container >
    )
}

export default Products
