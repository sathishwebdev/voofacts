import React,{useEffect,useState} from 'react'
import * as Icons from '@mui/icons-material'
import { toBlob, toJpeg } from 'html-to-image';
import * as mui from '@mui/material'

function Otd() {

    const  [data, setData] = useState([]);
    var date = new Date().toLocaleDateString("en-in");

    const monthData = ["/","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    var n = date.split("/");
    const day = n[0]; 
    const month = n[1];
    
    useEffect(() => {
        
        fetch(`https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${month}/${day}`)
        .then(res => res.json())
        .then(
          (result) => {
            setData(result.events)
          },
          (error) => {
            console.log("error" + error)
          }
        )
      }, [])


  //download script 

  function download(id) {
    toJpeg(document.getElementById(id), { quality: 0.95 }).then(function (
      dataUrl
    ) {
      var link = document.createElement("a");
      link.download = "Voofacts-image-fact.jpeg";
      link.href = dataUrl;
      link.click();
    });
  }

  // share script

  function share(id) {
    toBlob(document.getElementById(id), { quality: 0.95 }).then(function (
      dataUrl
    ) {
      const file = new File([dataUrl], "picture.png", { type: "image/png" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator
          .share({
            files: [file],
            text: `${data[id].year} - ${data[id].text} \n\n For more Interesting facts about history, visit `,
            url: "https://factsvf.web.app/otd",
            title: `Facts | ${data === null ? " voofacts" : data.year}`,
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







    return (
      <div
        id="OTD"
        className="App-header"
        style={{
          backgroundColor: "black",
          overflowX: "hidden"
        }}
      >
        
         
          <div
            className="conto"
            style={{
              backgroundColor: "black",
              overflowY: "auto",
              color: "#ffc822",
            }}
          >
            <div
              className="align-items-center"
              style={{maxWidth:"650px"}}
            >
              {data.map((e, id) => (
                <div key={id} className="my-5">
                  <div id={id} 
                  style={{
                    borderBottom: "1px solid #ffc822",
                    backgroundColor:"#000000",
                    
                  
                  }}
                 >
                    <div>
                      <h6 className="year">#OnThisDay {day}
                {day.length === 2 ? (
                  day[1] === 1 ? (
                    <span>st</span>
                  ) : day[1] === 2 ? (
                    <span>nd</span>
                  ) : day[1] === 3 ? (
                    <span>rd</span>
                  ) : (
                    <span>th</span>
                  )
                ) : day[0] === 1 ? (
                  <span>st</span>
                ) : day[0] === 2 ? (
                  <span>nd</span>
                ) : day[0] === 3 ? (
                  <span>rd</span>
                ) : (
                  <span>th</span>
                )}{" "}
                {monthData[month]}, {e.year}</h6>
                    </div>
                    <div
                      className="pad"
                      style={{
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"center",
                        minHeight:"30vh"
                      }}>
                      <h6
                        style={{
                          textAlign: "left",
                          textTransform: "uppercase",
                          color: "#ffffff",
                        }}
                      >
                      <span
                      style={{
                        color:"#ffc822"
                      }}
                      >  {`In ${day}`}
                      <sup 
                      style={{ 
                        textTransform:"lowercase"
                      }}
                      >{`${day.length === 2 ? (
                  day[1] === 1 ? 
                    `st`
                   : day[1] === 2 ? 
                    `nd`
                   : day[1] === 3 ? 
                    `rd`
                  : 
                    `th`
                  
                ) : day[0] === 1 ? (
                  `st`
                ) : day[0] === 2 ? (
                  `nd`
                ) : day[0] === 3 ? (
                  `rd`
                ) : (
                  `th`
                )}`}</sup>
                {` ${monthData[month]}, ${e.year}${' '}`}</span> {e.text}
                      </h6>
                      <p style={{fontSize:"small", textAlign:"right", marginLeft:"auto"}}>~ Voofacts</p>
                    </div>
                  </div>
                    <div className="m-auto">
                      <mui.Button
                                  sx={{color: "#ffc822"}}
                                  id="dwnBtn"
                                  variant='text'
                                  onClick={()=>download(id)}
                                >
                                  <Icons.Download/> Download
                                </mui.Button>
                      
                                <mui.Button
                                sx={{color: "#ffc822"}}
                                  variant='text'
                                  onClick={()=>share(id)}
                                >
                                 <Icons.Share /> Share
                                </mui.Button>
                    </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
    );
}

export default Otd
