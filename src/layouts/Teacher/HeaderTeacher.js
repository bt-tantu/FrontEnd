import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderTeacher = () => {
  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">QLDSV</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link active">
                Trang chủ
              </Link>
              <Link to="/" className="nav-link">
                Diễn đàn
              </Link>
              <Link to="/teacher/courses" className="nav-link">
                Danh sách lớp học
              </Link>
              <Link to="/" className="nav-link">
                Tin nhắn
              </Link>
            </Nav>
            <Nav>
              <Link to="/login" className="nav-link btn btn-primary ">
                Đăng nhập
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderTeacher;
