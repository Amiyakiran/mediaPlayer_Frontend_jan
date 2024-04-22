import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideoApi } from '../services/allAPI';


function VideoCard({displayVideo , setDeleteVideoStatus,isPresent}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    let caption = displayVideo?.caption
    let url = displayVideo?.embedLink
    let time = new Date()
    let timpeStamp = new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)

    console.log(caption , url,timpeStamp);

    const reqBody = {
      caption,
      url,
      timpeStamp
    }

    const response = await addToHistory(reqBody)
    console.log(response);
  }

  const handleDelete = async(id)=>{
    const response =  await deleteVideoApi(id)
    console.log(response);
    setDeleteVideoStatus(true)
  }

  const videoDrag = (e,id)=>{
  console.log('inside videDrag function');
  console.log(`dragged card is ${id}`);
    e.dataTransfer.setData("videoId",id)
  }

  return (
    <>
      <Card onClick={handleShow}  style={{ width: '100%' }} className='mt-5' draggable onDragStart={(e)=>videoDrag(e,displayVideo?.id)}>
        {!isPresent && <Card.Img   variant="top" src={displayVideo?.imageUrl} width={'100%'} height={'300px'} />}
        <Card.Body className='d-flex justify-content-between'>
          <Card.Text >{displayVideo?.caption}</Card.Text>
          {!isPresent && <Button variant="danger" onClick={()=>handleDelete(displayVideo?.id)} ><FontAwesomeIcon icon={faTrash} /></Button>}
        </Card.Body>
      </Card>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Goat Life</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="514" src={`${displayVideo?.embedLink}?autoplay=1`} title="Periyone Song - Malayalam | The GoatLife | Aadujeevitham | A.R. Rahman |Jithin Raj | Rafeeq Ahammed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
      </Modal>


    </>
  )
}

export default VideoCard