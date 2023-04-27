import { useEffect, useState } from "react"
import API, { endpoints } from "../../configs/API"
import { Outlet } from "react-router-dom"
import { Button, Row } from "react-bootstrap"
import Items from "../../layouts/Items"
import Loading from "../../layouts/Common/Loading"

const Courses = () => {
    const [courses, setCourses] = useState(null)

    useEffect(() => {
        const loadCourses = async () => {
            let res = await API.get(endpoints['courses'])
            setCourses(res.data)
        }

        loadCourses()
    }, [])

    const importFile = (evt) => {
        evt.preventDefault()

        const process = async () => {
            <input type="file" name="file" />
        }
        process()
    }

    if (courses === null)
        return <Loading />

    if (courses.length === 0)
        return <div className="alert alert-info m-1">KHÔNG có khóa học nào!!!</div>

    return (
        <>
            <h1>Danh sách các môn học của giảng viên</h1>
            <Button type="submit" onSubmit={importFile}>Import</Button>{' '}
            <Button type="submit">Export</Button>
            <Row>
                {courses.map(c => {
                    return <Items key={c.id} obj={c} />
                })}
            </Row>
        </>

    )

}

export default Courses