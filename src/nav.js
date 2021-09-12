import React, { Component } from "react";
import logo from "./voologo.webp";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import Today from "./today";
export default class NavPage extends Component {



  render() {
    return (
    
        <div style={{background:"#ffc822"}} >
          <div className="fixed-top">
        <Navbar collapseOnSelect sticky="top" bg="black" variant="dark" expand="sm" >
        <Navbar.Brand href="#slide"> <img
        src={logo}
        height="30px"
        className="d-inline-block align-top rounded"
        alt="logo"
        title="voofacts logo"
      /></Navbar.Brand> 
       <Nav className="mr-auto " >
        
            <Nav.Link  href="#OTD">OTD</Nav.Link>
             </Nav>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" className="btn"  />
  <Navbar.Collapse id="responsive-navbar-nav" >
       
          <Nav className="mr-auto ">
              
{/*             
            <Nav.Link href="#edu">Education</Nav.Link>
            <Nav.Link href="#skill">Skills</Nav.Link> 
           <Nav.Link href="#slide">Facts</Nav.Link>
             <Nav.Link href="#OTD">OTD</Nav.Link> */}
                    
 <Nav.Link href="#slide">Facts</Nav.Link>
 {/* <Nav.Link href="#Cat">Categories</Nav.Link> */}
 <Nav.Link href="#blog">Blog</Nav.Link>
            <NavDropdown title="About" bg="dark" variant="dark" id="navbarScrollingDropdown">
        <NavDropdown.Item href="https://www.voofacts.com/p/about-us.html">About us</NavDropdown.Item>
        <NavDropdown.Item href="https://www.voofacts.com/p/contact.html">Contact us</NavDropdown.Item>
        <NavDropdown.Item href="https://www.voofacts.com/p/disclaimer.html">Disclaimer</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://www.voofacts.com/p/terms-and-conditions.html">Terms and Conditions</NavDropdown.Item>
        <NavDropdown.Item href="https://www.voofacts.com/p/sitemap_9.html">Site-Map</NavDropdown.Item>
      </NavDropdown>
        
          </Nav>
        </Navbar.Collapse>
       
      </Navbar> 
      <Today />
      </div>
      
      <div className=" fixed-bottom justify-content-center align-items-center " style={{backgroundColor:"transparent", height:"75px"}}>
      <div className="col-12"><div className="card align-items-center " style={{backgroundColor : "transparent", border: "none"}}>
      <AdcompVerticleCen />
</div></div>

        </div>

      </div>
      
      
      
      
    );
  }
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

