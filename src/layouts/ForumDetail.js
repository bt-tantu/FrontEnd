import { Button, Col, Row } from "react-bootstrap"
import { Form, Link, useParams } from "react-router-dom"
import Loading from "./Common/Loading"
import Moment from "react-moment"
import { useEffect, useState } from "react"
import API, { authAPI, endpoints } from "../configs/API"

const ForumDetail = () => {

    const [forum, setForum] = useState(null)
    const [comments, setComments] = useState(null)
    const { forumId } = useParams()
    const [content, setContent] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const loadForum = async () => {
            let res = await API().get(endpoints['forum-detail'](forumId))
            console.info(res.data)
            setForum(res.data)
        }
        loadForum()
    }, [forumId]);

    // useEffect(() => {
    //     axios
    //         .get('http://127.0.0.1:8000/forum/')
    //         .then((res) => {
    //             setForum(res.data);
    //             console.log(':::', res.data)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);

    useEffect(() => {
        let loadComments = async () => {
            let res = await API.get(endpoints['comments'](forumId))
            setComments(res.data)
        }

        loadComments()
    }, [])

    const addComment = (evt) => {
        evt.preventDefault()

        const process = async () => {
            try {
                let res = await authAPI().post(endpoints['comments'](forumId), {
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
        <h1>Chủ đề</h1>
            <hr></hr>
            
        </>
    )
}

export default ForumDetail