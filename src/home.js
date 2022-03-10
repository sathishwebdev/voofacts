import React from 'react';
import PhotoFacts from './photofacts';
// import firebase from 'firebase';
import 'firebase/database';
import * as Icons from '@mui/icons-material'
import Otd from './otd';





const HomePage = () =>{

// const db = firebase.database();
var date = new Date().toLocaleDateString("en-in");

const monthData = ["/","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
var n = date.split("/");
// console.log(n[0] , n[1]);
const day = n[0]; 
const month = n[1];



    return (
        <div style={{ background:"black"}} >
            
            <div id="slide" className="App" style={{ width:"100%", marginRight:"0", marginLeft:"0"}}>
                <PhotoFacts day = {day} month={month} monthName = {monthData[month]} />
            </div>
            {/* <CardFacts/> */}
            <Otd/>
            
        </div> 
    )
}




export default HomePage;
