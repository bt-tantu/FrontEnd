import { useEffect, useState } from "react"
import API, { endpoints, exportAPI } from "../../configs/API"
import { Button, Col, Container, Form, Modal, Row, Table } from "react-bootstrap";
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
    const [rawData, setRawData] = useState(null);
    const [upload, setUpload] = useState([]);
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
    const handleShow = async (userId) => {
        
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

    const notify = (message) => toast(message);
    useEffect(() => {
        const loadCoursePoint = async () => {
            let res = await API.post(`${endpoints['courses']}${courseId}/mark/`)
            const student_id = [...new Set(res.data.map(item => item.student.id))]
            setRawData(res.data)

            const fdata = student_id.map(id =>{ 
                let filter_stu = res.data.filter(item => item.student.id == id)
                let result = filter_stu.map(item => (
                    {grade: item.grade, mark_type: item.mark_type.type}
                ))
                return {
                    student_id: id, 
                    first_name: filter_stu[0].student.first_name, 
                    last_name: filter_stu[0].student.last_name,
                    username: filter_stu[0].student.username, 
                    mark: result
                }
            })
            console.log(fdata)
            setCoursePoints(fdata)
        }
        loadCoursePoint()

        // const uploadFile = async () => {
        //     let res = await API.post(endpoints['upload'])
        //     setUpload(res.data)
        // }
        // uploadFile()

        // const exportFile = async () => {
        //     let res = await API.post(endpoints['export'])
        //     setUpload(res.data)
        // }
        // exportFile()


    }, [])


    if (coursePoints === null) return <Loading />

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmission = (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('file', selectedFile);
        
        // Gọi API
        const uploadFile = async () => {
            let res = await API.post(endpoints['upload'], formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
            })
            if(res.status === 200) {
                setUpload(res.data)
            }
        }
        uploadFile();

        // Api sẽ đổ ra dữ liệu từ trong file mà mình upload, length = 0 nếu format không đúng
        if(upload.length > 0) {
            notify("Upload thành công")
        } else {
            let message = upload.hasOwnProperty('message') ? upload.message : "Upload thất bại, Vui lòng chọn đúng format"
            notify(message)
        }
    };

    const handleExportFile = (e) => {
        const exportFile = async () => {
            let data = rawData.map(item => {
                return {
                    'Grade': item.grade,
                    'Course Name': item.course.subject,
                    'Student Number': item.student.student_number,
                    'Mark Type': item.mark_type.type 
                }
            })
            console.log(data)
            await exportAPI.post(endpoints['register'], {students: data})
    
            // setUpload(res.data)
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
        <Container>
            <h1 className="text-center">Chấm điểm</h1>
            <Button variant="primary" onClick={handleFileShow} className="m-2 align-items-end">Import</Button>
            <a onClick={(e) => handleExportFile(e)} className="align-items-end btn btn-primary" download="export_dataframe.csv">Export</a>
            <ToastContainer />  
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>MSSV</th>
                        <th>Họ và tên lót</th>
                        <th>Tên</th>
                        <th>Giữa kỳ</th>
                        <th>Cuối kỳ</th>
                        <th>Chấm điểm</th>
                        <th>Xem điểm</th>
                    </tr>
                </thead>
                <tbody>
                    {coursePoints.map((user, index) => {
                        let gk = user.mark.find(item => item.mark_type === "Điểm GK") 
                        let ck = user.mark.find(item => item.mark_type === "Điểm CK")
                        return (
                        <tr className="btn-doubleClick" key={index}>
                            <td>{index + 1}</td>
                            <td>{user.email}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{
                              gk ? gk.grade : ''
                            }</td>
                            <td>{ck ? ck.grade : ''}</td>
                            <td>
                                <Button variant="primary" onClick={handleShow} className="btn-editUser">
                                    Edit
                                </Button>
                            </td>
                            <td>
                                <Button variant="primary" onClick={handleShowPoint} className="btn-editUser">
                                    View
                                </Button>
                            </td>
                        </tr>

                    )})}
                </tbody>

            </Table>
            {showPoint && data ? <ModalPoint show={showPoint} handleClose={handleClose} user={data} arrUser={coursePoints} /> : false}
            {show && data ? <ModalPopUp show={show} handleClose={handleClose} user={data} arrUser={coursePoints} /> : false}

            <Modal show={showFile} onHide={handleFileClose}>
                <Modal.Header closeButton>
                    <Modal.Title>UploadFile User Content</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={(e) => handleSubmission(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="file" accept=".csv" placeholder="Upload File..." name="file" onChange={changeHandler} />
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={selectedFile===null ? true : false}>Save</Button>
                    </Form>

                </Modal.Body>
            </Modal>




        </Container>
    )
}

export default CoursePoints