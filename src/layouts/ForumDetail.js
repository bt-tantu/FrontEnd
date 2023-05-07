import { Button, Col, Row } from "react-bootstrap"
import { Form, Link, useParams } from "react-router-dom"
import Loading from "./Common/Loading"
import Moment from "react-moment"
import { useEffect, useState } from "react"
import API, { endpoints } from "../configs/API"
import authAPI, { endpointsauth } from "../configs/AuthAPI"

const ForumDetail = () => {

    const [forum, setForum] = useState(null)
    const [comments, setComments] = useState(null)
    const { forumId } = useParams()
    const [content, setContent] = useState("")
    const [loading, setLoading] = useState(false)


    console.info("Xinchao")
    useEffect(() => {
        const loadForum = async () => {
            let res = await API.get(endpoints['forum-detail'](forumId))
            console.info(res.data)
            setForum(res.data)
        }
        loadForum()
    }, [forumId]);

    useEffect(() => {
        let loadComments = async () => {
            let res = await API.get(endpoints['comment'](forumId))
            setComments(res.data)
        }

        loadComments()
    }, [])

    const addComment = (evt) => {
        evt.preventDefault()

        const process = async () => {
            try {
                let res = await authAPI().post(endpointsauth['comment'](forumId), {
                    'content': content
                })

                setComments(curr => [res.data, ...curr])
            } catch {

            } finally {
                setLoading(false)
            }
        }
        setLoading(true)
        process()

    }


    return (
        <>
        <h1>Chủ đề {}</h1>
            <hr></hr>
            
        </>
    )
}

export default ForumDetail