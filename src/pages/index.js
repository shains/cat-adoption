import React from "react"
import Container from "../components/container"
//import styles from "../components/index.module.css"
import Cat from "../components/cat"
import Navigation from "../components/navbar"
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';

export default function Home() {
  return <main>
  <div>
  <Navigation />
  
  <Container>
  <Cat 
    name="Bean"
    age="13"
    description="Very cutie Bean, all he does is scream"
    dob="April 19 2020"
    photo="https://cdn.discordapp.com/attachments/730165628840968235/738168325686951938/MG_8764_-_Copy.JPG" 
    sex="M"
    requireDuo={true}

     />

  <Cat 
    name="Bean"
    age="13"
    description="Very cutie Bean, all he does is scream"
    dob="April 19 2020"
    photo="https://cdn.discordapp.com/attachments/730165628840968235/738168325686951938/MG_8764_-_Copy.JPG" 
    sex="M"
    requireDuo={true}

     />

  <Cat 
    name="Bean"
    age="13"
    description="Very cutie Bean, all he does is scream"
    dob="April 19 2020"
    photo="https://cdn.discordapp.com/attachments/730165628840968235/738168325686951938/MG_8764_-_Copy.JPG" 
    sex="M"
    requireDuo={true}

     />

  <Cat 
    name="Bean"
    age="13"
    description="Very cutie Bean, all he does is scream"
    dob="April 19 2020"
    photo="https://cdn.discordapp.com/attachments/730165628840968235/738168325686951938/MG_8764_-_Copy.JPG" 
    sex="M"
    requireDuo={true}

     />



  </Container>
  </div>
  </main>
}




