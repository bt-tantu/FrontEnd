import { Card, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ForgetPassForm() {
    const forgetPass = (event) => {
        event.preventDefault();
        console.log("hello forget pass")
    }
  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-uppercase ">
                  Forgot Password?
                </h2>
                <p className=" mb-5">
                  Enter your registered email ID to reset the password
                </p>
                <div className="mb-3"></div>

                <Form onSubmit={(e) => forgetPass(e)}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Email address
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3"></Form.Group>
                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Reset Password
                    </Button>
                  </div>
                  <div className="mt-3">
                    <p className="mb-0  text-center">
                      Don't have an account?{" "}
                      <Link to="/" className="text-primary fw-bold">
                        Sign In
                      </Link>
                    </p>
                  </div>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
