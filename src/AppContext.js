import axios from "axios";
import { Children, createContext, useEffect, useState } from "react";

export const AppContext =createContext({})
export const    AppProvider=({children})=>{


const [product,setProduct]=useState([])
useEffect(()=>{
    fetchApi();
},[])
const [cart,setCart]=useState([])
const url="https://66a0a2837053166bcabc1470.mockapi.io/product"
const fetchApi=()=>{
    axios.get(url)
    .then(function(res){
        setProduct(res.data)
    })
    .catch(function(error){
        console.log(error);
    })
}
const addCart=(id)=>{
const res=product.find(item=>item.id===id)
    const index=cart.findIndex(item=>item.id===id)
    if(index>=0){
        let newCart= cart;
        newCart[index].quantity++;
        setCart(newCart);
    }else{
        setCart([...cart,{...res,quantity:1}])
    }
   
}



    return <AppContext.Provider value={{cart,addCart}}>

        {children}
    </AppContext.Provider>
}