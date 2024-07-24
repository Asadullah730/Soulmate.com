import React from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./req.css";
import Header from "./Header";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Navbar from "./Navbar";

export default function Req() {
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

  const schema = yup
    .object({
      agefrom: yup
        .number()
        .required("Age is required")
        .min(18, "Minimum age is 18")
        .max(65, "Maximum age is 65"),
      ageto: yup
        .number()
        .required("Age is required")
        .min(18, "Minimum age is 18")
        .max(65, "Maximum age is 65"),
      city: yup.string().required("City is required"),
      gender: yup.string().required("Gender is required"),
      religion: yup.string().required("Religion is required"),
      terms: yup.boolean().oneOf([true], "Terms and Conditions must be accepted"),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();
  

  const onSubmit = async (values) => {
    try {
      const result = await axios.post('http://localhost:3001/profiles', {
        agefrom: values.agefrom,
        ageto: values.ageto,
        city: values.city,
        gender: values.gender,
        religion: values.religion
      });
      navigate("/profiles");
      console.log(result);
    } catch (err) {
      console.error(err);
    }
    reset();
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="reqForm-container">
        <div className="requirement">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="heading-container">Requirements For SoulMate</h3>
            <Row className="mb-2">
              <Form.Group as={Col} controlId="agefrom">
                <Form.Label>
                  <strong>Age from:</strong>
                </Form.Label>
                <Form.Select
                  defaultValue=""
                  {...register("agefrom", { required: true })}
                >
                  <option value="">Please Choose Your Age</option>
                  {ages.map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </Form.Select>
                {errors.agefrom && <span>{errors.agefrom.message}</span>}
              </Form.Group>

              <Form.Group as={Col} controlId="ageto">
                <Form.Label>
                  <strong>Age To:</strong>
                </Form.Label>
                <Form.Select
                  defaultValue=""
                  {...register("ageto", { required: true })}
                >
                  <option value="">Please Choose Your Age</option>
                  {ages.map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </Form.Select>
                {errors.ageto && <span>{errors.ageto.message}</span>}
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="gender">
                <Form.Label>
                  <strong>Gender :</strong>
                </Form.Label>
                <Form.Select defaultValue="" {...register("gender")}>
                  <option value="">Choose Your Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Select>
                {errors.gender && <span>{errors.gender.message}</span>}
              </Form.Group>

              <Form.Group as={Col} controlId="city">
                <Form.Label>
                  <strong>City:</strong>
                </Form.Label>
                <Form.Select defaultValue="" {...register("city")}>
                  <option value="">Choose The City...</option>
                  {city.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </Form.Select>
                {errors.city && <span>{errors.city.message}</span>}
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="religion">
                <Form.Label>
                  <strong>Religion:</strong>
                </Form.Label>
                <Form.Select defaultValue="" {...register("religion")}>
                  <option value="">Choose Your Religion</option>
                  <option value="Islam">Islam</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Sikh">Sikh</option>
                  <option value="Other">Other</option>
                </Form.Select>
                {errors.religion && <span>{errors.religion.message}</span>}
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="terms">
              <Form.Check type="checkbox" {...register("terms")} />
              <Form.Label>Check Me First</Form.Label>
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
