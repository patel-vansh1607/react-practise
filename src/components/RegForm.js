import React, { useState } from "react";


const Regform = () => {

    const [formData, setFormData] = useState({
        name: "",
        number: "",
        password: "",
        comment: "",
      });

    return(
        <div className="form">
            <h1>REGISTRATION FORM</h1>
            <div className="input-details">
                <input name="name" type="text" placeholder="Enter your name" />
                <input name="email" type="email" placeholder="Enter your email" />
                <input name="password" type="password" placeholder="Enter your password" />
                <input name="Confirmpassword" type="password" placeholder="Confirm your password" />
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Regform