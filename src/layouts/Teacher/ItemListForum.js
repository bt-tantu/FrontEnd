import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const ItemListTeacher = ({type, obj}) => {
    let url = `/*/`
    if (type === 'forumList')
         url = `/teacher/forum/${obj.id}/`

    return (
         <Col>
            <Card>
                <Link to={url} className="btn btn-primary">Chỉnh sửa</Link>
                <Link to={url} className="btn btn-primary">Xóa</Link>
                <Link to={url} className="btn btn-primary">Thảo luận</Link>
            </Card>
        </Col>
    )
}

export default ItemListTeacher