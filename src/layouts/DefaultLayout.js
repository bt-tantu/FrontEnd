import { Col, Container, Row } from "react-bootstrap"
import { Outlet } from "react-router-dom"

const DefaultLayout = ({header, sidebar}) => {
    return (
        <>
            <>{header}</>
            <Container fluid={true}>
                <Row>
                    <Col md={4} sm={1} >{sidebar}</Col>
                    <Col md={6} sm={10}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DefaultLayout