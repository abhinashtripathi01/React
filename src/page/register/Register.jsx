import React, { useState } from "react";

const Register = () => {
    //coding section

    //Make a state varaiables - 5 States
    // Format ( variableName, chaningvarName) = State
    const [firstName , SetFirstName] =useState("")
    const [lastName , SetLastName] =useState("")
    const [emailAddress, SetEmailAddress] =useState("")
    const [Password , SetPassword] =useState("")
    const [confirmPassword , SetConfirmPassword] =useState("")



    return(
        <div className="m-3">
           <h1> create a account </h1> 

           <form className="w-50">
           
            <label > Firstname</label>
            <input type="text" className="form-control" placeholder="Enter your Firstname "/>
            <label className="mt-2"> lastname</label>
            <input type="text" className="form-control" placeholder="Enter your name "/>
            <label className="mt-2"> Email Address</label>
            <input type="text" className="form-control" placeholder="Enter your email address "/>
            <label className="mt-2"> Password</label>
            <input type="text" className="form-control" placeholder="Enter your Password  "/>
            <label className="mt-2"> confirm Password</label>
            <input type="text" className="form-control" placeholder="confirm your Password  "/>
            <button className="btn btn-dark mt-2 w-100"> Create account</button>
            
            
           </form>
           </div>
    );
}

//exporting
export default Register;