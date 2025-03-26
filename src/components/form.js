import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    password: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ });
  };

  const handleClick = () => {
    alert("Form Submitted! Check Console for Data.");
    console.log("Form Data:", formData);
  };

  const handleComment = () => {
    alert("Comment Submitted");
  };

  return (
    <div className="form">
      <div className="form-group">
        <input name="name" type="text" placeholder="Enter your name"  onChange={handleChange}  value={formData.name}/>
        <input name="number" type="number" placeholder="Enter your Number"  onChange={handleChange}  value={formData.number}/>
        <input name="name" type="password" placeholder="Enter your Password"  onChange={handleChange}  value={formData.password}/>

        <button onClick={handleClick}>Submit</button>
      </div>

      <div className="headings">
        <h1>React Fundamentals</h1>
        <p>We are learning React fundamentals</p>
        <textarea name="comment" placeholder="Add comment"  onChange={handleChange} value={formData.comment}></textarea>
        <button onClick={handleComment}>Comment</button>
      </div>
    </div>
  );
};

export default Form;
