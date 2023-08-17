import React, { useState } from 'react'

import '../index.css';
import logo from './logo.png';
import { Avatar } from '@material-ui/core'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { GoogleLogout } from 'react-google-login';

import { setSignedIn, setUserData, setSearchInput } from '../UserSlice'


export const Header = ({ isSignedIn, userData }) => {


    const dispatch = useDispatch()
    const [input, setInput] = useState('tect')

    const logout = (response) => {
        console.log('logout response =>', response)

        dispatch(setSignedIn(false))
        dispatch(setUserData(null))
    }

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(setSearchInput(input))
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark d-flex justify-content-around" >

            <Link className="navbar-brand justify-content-start" to="/"><img src={logo} alt='logo ' className='App-logo' /> News-Blog</Link>

            <button className="navbar-toggler d-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>

                <Link to = 'resume'>Know About Me</Link>


<div className="collapse navbar-collapse" id="collapsibleNavId">


            {
                isSignedIn && (
                    <>
                        <form className='blogSearch form-inline container w-50'>

                            <input type="search" className="form-control mr-sm-2 w-100" id="search" aria-describedby="helpId" placeholder="search blog"
                                value={input} onChange={(e) => { setInput(e.target.value) }} />

                            <button className="btn btn-outline-primary my-2 my-sm-0" onClick={handleSearch}>Search</button>

                        </form>





                        <button onClick={handleShow} className='btn btn-outline-primary mr-4 h-90' >

                            <div className='nav-user-data' style={{ 'textAlign': '-webkit-center' }}   >

                                <Avatar src={userData?.imageUrl} alt={userData?.givenName || ''} />

                                <p className='text-white'>{userData?.name} </p>
                            </div>

                        </button>



                        <Modal show={show} onHide={handleClose}>

                            <Modal.Header closeButton>
                                <Modal.Title>User PortFolio</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <img src={userData?.imageUrl} alt='' />
                                <p>Name : {userData?.name}</p>
                                <p>Email : {userData?.email}</p>
                                <p>google id : {userData?.googleId}</p>
                                <p>family Name : {userData?.familyName}</p>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>

                        </Modal>




                        <GoogleLogout

                            clientId='1033919005296-43c3ims99lpb2opit5etd3so0fgjl7fu.apps.googleusercontent.com'

                            render={(renderProps) => (

                                <button
                                    className="btn btn-primary logout-btn"
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}>
                                    logout
                                </button>
                            )}

                            onLogoutSuccess={logout} />
                    </ >

                )
            }
    </div>



        </nav >




    )
}

