import { Col, Container, Row } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import HeaderTeacher from "./Teacher/HeaderTeacher"

const TeacherLayout = () => {
    return (
        <>
            <HeaderTeacher />
            <Container fluid={true}>
                <Row>
                    <Col sm={1} className='bg-info'></Col>
                    <Col sm={10} className='bg-success'>
                        <Outlet />
                    </Col>
                    <Col sm={1} className='bg-info'></Col>
                </Row>
            </Container>
        </>
    )
}

export default TeacherLayout