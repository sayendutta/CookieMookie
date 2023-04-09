import React,{useContext, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import productContext from '../context/products/productContext';
import Products from './Products';

const Slider = () => {
    const context=useContext(productContext);
    const {products,setProducts,getProducts}=context;
    const navigate=useNavigate();
    useEffect(()=>{
        getProducts()
    },[])
    
    return (
        <>
        <swiper-container>
            {products.map((pro)=>{
                return <swiper-slide key={pro._id}>
                <div onClick={()=>{navigate('/Products',{state:pro._id})}} className="card" style={{border:'none'}} >
                    <img src={pro.pimage} className="responsive card-img-top" alt=""/>  
                    <div  style={{height: '80px',position:'absolute',width: '80%',background: 'rgba(255,255,255,0.5)',left: '10%',borderRadius:'15px'}}>
                    <h2 style={{marginLeft: '30%',marginTop: '5%'}}>{pro.price}/kg</h2>
                    <i className="fa-solid fa-cart-shopping fa-4x" style={{top: '10%',right:'2%',position:'absolute'}}></i>
                    </div>
                </div>
                </swiper-slide>
            })}
            
           
        </swiper-container>
            
        </>
    )
}

export default Slider
