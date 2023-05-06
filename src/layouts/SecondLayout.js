import { useState } from "react";
import { Button, Col, Container, Form, Row, Table, ToastContainer } from "react-bootstrap"
import { Link, Outlet, useParams } from "react-router-dom"
import Loading from "./Common/Loading";
import { useEffect } from "react";
import axios from 'axios';
import ItemListTeacher from "./Teacher/ItemListTeacher";

const SecondLayout = ({ header }) => {

    const [userTeacher, setUserTeacher] = useState([]);


    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/users/')
            .then((res) => {
                setUserTeacher(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (userTeacher === null) return <Loading />

    return (
        <>
            <>{header}</>
            <Container>
                <h1 className="text-center">Danh sách giảng viên</h1>
                <ToastContainer />
                <Form className="d-flex float-right">
                    <Form.Control
                        type="search"
                        placeholder="Tìm kiếm..."
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button type="submit" className="btn btn-info">Tìm</Button>
                </Form>
                <br />
                <br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Họ và tên lót</th>
                            <th>Tên</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Các lớp dạy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userTeacher.map((userTeacherList, index) => {
                            return (

                                <tr key={index}>
                                    <td>{userTeacherList.id}</td>
                                    <td>{userTeacherList.first_name}</td>
                                    <td>{userTeacherList.last_name}</td>
                                    <td>{userTeacherList.email}</td>
                                    <td>{userTeacherList.username}</td>
                                    <td><ItemListTeacher type="userTeacher" obj={userTeacherList} /></td>
                                </tr>
                            )

                        })}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default SecondLayout