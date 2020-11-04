// src/components/Post/index.js
import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Image, Button, Card, FormControl } from 'react-bootstrap';
import "./Post.css";
import Carousel from 'react-bootstrap/Carousel';
import InputGroup from 'react-bootstrap/InputGroup';
import Avatar from '../../assets/img/avatar.jpg';
import Slider from "../Slider";
import Stories from "../Stories/Stories";
import LikeButton from '../LikeButton/LikeButton'
// import Slider from '../Slider';

class Post extends Component {
  render() {
    return (
      
      
      // <Container stylex={{ width: '100%' }}>
      <div>
        <Stories className='mb-3' />
        <br />
        <Col lg={12}>
          
          <Row className="justify-content-md-center Wrapper" >
            <Col sm={8}>
              <Card className='mb-3'>
                <Card.Header style={{backgroundColor: 'white', padding: '0rem'}}>
                  <div className="Post-user">
                    <div className="Post-user-avatar">
                      <img src={Avatar} alt="Fissycoolz" />
                    </div>
                    <div className="Post-user-nickname">
                        <span>fissycoolz</span>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body style={{padding: '0rem'}}>
                  <div className="Post-image">
                    <div className="Post-image-bg">
                      <Carousel>
                        <Carousel.Item indicator='false'>
                          <img alt="EndSARS" src="https://nairametrics.com/wp-content/uploads/2020/10/EndSARS-4.png" />
                        </Carousel.Item>
                        <Carousel.Item indicator='false'>
                          <img alt="EndSARS" src="https://nairametrics.com/wp-content/uploads/2020/10/EndSARS-4.png" />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                  </div>
                  <div className="Post-user">
                    <div className="Post-user-avatar">
                      {/* <img src={Avatar} alt="Fissycoolz" /> */}
                      <LikeButton className="Post-user-avatar" />
                    </div>
                    <div className="Post-user-nickname">
                      <i className='fa fa-comment-o' style={{fontSize: '29px'}}></i>
                    </div>
                    <div className="Post-user-nickname">
                      <i className='fa fa-location-arrow' style={{fontSize: '29px'}}></i>
                    </div>
                  </div>
                  {/* <div className="Post-caption">
                    <LikeButton />
                  </div> */}
                  <div className="Post-caption" style={{marginTop: '-20px'}}>
                    <strong>fissycoolz</strong> Chop me I am your Palliative..... 💛 #justdoit
                  </div>
                  <div>
                  <InputGroup classNamex="mb-3">
                    <FormControl style={{height: '50px', borderx: 'none', borderBottom: 'none', borderLeft: 'none', borderRight: 'none'}} aria-describedby="basic-addon1" placeholder='Add a comment...' />
                    <Button style={{width: '100px', height:'30px', margin: '0', position: "absolute", top: '50%', right:'10px', msTransform: 'translateY(-50%)', transform: 'translateY(-50%)', float: 'right' }} size='sm' variant="primary"> <b>Post</b> </Button>{' '}
                  </InputGroup>
                  </div>
                </Card.Body>
              </Card>
              <Card className='mb-3'>
                <Card.Header style={{backgroundColor: 'white', padding: '0rem'}}>
                  <div className="Post-user">
                    <div className="Post-user-avatar">
                      <img src={Avatar} alt="Fissycoolz" />
                    </div>
                    <div className="Post-user-nickname">
                        <span>fissycoolz</span>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body style={{padding: '0rem'}}>
                  <div className="Post-image">
                    <div className="Post-image-bg">
                      <img alt="Icon Living" src="https://images.pexels.com/photos/4343180/pexels-photo-4343180.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                    </div>
                  </div>
                  <div className="Post-caption">
                    <strong>fissycoolz</strong> Chop me I am your Palliative..... 💛 #justdoit
                  </div>
                </Card.Body>
              </Card>
              <Card className='mb-3'>
                <Card.Header style={{backgroundColor: 'white', padding: '0rem'}}>
                  <div className="Post-user">
                    <div className="Post-user-avatar">
                      <img src={Avatar} alt="Fissycoolz" />
                    </div>
                    <div className="Post-user-nickname">
                        <span>fissycoolz</span>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body style={{padding: '0rem'}}>
                  <div className="Post-image">
                    <div className="Post-image-bg">
                      <img alt="Icon Living" src="https://vod-progressive.akamaized.net/exp=1604245632~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3294%2F18%2F466470641%2F2070632985.mp4~hmac=27f14a19d12107a90f0abaecd5e6e2ab7b069a18dcf7d8123d8c0674c1a9f04e/vimeo-prod-skyfire-std-us/01/3294/18/466470641/2070632985.mp4?filename=pexels-engin-akyurt-5559904.mp4" />
                    </div>
                  </div>
                  <div className="Post-caption">
                    <strong>fissycoolz</strong> Chop me I am your Palliative..... 💛 #justdoit
                  </div>
                </Card.Body>
              </Card>
              
            </Col>
            <Col sm={4} >
              <Row style={{position: "fixed", margin: 'auto'}}>
                <Col sm={12}>
                  <h6>Suggestions for you</h6>
                  {/* <br /> */}
                  <article classNamex="Left-side" ref="Post">
                    <header>
                      <div className="Suggestions">
                        <Col sm='1'>
                          <div className="Post-user-avatar">
                            <img src={Avatar} alt="Fissycoolz" />
                          </div>
                        </Col>
                        <Col sm='6' className='mr-4'>
                          <div className="Post-user-nickname">
                            <span style={{fontSize: '12px'}}>fissycoolz</span>
                            <br />
                            <h6 style={{fontSize: '12px'}}>followed by broda.shaggi</h6>
                          </div>
                        </Col>
                        <Col sm='5'>
                          <div className="Post-user-nickname" stylex={{marginLeft: '130px'}}>
                            {/* <Button style={{fontSize: '11px'}} size='sm' variant="primary">Follow</Button>{' '} */}
                            <Button style={{width: '70px', height:'30px'}} size='sm' variant="primary">follow</Button>{' '}
                          </div>
                        </Col>
                      </div>
                      <div className="Suggestions">
                        <Col sm='1'>
                          <div className="Post-user-avatar">
                            <img src={Avatar} alt="Fissycoolz" />
                          </div>
                        </Col>
                        <Col sm='6' className='mr-4'>
                          <div className="Post-user-nickname">
                            <span style={{fontSize: '12px'}}>fissycoolz</span>
                            <br />
                            <h6 style={{fontSize: '12px'}}>followed by hawttie</h6>
                          </div>
                        </Col>
                        <Col sm='5'>
                          <div className="Post-user-nickname" stylex={{marginLeft: '130px'}}>
                            <Button style={{width: '70px', height:'30px'}} size='sm' variant="primary">follow</Button>{' '}
                          </div>
                        </Col>
                      </div>
                      <div className="Suggestions">
                        <Col sm='1'>
                          <div className="Post-user-avatar">
                            <img src={Avatar} alt="Fissycoolz" />
                          </div>
                        </Col>
                        <Col sm='6' className='mr-4'>
                          <div className="Post-user-nickname">
                            <span style={{fontSize: '12px'}}>fissycoolz</span>
                            <br />
                            <h6 style={{fontSize: '12px'}}>followed by mercedesbenz</h6>
                          </div>
                        </Col>
                        <Col sm='5'>
                          <div className="Post-user-nickname" stylex={{marginLeft: '130px'}}>
                            <Button style={{width: '70px', height:'30px'}} size='sm' variant="primary">follow</Button>{' '}
                          </div>
                        </Col>
                      </div>
                    </header>
                  </article>
                </Col>                
              </Row>
            </Col>
          </Row>
        </Col>
        </div>
      // </Container>
      
    );
  }
}
export default Post;