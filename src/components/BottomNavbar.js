import React from 'react'


const BottomNavbar = () => {
  return (
    <div className='container' style={{position:'absolute',bottom: '0px',width:'100%',height:'80px',boxShadow: '6px 6px 6px 6px rgb(186, 192, 194)'}}>
      <div className="row" >
        <div className="col md-3">
        <i className="fa-solid fa-house fa-lg" style={{marginLeft: '10%',color:'#CB4154'}}></i>
        <p style={{color: 'blue'}}>Home</p>
        </div>
        <div className="col md-3">
        <i className="fa-solid fa-heart fa-lg" style={{color:'red'}}></i>
        <p style={{color: 'blue'}}>Fav</p>
        </div>
        <div className="col md-3">
          <i className="fa-solid fa-gift fa-lg" style={{color:'green'}}></i>
          <p style={{color: 'blue'}}>Gift</p>
        </div>
        <div className="col md-3">
        <i className="fa-solid fa-face-smile fa-lg" style={{marginLeft: '15%',color:'#E8BEAC'}}></i>
          <p style={{color: 'blue'}}>About</p>
        </div>
      </div>
    </div>
  )
}

export default BottomNavbar
