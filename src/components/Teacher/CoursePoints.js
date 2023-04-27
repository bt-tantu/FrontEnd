import { useEffect, useState } from "react"
import API, { endpoints } from "../../configs/API"
import { Button, Form, Modal, Table } from "react-bootstrap";
import Loading from "../../layouts/Common/Loading";
import ModalPopUp from "./ModalPopUp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CoursePoints = () => {

    const [coursePoints, setCoursePoints] = useState(null);
    const [upload, setUpload] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [loading, setLoading] = useState(false)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showFile, setFileShow] = useState(false);
    const handleFileClose = () => setFileShow(false);
    const handleFileShow = () => setFileShow(true);

    const notify = () => toast("Upload file thành công");

    useEffect(() => {
        const loadCoursePoint = async () => {
            let res = await API.get(endpoints['users'])
            setCoursePoints(res.data)
        }
        loadCoursePoint()

        const uploadFile = async () => {
            let res = await API.get(endpoints['upload'])
            setUpload(res.data)
        }
        uploadFile()
    }, [show])

    if (coursePoints === null) return <Loading />



    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmission = () => {
        const formData = new FormData();

        formData.append('File', selectedFile);

        const uploadFile = async () => {
            let res = await API.get(endpoints['upload'])
            setUpload(res.data)
        }
        uploadFile();

        notify();
    };

    return (
        <>
            <h1 className="text-center">Chấm điểm</h1>
            <Button variant="primary" onClick={handleFileShow} className="align-items-end">Upload</Button>
            <ToastContainer />  
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {coursePoints.map((user, index) => (
                        <tr className="btn-doubleClick" key={index}>
                            <td>{user.email}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.username}</td>
                            <td>
                                <Button variant="primary" onClick={handleShow} className="btn-editUser">
                                    Launch demo modal
                                </Button>
                            </td>
                            {show ? <ModalPopUp show={show} handleClose={handleClose} user={user} /> : false}
                        </tr>

                    ))}
                </tbody>
            </Table>

            <Modal show={showFile} onHide={handleFileClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User Content</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="file" placeholder="Upload File..." name="file" onChange={changeHandler} />
                        </Form.Group>
                        <Button variant="primary" onClick={handleSubmission} type="submit">Save</Button>
                    </Form>

                </Modal.Body>

            </Modal>


        </>
    )
}

export default CoursePoints