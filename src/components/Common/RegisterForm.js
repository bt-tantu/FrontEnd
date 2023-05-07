import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import API, { endpoints } from "../../configs/API";
import Loading from "../../layouts/Common/Loading";

export default function Registration() {
  const [errorMessage, setErrorMessage] = useState({});
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const register = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    form.checkValidity()
    if (form.checkValidity() === false) { 
      event.stopPropagation();
    }
    setValidated(true);

    console.log("hello register " + form.checkValidity());
    const data = {
      username: username.trim(),
      student_number: studentNumber.trim(),
      password: password.trim(),
      password2: confirmPassword.trim(),
      email: email.trim(),
      first_name: firstName.trim(),
      last_name: lastName.trim(),
    };

    const register = async () => {
      try {
        setLoading(true)
        await API.post(endpoints["register"], data);
        setErrorMessage({})
        setValidated(true)
        //Sau khi thành công thì cho một cái thông báo pop up lên
        // to do code here..
      } catch(error) {
        setErrorMessage(error.response.data)
        setValidated(false)
      }
      setLoading(false)
    };
    
    if(!checkEmptyData(data))
      register();
    
  };

  const checkEmptyData = (data) => {
    let flag = false;
    if(data.username === "") {
      setUsername('')
      flag = true
    }
      
    if(data.student_number === "") {
      setStudentNumber('')
      flag = true
    }
      
    if(data.email === "") {
      setEmail('')
      flag = true
    }
      
    if(data.first_name === "") {
      setFirstName('')
      flag = true
    }
      
    if(data.last_name === "") {
      setLastName('')
      flag = true
    }
    return flag
  }
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Logo
                  </h2>
                  <div className="mb-3">
                    <Form noValidate validated={validated} onSubmit={register}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3 position-relative">
                            <Form.Label className="text-center">
                              Username
                            </Form.Label>
                            <Form.Control
                              id="username"
                              type="text"
                              placeholder="Enter username"
                              value={username}
                              onChange={(evt) => setUsername(evt.target.value)}
                              isInvalid={!!errorMessage.username}
                              disabled={loading}
                              required
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                              {errorMessage.username ?
                              errorMessage.username : 'Please enter a username.'}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3 position-relative">
                            <Form.Label className="text-center">
                              Student number
                            </Form.Label>
                            <Form.Control
                              id="student-number"
                              type="text"
                              placeholder="Enter student number"
                              value={studentNumber}
                              onChange={(evt) => setStudentNumber(evt.target.value)}
                              isInvalid={!!errorMessage.student_number}
                              disabled={loading}
                              required
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                              {errorMessage.student_number ? errorMessage.student_number : 'Please enter a student number.'}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3 position-relative">
                            <Form.Label className="text-center">
                              First name
                            </Form.Label>
                            <Form.Control
                              id="first-name"
                              type="text"
                              placeholder="Enter first name"
                              value={firstName}
                              onChange={(evt) => setFirstName(evt.target.value)}
                              disabled={loading}
                              required
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                              Please enter a first name.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3 position-relative">
                            <Form.Label className="text-center">
                              Last name
                            </Form.Label>
                            <Form.Control
                              id="last-name"
                              type="text"
                              placeholder="Enter last name"
                              value={lastName}
                              onChange={(evt) => setLastName(evt.target.value)}
                              disabled={loading}
                              required
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                              Please enter a last name.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group className="mb-3 position-relative">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          id="email"
                          type="email"
                          placeholder="Enter email(Example@ou.edu.vn)"
                          value={email}
                          onChange={(evt) => setEmail(evt.target.value)}
                          isInvalid={!!errorMessage.email}
                          disabled={loading}
                          required
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errorMessage.email
                            ? errorMessage.email
                            : "Please enter a email address"}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3 position-relative">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          id="password"
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(evt) => setPassword(evt.target.value)}
                          autoComplete="on"
                          isInvalid={!!errorMessage.password}
                          disabled={loading}
                          required
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errorMessage.password
                            ? errorMessage.password :
                          'Please enter a password.'}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3 position-relative">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          id="confirm-password"
                          type="password"
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          onChange={(evt) => setConfirmPassword(evt.target.value)}
                          autoComplete="on"
                          isInvalid={!!errorMessage.password2}
                          disabled={loading}
                          required
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errorMessage.password2
                            ? errorMessage.password2 :
                          'Please confirm a password.'}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3"></Form.Group>
                      <div className="d-grid">
                          <Button variant="primary" type="submit" disabled={loading}>
                          {loading ? <><Spinner animation="border" variant="light" size="sm"/> Loading...</>: 'Create Account'}
                          </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{" "}
                        <Link to="/" className="text-primary fw-bold">
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
