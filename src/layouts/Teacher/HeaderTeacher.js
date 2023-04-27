import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const HeaderTeacher = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link className="navbar-brand" to="/">System Information Students</Link>
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link active">Trang chủ</Link>
                        <Link to="/" className="nav-link">Diễn đàn</Link>
                        <Link to="/teacher/courses" className="nav-link">Danh sách lớp học</Link>
                        <Link to="/" className="nav-link">Tin nhắn</Link>
                        <Link to="/login" className="nav-link text-success">&#128104; Đăng nhập</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default HeaderTeacher