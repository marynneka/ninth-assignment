import React, { useState } from "react";
import Input from "./input";
import Button from "./button";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const handleChange = (e, setState) => {
    setState(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !tel) {
      alert("Please fill in all required fields.");
      return;
    }
    alert(
      ` Hello ${name} ! \n Your Email is : ${email} \n Your Tel is : ${tel}`
    );

    // Reset input fields
    setName("");
    setEmail("");
    setTel("");
  };

  return (
    <>
      <h1>Fill the Form</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          label="name"
          handleChange={(e) => handleChange(e, setName)}
        />
        <Input
          type="text"
          placeholder="Enter Your Email"
          value={email}
          label="email"
          handleChange={(e) => handleChange(e, setEmail)}
        />
        <Input
          type="number"
          placeholder="Enter Your No"
          value={tel}
          label="tel"
          handleChange={(e) => handleChange(e, setTel)}
        />
        <Button />
      </form>
    </>
  );
};

export default Form;
