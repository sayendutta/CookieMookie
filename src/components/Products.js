import React,{useContext,useEffect}from 'react'
import {useNavigate,useLocation} from "react-router-dom";
import productContext from '../context/products/productContext';

const Products = () => {
    const navigate=useNavigate();
    const location=useLocation()
    const context=useContext(productContext);
    const {products,getOneParticularProduct}=context;
    useEffect(()=>{
      getOneParticularProduct(location.state)
    },[])
  return (
    <>
    <div className='container'>
        
            <i onClick={()=>{navigate(-1)}} style={{position:'absolute',top:'5.5%',left: '6%'}} className="fa-solid fa-angle-left fa-2x"></i>
            <h1 style={{position:'absolute',top:'5%',left:'20%'}}>Bitter Chocolate...</h1>
        
       <i style={{position:'absolute',left: '85%',top:'5%',color:'red'}} className="fa-solid fa-heart fa-2x"></i>
    </div>
    <br/>
    <br/>
    <div className="card" style={{marginTop: '10%',border:'none'}}>
    <img style={{width:'80%',height:'auto',marginLeft:'10%',boxShadow:'0px 0px 11px 0px rgb(186, 192, 194)'}}src={products.pimage} className="card-img-top" alt="..."/>
    </div>
    <div className='row my-2 mx-4'>
      <div className='col md-6 mx-2' style={{padding: '2%',width: '18%',height:'80px',borderRadius: '20px',backgroundColor:'rgb(186, 192, 194)'}}>
        <div style={{marginLeft:'10%'}}>
        <p >Serving Weight</p>
        <h2 style={{marginTop:'-4%'}}>{products.serving_weight}</h2>
        </div>
      </div>
      <div className='col md-6' style={{padding: '2%',width: '18%',height:'80px',borderRadius: '20px',backgroundColor:'rgb(186, 192, 194)'}}>
      <div style={{marginLeft:'10%'}}>
        <p >Shelf Life</p>
        <h2 style={{marginTop:'-4%'}}>{products.shelf_life}</h2>
        </div>
      </div>
    </div>
    <div className='row my-2 mx-4'>
      <div className='col md-6 mx-2' style={{padding: '2%',width: '18%',height:'80px',borderRadius: '20px',backgroundColor:'rgb(186, 192, 194)'}}>
      <div style={{marginLeft:'10%'}}>
        <p >Calories(100g)</p>
        <h2 style={{marginTop:'-4%'}}>{products.calory}</h2>
        </div>
      </div>
      <div className='col md-6' style={{padding: '2%',width: '18%',height:'80px',borderRadius: '20px',backgroundColor:'rgb(186, 192, 194)'}}>
      <div style={{marginLeft:'10%'}}>
        <p >Sweetener</p>
        <h2 style={{marginTop:'-4%'}}>{products.sweetener}</h2>
        </div>
      </div>
    </div>

    <div className='container ' style={{borderRadius: '40px',position:'absolute',bottom: '1%',width:'98.8%',height:'90px',backgroundColor:'black'}}>
      <h1 style={{color:'white',marginTop:'6%',marginLeft:'20%'}}><b>Add to Cart</b></h1>
      <i style={{color:'white',marginLeft:'70%',position:'absolute',marginTop:'-10%'}}className="fa-solid fa-cart-shopping fa-2x"></i>
    </div>

    </>
  )
}

export default Products