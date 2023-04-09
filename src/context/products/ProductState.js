import ProductContext from "./productContext";
import { useState } from "react";


const ProductState=(props)=>{
    const productInitial=[]
    const host = "http://localhost:5000";
    const [products,setProducts]=useState(productInitial)
    const getProducts=async ()=>{
        const response=await fetch(`${host}/api/products/fetchallproducts`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            }
        });
        const product=await response.json()
        setProducts(product)  
    }
    const getOneParticularProduct=async (pid)=>{
        const response=await fetch(`${host}/api/products/fetchoneproduct`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({pid})
        });
        const product=await response.json()
        setProducts(product)
        
    }
    return (
        <ProductContext.Provider value={{ products,setProducts,getProducts,getOneParticularProduct }}>
            {props.children}
        </ProductContext.Provider>
    )

}
export default ProductState;
