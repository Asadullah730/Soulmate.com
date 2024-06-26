import React from "react";
import "./SignUp.css";
import m2 from "../image/m2.webp";
import { Link, useNavigate } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


export default function SignUp() {
  const schema = yup.object({
    // defining the Schema of Yup
    name: yup.string().required("Please Enter your name"),
    email: yup.string().required(),
    password: yup.string().required("Password must be required").min (8, 'Password must be up to eight characters'),
    confirmpassword: yup.string().required("Password must be required").min (8, 'Password must be up to eight characters').oneOf([yup.ref("password")], "Your password does't match"),
  }).required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigateuserinfo = useNavigate("");
  const navigateLogin = useNavigate("");
  const onSubmit = (values) => {
    console.log(values);
    navigateuserinfo ("/userinfo")
    reset();
    
  };
  

  return (
    <div className="SignUp">
      <div className="form-Container">
        <br />
         <form onSubmit={handleSubmit(onSubmit)}>  {/*register the onSubmit function in form */}
          <div className="usericon">
            <IoIosContact />
          </div>

          <h3>Registration Form</h3>

          <br></br>
          <div>
            <label htmlFor="name">User Name : </label>
            <br />
            <input
              type="text"
              
              placeholder="Enter your Name ..."
              {...register("name", { required: true })}
            />

            {errors.name && <span>{errors.name.message}</span>}
            <br />
            <br />
          </div>

          <div>
            <label htmlFor="gmail">Gmail : </label>
            <br />
            <input
              type="email"
              placeholder="Enter your Gmail ..."
              {...register("email", { required: true })}
            />
            {errors.email && <span>{errors.email.message}</span>}
            <br />
            <br />
          </div>

          <div>
            <label htmlFor="password">Password : </label>
            <br />
            <input
              type="password"
              placeholder="Enter your Password ..."
              {...register("password", { required: true })}
            />
            {errors.password && <span>{errors.password.message}</span>}
            <br />
            <br />
          </div>

          <div>
            <label htmlFor="confirmpassword">Confirm Password : </label>
            <br />
            <input
              type="password"
              placeholder="Please Confirm your Password ..."
              {...register("confirmpassword", { required: true})}
            />
            {errors.confirmpassword && (
              <span>{errors.confirmpassword.message}</span>
            )}
            <br />
            <br />
          </div>
            <button type="submit"> SignUp</button>
          <div>
            
            
            <p>
              Are you already have an Account ?
              <Link to="/login">Login Here</Link>
            </p>
          </div>
        </form>
      </div>

      <div>
        <img src={m2} height={750} width={750} alt=" for SignUp Form" />
      </div>
      
    </div>
  );
}
