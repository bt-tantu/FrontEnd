import { useEffect, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, Navigate, useParams } from "react-router-dom";
import API, { endpoints } from "../../configs/API";
import cookie from "react-cookies"
import Loading from "../../layouts/Common/Loading";
import { useContext } from "react";
import { UserContext } from "../../configs/MyContext";
import AuthAPI,{ endpointsauth } from "../../configs/AuthAPI";


const LoginForm = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    const [user, dispatch] = useContext(UserContext)

    const login = (evt) => {
        evt.preventDefault()

        const process = async () => {
            let res = await API.post(endpoints['login'], {
                "username": username,
                "password": password,
                "client_id": "cUO9eOoOxe4iC9quNimGNnmfGugqyQXEim6oR4Kd",
                "client_secret": "TuzY0eZ8maXcWaP4NBGV4OnJ6RgxXzWLsaStkNVQDFlITiBY2TkaVpbNiUBxHfuvHGpr8Dt6AqmZSJDr4TesND9eTZY7Bq9tIgX2KpGReSTV21FTbebZMYVbd4Zn1hH8",
                "grant_type": "password"
            })

            cookie.save('access-token', res.data.access_token)
            console.info(res.data.access_token)
            let user = await AuthAPI.get(endpoints['current-user'])
            cookie.save('current-user', user.data)


            console.info(user.data)
            let check = await AuthAPI.get(endpoints['check-teacher'])
            // console.info(check.status)

            setLoading(false)
            dispatch ({
                "type": "login",
                "payload": user.data
            })
        }
        setLoading(true)
        process()
    }

    if (user)
        return <Navigate to="/" />


    return (
        <>
            <div>
                <Container>
                    <Row className="vh-100 d-flex justify-content-center align-items-center">
                        <Col md={8} lg={6} xs={12}>
                            <div className="border border-3 border-primary"></div>
                            <Card className="shadow">
                                <Card.Body>
                                    <div className="mb-3 mt-md-4">
                                        <h2 className="fw-bold mb-2 text-uppercase ">QLDSV</h2>
                                        <p className=" mb-5">Vui lòng nhập tài khoản và mật khẩu</p>
                                        <div className="mb-3">
                                            <Form onSubmit={login}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label className="text-center">Tên đăng nhập</Form.Label>
                                                    <Form.Control type="text"
                                                        value={username}
                                                        onChange={e => setUsername(e.target.value)}
                                                        placeholder="Tên đăng nhập..." />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Mật khẩu</Form.Label>
                                                    <Form.Control type="password"
                                                        value={password}
                                                        onChange={e => setPassword(e.target.value)}
                                                        placeholder="Mật khẩu..." />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    <p className="small">
                                                        <Link className="text-primary" to="/forget-pass">Forgot password?</Link>
                                                    </p>
                                                </Form.Group>
                                                <div className="d-grid">
                                                    {loading?<Loading />:<Button variant="primary" type="submit">Login</Button>}
                                                </div>
                                            </Form>
                                            <div className="mt-3">
                                                <p className="mb-0  text-center">
                                                    Don't have an account?{" "}
                                                    <Link to="/register" className="text-primary fw-bold">Đăng ký</Link>
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
        </>
    );
}

export default LoginForm