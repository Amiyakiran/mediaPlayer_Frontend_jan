import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllCategoryApi, getUploadVideoApi, updateCategoryApi } from '../services/allAPI'

function View({videoUploadStatus,setVideoDragOutStatus}) {
//js code

//state to hold the video from backend
const [video, setVideo]= useState([])

const [deleteVideoStatus, setDeleteVideoStatus]= useState(false)

 const getVideo = async()=>{
      const reponse =await getUploadVideoApi()
     
      setVideo(reponse.data)
 }

 console.log(video);

 const DragOver = (e)=>{
  e.preventDefault()
 }
 const videoDrop = async(e)=>{
  const { categoryId,videoId} = JSON.parse(e.dataTransfer.getData("sharedData"))
  console.log(categoryId,videoId);

  //to get all category from backend
  const {data}  = await getAllCategoryApi()
  console.log(data);
  //get category which have the same category id 
  let selectedCategory = data.find((item)=>item.id==categoryId)
  let result = selectedCategory.allVideo.filter((item)=>item.id!=videoId)


  let reqBody = {
    category:selectedCategory.category,
    allVideo:result,
    id:categoryId
  }
  //update the category at the backend

  await updateCategoryApi(categoryId,reqBody)

  setVideoDragOutStatus(true)

    
 }

useEffect(()=>{
   getVideo()
   setDeleteVideoStatus(false)
},[videoUploadStatus,deleteVideoStatus]) 



  return (
    <>

    <Row  droppable="true" onDragOver={(e)=>DragOver(e)} onDrop={(e)=>videoDrop(e)}>
      {video?.length>0?
      video?.map((item)=>(
        <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard displayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus} />
        </Col>
  
      ))
       
      :
      
      <h5 className='mt-5 text-warning'>No Video Uploaded Yet....</h5>}
    </Row>

    </>
  )
}

export default View