import { useState } from "react"
import API, { endpoints } from "../../configs/API"
import { Form, Button } from "react-bootstrap"
import Loading from "./Loading"
import authAPI,{ endpointsauth } from "../../configs/AuthAPI"

const CreateForum = () => {

    const [subject, setSubject] = useState("")
    const [author, setAuthor] = useState(1)
    const [message, setMessage] = useState(null)

    const createForum = async (e) => {
        if (subject) {
            e.preventDefault();
            
            setMessage("");
            try {
                let form = {
                    author: author,
                    title: subject,
                    active: true
                }
                let res = await authAPI.post(endpointsauth['create-forum'], form);
                console.log(res)
                if (res.status === 201) {
                    setSubject("");
                    setMessage("User created successfully");
                    console.log(message)
                }
            } catch (error) {
                console.log(error);
                setMessage("Some error occured");
            }
            console.log(message)
        };
    }

    return (
        <>
            <h1>BYE BYE</h1>
            <Form onSubmit={createForum} id="myForm">
                <Form.Group className="mb-3" controlId="formPlaintextGrade">
                    <Form.Label>Chủ đề</Form.Label>
                    <Form.Control type="text"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        placeholder="Nhập chủ đề" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextMark">
                    <Form.Label>Tác giả</Form.Label>
                    <Form.Select value={author} onChange={e => setAuthor(e.target.value)}>
                        <option value="1">Điểm GK</option>
                        <option value="2">Điểm CK</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" onClick={createForum} type="button">Tạo chủ đề</Button>
            </Form>
        </>


    )
}


export default CreateForum