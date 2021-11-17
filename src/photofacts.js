import React , {useState, useEffect} from  'react';
import firebase from 'firebase';
import * as mui from '@mui/material'
import * as Icons from '@mui/icons-material'
import { toBlob, toJpeg } from 'html-to-image';

let count = 0;


function PhotoFacts(props) {
  const db = firebase.database();
  const [NoOfFacts, setNoOfFact] = useState(null);
  const [factData, setFactData] = useState(null)
  const [quote, setQuote] = useState(""); 
  const [array, setArray] = useState();
  const [data, setData] = useState(null);
 
  //get values 
   
   useEffect(() => {
        db.ref("facts/all").once("value", snap => {
          var index = parseFloat(snap.numChildren()) - 1;
          var dataArr = []
          setNoOfFact(index);
          snap.forEach(data=>{
            dataArr.push(data.val())
          })
       setFactData(dataArr)
         })

         fetch("https://quotes.rest/qod?language=en")
       .then((data) => data.json())
       .then((data) => {
         for (let i in data.contents) {
           console.log(data.contents[i][0].quote);
           setQuote(data.contents[i][0].quote);
         }
       })
       .catch((err) => console.log(err)); 
   }, []);
 ; 
  
 const arr1 = generateArray(NoOfFacts);

  useEffect(() => { 
    setArray(arr1.slice(0, NoOfFacts - 1));
  }, [NoOfFacts]);


  // next script

  const next = () => {
    count++;
    if (count > NoOfFacts - 2) {
      count = 0;
      console.log(factData[array[count]])
      setData(factData[array[count]])
    } else {
      // setData(factData[array[count]])
      console.log(array[count])
      console.log(factData[array[count]])
      setData(factData[array[count]])
    }
  };

  //prev function

  const prev = () => {
    count--;

    
    if (count < 0 || count > NoOfFacts - 1) {
      count = NoOfFacts - 2;
      setData(factData[array[count]])
    } else {
      setData(factData[array[count]])
    }
  };

  //download script 

  function download() {
    toJpeg(document.getElementById("myFact"), { quality: 0.95 }).then(function (
      dataUrl
    ) {
      var link = document.createElement("a");
      link.download = "Voofacts-image-fact.jpeg";
      link.href = dataUrl;
      link.click();
    });
  }

  // share script

  function share() {
    toBlob(document.getElementById("myFact"), { quality: 0.95 }).then(function (
      dataUrl
    ) {
      const file = new File([dataUrl], "picture.png", { type: "image/png" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator
          .share({
            files: [file],
            text: "For more Interesting facts visit ",
            url: "https://facts.voofacts.com",
            title: `Facts | ${data === null ? " voofacts" : data.category}`,
          })
          .then(() => console.log("Share was successful."))
          .catch((error) => alert("Sharing failed", error));
      } else {
        try { //if location is http its change to https
          if (navigator.share === undefined) {
            if (window.location.protocol === "http:") {
              window.location.replace(
                window.location.href.replace(/^http:/, "https:")
              );
            }
          }
        } catch (error) {
          alert("Sharing failed", error);
        }
      }
    });
  }




// end



  return (
    <div>
      {/* <h4 className="pad top-cont" style={{margin:"0", textTransform:"uppercase", textAlign:"left", background:"#ffc822"}}>{data === null? (<span>category</span>):(data.category)}<span style={{float:"right"}}>#{currentFact}</span></h4> */}

      <div className="conto App-header">
        <div className="carousel slide">
          <div className="carousel-inner">
            <div
              className="justify-content-center align-items-center"
              style={{ color: "white", overflowY: "auto" }}
            >
              <div
                className="col-12 "
                id="myFact"
                style={{
                  textAlign: "left",
                  padding: "8%",
                  width: "90vW",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p style={{ fontSize: "small", color: "grey" }}>
                  {" "}
                  #{" "}
                  {data === null ? (
                    <span>Quote of the Day</span>
                  ) : (
                    data.category
                 )} {" "}
                  &#9679;{''}
                  {array? (array[count]) : (
                    <span>
                      {props.day} {props.monthName}
                    </span>
                  )}
                </p>
                <div
                  style={{
                    zIndex: "1",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "90%",
                    minWidth: "75%",
                  }}
                >
                  <h2>
                    <span
                      style={{ color: "#ffc822", textTransform: "uppercase" }}
                    >
                      {data === null ? (
                        <span>{quote.substring(0, quote.length / 2)}</span>
                      ) : (
                        data.fact.substring(0, data.fact.length / 2)
                      )}
                    </span>
                    <span
                      style={{ color: "white", textTransform: "uppercase" }}
                    >
                      {data === null ? (
                        <span>
                          {quote.substring(quote.length / 2, quote.length)}{" "}
                        </span>
                      ) : (
                        data.fact.substring(data.fact.length / 2, data.length)
                      )}
                    </span>
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: "small",
                    color: "grey",
                    textAlign: "right",
                  }}
                >
                  {" "}
                  {data === null ? (
                    <span> &#9679; Author</span>
                  ) : (
                    <span>
                      &#9679; {data.by}
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
        <div style={{ justifyContent: "Right", textAlign: "Right" }}>
         { data? <mui.Button
          sx={{color: "#ffc822"}}
           variant='text'
           href ={data ? data.source : ''}>
          <Icons.Source/> Source
         </mui.Button> : ''}

          <mui.Button
            sx={{color: "#ffc822"}}
            id="dwnBtn"
            variant='text'
            onClick={download}
          >
            <Icons.Download/> Download
          </mui.Button>

          <mui.Button
          sx={{color: "#ffc822"}}
            variant='text'
            onClick={share}
          >
           <Icons.Share /> Share
          </mui.Button>
        </div>
      </div>

      {/* <div className="row">
<div className="col-6">
                <button className="btn" onClick={prev} style={{background:"#ffc822"}} > PREV </button>
            </div>
<div className="col-6">
<button className="btn" onClick={next} style={{background:"#ffc822"}} > NEXT </button>
</div></div> */}
      <a
        className="carousel-control-prev"
        onClick={prev}
        role="button"
        data-slide="prev"
      >
        <span
          className="carousel-control-prev-icon d-block"
          aria-hidden="true"
        ></span>
        <span className="sr-only "></span>
      </a>
      <a
        className="carousel-control-next"
        onClick={next}
        role="button"
        data-slide="next"
      >
        <span
          className="carousel-control-next-icon d-block"
          aria-hidden="true"
        ></span>
        <span className="sr-only"></span>
      </a>
    </div>
  );
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