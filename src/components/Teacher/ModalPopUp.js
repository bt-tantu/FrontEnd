import Loading from "../../layouts/Common/Loading";
import { Button, Form, Modal, Table } from "react-bootstrap";


const ModalPopUp =({show, handleClose, user: {username, email, firstName, lastName}})=>{
    const login =()=>{

    }
    console.log(firstName)
    return(
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit User Content</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={login}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Tên đăng nhập</Form.Label>
                            <Form.Control type="text" 
                                        value={username}
                                        onChange={e => (e.target.value)}
                                        placeholder="Tên đăng nhập..." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" 
                                        value={email}
                                        onChange={e => (e.target.value)}
                                        placeholder="Email..." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" 
                                        value={firstName}
                                        onChange={e => (e.target.value)}
                                        placeholder="First Name..." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" 
                                        value={lastName}
                                        onChange={e => (e.target.value)}
                                        placeholder="Last Name..." />
                        </Form.Group>
                        
                        <Button variant="primary" onClick={handleClose} type="submit">Đăng nhập</Button>
                    </Form>
                </Modal.Body>

            </Modal>
    )
}

export default ModalPopUp