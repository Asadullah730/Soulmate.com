import React from "react";
import "./SignIn.css";
import m2 from "../image/m2.webp";
import { Link,useNavigate } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import Navbar from "./Navbar";


export default function SignIn() {

  const schema = yup.object({
    userName : yup.string().required("User Name is Required"),
    password: yup.string().required("Password must be required").min (8, 'Password must be up to eight characters'),
  }).required();

  const navigateuserinfo = useNavigate(""); // for navigation 

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors},
  } = useForm({resolver : yupResolver(schema)});


  // Fetching Login Api
  const onSubmit = (values) => {
    axios.post ('http://localhost:3001/login',{name :values.userName,password : values.password})
    .then(result => {
      if (result.data ==="Success"){
        navigateuserinfo ("/requirement"); // navigate to requirement page
        alert("Successfully Login");
      }
      else {
          alert("In valid UserName or password");
      }
      console.log (result)
    }).catch(err => console.log (err));
    
    reset();
  };

  return (
    <>
     <Navbar/>
    <div className="SignIn">
      <div className="form-Container">
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="usericon">
            <IoIosContact />
          </div>
          <h3 className="signin-Heading">Login Form</h3>
          <br />
          <div>
            <label htmlFor="userName">User Name: </label>
            <br/>
            <input
              type="text"
              placeholder="Enter The UserName ..."
              {...register("userName", { required: true })}
            />
            <br />
            {errors.userName && (
              <span className="field-error">{errors.userName.message}</span>
            )}
          </div>
          <br />
          <div>
            <label htmlFor="password">Password : </label>
            <br />
            <input
                type="password"
                placeholder="Enter your Password ..."
                {...register("password", {required :true})}
            />
            <br/>
            {errors.password && (
              <span className="field-error">{errors.password.message}</span>
            )}
          </div>
         
          <br />
          <br />
          <button type="submit"> SignIn</button>
          
          <div>
            <p2>
              Are you fresher ?<Link to="/register"> Register Now </Link>
            </p2>
          </div>
        </form>
      </div>

      <div>
        <img src={m2} height={750} width={750} alt=" for SignIn Form" />
      </div>
    </div>
    </>
  );
}
