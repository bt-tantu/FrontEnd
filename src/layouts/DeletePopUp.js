import React from "react"
import { Button, Modal } from "react-bootstrap"
import API, { endpoints } from "../configs/API"


const DeletePopUp = ({show, handleClose, forumId}) => {
    const handleDelete = async () => {
        const res = await API.delete(`/forum/${forumId}`)
        if(res) handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                   <p>Bạn có chắc muốn xóa chủ đề này ?</p>
                   <Button variant="danger" onClick={handleDelete}>Xóa</Button>
                   <Button variant="light" onClick={handleClose}>Hủy</Button>
                </Modal.Body>
            </Modal>
    )
}

export default DeletePopUp