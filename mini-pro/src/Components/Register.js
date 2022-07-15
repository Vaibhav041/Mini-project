import React, {useState} from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        "name":"",
        "email":"",
        "batch":"",
        "section":"",
        "password":"",
    })

    const handleName = (e) => {
        let val = {"name":e.target.value};
        setData(data => ({
            ...data,
            ...val
        }))
    }
    const handleEmail = (e) => {
        let val = {"email":e.target.value};
        setData(data => ({
            ...data,
            ...val
        }))
    }
    const handlePass = (e) => {
        let val = {"password":e.target.value};
        setData(data => ({
            ...data,
            ...val
        }))
    }
    const register = () => {
        const {name, email, batch, section, password} = data;
        if (name && email && batch && section && password) { 
            axios.post("http://localhost:9002/Register", data).then(res => console.log(res));
        }
        else {
            alert("shi se bhar");
        }
        navigate(`/message/${data.name}`, {
            state: {
                data,
            },
        });
    }
    const handleBatch = (e) => {
        let val = {"batch":e.target.value};
        setData(data => ({
            ...data,
            ...val
        }))
    }
    const handleSec = (e) => {
        let val = {"section":e.target.value};
        setData(data => ({
            ...data,
            ...val
        }))
    }
    return (
        <div className="container">
            <div className="wrap">
                <div className="form-div">
                    <form className="frm">
                        <h2>Register</h2>
                        <input className="inp" type="text" placeholder="Name" value={data.name} onChange={handleName}/>
                        <input className="inp" type="text" placeholder="Email" value={data.email} onChange={handleEmail}/>
                        <input className="inp" type="text" placeholder="Batch" value={data.batch} onChange={handleBatch}/>
                        <input className="inp" type="text" placeholder="Section" value={data.section} onChange={handleSec}/>
                        <input className="inp" type="text" placeholder="Password" value={data.password} onChange={handlePass}/>
                        <input className="btn" type="submit" value="Submit" onClick={register}/>
                    </form>
                    <p className="log"> already user? <NavLink to="/Login" className='createNewBtn' >Log In</NavLink></p>
                </div>
                <div className="image-div">
                    {/* <img className="img" src="/logo192.png"/> */}
                </div>
            </div>
        </div>
    )
}

export default Register
