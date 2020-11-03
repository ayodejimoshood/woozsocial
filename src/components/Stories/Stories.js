import React, { Component } from 'react';
// import { Link } from './node_modules/react-router-dom';
// import {Link} from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
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
            <Container className='mb-3' style={{ maxWidth: '100%', marginTop: '20px'}}>
                {/* <Row className="justify-content-md-center"> */}
                <Row className='Wrapper mb-3'>
                    <Col sm={1}>
                        <div style={{textAlign: "center", fontSize: '13.5px'}} className="StoryPost-user">
                            <div className="Story-user-avatar">
                                <img src={halloween} alt="Fissycoolz" />
                                <span>halloween</span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={1}>
                        <div style={{textAlign: "center", fontSize: '13.5px'}} className="StoryPost-user">
                            <div className="Story-user-avatar">
                                <img src={Dangbana} alt="Fissycoolz" />
                                <span>Dangbana...</span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={1}>
                        <div style={{textAlign: "center", fontSize: '13.5px'}} className="StoryPost-user">
                            <div className="Story-user-avatar">
                                <img src={ahmedmosh} alt="Fissycoolz" />
                                <span>ahmed.mo...</span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={1}>
                        <div style={{textAlign: "center", fontSize: '13.5px'}} className="StoryPost-user">
                            <div className="Story-user-avatar">
                                <img src={chisom} alt="Fissycoolz" />
                                <span>Chisom__</span>
                            </div>  
                        </div>
                    </Col>
                    <Col sm={1}>
                        <div style={{textAlign: "center", fontSize: '13.5px'}} className="StoryPost-user">
                            <div className="Story-user-avatar">
                                <img src={brodashaggi} alt="Fissycoolz" />
                                {/* <strong>broda.sha...</strong> */}
                                <span>broda.sha...</span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={1}>
                        <div style={{textAlign: "center", fontSize: '13.5px'}} className="StoryPost-user">
                            <div className="Story-user-avatar">
                                <img src={jubril} alt="Fissycoolz" />
                                <span>dr.jaol</span>
                            </div>  
                        </div>
                    </Col>
                    <Col sm={1}>
                        <div style={{textAlign: "center", fontSize: '13.5px'}} className="StoryPost-user">
                            <div className="Story-user-avatar">
                                <img src={hawttie} alt="Fissycoolz" />
                                <span>hawttie</span>
                            </div>  
                        </div>
                    </Col>
                    <Col sm={1}>
                        <div style={{textAlign: "center", fontSize: '13.5px'}} className="StoryPost-user">
                            <div className="Story-user-avatar">
                                <img src={callme_sugarlipz} alt="Fissycoolz" />
                                <span>callme_su...</span>
                            </div>  
                        </div>
                    </Col>
                    <Col sm={1}>
                        <div style={{textAlign: "center", fontSize: '13.5px'}} className="StoryPost-user">
                            <div className="Story-user-avatar">
                                <img src={mercedes} alt="Fissycoolz" />
                                <span>mercedes...</span>
                            </div>  
                        </div>
                    </Col>
                    <Col sm={1}>
                        <div style={{textAlign: "center", fontSize: '13.5px'}} className="StoryPost-user">
                            <div className="Story-user-avatar">
                                <img src={activatedtv} alt="Fissycoolz" />
                                <span>activatedtv</span>
                            </div>  
                        </div>
                    </Col>
                    <Col sm={1}>
                        <div style={{textAlign: "center", fontSize: '13.5px'}} className="StoryPost-user">
                            <div className="Story-user-avatar">
                                <img src={tyrabanks} alt="Fissycoolz" />
                                <span>tyrabanks</span>
                            </div>  
                        </div>
                    </Col>
                    <Col sm={1}>
                        <div style={{textAlign: "center", fontSize: '13.5px'}} className="StoryPost-user">
                            <div className="Story-user-avatar">
                                <img src={toursandtravels} alt="Fissycoolz" />
                                <span>toursandt...</span>
                            </div>  
                        </div>
                    </Col>
                </Row>
                    
                {/* </Row> */}
            </Container>
            
            // </div>
        );
    }
}

export default Stories;