import React , {useState, useEffect} from  'react';
import firebase from 'firebase';


function PhotoFacts(props){
const db= firebase.database();
const [NoOfFacts, setNoOfFact] =useState(null);
//get index value
db.ref("facts/all").once('value', function(message_obj) {
    var index = parseFloat(message_obj.numChildren())-1; 
setNoOfFact(index);
// console.log(index)
});
const [array, setArray] = useState()
const arr1= generateArray(NoOfFacts);
useEffect(()=>{
setArray(arr1.slice(0, NoOfFacts-1));
},[NoOfFacts])
//get random number between no. facts in db
// var ran = random(1, (NoOfFacts)) - 1;

// console.log(`ran at first : ${ran}`);

// console.log(NoOfFacts);


// console.log(array);
const [currentFact, setCurrentFact] = useState(`today/${props.month}/${props.day}`);
 let count = typeof(currentFact)==='number'? array.indexOf(currentFact): 0 ;
// console.log(`count: ${count}`);
// console.log(`currentFact at first : ${currentFact}`);
// console.log(count , currentFact)
// next script


 const next = () =>{
        // console.log(`current index : ${count}`);
        count++;
        //  console.log(`next index : ${count}`);
if(count>NoOfFacts-2){
    count = 0;
    setCurrentFact(array[count]);
    // console.log(`count > No. facts : ${currentFact}`)
}else{
         setCurrentFact(array[count])
        //  console.log(`Next fact : ${currentFact}`)
    }}
   
    //prev function
   
const prev = ()=>{

        // console.log(`index : ${count}`);
    count--;
   
        // console.log(`index decre : ${count}`);
        if(count < 0 || count > NoOfFacts-1 ){
            count = NoOfFacts - 2;
            setCurrentFact(array[count]);
            // console.log(count, array[count] );
            //  console.log(`count < 0 : ${currentFact}`);
        }else{
            
            setCurrentFact(array[count]);
            
        }
//  console.log(`previous fact : ${currentFact}`);
    }
    //get data from db
    // console.log(currentFact);
const [data, setData] = useState(null);

    useEffect(() => {
      db.ref(`facts/all/fact_${currentFact}`).on('value', snap =>{

setData(snap.val());
// console.log(snap.val())

      })
        return () =>{
            
    }}, [currentFact, db])

    
// console.log(data);
    return <div >
        {/* <h4 className="pad top-cont" style={{margin:"0", textTransform:"uppercase", textAlign:"left", background:"#ffc822"}}>{data === null? (<span>category</span>):(data.category)}<span style={{float:"right"}}>#{currentFact}</span></h4> */}
       
    <div className="conto App-header" >  
      <div className="carousel slide"><div className="carousel-inner"> 
       <div className="justify-content-center align-items-center" style={{color:"white", overflowY:"auto"}}>
          
<div className="col-12 " style={{ textAlign:"left", padding:"8%", width:"90vW", display:"flex", flexDirection:"column"}}  >

<p style={{fontSize:"small", color:"grey"}}>&#9679; {data === null? (<span>category</span>):(data.category)}  #{typeof(currentFact) == 'number'? (currentFact+1) : (props.day)}</p>
            <div style={{zIndex:"1", justifyContent:"center", alignItems:"center", maxWidth:"90%", minWidth:"75%"}}><h2 >
            <span style={{color:"#ffc822", textTransform:"uppercase"}}>{data === null? (<span>Loading...          </span>):(data.fact.substring(0, data.fact.length/2))}</span>
            <span style={{color:"white", textTransform:"uppercase"}}>{data === null? (<span style={{display:"inline-block"}} className="App-logo">⌛</span>):(data.fact.substring(data.fact.length/2, data.length))}</span>
        </h2></div> 
        <p style={{fontSize:"small", color:"grey", textAlign:"right"}}> {data === null? (<span>&#9679; Source &#9679; Author</span>):(<span> <a href={data.source} className="App-link" >&#9679; Source </a> &#9679; {data.by}</span>)}</p>   
   </div>
       
      </div>  
    </div>  </div></div>
       
{/* <div className="row">
<div className="col-6">
                <button className="btn" onClick={prev} style={{background:"#ffc822"}} > PREV </button>
            </div>
<div className="col-6">
<button className="btn" onClick={next} style={{background:"#ffc822"}} > NEXT </button>
</div></div> */}
 <a className="carousel-control-prev"  onClick={prev} role="button" data-slide="prev">
          <span className="carousel-control-prev-icon d-block" aria-hidden="true"></span>
          <span className="sr-only "></span>
        </a>
        <a className="carousel-control-next" onClick={next} role="button" data-slide="next">
          <span className="carousel-control-next-icon d-block" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
        
        </div>
}

export default PhotoFacts;

// function random(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }

  function generateArray(endVal){
      
    const arr = []  

    for(let i=0; i < endVal; i++){
        arr.push(i)
      }
       
   return arr.sort(function(){ return Math.random() - 0.5});
     
  } 