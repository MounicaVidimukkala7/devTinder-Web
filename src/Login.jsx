import React, { useState } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './store/userSlice';

const Login = () => {
    const [emailId, setemailId] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    

    const handleLogin = async () => {
        try {
            await axios.post("http://localhost:7777/login", {
                emailId,
                password
            }, { withCredentials: true }).then((res) => {
                dispatch(setUser(res.data.data))
                console.log('Response data:', res.data.data)
              
            })
        } catch (err) {
            console.log("Error", err)
        }
    }
    return (
        <div className='h-[80vh] flex items-center justify-center'>
            <div className="card card-border bg-base-300 w-96">
                <div className="card-body">
                    <h2 className="card-title">Login</h2>
                    <div className="fieldset">
                        <label className="fieldset-legend">Email Id</label>
                        <input type="text" className="input" onChange={(e) => setemailId(e.target.value)} />

                    </div>
                    <div className="fieldset">
                        <label className="fieldset-legend">Password</label>
                        <input type="password" className="input" onChange={(e) => setPassword(e.target.value)} />

                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
