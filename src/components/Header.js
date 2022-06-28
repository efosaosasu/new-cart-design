import React from 'react'
import { CarouselItem, FormControl ,Nav,Badge} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { FaShoppingCart, FaSort } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
import Button from "react-bootstrap/Button";
import products from '../data';
const Header = () => {
	 const {state: {cart},dispatch,
	productState:{ byFastDelivery, sort, byRating, searchQuery},productDispatch} = CartState();
	
	 console.log(cart)
    return (
		<>
			<Navbar bg="dark" variant="dark" style={{ height: 80 }}>
				<Container>
					<Navbar.Brand>
						<Link to="/">Shopping Cart</Link>
					</Navbar.Brand>
				</Container>
				<Navbar.Text className="search" >
					<FormControl
						style={{ width: 550 }}
						placeHolder="Search Product "
						className="m-auto"
						onChange={(e)=>{
							productDispatch({
								type:"FILTER_BY_SEARCH",
								payload:e.target.value
							})
						}}
					/>
				</Navbar.Text>
				<Nav>
					<Dropdown>
						<Dropdown.Toggle variant="success">
							<FaShoppingCart color="white" fontSize="25px" />
							<Badge>{cart.length}</Badge>
						</Dropdown.Toggle>

						<Dropdown.Menu stylr={{ minWidth: 370 }}>
							<span style={{ padding: 10 }}>
								{cart.length > 0 ? (
									<>
										{cart.map(prod => (
											<span
												className="cartItem"
												key={prod.id}
											>
												<img
													src={prod.image}
													className="cartItemImg"
												/>
												<div className="cartitemDetail">
													{prod.name}
												</div>
												<AiFillDelete
													fontSize="20px"
													style={{
														cursor: "pointer",
													}}
													onClick={() =>
														dispatch({
															type:
																"REMOVE_FROM_CART",
															payload: prod,
														})
													}
												/>
											</span>
										))}
										<Link to="/cart">
											<Button style={{ width:"95%", margin:"0 10px"}}>
												Go To cart
											</Button>
										</Link>
									</>
								) : (
									<span>cart is Empty</span>
								)}
							</span>
						</Dropdown.Menu>
					</Dropdown>
				</Nav>
			</Navbar>
		</>
	);
}

export default Header
