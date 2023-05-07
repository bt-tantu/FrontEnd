import { useEffect, useState } from "react"
import API, {endpoints} from '../configs/API'
import { Form, Button } from "react-bootstrap"
import { useParams } from "react-router"

const EditForum = () => {

    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState(null)
    const {forumId} = useParams()
    const [forum, setForum] = useState({})

    useEffect(() => {
        const getInfoForum = async () => {
            const res = await API.get(endpoints['forum-detail'](forumId),  {headers: {
                "Content-type": "application/json; charset=UTF-8",
                'Accept': 'application/json, text/plain, */*',
            }});
            setForum(res.data)
        }
        getInfoForum()
    },[forumId])


    const editForum = async (e) => {
        if (subject) {
            e.preventDefault();
            
            setMessage("");
            try {
                let form = new FormData()
                form.append("subject", String(subject))
                let res = await API.get(endpoints['create-forum'], form, {
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
            <Form onSubmit={editForum} id="myForm">
                <Form.Group className="mb-3" controlId="formPlaintextGrade">
                    <Form.Label>Chủ đề</Form.Label>
                    <Form.Control type="text"
                        onChange={e => setSubject(e.target.value)}
                        value={forum.title} />
                </Form.Group>
                <Button variant="primary" onClick={editForum} type="button">Sửa chủ đề</Button>
            </Form>
        </>


    )
}


export default EditForum