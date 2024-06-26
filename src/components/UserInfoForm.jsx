import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./userInfo.css";
import border from "../image/border.png";
import Header from "./Header";
export default function UserInfoForm() {
  const ages = Array.from({ length: 48 }, (_, i) => i + 18); // creating the array of age for showing in the text box
  return (
    <>

     <Header/>
     <div className="imgDiv">
          <img src={border} alt="Heart Border"/>
      </div>
      <div className="form-container">
        
        <div className="user-info">
          <Form>
            <h3 className="heading-container">
              Give Some necessary Informations
            </h3>
            <Row className="mb-2">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name :</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name..." />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Father Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your father name ..."
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Age :</Form.Label>
                <Form.Select defaultValue="please Choose Your Age">
                  <option>please Choose Your Age</option>
                  {ages.map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Religion</Form.Label>
                <Form.Select defaultValue="Choose Your Religion">
                  <option>Choose Your Religion </option>
                  <option>Muslim </option>
                  <option>Non Muslim</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Enter " />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Gender :</Form.Label>
                <Form.Select defaultValue="Choose Your Religion">
                  <option>Choose Your Gender </option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Term and Conditions">
                {" "}
              </Form.Check>
              <Link to="/term&Conditions">Term and Conditions</Link>
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
