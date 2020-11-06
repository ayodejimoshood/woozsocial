import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card, Nav, NavItem, Form, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import footerimg from '../../assets/img/footerimg.png'
import econnectwhite from '../../assets/img/econnect-white.png'
import googleplaystore from '../../assets/img/googleplaystore.png'
import appstore from '../../assets/img/appstore.png'
import blogdateimg from '../../assets/img/blogdate.png'

class FooterSection extends Component {
    render() {
        return (
            <div className='mb-3 xwrapper' style={{ maxWidth: '100%', marginTop: '20px', padding: '0 150px 0 150px'}}>
                
                {/* <Container className='' style={{ maxWidth: '100%', backgroundColorx: '#043f7c'}}> */}
                    
                    <Col lg={12}>
                        <Row className='d-flex justify-content-center'>
                            <Col md={8} classNamexx='p-3'>
                                <h6 style={{color: '#043f7c', fontSize: '12px', textAlign: "center"}}> <b>COPYRIGHT © 2020 SOCIALS FROM WOOZEEE</b> </h6>
                            </Col> 
                        </Row>
                    </Col>
                    {/* <br/> */}
                {/* </Container> */}
            </div>
        );
    }
}

export default FooterSection;