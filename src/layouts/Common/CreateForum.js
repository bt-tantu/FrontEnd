import { useState } from "react"
import API, { endpoints } from "../../configs/API"
import { Form, Button } from "react-bootstrap"
import Loading from "./Loading"

const CreateForum = () => {

    const [subject, setSubject] = useState("")
    const [author, setAuthor] = useState(1)
    const [message, setMessage] = useState(null)

    const createForum = async (e) => {
        if (subject) {
            e.preventDefault();
            
            setMessage("");
            try {
                let form = new FormData()
                form.append("subject", String(subject))
                form.append("author", Number(author))
                let res = await API.post(endpoints['create-forum'], form, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        'Accept': 'application/json, text/plain, */*',
                    }
                }
                );
                if (res.status === 200) {
                    setSubject("");
                    setMessage("User created successfully");
                } else {
                    setMessage("Some error occured");
                }
            } catch (error) {
                console.log(error);
            }
        };
    }

    return (
        <>
            <h1>BYE BYE</h1>
            <Form onSubmit={createForum} id="myForm">
                <Form.Group className="mb-3" controlId="formPlaintextGrade">
                    <Form.Label>Chủ đề</Form.Label>
                    <Form.Control type="text"
                        onChange={e => setSubject(e.target.value)}
                        placeholder="Nhập chủ đề" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextMark">
                    <Form.Label>Tác giả</Form.Label>
                    <Form.Select onChange={e => setAuthor(e.target.value)}>
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