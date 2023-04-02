import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [credentials, setCredentials] = useState({ phone: "", name: "", password: "" })
    let navigate = useNavigate()
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        const { phone, name, password } = credentials;
        const host = "http://localhost:5000"
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ phone, name, password })
        });
        const json = await response.json()
        console.log(json)
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            //props.showAlert("Account created successfully","success")
        } else {
            //props.showAlert("Invalid credentials","danger")
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
                    <span className="input-group-text"><i className="fa-solid fa-user"></i></span>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="name" name="name" onChange={onChange} required />
                        <label for="name">Name</label>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fa-solid fa-lock"></i></span>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="password" name="password" onChange={onChange} required />
                        <label for="password">Password</label>
                    </div>
                </div>
                <button style={{ width: '100%' }} type="submit" onClick={handleSubmit} className="btn btn-primary">Register</button>
            </div>
        </>
    )
}

export default Signup
