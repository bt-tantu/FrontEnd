import { useState } from "react";
import { Button, Col, Container, Form, Row, Table, ToastContainer } from "react-bootstrap"
import { Link, Outlet, useParams } from "react-router-dom"
import Loading from "./Common/Loading";
import { useEffect } from "react";
import axios from 'axios';
import ItemListForum from "./Teacher/ItemListForum";

const DeleteForum = () => {

    const [forum, setForum] = useState([]);
    const [isStudent, setIsStudent] = useState(false);

    if (forum === null) return <Loading />

    return (
        <>
        <h1>Delete forum</h1>
            
        </>
    )
}

export default DeleteForum