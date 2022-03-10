import React, {useEffect, useState} from 'react'
import firebase from 'firebase'
// import {Helmet} from 'react-helmet'
function Today() {
const [today, setToday] = useState(null);
let date = new Date().toLocaleDateString('en-in')
let dateData = date.split("/");
let day = dateData[0];
let month = dateData[1];
//const monthData = ["/","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
// console.log(day, month)
useEffect(()=>{
    firebase.database().ref(`facts/all/fact_today/${month}/${day}`).on('value', snap =>{
        setToday(snap.val());
        // console.log(snap.val())
    })

    // console.log(today);
    
    return 
},[day, month])


    return (
        <div >
            <div className="col-12" style={{background:"#ffc822", textAlign:"center"}}><p> {today ?<span>Today it's {today.category} !</span>: <span></span>}</p></div>
            
{/* <Helmet>
                <link rel="canonical" href="http://www.voofacts.com" />
                <meta
      name="description"
      content={`Today ${day}, ${monthData[month]}, its ${!today === null ? today.category : <span>Facts | On this day | Facts images | interesting facts | unbelivable facts | Historical facts</span>} Did you know? ${today ? today.fact : <span></span>}... ` || `Facts | On this day | Facts images | interesting facts | unbelivable facts | Historical facts`}
    />
        <meta content='website' property='og:type'/>
    <meta content='Facts in Slide - Voofacts' property='og:title'/>
    <meta content='https://facts.voofacts.com' property='og:url'/>
    <meta content={`Today ${day}, ${monthData[month]}, its ${today ? today.category : <span></span>} Did you know? ${today ? today.fact : <span></span>}... `} property='og:description'/>
    <meta content='Facts - Just another fact site | Slide Facts | Voofacts' property='og:site_name'/>
    <meta content='https://facts.voofacts.com/voo.jpg' property='og:image'/>
    <meta content='summary_large_image' name='twitter:card'/>
    <meta content='https://facts.voofacts.com/voo.jpg' name='twitter:image'/>
    <meta content='Facts | Voofacts' name='twitter:title'/>
    <meta content='https://facts.voofacts.com' name='twitter:domain'/>
    <meta content={`Today ${day}, ${monthData[month]}, its ${today ? today.category : <span></span>} Did you know? ${today ? today.fact : <span></span>}... `} name='twitter:description'/>


        </Helmet> */}

        </div>
    )
}

export default Today
