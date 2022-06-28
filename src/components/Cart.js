
import {useState,useEffect} from "react";
import { CartState } from "../context/Context";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Col, Image, ListGroupItem,Row,Form} from "react-bootstrap";
import Rating from './Rating';
import Container from "react-bootstrap/Container";
import { AiFillDelete } from "react-icons/ai";



const Cart = () => {
    const {
		state: { cart },
		dispatch,
	} = CartState();
	
		
    const [total,setTotal]=useState();
    useEffect(()=>{

        setTotal(cart.reduce((acc, curr)=>acc + Number(curr.price),0));
	},[cart]);
	
	return (
		<div className="home">
			<div className="productContainer">
				<ListGroup>
					{cart.map(prod => (
						<ListGroup.Item key={prod.id}>
							<Row className="inner">
								<Col md={2}>
									<Image
										src={prod.image}
										style={{ width: 200 }}
										fluid
										rounded
									/>
								</Col>

								<Col md={2}>
									<span>{prod.name}</span>
								</Col>
								<Col md={2}>
									<span>$ {prod.price}</span>
								</Col>
								<Col md={2}>
									<Rating rating={prod.ratings} />
								</Col>
								<Col md={2}>
									<Form.Control as="select" value={prod.qty}
										onChang={(e)=>
											dispatch({
											type:"CHANGE_CART_QTY",
											payload:{
												id:prod.id,
												qty:e.target.value,
											},
										})
										}
										>
										{[1, 2, 3, 4, 5].map(x => (
											<option key={x}>{x}</option>
										))}
									</Form.Control>
								</Col>
								<Col md={2}>
									<Button
										type="button"
										variant="light"
										onClick={() =>
											dispatch({
												type: "REMOVE_FROM_CART",
												payload: prod,
											})
										}
									>
										<AiFillDelete fontSize="20px" />
									</Button>
								</Col>
							</Row>
						</ListGroup.Item>
					))}
				</ListGroup>
			</div>
			<div className="filters summary">
				<span className="title">SubTotal ({cart.length}) items</span>

				<span style={{ fontWeight: 700, fontSize: 20 }}>
					Total: $ {total} 
				</span>

				<Button type="button " disable={cart.length === 0}>
					Proceed to CheckOut
				</Button>
			</div>
		</div>
	);
};

export default Cart;