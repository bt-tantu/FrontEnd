import { Col, Container, Row } from "react-bootstrap"
// import { Outlet } from "react-router-dom"

const FluidLayout = ({header, children} ) => {
    return (
        <>
            <>{header}</>
            <Container fluid={true} >
                <Row>
                    <Col>
                        {children}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FluidLayout