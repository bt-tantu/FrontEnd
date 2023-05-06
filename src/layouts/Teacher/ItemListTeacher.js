import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const ItemListTeacher = ({type, obj}) => {
    let url = `/*/`
    if (type === 'userTeacher')
         url = `/teacher/${obj.id}/courses/`

    return (
         <Col>
            <Card>
                <Link to={url} className="btn btn-primary ">Xem chi tiết</Link>
            </Card>
        </Col>
    )
}

export default ItemListTeacher