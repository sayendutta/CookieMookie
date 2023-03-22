import React from 'react'
import BottomNavbar from './BottomNavbar'
import Slider from './Slider'



const Header = () => {
  return (
    <>
    <div className='container mt-5 mx-3'>
      <h1>Choose <b>cookies</b><br/>for your tea party</h1>
      <div style={{borderRadius:'120px 120px 90px ',width: '80px',top:'7%',right:'0px',height: '80px',backgroundColor:'yellow',position: 'absolute'}}>
        <i className="fa-solid fa-angle-left" style={{position:'absolute',top:'35%',left: '20%'}}></i>
        <p style={{transform: 'rotate(-90deg)'}}>Cart</p>
      </div>
    </div>
    
    <div className='container mt-4 mx-2'>
      <div className='row mx-1'>
        <div className='col' style={{width: '20vw',height: '20vw',borderRadius:'50%',backgroundColor:'#EBECF0'}}>
          <p style={{marginTop: '45%',marginLeft: '30%',fontWeight: '60px'}}>All</p>
        </div>
        <div className='col mx-2' style={{width: '20vw',height: '20vw',borderRadius:'50%',backgroundColor:'#EBECF0'}}>
        <i className="fa-solid fa-cookie fa-lg" style={{marginTop: '65%',marginLeft: '35%',fontWeight: '20px'}}></i>
        </div>
        <div className='col ' style={{width: '20vw',height: '20vw',borderRadius:'50%',backgroundColor:'#EBECF0'}}>
            <i className="fa-solid fa-ice-cream fa-lg" style={{marginTop: '65%',marginLeft: '35%',fontWeight: '60px'}}></i> 
        </div>
        <div className='col mx-2' style={{overflowX: 'auto',width: '20vw',height: '20vw',borderRadius:'50%',backgroundColor:'#EBECF0'}}>
        <i className="fa-solid fa-cookie-bite fa-lg" style={{marginTop: '65%',marginLeft: '35%',fontWeight: '60px'}}></i>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <Slider/>
    <BottomNavbar/>
    </>
  )
}

export default Header
