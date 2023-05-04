import { useEffect, useState } from "react"
import API, { endpoints } from "../../configs/API"
import { Button, Form, Modal, Table } from "react-bootstrap";
import Loading from "../../layouts/Common/Loading";
import ModalPopUp from "./ModalPopUp";
import ModalPoint from "./ModalPoint";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";
import { async } from "q";


const CoursePoints = () => {
    let {courseId} = useParams();
    const [coursePoints, setCoursePoints] = useState(null);
    const [upload, setUpload] = useState(null);
    const [exportList, setExportList] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    

    const [data, setData] = useState(null)
    const btnEditUser = document.querySelectorAll('.btn-editUser')
    const [show, setShow] = useState(false);
    const [showPoint, setShowPoint] = useState(false);
    const handleClose = () => {
        setShow(false)
        setShowPoint(false)
    };
    const handleShow = async (e) => {
        e.preventDefault();
        setShow(true)
        for (const element of btnEditUser) {
            element.onclick = function(){
                const parent = element.parentElement.parentNode
                const user = {
                    username: parent.children[3].textContent,
                    email: parent.children[0].textContent,
                    first_name: parent.children[1].textContent,
                    last_name: parent.children[2].textContent
                };
                setData(user)
            }
        }
    };


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
            let res = await API.post(endpoints['upload'])
            setUpload(res.data)
        }
        uploadFile()

        const exportFile = async () => {
            let res = await API.post(endpoints['export'])
            setUpload(res.data)
        }
        exportFile()


    }, [])


    if (coursePoints === null) return <Loading />

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmission = () => {
        const formData = new FormData();

        formData.append('File', selectedFile);

        const uploadFile = async () => {
            let res = await API.post(endpoints['upload'])
            setUpload(res.data)
        }
        uploadFile();

        notify();
    };

    const handleExportFile = () => {
        const exportFile = async () => {
            let res = await API.post(endpoints['export'])
            console.log(res.data)
            setUpload(res.data)
        }
        exportFile();
    };

    const handleShowPoint =() => {
        setShowPoint(true)
        for (const element of btnEditUser) {
            element.onclick = function(){
                const parent = element.parentElement.parentNode
                const user = {
                    username: parent.children[3].textContent,
                    email: parent.children[0].textContent,
                    first_name: parent.children[1].textContent,
                    last_name: parent.children[2].textContent
                };
                setData(user)
            }
        }
    }

    return (
        <>
            <h1 className="text-center">Chấm điểm</h1>
            <Button variant="primary" onClick={handleFileShow} className="align-items-end">Import</Button>
            <Button variant="primary" onClick={handleExportFile} className="align-items-end">Export</Button>
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
                                    Chấm điểm
                                </Button>
                            </td>
                            <td>
                                <Button variant="primary" onClick={handleShowPoint} className="btn-editUser">
                                    Xem điểm
                                </Button>
                            </td>
                        </tr>

                    ))}
                </tbody>

            </Table>
            {showPoint && data ? <ModalPoint show={showPoint} handleClose={handleClose} user={data} arrUser={coursePoints} /> : false}
            {show && data ? <ModalPopUp show={show} handleClose={handleClose} user={data} arrUser={coursePoints} /> : false}

            <Modal show={showFile} onHide={handleFileClose}>
                <Modal.Header closeButton>
                    <Modal.Title>UploadFile User Content</Modal.Title>
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