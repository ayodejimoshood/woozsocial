// src/components/Post/index.js
import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import "./Post.css";
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player/lazy';
import Avatar from '../../assets/img/avatar.jpg';
import Slider from "../Slider";
import Stories from "../Stories/Stories";
import Footer from '../Footer'
import thumb1 from '../../assets/img/thumb1.jpg'
import thumb2 from '../../assets/img/thumb2.jpg'
import thumb3 from '../../assets/img/thumb3.jpg'
import thumb4 from '../../assets/img/thumb4.jpg'
import thumb5 from '../../assets/img/thumb5.jpg'
import thumb6 from '../../assets/img/thumb6.jpg'
import thumb7 from '../../assets/img/thumb7.jpg'
import thumb8 from '../../assets/img/thumb8.jpg'
import thumb9 from '../../assets/img/thumb9.jpg'
import thumb10 from '../../assets/img/thumb10.jpg'
// import Slider from '../Slider';

class Explore extends Component {
  render() {
    return (
      
      
      // <Container stylex={{ width: '100%' }}>
      <div className='mb-3'>
        <br />
        <br />
        {/* <Stories className='mb-3' /> */}
        <br />
        <Col lg={12} className='mb-3'>
          
          <Row className="justify-content-md-center Wrapper" >
            <Col sm={4}>
              <Card.Body className='mb-4' style={{padding: '0rem'}}>
                <div className="Post-image">
                  <div className="Post-image-bg" style={{width: '100%', heightxx: '50%'}}>
                  <ReactPlayer playIcon url='https://player.vimeo.com/video/367990063?title=0&portrait=0&byline=0&autoplay=1' width='100%' />
                  
                    {/* <img alt="EndSARS" src={thumb1} /> */}
                  </div>
                </div>
              </Card.Body>
              <Card.Body classNamexx='mb-3' style={{padding: '0rem'}}>
                <div className="Post-image">
                  <div className="Post-image-bg">
                    <img alt="EndSARS" src={thumb2} />
                  </div>
                </div>
              </Card.Body>
            </Col>
            <Col sm={8}>
              <Card.Body className='mb-3' style={{padding: '0rem'}}>
                <div className="Post-image">
                  <div className="Post-image-bg">
                  <Carousel>
                        <Carousel.Item indicator='false'>
                          <img alt="EndSARS" src={thumb10} />
                        </Carousel.Item>
                        <Carousel.Item indicator='false'>
                          <img alt="EndSARS" src={thumb9} />
                        </Carousel.Item>
                      </Carousel>
                  </div>
                </div>
              </Card.Body>
            </Col>
            <Col sm={4}>
              <Card.Body className='mb-3' style={{padding: '0rem'}}>
                <div className="Post-image">
                  <div className="Post-image-bg">
                    <img alt="EndSARS" src={thumb3} />
                  </div>
                </div>
              </Card.Body>
            </Col>
            <Col sm={4}>
              <Card.Body className='mb-3' style={{padding: '0rem'}}>
                <div className="Post-image">
                  <div className="Post-image-bg">
                    <img alt="EndSARS" src={thumb4} />
                  </div>
                </div>
              </Card.Body>
            </Col>
            <Col sm={4}>
              <Card.Body className='mb-3' style={{padding: '0rem'}}>
                <div className="Post-image">
                  <div className="Post-image-bg">
                    <img alt="EndSARS" src={thumb5} />
                  </div>
                </div>
              </Card.Body>
            </Col>
            <Col sm={4}>
              <Card.Body className='mb-3' style={{padding: '0rem'}}>
                <div className="Post-image">
                  <div className="Post-image-bg">
                    <img alt="EndSARS" src={thumb6} />
                  </div>
                </div>
              </Card.Body>
            </Col>
            <Col sm={4}>
              <Card.Body className='mb-3' style={{padding: '0rem'}}>
                <div className="Post-image">
                  <div className="Post-image-bg">
                    <img alt="EndSARS" src={thumb7} />
                  </div>
                </div>
              </Card.Body>
            </Col>
            <Col sm={4}>
              <Card.Body className='mb-3' style={{padding: '0rem'}}>
                <div className="Post-image">
                  <div className="Post-image-bg">
                    <img alt="EndSARS" src={thumb8} />
                  </div>
                </div>
              </Card.Body>
            </Col>            
          </Row>
        </Col>
        <Footer />
        </div>
      // </Container>
      
    );
  }
}
export default Explore;