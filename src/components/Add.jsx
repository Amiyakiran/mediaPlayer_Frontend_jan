import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadVideoApi } from '../services/allAPI';


function Add({setVideoUploadStatus}) {
    const [show, setShow] = useState(false);
    //state to store video details
    const [video, setVideo] = useState({
        caption: "",
        imageUrl: "",
        embedLink: ""
    })

    console.log(video);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const getEmdedlink = (e) => {
        const text = e.target.value
        /*  console.log(text); */
        if (text.startsWith('https://youtu.be/')) {
            /* console.log(text.slice(-26,-15)) */
            const link = `https://www.youtube.com/embed/${text.slice(17, 28)}`
            setVideo({ ...video, embedLink: link })
        }
        else {
            /* console.log(text.slice(-11)) */
            const link = `https://www.youtube.com/embed/${text.slice(-11)}`
            setVideo({ ...video, embedLink: link })
        }

    }


    //function to upload the video details
    const handleUpload = async () => {
        const { caption, imageUrl, embedLink } = video

        if (!caption || !imageUrl || !embedLink) {
            toast.info('please fill the form completely')
        }
        else {
            //
            const response = await uploadVideoApi(video)
            console.log(response);
            if (response.status >= 200 && response.status < 300) {
                toast.success('Video Uploaded successfully')
                setVideoUploadStatus(response.data)
                setVideo({
                    caption: "",
                    imageUrl: "",
                    embedLink: ""
                })
                handleClose()
            }
            else{
                console.log(response);
               toast.error('Something Went wrong')
            }

            
        }
    }

    return (
        <>
            <div>
                <h5>Upload New Video <FontAwesomeIcon onClick={handleShow} icon={faCloudArrowUp} className='ms-2' /></h5>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><FontAwesomeIcon icon={faFilm} className='me-2 text-warning' />Upload Videos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill the following details</p>
                    <form className='mt-3 border p-3 rounded'>
                        <div className="mb-3">
                            <input type="text" placeholder='Enter Video Caption' className='form-control' onChange={(e) => setVideo({ ...video, caption: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <input type="text" onChange={(e) => setVideo({ ...video, imageUrl: e.target.value })} placeholder='Enter Image Url' className='form-control' />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder='Enter YouTube Video Link ' className='form-control' onChange={(e) => getEmdedlink(e)} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="warning" onClick={handleUpload}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer theme='colored' position='top-center' autoClose={2000} />
        </>
    )
}

export default Add



/* https://www.youtube.com/watch?v=xnzA2TnOMIU */
/* https://youtu.be/xnzA2TnOMIU?feature=shared */

/* <iframe width="914" height="514" src="https://www.youtube.com/embed/xnzA2TnOMIU" title="Periyone Song - Malayalam | The GoatLife | Aadujeevitham | A.R. Rahman |Jithin Raj | Rafeeq Ahammed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */



/* https://www.youtube.com/watch?v=zLcrEO-eIOQ */
/* https://www.youtube.com/watch?v=zLcrEO-eIOQ */
/* <iframe width="914" height="514" src="https://www.youtube.com/embed/zLcrEO-eIOQ" title="Kanmani Anbodu Kadhalan Song | Guna Tamil Movie | Kamal Haasan | Ilaiyaraja | Pyramid Glitz Music" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */