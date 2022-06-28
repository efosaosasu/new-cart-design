import React, { useContext, useReducer } from 'react'
import {createContext} from "react"
 

import products from '../data';
import { Reducer } from './Reducer';
import { productReducer } from "./Reducer";
const Cart= createContext()

const Context = ({children}) => {
   
		{products.map((product)=>{
return product

        })}
        const [state, dispatch] = useReducer(Reducer, {products:products,
             cart:[]
            });
            const [productState,productDispatch]=useReducer(productReducer,
                {
                    byRating:0,
                    searchQuery:"",
                    byFastDelivery:false,

                })
           
    return (
        <Cart.Provider value={{ state,dispatch,productState,productDispatch }}>
            {children}
        </Cart.Provider>
    )
}

export default Context;
export const CartState=() =>{
    return useContext(Cart);
}

