import React from "react";
// import "./SignUp.css";
import "./SignIn.css";
import m2 from "../image/m2.webp";
import { Link } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export default function SignIn() {

  const schema = yup.object({
    userName : yup.string().required("User Name is Required"),
    password: yup.string().required("Password must be required").min (8, 'Password must be up to eight characters'),
  }).required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors},
  } = useForm({resolver : yupResolver(schema)});
  const onSubmit = (values) => {
    console.log(values);
    reset();
  };


  return (
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
            <label htmlFor="userName">User Name : </label>
            <br/>
            <input
              type="text"
              name="userName"
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
                name="password"
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
  );
}
