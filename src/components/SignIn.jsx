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
    email: yup.string().required(),
    password: yup.string().required("Password must be required").min (8, 'Password must be up to eight characters'),
  })

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
          <h3>Login Form</h3>
          <br />
          <div>
            <label htmlFor="gmail">Gmail : </label>
            <br/>
            <input
              type="email"
              name="email"
              placeholder="Enter your Gmail ..."
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="field-error">{errors.email.message}</span>
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
            <p>
              Are you fresher ?<Link to="/register"> Register Now </Link>
            </p>
          </div>
        </form>
      </div>

      <div>
        <img src={m2} height={750} width={750} alt=" for SignIn Form" />
      </div>
    </div>
  );
}
