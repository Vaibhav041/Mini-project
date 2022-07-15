import React, {useState} from 'react'
import axios from 'axios';
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        "name":"",
        "password":"",
    })

    const handleName = (e) => {
        let val = {"name":e.target.value};
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
        const {name, password} = data;
        if (name && password) { 
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
   
    return (
        <div className="container">
            <div className="wrap">
                <div className="form-div">
                    <form className="frm">
                        <h2>LogIn</h2>
                        <input className="inp" type="text" placeholder="Name" value={data.name} onChange={handleName}/>
                        <input className="inp" type="text" placeholder="Password" value={data.password} onChange={handlePass}/>
                        <input className="btn" type="submit" value="Submit" onClick={register}/>
                    </form>
                    <p className="log"> new user? <NavLink to="/" className='createNewBtn' >Register</NavLink></p>
                </div>
                <div className="image-div">
                    {/* <img className="img" src="/logo192.png"/> */}
                </div>
            </div>
        </div>
    )
}

export default Login
