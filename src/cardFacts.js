import React, {useState, useEffect } from 'react'

function CardFacts() {

    const [data , setData] = useState(null)
    useEffect(()=>{
        window.fetch('https://www.googleapis.com/blogger/v3/blogs/1454534742620078306/posts?key=AIzaSyBSa0px6K3mH5HkhhzbH_Tl4MQiHysI03A&fetchImages=true&lables=OTD&maxResult=999').then(res => res.json())
        .then( (result) => {
          // let url = result.items.map((items)=> items.url.split(".com"))
          setData(result.items)
        console.log(result.items)
        }, error =>{
            console.log(error)
        })
        
      },[])

      
    return (
        <div className="App">
            <h2>Card Facts</h2>
            <div className="card-facts">
               {data?data.map(({images, title})=>(
                <div className="card-facts">
                    <img className="card-fact-img" src={images[0].url} alt={title} title={title}/>
                    <h4>{title}</h4>
                </div>
               )) : 'loading...' }
            </div>
        </div>
    )
}

export default CardFacts
