import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Link } from './node_modules/react-router-dom';
// import {Link} from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import InfiniteCarousel from 'react-leaf-carousel';
// import "../Post/Post.css";
import Avatar from '../../assets/img/avatar.jpg'
import halloween from '../../assets/img/halloween.png'
import Dangbana from '../../assets/img/dangbanachoco.jpg'
import ahmedmosh from '../../assets/img/ahmedmosh.jpg'
import chisom from '../../assets/img/chisom.png'
import brodashaggi from '../../assets/img/brodashaggi.jpg'
import jubril from '../../assets/img/jubril.png'
import hawttie from '../../assets/img/hawttie.png'
import callme_sugarlipz from '../../assets/img/callme_sugarlipz.png'
import mercedes from '../../assets/img/mercedes.png'
import activatedtv from '../../assets/img/activatedtv.png'
import tyrabanks from '../../assets/img/tyrabanks.png'
import toursandtravels from '../../assets/img/toursandtravels.png'
import Figure from 'react-bootstrap/Figure'

class Stories extends Component {
    render() {
        return (
            // <div>
            <div className='mb-3 xwrapper' style={{ maxWidth: '100%', marginTop: '20px', padding: '0 150px 0 150px'}}>
                <Carousel interval={null}>
                    <Carousel.Item>
                        <Row className='d-flex justify-content-center '>
                            <Col sm={1} className="mb-4 d-flex justify-content-center">
                                <div className="Story-user-avatar">
                                    <Image src={halloween} alt="Fissycoolz"roundedCircle  />
                                    <span>halloween</span>
                                </div>
                            </Col>
                            <Col sm={1} className="mb-4 d-flex justify-content-center">
                                <div className="Story-user-avatar">
                                    <Image src={Dangbana} alt="Fissycoolz" roundedCircle/>
                                    <span>Dangbana...</span>
                                </div>
                            </Col>
                            <Col sm={1} className="mb-4 d-flex justify-content-center">
                                <div className="Story-user-avatar">
                                    <Image src={ahmedmosh} alt="Fissycoolz" roundedCircle/>
                                    <span>ahmed.mo...</span>
                                </div>
                            </Col>
                            <Col sm={1} className="mb-4 d-flex justify-content-center">
                                <div className="Story-user-avatar">
                                    <Image src={chisom} alt="Fissycoolz" roundedCircle/>
                                    <span>Chisom__</span>
                                </div>
                            </Col>
                            <Col sm={1} className="mb-4 d-flex justify-content-center">
                                <div className="Story-user-avatar">
                                    <Image src={brodashaggi} alt="Fissycoolz" roundedCircle/>
                                    <span>broda.sha...</span>
                                </div>
                            </Col>
                            <Col sm={1} className="mb-4 d-flex justify-content-center">
                                <div className="Story-user-avatar">
                                    <Image src={jubril} alt="Fissycoolz" roundedCircle />
                                    <span>dr.jaol</span>
                                </div>
                            </Col>
                            <Col sm={1} className="mb-4 d-flex justify-content-center">
                                <div  className="Story-user-avatar">
                                    <Image src={hawttie} alt="Fissycoolz" roundedCircle/>
                                    <span>hawttie</span>
                                </div>
                            </Col>
                            <Col sm={1} className="mb-4 d-flex justify-content-center">
                                <div className="Story-user-avatar">
                                    <Image src={callme_sugarlipz} alt="Fissycoolz" roundedCircle/>
                                    <span>callme_su...</span>
                                </div>
                            </Col>
                            <Col sm={1} className="mb-4 d-flex justify-content-center">
                                <div className="Story-user-avatar">
                                    <Image src={mercedes} alt="Fissycoolz" roundedCircle />
                                    <span>mercedes...</span>
                                </div>
                            </Col>
                            <Col sm={1} className="mb-4 d-flex justify-content-center">
                                <div className="Story-user-avatar">
                                    <Image src={mercedes} alt="Fissycoolz" roundedCircle />
                                    <span>mercedes...</span>
                                </div>
                            </Col>                            
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className='d-flex justify-content-center '>
                            <Col sm={1} className="mb-4 d-flex justify-content-center">
                                <div className="Story-user-avatar">
                                    <Image src={halloween} alt="Fissycoolz"roundedCircle  />
                                    <span>halloween</span>
                                </div>
                            </Col>
                            <Col sm={1} className="mb-4 d-flex justify-content-center">
                                <div className="Story-user-avatar">
                                    <Image src={Dangbana} alt="Fissycoolz" roundedCircle/>
                                    <span>Dangbana...</span>
                                </div>
                            </Col>
                            <Col sm={1} className="mb-4 d-flex justify-content-center">
                                <div className="Story-user-avatar">
                                    <Image src={ahmedmosh} alt="Fissycoolz" roundedCircle/>
                                    <span>ahmed.mo...</span>
                                </div>
                            </Col>
                            <Col sm={1} className="mb-4 d-flex justify-content-center">
                                <div className="Story-user-avatar">
                                    <Image src={chisom} alt="Fissycoolz" roundedCircle/>
                                    <span>Chisom__</span>
                                </div>
                            </Col>
                            <Col sm={1} className="mb-4 d-flex justify-content-center">
                                <div className="Story-user-avatar">
                                    <Image src={brodashaggi} alt="Fissycoolz" roundedCircle/>
                                    <span>broda.sha...</span>
                                </div>
                            </Col>
                            <Col sm={1} className="mb-4 d-flex justify-content-center">
                                <div className="Story-user-avatar">
                                    <Image src={jubril} alt="Fissycoolz" roundedCircle />
                                    <span>dr.jaol</span>
                                </div>
                            </Col>
                            <Col sm={1} className="mb-4 d-flex justify-content-center">
                                <div  className="Story-user-avatar">
                                    <Image src={hawttie} alt="Fissycoolz" roundedCircle/>
                                    <span>hawttie</span>
                                </div>
                            </Col>
                            <Col sm={1} className="mb-4 d-flex justify-content-center">
                                <div className="Story-user-avatar">
                                    <Image src={callme_sugarlipz} alt="Fissycoolz" roundedCircle/>
                                    <span>callme_su...</span>
                                </div>
                            </Col>
                            <Col sm={1} className="mb-4 d-flex justify-content-center">
                                <div className="Story-user-avatar">
                                    <Image src={mercedes} alt="Fissycoolz" roundedCircle />
                                    <span>mercedes...</span>
                                </div>
                            </Col>
                            <Col sm={1} className="mb-4 d-flex justify-content-center">
                                <div className="Story-user-avatar">
                                    <Image src={mercedes} alt="Fissycoolz" roundedCircle />
                                    <span>mercedes...</span>
                                </div>
                            </Col>                            
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Stories;