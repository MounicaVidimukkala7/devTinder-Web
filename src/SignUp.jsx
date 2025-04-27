import React, { useState } from 'react';
import axios from "axios";

const SignUp = () => {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const handleSignUp = async () => {
       try{
        await axios.post("http://localhost:7777/signup",{
            firstName,
            lastName,
            emailId,
            password
        },{
            withCredentials: true
        })
       } catch(err){
        console.log("Error",err)
       }
    }
    return (
        <div className='h-[80vh] flex items-center justify-center'>
            <div className="card card-border bg-base-300 w-96">
                <div className="card-body">
                    <h2 className="card-title">Sign Up</h2>
                    <div className="fieldset">
                        <label className="fieldset-legend">First Name</label>
                        <input type="text" className="input" onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="fieldset">
                        <label className="fieldset-legend">Last Name</label>
                        <input type="text" className="input" onChange={(e) => setLastName(e.target.value)} />

                    </div>
                    <div className="fieldset">
                        <label className="fieldset-legend">Email Id</label>
                        <input type="text" className="input" onChange={(e) => setEmailId(e.target.value)} />

                    </div>
                    <div className="fieldset">
                        <label className="fieldset-legend">Password</label>
                        <input type="password" className="input" onChange={(e) => setPassword(e.target.value)} />

                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={handleSignUp}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
