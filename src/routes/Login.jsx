import React, { useState, useEffect } from 'react';
import Img1 from "../assets/loginimg.png";

const Login = () => {
  const initialValues = { username: "", email: "", password: "", confirmpassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [Checked,setChecked]=useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setIsSubmit(true);

    // If there are errors, stop the submission process
    if (Object.keys(errors).length !== 0) {
      alert("Please fix the errors before submitting.");
      return;
    }

    // Prepare the data in the format required by the API
    try {
      await fetch("https://sheetdb.io/api/v1/asn6cvjoo7495", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [
            {
              'name': formValues.username,
              'password': formValues.password,
              'email': formValues.email,
            }
          ]
        })
      });

      alert("Data saved successfully.");
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "Confirm password is required";
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = "Passwords do not match";
    }
    return errors;
  };

  return (
    <div className='flex flex-col md:flex-row items-center justify-center h-[400px] w-full bg-[#0f172a] text-white p-4'>
      <div className="image mb-4 md:mb-0">
        {/* <img src={Img1} className='w-[300px] md:w-[500px]' alt="Login" /> */}
      </div>
      {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}

      <form onSubmit={handleSubmit}>
        <div className='flex flex-col items-center h-[300px] w-[400px] justify-center rounded-lg pb-4'>
          <div className="field flex flex-col">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder='Username'
              value={formValues.username}
              onChange={handleChange}
              className='text-black p-2 rounded-md'
            />
            {formErrors.username && <span className='text-red-500'>{formErrors.username}</span>}
          </div>

          <div className="field flex flex-col">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder='Email'
              value={formValues.email}
              onChange={handleChange}
              className='text-black p-2 rounded-md'
            />
            {formErrors.email && <span className='text-red-500'>{formErrors.email}</span>}
          </div>

          <div className="field flex flex-col">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder='Password'
              value={formValues.password}
              onChange={handleChange}
              className='text-black p-2 rounded-md'
            />
            {formErrors.password && <span className='text-red-500'>{formErrors.password}</span>}
          </div>

          <div className="field flex flex-col">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              placeholder='Confirm Password'
              value={formValues.confirmpassword}
              onChange={handleChange}
              className='text-black p-2 rounded-md'
            />
            {formErrors.confirmpassword && <span className='text-red-500'>{formErrors.confirmpassword}</span>}
          </div>

          <button type='submit' className='w-[200px] border-black border p-3 rounded-md mt-2 bg-amber-500 text-white'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
