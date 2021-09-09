import React, {useState, useEffect} from 'react';
import PhotoFacts from './photofacts';
import firebase from 'firebase';
import 'firebase/database';
import NavPage from './nav';
import CategoryPost from './categoryPost';
import BlogPost from './blogPost';




const Home = () =>{
const  [data, setData] = useState([]);

var date = new Date().toLocaleDateString("en-in");
const db = firebase.database();
const monthData = ["/","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
var n = date.split("/");
// console.log(n[0] , n[1]);
const day = n[0]; 
const month = n[1];




useEffect(() => {
    const udata = [];
    db.ref(`otdf/${day}_${month}`).orderByChild("year").on('value', snap => {
      
        snap.forEach(e =>{
            udata.push(e.val());
        })
            setData(udata);
        
        // console.log(snap.val());
        // console.log(data);
        });

       
    return 
}, [day, month, db]);


    return (
        <div style={{ background:"black"}} >

            
        <div id="slide" className="App" style={{ width:"100%", marginRight:"0", marginLeft:"0"}}>
            {/* <div className="col-12" style={{color:"#ffc822", textAlign:"center"}}>
            <p> {today ?<span>{today.fact}</span>: <span></span>}</p>
            </div> */}
{/* <div className="col-12 col-md-2  d-none d-sm-block align-items-center" style={{maxwidth:"240px", padding:"2%"}} >
 <AdcompVerticleRight />
</div> */}

     {/* <div className="align-items-center d-block d-md-none "><CenterAd /></div><br/> */}
  

    <PhotoFacts day = {day} month={month} />
       
</div> 



 {/* <div className="align-items-center d-block d-md-none "><CenterAd /></div>
<div className="col-2  d-none d-md-block align-items-center " style={{maxwidth:"240px", padding:"2%"}}>
    <AdcompVerticleLeft />

</div>*/}
{/* otd starts */}
 <div id="OTD" className="App-header" style={{ overflowX:"hidden"}} >
<div  className="conto">
    <div className="top-con" >
       <h6 style={{background:"#ffc822", color:"black", padding:"8px",textAlign:"left", borderRadius:"15px"}}> <span style={{textTransform:"uppercase"}} >On this Day <span> in History</span></span> <span style={{ }}><i className="fa fa-calender" ></i> {day}{day.length === 2 ? (day[1] === 1 ?(<span>st</span>):(day[1] === 2 ? (<span>nd</span>):(day[1]===3? (<span>rd</span>):(<span>th</span>)))):(day[0] === 1 ?(<span>st</span>):(day[0] === 2 ? (<span>nd</span>):(day[0]===3? (<span>rd</span>):(<span>th</span>))))} {monthData[month]}</span>
        </h6>
    </div>
    <div className="conto" style={{ overflowY:"auto"}}>
     <table  className="align-items-center" style={{margin:"1%", minWidth:"90%"}}>{
        data.map(e =>(
     <tbody key={e.year}><tr className="pad">
       <td><h6 className="year" >{e.year}</h6></td> 
        <td className="pad"><h6  style={{textAlign:"left", textTransform:"uppercase", color:"#ffc822"}}>{e.fact}</h6></td></tr></tbody>
        ))
    }</table>
    </div></div>
    

  
       
      </div>

{/* otd ends */}

<CategoryPost />
<BlogPost />

      </div> 
    )
}
function HomePage(){
    return <div>
        <NavPage />
        <Home /></div>
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