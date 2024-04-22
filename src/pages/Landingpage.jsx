import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landingpage() {
  return (
    <>
      <div className='row p-5 my-5'>
        <div className="col-md-1"></div>
        <div className="col-md-5 p-3">
          <h3>Welcome to<span className='text-warning'> Media Player</span></h3>
          <p style={{ textAlign: 'justify' }} className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum animi deserunt beatae mollitia voluptates? Dolores nesciunt dolorem autem suscipit neque, incidunt iste quis corrupti natus quasi accusamus assumenda, illum optio. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro dolore reiciendis quam facere. Assumenda laborum, earum facilis fuga non laudantium adipisci voluptatum facere rerum, quasi ullam tenetur, est dolor itaque.</p>

          <Link to={'/home'}><button className='btn btn-warning mt-4'>Get Started</button></Link>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 p-3 d-flex justify-content-center align-items-center">
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="image" className='w-75' />
        </div>

      </div>


      <div className='mb-5 mt-5 py-5'>
        <h3 className='my-5 text-center'>Features</h3>
        <Row className='mb-5 mt-5 pt-0 pt-md-4'>
          <Col md={1}></Col>
          <Col md={3} className='p-5 p-md-0'>
            <Card style={{ width: '100%' }} className='p-4'>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" style={{ width: '100%', height: '300px' }} />
              <Card.Body>
                <Card.Title>Managing Video</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center'>
            <Card style={{ width: '80%' }} className='p-4'>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" style={{ width: '100%', height: '300px' }} />
              <Card.Body>
                <Card.Title>Categorized Video</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='p-5 p-md-0'>
            <Card style={{ width: '100%' }} className='p-4'>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" style={{ width: '100%', height: '300px' }} />
              <Card.Body>
                <Card.Title>Watch History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={1}></Col>
        </Row>

      </div>

      <div className="row pt-0 pt-md-5 pb-5">
       <div className="col-md-1"></div>
       <div className="col-md-10 border p-5 rounded border-2">
        <Row>
          <Col md={6} className='p-3'>
            <h2 className='text-warning mb-5'>Simple fast and PowerFul</h2>

            <p style={{textAlign:'justify'}}><span className='fs-4'>Play Everything </span>: Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</p>
            <p style={{textAlign:'justify'}} className='mt-3'><span className='fs-4'>Play Everything </span>: Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</p>
            <p style={{textAlign:'justify'}} className='mt-3'><span className='fs-4'>Play Everything </span>: Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</p>

          </Col>
          <Col md={6} className='p-3'>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/PmdyY38g6Rg" title="ANIMAL: ABRAR’S ENTRY - JAMAL KUDU(Full Video) |Ranbir Kapoor,Bobby Deol |Sandeep Vanga |Bhushan K" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>

        </Row>
       </div>
       <div className="col-md-1"></div>

      </div>

    </>
  )
}

export default Landingpage