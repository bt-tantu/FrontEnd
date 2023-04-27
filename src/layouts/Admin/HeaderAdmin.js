// import { useEffect, useState } from "react"
// import API, { endpoints } from "../../configs/API"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const HeaderAdmin = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link className="navbar-brand" to="/">System Information Students</Link>
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link active">Trang chủ</Link>
                        <Link to="/" className="nav-link">Diễn đàn</Link>
                        <Link to="/" className="nav-link">Quản lý giảng viên</Link>
                        <Link to="/" className="nav-link">Quản lý sinh viên</Link>
                        <Link to="/" className="nav-link">Quản lý lớp học</Link>
                        <Link to="/" className="nav-link">Quản lý môn học</Link>
                        <Link to="/login" className="nav-link text-success">&#128104; Đăng nhập</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default HeaderAdmin