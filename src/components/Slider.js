import React from 'react'
import {useNavigate} from "react-router-dom"

const Slider = () => {
    const navigate=useNavigate();
    return (
        <>
        
        <swiper-container>
            <swiper-slide>
            <div onClick={()=>navigate("/Products")} className="card" style={{border:'none'}} >
                <img src="https://simplyhomecooked.com/wp-content/uploads/2021/06/double-chocolate-cookies.jpg" className="responsive card-img-top" alt=""/>  
                <div  style={{height: '80px',position:'absolute',width: '80%',background: 'rgba(255,255,255,0.5)',left: '10%',borderRadius:'15px'}}>
                <h2 style={{marginLeft: '30%',marginTop: '5%'}}>$6.50 /kg</h2>
                <i className="fa-solid fa-cart-shopping fa-4x" style={{top: '10%',right:'2%',position:'absolute'}}></i>
                </div>
            </div>'
            </swiper-slide>
            <swiper-slide>
            <div className="card" style={{border:'none'}}>
                <img src="https://media.istockphoto.com/id/114158652/photo/chocolate-fudge-cookie.jpg?s=612x612&w=0&k=20&c=-suNAKD9M3yUbETis5X2nP-LNYXp7pne1XgBoBPbHgQ=" className="responsive card-img-top" alt=""/>
                <div  style={{height: '80px',position:'absolute',width: '80%',background: 'rgba(255,255,255,0.5)',left: '10%',borderRadius:'15px'}}>
                <h2 style={{marginLeft: '30%',marginTop: '5%'}}>$6.50 /kg</h2>
                <i className="fa-solid fa-cart-shopping fa-4x" style={{top: '10%',right:'2%',position:'absolute'}}></i>
                </div>
            </div>
            </swiper-slide>
            <swiper-slide>
            <div className="card" style={{border:'none'}}>
                <img src="https://media.istockphoto.com/id/183774632/photo/chocolate-cookie-isolated-clipping-path.jpg?s=612x612&w=0&k=20&c=RmuGciviuuq07RMYXFPVtc9p8lntqaVO6BefKMuc1Vs=" className="responsive card-img-top" alt=""/>  
                <div  style={{height: '80px',position:'absolute',width: '80%',background: 'rgba(255,255,255,0.5)',left: '10%',borderRadius:'15px'}}>
                <h2 style={{marginLeft: '30%',marginTop: '5%'}}>$6.50 /kg</h2>
                <i className="fa-solid fa-cart-shopping fa-4x" style={{top: '10%',right:'2%',position:'absolute'}}></i>
                </div>
            </div>
            </swiper-slide>
            <swiper-slide>
            <div className="card" style={{border:'none'}}>
                <img src="https://bing.com/th?id=OSK.81799f3d5bc650abfda92ed231d9b6a1" className="responsive card-img-top" alt=""/>  
                <div  style={{height: '80px',position:'absolute',width: '80%',background: 'rgba(255,255,255,0.5)',left: '10%',borderRadius:'15px'}}>
                <h2 style={{marginLeft: '30%',marginTop: '5%'}}>$6.50 /kg</h2>
                <i className="fa-solid fa-cart-shopping fa-4x" style={{top: '10%',right:'2%',position:'absolute'}}></i>
                </div>
            </div>
            </swiper-slide>
        </swiper-container>
            
        </>
    )
}

export default Slider
