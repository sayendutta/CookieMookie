import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [credentials,setCredentials]=useState({phone: "",password: ""})
    let navigate=useNavigate()
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    const handleSubmit= async (e)=>{
        const {phone,password}=credentials;
        const host="http://localhost:5000"
        e.preventDefault()
        const response = await fetch(`${host}/api/auth/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ phone, password })

        });
        const json=await response.json()
        console.log(json)
        if(json.success){
            localStorage.setItem('token',json.authtoken)
            //Need to show alert
            
            const createCart=await fetch(`${host}/api/cart/addcartinfo`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'authtoken':localStorage.getItem('token')
                }
            });
            const jsonCart=await createCart.json()
            console.log(jsonCart)
            if(jsonCart.user){
                console.log('Cart Created')
                navigate("/");
            }
        }else{
            //Need to show alert
        }
    }
    return (
        <>
            <img src={process.env.PUBLIC_URL + "/images/CookieMookieLogo.png"} style={{ marginLeft: '25%', marginTop: '10%' }} alt="" />
            <div style={{ marginTop: '20%', marginLeft: '10%', marginRight: '10%' }}>
                <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fa-solid fa-phone"></i></span>
                    <div className="form-floating">
                        <input type="number" className="form-control" id="phone" name="phone" onChange={onChange} required />
                        <label for="phone">Phone</label>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fa-solid fa-lock"></i></span>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="password" name="password" onChange={onChange} required />
                        <label for="password">Password</label>
                    </div>
                </div>
                <button style={{ width: '100%' }} type="submit" onClick={handleSubmit} className="btn btn-primary">Sign In</button>
            </div>
        </>
    )
}

export default Login
