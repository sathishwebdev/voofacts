import React, {useState, useEffect} from 'react';
import PhotoFacts from './photofacts';
import firebase from 'firebase';
import 'firebase/database';

import CardFacts from './cardFacts';
import BlogPost from './blogPost';





const HomePage = () =>{

const db = firebase.database();
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
            
            <h1 className="pad" style={{textAlign:"center", color:"#ffc822"}} > Blog Posts </h1>
            
            <BlogPost />
            
        </div> 
    )
}




export default HomePage;

// export class AdcompVerticleRight extends React.Component{

//     componentDidMount(){
//        (window.adsbygoogle = window.adsbygoogle || []).push({});
//     }

//     render(){
//         return ( <ins className="adsbygoogle"
//      style={{display:'block'}}
//      data-ad-client="ca-pub-1315718257615016"
//      data-ad-slot="4700203581"
//      data-ad-format="auto"
//      data-full-width-responsive="true" /> );
//     }
// }

// export class AdcompVerticleLeft extends React.Component{

//     componentDidMount(){
//        (window.adsbygoogle = window.adsbygoogle || []).push({});
//     }

//     render(){
//         return ( <ins className="adsbygoogle"
//         style={{display:'block'}}
//         data-ad-client="ca-pub-1315718257615016"
//         data-ad-slot="2171014020"
//         data-ad-format="auto"
//         data-full-width-responsive="true" />);
//     }
// }

// export class CenterAd extends React.Component{

//     componentDidMount(){
//        (window.adsbygoogle = window.adsbygoogle || []).push({});
//     }
  
//     render(){
//         return (  <ins className="adsbygoogle"
//         style={{display:"inline-block", width:"500px", height:"60px"}}
//         data-ad-client="ca-pub-1315718257615016"
//         data-ad-slot="9102483024"
 
//      />);
//     }
//   }


//   function slideview(wh){
//       var x = wh;

//     return <div className="pad"><h1 className="pad top-cont" style={{margin:"0", textTransform:"uppercase", textAlign:"left", background:"#ffc822"}}>{x}</h1>
//     <div className="conto" >  
//         <div className="row justify-content-center align-items-center" style={{color:"white"}}>
          
// <div className="col-12 col-lg-8  " style={{ textAlign:"left", padding:"2%"}}  >
//         <h1>
//             <span style={{color:"#ffc822", textTransform:"uppercase"}}>{x} will be </span>
//             <p style={{color:"white", textTransform:"uppercase"}}>shown here. Currently Under Construction</p>
//         </h1>
// </div><div className="col-2 order-lg-first">
//                 <p>Prev</p>
//             </div>
// <div className="col-2">
// <p>Next</p>
// </div>
//     </div></div></div>
// }