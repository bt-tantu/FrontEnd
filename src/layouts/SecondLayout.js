import { Col, Container, Row } from "react-bootstrap"
import { Outlet } from "react-router-dom"

const SecondLayout = ({header}) => {
    return (
        <>
            <>{header}</>
            <Container>
                <Row>     
                    <Col>
                        <Outlet />
                    </Col> 
                </Row>
            </Container>
        </>
    )
}

export default SecondLayout