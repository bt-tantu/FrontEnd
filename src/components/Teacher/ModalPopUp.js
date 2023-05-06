import { useEffect, useState } from "react";
import Loading from "../../layouts/Common/Loading";
import { Button, Form, Modal, Table } from "react-bootstrap";
import API, { endpoints } from "../../configs/API";
import { useParams } from "react-router";
import { async } from "q";


const ModalPopUp =({show, handleClose, user: {username, email, first_name, last_name}, arrUser})=>{
    const {courseId} = useParams();
    const userId = arrUser.findIndex(user => user.email === email) + 1;
    const isClock= false
    const [grade, setGrade] = useState(null)
    const [markType, setMarkType] = useState(1)
    const [message, setMessage] = useState(null)

    const savePoint = async (e) =>{
        e.preventDefault();
        if(!grade) {
            alert('Grade is null')
            return
        }
        try {
            let form = new FormData()
                form.append("grade", Number(grade))
                form.append("course", Number(courseId))
                form.append("is_clock", isClock)
                form.append("student", userId)
                form.append("mark_type", Number(markType))
            let res = await API.post(endpoints['mark'], form, { 
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    'Accept': 'application/json, text/plain, */*',
                }
                }
            );
            if (res.status === 200) {
                setGrade("");
                setMessage("User created successfully");
            } else {
                setMessage("Some error occured");
            }
        } catch (error) {
            console.log(error);
        } finally {
            handleClose()
        }
    }
    console.log({  
        "grade":  Number(grade),
        "course":  Number(courseId),
        "is_clock": isClock,
        "student": userId,
        "mark_type":  Number(markType)
        })
    if (!username) return <Loading />

    return(
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Point User Content</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={savePoint} id="myForm">
                        <Form.Group className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" 
                                        value={email}
                                        disabled
                                        placeholder="Email..." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPlaintextGrade">
                            <Form.Label>Grade</Form.Label>
                            <Form.Control type="number" 
                                        onChange={e => setGrade(e.target.value)}
                                        placeholder="Enter Grade..." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPlaintextCourse">
                            <Form.Label>Course</Form.Label>
                            <Form.Control type="text" 
                                        value={courseId}
                                        disabled
                                        placeholder="Course..." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPlaintextMark">
                            <Form.Label>Mark Type</Form.Label>
                            <Form.Select onChange={e=>setMarkType(e.target.value)}>
                                <option value="1">Điểm GK</option>
                                <option value="2">Điểm CK</option>
                            </Form.Select>
                        </Form.Group>
                        
                        <Button variant="primary" onClick={savePoint} type="button">Đăng nhập</Button>
                    </Form>
                </Modal.Body>

            </Modal>
    )
}

export default ModalPopUp