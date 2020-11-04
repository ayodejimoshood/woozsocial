import React, { Component, useState } from 'react'
// import {Link, useHistory} from 'react-router-dom'
// import {toastr} from 'react-redux-toastr'
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux'
// import { logout, logOut } from '../actions/auth'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { faHeart-o } from "@fortawesome/free-solid-svg-icons";

import {
    Badge,
    Navbar,
    Nav,
    NavItem,
    mouseEvent,
    NavDropdown,
    Container,
    InputGroup,
    Dropdown,
    DropdownButton,
    Button,
    FormControl,
    Image,
} from 'react-bootstrap';

import Logo from '../assets/img/woozeee.png';
import img from '../assets/img/avatar.jpg';
import ReactCountryFlag from 'react-country-flag';
// import DropdownMenuComp from './DropdownMenu/DropdownMenu';

// import './SideNav/SideNav.css';
// import SideNav from './SideNav/SideNav';


class CustomNavbar extends React.Component{
    render() {


        return (
            <Container className='mb-3'>
                <Navbar className="justify-content-center" collapseOnSelect expand="lg" bg='light' style={{ widthxx: '80%', borderBottomxx: '0.01rem #8d8b8b solid', alignContent: "center", backgroundColor: '#fefefe' }} fluid fixed="top">
               
                    <Navbar.Brand classNamex="ml-3" style={{marginLeft: '260px'}}>
                        <a href="/">
                            <img src={Logo} style={{ width: '170px' }} alt="" />
                        </a>
                    </Navbar.Brand>

                    <Navbar.Collapse>
                        
                        <Nav className="mx-auto">
                            <InputGroup className="" stylexx={{ width: '250px' }}>
                                <FormControl
                                    placeholder="search"
                                    aria-describedby="basic-addon1"></FormControl>
                            </InputGroup>
                        </Nav>
                        <>
                        <Nav className='mr-3'>
                            <i className='fa fa-home' style={{fontSize: '22px'}}></i>
                        </Nav>
                        <Nav className='mr-3'>
                            <i className='fa fa-location-arrow' style={{fontSize: '22px'}}></i>
                        </Nav>
                        <Nav className='mr-3'>
                            <i className='fa fa-heart-o' style={{fontSize: '22px'}}></i>
                        </Nav>
                        {/* <Nav className='mr-3'>
                            <i className='fa fa-instalod'></i>
                        </Nav> */}
                        
                            <Dropdown style={{marginRight: '250px'}} alignRight>
                                <Dropdown.Toggle
                                    variant="transparent"
                                    id="dropdown-basic">
                                    <Image
                                        src={img}
                                        style={{ width: '30px' }}
                                        roundedCircle
                                    />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="myaccount/profile">
                                        {' '}
                                        <i className="fa fa-user"></i> Profile
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">
                                        {' '}
                                        <i className="fa fa-shopping-bag"></i>{' '}
                                        Saved
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        {' '}
                                        <i className="fa fa-exchange"></i>{' '}
                                        Settings
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        {' '}
                                        <i className="fa fa-question-circle"></i>{' '}
                                        Help
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item>
                                        {' '}
                                        <i className="fa fa-power-off"></i>{' '}
                                        Logout
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
}

export default CustomNavbar;
  