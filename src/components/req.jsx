import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
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
      age: yup.number().required("Age is required"),
      city: yup.string().required("City is required"),
      religion: yup.string().required("Religion is required"),
      cast: yup.string().required("Cast is required"),
      terms: yup.boolean().oneOf([true], "Check Me First"),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigateProfiles = useNavigate();
  const onSubmit = (values) => {
    navigateProfiles("/ShowData");
    reset();
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="form-container">
        <div className="requirement">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="heading-container">
              Requirements For SoulMate
            </h3>
            <Row className="mb-2">
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
                  <option>Choose The City...</option>
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
            </Row>

            <Form.Group className="mb-3" controlId="terms">
              <Form.Check type="checkbox" {...register("terms")} />
              <Form.Check.Label>Check Me First</Form.Check.Label>
              {errors.terms && <span>{errors.terms.message}</span>}
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onChange={<Link to="/showdata"></Link>}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
