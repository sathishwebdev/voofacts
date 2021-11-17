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
            console.log(result);
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
            text: "For more Interesting facts about history, visit ",
            url: "https://facts.voofacts.com/otd",
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
          overflowX: "hidden",
          marginTop: "50px",
        }}
      >
        
          <div className=""
          style={{
                background: "#ffc822",
                color: "#000000",
                padding: "8px",
                textAlign: "center",
                width: "100%",
                maxHeight: "35px"

              }}>
            <h6
              
            >
              {" "}
              <span style={{ textTransform: "uppercase" }}>
                On this Day <span> in History</span>
              </span>{" "}
              <span style={{}}>
                <Icons.CalendarToday />{day}
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
                {monthData[month]}
              </span>
            </h6>
          </div>
          
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
              style={{ margin: "1%", maxWidth:"600px", padding: "2%" }}
            >
              {data.map((e, id) => (
                <div key={id} className="pad">
                  <div id={id} 
                  style={{
                    border: "1px solid #ffc822",
                    backgroundColor:"#101010"
                  }}
                 >
                    <div>
                      <h6 className="year m-auto">{day}
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
                      className="pad">
                      <h6
                        style={{
                          textAlign: "left",
                          textTransform: "uppercase",
                          color: "#ffc822",
                        }}
                      >
                        {e.text}
                      </h6>
                    </div>
                  </div>
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
              ))}
            </div>
          </div>
        </div>
    );
}

export default Otd
