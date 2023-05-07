import { useContext, useEffect, useState } from "react"
import API, { endpoints } from "../../configs/API"
import { Outlet } from "react-router-dom"
import { Button, Card, Row } from "react-bootstrap"
import Loading from "../../layouts/Common/Loading"
import ItemListCourse from "../../layouts/ItemListCourse"
import { UserContext } from "../../configs/MyContext"

const Courses = () => {
    const [courses, setCourses] = useState(null)
    const [user, dispatch] = useContext(UserContext)

    useEffect(() => {
        const loadCourses = async () => {
            let res = await API.get(`${endpoints['courses']}`)
            setCourses(res?.data?.filter(course => course.tutor.id === user.id))
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
            <h1>Danh sách các môn học giảng viên đứng lớp</h1>
            {<Row>
                {courses.map(c => {
                    return (
                        <ItemListCourse type="courseTeacher" key={c.id} obj={c} />
                    )
                })}
            </Row>}
        </>

    )

}

export default Courses