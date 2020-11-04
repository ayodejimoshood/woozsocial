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
      
      // <Stories />
      // <Container stylex={{ width: '100%' }}>
      <div>
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
                      <img alt="Icon Living" src="https://images.pexels.com/photos/4343180/pexels-photo-4343180.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                    </div>
                  </div>
                  <div className="Post-caption">
                    <strong>fissycoolz</strong> Chop me I am your Palliative..... 💛 #justdoit
                  </div>
                </Card.Body>
              </Card>
              <article className="Post" ref="Post">
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
                <div className="Post-image">
                  <div className="Post-image-bg">
                    <img alt="Icon Living" src="https://images.pexels.com/photos/4343180/pexels-photo-4343180.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                    {/* <Slider /> */}
                  </div>
                </div>
                <div className="Post-caption">
                  <strong>fissycoolz</strong> Chop me I am your Palliative..... 💛 #justdoit
                </div>
              </article>
              <article className="Post" ref="Post">
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
                <div className="Post-image">
                  <div className="Post-image-bg">
                    <img alt="Icon Living" src="https://vod-progressive.akamaized.net/exp=1604228302~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3246%2F18%2F466230286%2F2069241683.mp4~hmac=65e84777c53fbcef7ed9ae10a9fefa8acf6b2976bbac91fd67db18985519607e/vimeo-prod-skyfire-std-us/01/3246/18/466230286/2069241683.mp4?filename=pexels-cottonbro-5555977.mp4" />
                    {/* <Slider /> */}
                  </div>
                </div>
                <div className="Post-caption">
                  <strong>fissycoolz</strong> Chop me I am your Palliative..... 💛 #justdoit
                </div>
              </article>
              <article className="Post" ref="Post">
                <header>
                  <div className="Post-user">
                    <div className="Post-user-avatar">
                      <img src={Avatar} alt="Chris" />
                    </div>
                    <div className="Post-user-nickname">
                      <span>fissycoolz</span>
                    </div>
                  </div>
                </header>
                <div className="Post-image">
                  <div className="Post-image-bg">
                    <img alt="Icon Living" src="https://vod-progressive.akamaized.net/exp=1604228018~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2185%2F18%2F460927992%2F2039252910.mp4~hmac=5ac4cbe2fbeaffc7ddbca36141f907c0cc755f69ee84f3683aeb8d2b4aa2e33a/vimeo-prod-skyfire-std-us/01/2185/18/460927992/2039252910.mp4?filename=pexels-cottonbro-5427573.mp4" />
                    {/* <Slider /> */}
                  </div>
                </div>
                <div className="Post-caption">
                  <strong>fissycoolz</strong> Chop me I am your Palliative..... 💛 #justdoit
                </div>
              </article>
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