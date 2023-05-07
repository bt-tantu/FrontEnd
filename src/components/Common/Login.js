import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { Link, Navigate } from "react-router-dom"
import API, { authAPI, endpoints } from "../../configs/API"
import cookie from "react-cookies"
import { UserContext } from "../../configs/MyContext"
import Loading from "../../layouts/Common/Loading"

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)

    const login = () => {
        
    }
    return (
        <>
            <Container fluid={true}>
                <Row>
                    <Col sm={4} className='bg-info'></Col>
                    <Col sm={4}>
                        <h1 className="text-center text-white bg-success">ĐĂNG NHẬP</h1>
                        <Form onSubmit={login}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            {loading?<Loading />:<Button variant="primary" type="submit">Đăng nhập</Button>}
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <p></p>
                                <Link>Đăng ký tài khoản</Link>
                            </Form.Group>                           
                        </Form>
                    </Col>
                    <Col sm={4} className='bg-info'></Col>
                </Row>
            </Container>
        </>
    )
}

export default Login