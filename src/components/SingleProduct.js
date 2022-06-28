import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartState } from '../context/Context';
import Rating from './Rating';


const SingleProduct = ({prod}) => {
 const {state:{cart},dispatch,}=   CartState()
 console.log(cart)
    return (
		<div className="products">
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={prod.image} alt={prod.name} />
				<Card.Body>
					<Card.Title>{prod.name}</Card.Title>
					<Card.Subtitle style={{ paddingBottom: 10 }}>
						<span>{prod.price}</span>
						{prod.fastDelivery ? (
							<div>Fast Delivery</div>
						) : (
							<div>4 days delivery</div>
						)}
						<Rating rating={prod.ratings} />
					</Card.Subtitle>
					{cart.some(p => p.id === prod.id) ? (
						<Button
							onClick={() => {
								dispatch({ type: "REMOVE_FROM_CART", payload: prod });
							}}
							variant="danger"
						>
							Remove From Cart
						</Button>
					) : (
						<Button
							onClick={() => {
								dispatch({ type: "ADD_TO_CART", payload: prod });
							}}
							variant="primary"
						>
							Add To Cart
						</Button>
					)}
				</Card.Body>
			</Card>
		</div>
	);
}

export default SingleProduct
