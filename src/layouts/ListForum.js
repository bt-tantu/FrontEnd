import { useState } from "react";
import { Button, Col, Container, Form, Row, Table, ToastContainer } from "react-bootstrap"
import { Link, Outlet, useParams } from "react-router-dom"
import Loading from "./Common/Loading";
import { useEffect } from "react";
import axios from 'axios';
import ItemListForum from "./Teacher/ItemListForum";
import { authAPI, endpoints } from "../configs/API";


const ListForum = () => {

    const [forum, setForum] = useState([]);
    const [isStudent, setIsStudent] = useState(false);


    useEffect(() => {
        const getForum = async () => {
            try {
                let res = await authAPI.get(endpoints['create-forum'])
                if(res.data) {
                    setForum(res.data);
                }
            } catch(err) {
                console.log(err);
            }
        }
        getForum()
    }, []);

    if (forum === null) return <Loading />

    return (
        <>
            <Container>
                <h1 className="text-center">Danh sách giảng viên</h1>
                <ToastContainer />
                <Link to="/teacher/forum/create" className="btn btn-primary ">Tạo chủ đề</Link>
                <Form className="d-flex float-right">
                    <Form.Control
                        type="search"
                        placeholder="Tìm kiếm..."
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button type="submit" className="btn btn-primary">Tìm</Button>
                </Form>
                <br />
                <br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Chủ đề</th>
                            <th>Người tạo chủ đề</th>
                            <th>Ngày tạo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {forum.map((forumList, index) => {
                            return (

                                <tr key={index}>
                                    <td>{forumList.title}</td>
                                    <td>{forumList.author}</td>
                                    <td>{forumList.created_date}</td>
                                    <td>
                                        <ItemListForum type="forumList" obj={forumList} />
                                    </td>
                                </tr>
                            )

                        })}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default ListForum