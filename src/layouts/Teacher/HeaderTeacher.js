import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../configs/MyContext";

const HeaderTeacher = () => {
  const [user, dispatch] = useContext(UserContext)
  console.info('::::', user)

  let userInfo = (
    <>
      <Link to="/login" className="nav-link text-success">&#128104; Đăng nhập</Link>
      {/* <Link to="/register" className="nav-link text-success">&#128119; Đăng ký</Link> */}
    </>
  )

  const logout = () => {
    dispatch({
      "type": "logout"
    })
  }

  if (user)
    userInfo = (
      <>
        <Link to="/teacher" className="nav-link text-success">
          <img alt={user.username} src={user.username} width="40" className="rounded-circle" />Welcome {user.username}
        </Link>
        <button onClick={logout} className="btn btn-success">Đăng xuất</button>
      </>
    )

  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">QLDSV</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link active">Trang chủ</Link>
              <Link to="/teacher/forum" className="nav-link">Diễn đàn</Link>
              <Link to="/teacher/courses" className="nav-link">Danh sách lớp học</Link>
              <Link to="/teacher/list" className="nav-link">Danh sách giảng viên</Link>
              <Link to="/" className="nav-link">Tin nhắn</Link>
              {user && <Link to="/user-info" className="nav-link">{user.username}</Link>}
              {userInfo}
            </Nav>
            {/* <Nav>
              <Link to="/login" className="nav-link btn btn-primary ">
                Đăng nhập
              </Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderTeacher;
