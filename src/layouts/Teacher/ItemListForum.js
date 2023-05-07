import { Card, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState } from "react"
import DeletePopUp from "../DeletePopUp"

const ItemListTeacher = ({type, obj}) => {
    const [showPopUp, setShowPopUp] = useState(false)
    let url = `/*/`
    if (type === 'forumList')
         url = `/teacher/forum/${obj.id}/`

    return (
         <Col>
            <Card>
                <Link to={url + "edit/"} className="btn btn-primary">Chỉnh sửa</Link>
                <Button onClick={() => setShowPopUp(true)}>Xóa</Button>
                <Link to={url} className="btn btn-primary">Thảo luận</Link>
            </Card>
            <DeletePopUp show={showPopUp} handleClose={() => setShowPopUp(false)} forumId={obj.id} />
        </Col>
    )
}

export default ItemListTeacher