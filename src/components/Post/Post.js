// src/components/Post/index.js
import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import "./Post.css";
import Avatar from '../../assets/img/avatar.jpg';
import Slider from "../Slider";
import Stories from "../Stories/Stories";
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
                      <img alt="EndSARS" src="https://nairametrics.com/wp-content/uploads/2020/10/EndSARS-4.png" />
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
                <br />
                <article className="Left-side" ref="Post">
                  <header>
                    <div className="Post-user">
                      <div className="Post-user-avatar">
                        <img src={Avatar} alt="Fissycoolz" />
                      </div>
                      <div className="Post-user-nickname">
                        <span>fissycoolz</span>
                      </div>
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