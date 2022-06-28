import React from 'react'

export const Reducer = (state,action) => {
	console.log(state)
     if (action.type === "ADD_TO_CART") {
		
			return {
				...state,
				cart:[...state.cart,{...action.payload,}]
			};
		}
		  if (action.type === "REMOVE_FROM_CART") {
			
				return {
					...state,
					cart:state.cart.filter((c) => c.id !== action.payload.id),
				};
			}
			if (action.type=== "CHANGE_CART_QTY"){
				return {
					...state,
					cart:state.cart.filter((c) =>
						c.id === action.payload.id ? (c.qty = action.payload.qty):c.qty),
				}
			}
   return state
};
export const productReducer=(state,action)=>{
	if(action.type=== "SORT_BY_PRICE"){
return { ...state, sort: action.payload };
	
	}
	if (action.type === "FILTER_BY_DELIVERY") {
		return { ...state, byFastDelivery: action.payload };
	}
	if (action.type === "FILTER_BY_SEARCH") {
		return { ...state, searchQuery: action.payload };
	}
	if (action.type === "FILTER_BY_RATING") {
		return { ...state, byRating: action.payload };
	}if (action.type ==="CLEAR_FILTER"){
		return {
			byRating: 0,
			searchQuery: "",
			byFastDelivery: false,
		};    
	}
	return  state;
}
