import React from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Registration() {
  const username = document.getElementById('username')
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  const confirmPassword = document.getElementById('confirm-password')

    const register = (event) => {
        event.preventDefault()
        console.log("hello register")
        const data = {
          username: username.value,
          email: email.value,
          password: password.value
        }
        console.log(data)
        if (password.value === confirmPassword.value) {
          // const bcrypt = require('bcrypt');
          // const saltRounds = 10;
          // const myPlaintextPassword = 's0/\/\P4$$w0rD';
          // const someOtherPlaintextPassword = 'not_bacon';
          
          // const salt = bcrypt.genSaltSync(saltRounds)m
          // const hash = bcrypt.hashSync(myPlaintextPassword, salt)
          // console.log(hash)
        }
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
                    <Form onSubmit={(e) => register(e)}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">UserName</Form.Label>
                        <Form.Control id='username' type="text" placeholder="Enter UserName" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control id='email' type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control id='password' type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control id='confirm-password' type="password" placeholder="Confirm Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{' '}
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