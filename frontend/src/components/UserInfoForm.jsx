import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import "./userInfo.css";
import Header from "./Header";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Navbar from "./Navbar";

import axios from 'axios';

export default function UserInfoForm() {
  const ages = Array.from({ length: 48 }, (_, i) => i + 18); // creating the array of age for showing in the text box
  const city = [
    "Lahore",
    "Faisalabad",
    "Rawalpindi",
    "Multan",
    "Dera Ghazi Khan",
    "Rajanpur",
    "Bahawalpur",
    "Nawabshah",
    "Peshawar",
    "Mardan",
    "Abbottabad",
    "Haripur",
    "Mansehra",
    "Swat",
    "Gujranwala",
    "Karachi",
    "Hyderabad",
    "Sukkur",
    "Larkana",
    "Kohat",
    "Quetta",
    "Gwadar",
    "Turbat",
    "Khuzdar",
    "Zhob",
    "Islamabad",
    "Gilgit",
    "Skardu",
    "Hunza",
    "Diamer",
    "Ghanche",
    "Muzaffarabad",
    "Mirpur",
    "Kotli",
    "Bhimber",
    "Poonch",
    "Sialkot",
    "Sargodha",
    "Sheikhupura",
    "Jhelum",
    "Sahiwal",
    "Kasur",
    "Rahim Yar Khan",
    "Attock",
    "Bahawalnagar",
    "Chakwal",
    "Dera Ismail Khan",
    "Bannu",
    "Charsadda",
    "Hangu",
    "Swabi",
    "Nowshera",
    "Khairpur",
    "Jacobabad",
    "Mirpur Khas",
    "Umerkot",
    "Tando Allahyar",
    "Tando Muhammad Khan",
    "Badin",
    "Thatta",
    "Jamshoro",
    "Shikarpur",
  ];
  const castes = [
    "Punjabi",
    "Sindhi",
    "Pashtun",
    "Baloch",
    "Muhajir",
    "Saraiki",
    "Hazara",
    "Kashmiri",
    "Makrani",
    "Kalash",
    "Brohi",
    "Awan",
    "Tanoli",
    "Bhatti",
    "Hajana",
    "Chitrali",
    "Gilgiti",
    "Shina",
    "Balti",
    "Burusho",
    "Khowar",
    "Pathan",
    "Rajput",
    "Jat",
    "Syed",
    "Shaikh",
    "Memon",
    "Gujjar",
    "Arain",
    "Awan",
    "Malik",
    "Qureshi",
    "Ansari",
    "Khanzada",
    "Hindu",
  ];
  const siblings = [1, 2, 3, 4, 5,6, 7, 8, 9, 10];

  const schema = yup
    .object({
      name: yup.string().required("Name is required"),
      fatherName: yup.string().required("Father's name is required"),
      age: yup
        .number()
        .required("Age is required")
        .min(18, "Minimum age is 18")
        .max(65, "Maximum age is 65"),
      city: yup.string().required("City is required"),
      siblings: yup
        .number()
        .required("Number of siblings is required")
        .min(0, "Minimum number is 1"),
      phoneNumber: yup.string().required("Phone number is required"),
      gender: yup.string().required("Gender is required"),
      religion: yup.string().required("Religion is required"),
      cast: yup.string().required("Cast is required"),
      file: yup.mixed().required("File is required"),
      terms: yup.boolean().oneOf([true], "Terms and Conditions must be accepted"),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigateRequirements = useNavigate();
  const onSubmit = (values ,e) => {
    e.preventDefault();
    console.log(values);
    axios
      .post("http://localhost:3001/userinfo", {
        name  : values.name,
        fatherName: values.fatherName,
        age : values.age,
        city :values.city,
        sibling : values.siblings,
        phoneNo : values.phoneNumber,
        gender : values.gender,
        religion : values.religion,
        cast :values.cast,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
      navigateRequirements("/requirement");
    reset();
  };
  
  return (
    <>
      <Header />
      <Navbar/>
      <div className="form-container">
        <div className="user-info">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="heading-container">
              Create Your Profile
            </h3>
            <Row className="mb-2">
              <Form.Group as={Col} controlId="name">
                <Form.Label>
                  <strong>Name :</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name..."
                  {...register("name")}
                />
                {errors.name && <span>{errors.name.message}</span>}
              </Form.Group>

              <Form.Group as={Col} controlId="fatherName">
                <Form.Label>
                  <strong>Father Name :</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your father name ..."
                  {...register("fatherName")}
                />
                {errors.fatherName && <span>{errors.fatherName.message}</span>}
              </Form.Group>

              <Form.Group as={Col} controlId="age">
                <Form.Label>
                  <strong>Age :</strong>
                </Form.Label>
                <Form.Select
                  defaultValue="please Choose Your Age"
                  {...register("age", { required: true })}
                >
                  <option>please Choose Your Age</option>
                  {ages.map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </Form.Select>
                {errors.age && <span>{errors.age.message}</span>}
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="city">
                <Form.Label>
                  <strong>City:</strong>
                </Form.Label>
                <Form.Select
                  defaultValue="please Choose Your City"
                  {...register("city")}
                >
                  <option>please Choose Your City...</option>
                  {city.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </Form.Select>
                {errors.city && <span>{errors.city.message}</span>}
              </Form.Group>

              <Form.Group as={Col} controlId="siblings">
                <Form.Label>
                  <strong>Siblings:</strong>
                </Form.Label>
                <Form.Select
                  defaultValue="Number of Siblings:"
                  {...register("siblings")}
                >
                  <option>Choose Siblings Number...</option>
                  {siblings.map((sibling) => (
                    <option key={sibling} value={sibling}>
                      {sibling}
                    </option>
                  ))}
                </Form.Select>
                {errors.siblings && <span>{errors.siblings.message}</span>}
              </Form.Group>

              <Form.Group as={Col} controlId="phoneNumber">
                <Form.Label>
                  <strong>Phone Number:</strong>
                </Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your Contact Number"
                  {...register("phoneNumber")}
                />
                {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="gender">
                <Form.Label>
                  <strong>Gender :</strong>
                </Form.Label>
                <Form.Select
                  defaultValue="Choose Your Gender"
                  {...register("gender")}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Select>
                {errors.gender && <span>{errors.gender.message}</span>}
              </Form.Group>

              <Form.Group as={Col} controlId="religion">
                <Form.Label>
                  <strong>Religion:</strong>
                </Form.Label>
                <Form.Select
                  defaultValue="Choose Your Religion"
                  {...register("religion")}
                >
                  <option value="Islam">Islam</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Sikh">Sikh</option>
                  <option value="Other">Other</option>
                </Form.Select>
                {errors.religion && <span>{errors.religion.message}</span>}
              </Form.Group>

              <Form.Group as={Col} controlId="cast">
                <Form.Label>
                  <strong>Cast :</strong>
                </Form.Label>
                <Form.Select
                  defaultValue="Choose Your Cast"
                  {...register("cast")}
                >
                  <option>Brohi :</option>
                  {castes.map((cast) => (
                    <option key={cast} value={cast}>
                      {cast}
                    </option>
                  ))}
                </Form.Select>
                {errors.cast && <span>{errors.cast.message}</span>}
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="file">
              <Form.Label>
                <strong>Upload JPEG File:</strong>
              </Form.Label>
              <Form.Control
                type="file"
                accept=".jpeg, .jpg"
                {...register("file")}
              />
              {errors.file && <span>{errors.file.message}</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="terms">
              <Form.Check type="checkbox" {...register("terms")} />
              <Form.Check.Label>
                <Link to="/terms-and-conditions" target="_self">
                  Terms and Conditions
                </Link>
              </Form.Check.Label>
              {errors.terms && <span>{errors.terms.message}</span>}
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
