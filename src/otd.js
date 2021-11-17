import React,{useEffect,useState} from 'react'


function Otd() {

    const  [data, setData] = useState([]);
    var date = new Date().toLocaleDateString("en-in");

    const monthData = ["/","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    var n = date.split("/");
    // console.log(n[0] , n[1]);
    const day = n[0]; 
    const month = n[1];
    
    
    
    
    useEffect(() => {
        
        fetch(`https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${month}/${day}`)
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            setData(result.events)
          },
          (error) => {
            console.log("error" + error)
          }
        )
      }, [])

    return (
        <div id="OTD" className="App-header" style={{backgroundColor:"black", overflowX:"hidden", marginTop:"50px"}} >
<div  className="conto" style={{backgroundColor:"black"}}>
    <div className="top-con" >
       <h6 style={{background:"#ffc822", color:"#000000", padding:"8px",textAlign:"left", borderRadius:"15px" }}> <span style={{textTransform:"uppercase"}} >On this Day <span> in History</span></span> <span style={{ }}><i className="fa fa-calender" ></i> {day}{day.length === 2 ? (day[1] === 1 ?(<span>st</span>):(day[1] === 2 ? (<span>nd</span>):(day[1]===3? (<span>rd</span>):(<span>th</span>)))):(day[0] === 1 ?(<span>st</span>):(day[0] === 2 ? (<span>nd</span>):(day[0]===3? (<span>rd</span>):(<span>th</span>))))} {monthData[month]}</span>
        </h6>
    </div>
    <div className="conto" style={{ backgroundColor:"black", overflowY:"auto", color:"#ffc822"}}>
     <table  className="align-items-center" style={{margin:"1%", minWidth:"90%"}}>{
        data.map(e =>(
     <tbody key={e.pages[0].pageid}><tr className="pad">
       <td><h6 className="year" >{e.year}</h6></td> 
        <td className="pad"><h6  style={{textAlign:"left", textTransform:"uppercase", color:"#ffc822"}}>{e.text}</h6></td></tr></tbody>
        ))
    }</table>
    </div></div>
    

  
       
      </div>
    )
}

export default Otd
