import { useEffect, useState } from "react";
import Loading from "../../layouts/Common/Loading";
import { Button, Col, Form, Modal, Row, Table } from "react-bootstrap";
import API, { endpoints } from "../../configs/API";
import { useParams } from "react-router";


const ModalPopUp =({show, handleClose, user: {username, email, first_name, last_name}, arrUser})=>{
    const {courseId} = useParams();
    const userId = arrUser.findIndex(user => user.email === email) + 1;
    const markType = ['Giữa Kỳ', 'Cuối Kỳ']
    const [point, setPoint] = useState(null);
    let course = false

    useEffect(()=>{

        const loadPoint = async()=>{
            let res = await API.get(endpoints['marks'](userId))
            setPoint(res.data)
        }
        loadPoint()

    },[])
    if (point) {
        course = point.some(item => item.course == courseId)
    } 
        
    return(
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Show Point User </Modal.Title>
                </Modal.Header>

                {point && course ? <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" 
                                        value={email}
                                        disabled
                                        placeholder="Email..." />
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextMark">
                            <Form.Label column sm="4">
                            {markType[0]}
                            </Form.Label>
                            <Col sm="8">
                            <Form.Control value={point[0]?point[0].grade:'Không có thông tin'} readOnly />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextMark">
                            <Form.Label column sm="4">
                            {markType[1]}
                            </Form.Label>
                            <Col sm="8">
                            <Form.Control value={point[1]?point[1].grade:'Không có thông tin'} readOnly />
                            </Col>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Course</Form.Label>
                            <Form.Control type="text" 
                                        id="course"
                                        value={courseId}
                                        disabled
                                        placeholder="Course..." />
                        </Form.Group>
                        
                        <Button variant="primary" onClick={handleClose} type="submit">Đóng</Button>
                    </Form>
                </Modal.Body> : <Modal.Body>Không có thông tin</Modal.Body>}

            </Modal>
    )
}

export default ModalPopUp