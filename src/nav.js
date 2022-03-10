import React from "react";
import logo from "./voologo.webp";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar} from "react-bootstrap";
import Today from "./today";
import Button from '@mui/material/Button'
import * as Icons from '@mui/icons-material'
// import { Link } from "react-router-dom";
export default function NavPage() {

  


  
    return (
      <div style={{ background: "#ffc822" }}>
        <div className="fixed-top">
          <Navbar
            collapseOnSelect
            sticky="top"
            bg="black"
            variant="dark"
            expand="md"
          >
            {/* <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="btn"
            /> */}

            <Navbar.Brand
              // style={{ marginRight: "auto" }}
              href="/#slide"
              className=""
            >
              {" "}
              <img
                src={logo}
                height="30px"
                className="d-inline-block align-top rounded"
                alt="logo"
                title="voofacts logo"
              />
            </Navbar.Brand>
            <p style={{marginRight: "2%",
                marginLeft: "2%"}}>By <a target="_blank" href = "https://sathishwebdev.netlify.app" rel="noreferrer">SathishWebDev</a></p>
            <Button
              variant="contained"
              className="installBtn"
              color="inherit"
              sx={{
                backgroundColor: "#ffc822",
                marginRight: "2%",
                marginLeft: "auto"
              }}
              
            >
              <Icons.DownloadRounded /> Install
            </Button>
            {/* <Navbar.Collapse id="responsive-navbar-nav">
              <Nav style={{ marginLeft: "auto", marginRight: "5%" }}>
                <Nav.Link >
                <Link to = "/#slide" style={{color:"unset"}}>
                  <Icons.List />
                  Facts
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link to = "/otd" style={{color:"unset"}}>
                    <Icons.CalendarToday />
                    On This Day
                  </Link>
                </Nav.Link>

               
                <Nav.Link href = "https//voofacts.blogspot.com">
                <Link  style={{color:"unset"}}>
                  <Icons.PostAdd />
                  Blog
                  </Link>
                </Nav.Link>
                <NavDropdown
                  title="About"
                  bg="dark"
                  variant="dark"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="https://www.voofacts.blogspot.com/p/about-us.html">
                    About us
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://www.voofacts.blogspot.com/p/contact.html">
                    Contact us
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://www.voofacts.blogspot.com/p/disclaimer.html">
                    Disclaimer
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="https://www.voofacts.blogspot.com/p/terms-and-conditions.html">
                    Terms and Conditions
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://voofacts.blogspot.com/p/sitemap_9.html">
                    Site-Map
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse> */}
          </Navbar>
          <Today />
        </div>

        <div
          className=" fixed-bottom justify-content-center align-items-center "
          style={{ backgroundColor: "transparent", height: "75px" }}
        >
          <div className="col-12">
            <div
              className="card align-items-center "
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <AdcompVerticleCen />
            </div>
          </div>
        </div>
      </div>
    );
  }



 export class AdcompVerticleCen extends React.Component{

    componentDidMount(){
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render(){
      return  (<ins className="adsbygoogle"
     style={{display:'inline-block', width:'728px', height:'90px'}}
     data-ad-client="ca-pub-1315718257615016"
     data-ad-slot="1607329905"
     />)
    ;
    }
}

