import React, {useEffect, useState} from 'react'
let postData = []
  let buttonName = "Load more"
let i = 0 //page number || postdata array's index number
let url = `https://www.googleapis.com/blogger/v3/blogs/8783291873491079674/posts?key=AIzaSyBSa0px6K3mH5HkhhzbH_Tl4MQiHysI03A&fetchImages=true&lables=OTD&maxResult=999`
function BlogPost() {

  const [link, setLink] = useState(url), [data, setData] = useState(null)
  
 const pagechanger = (token) =>{
setLink(token === null ? document.getElementById("pageBtn").disabled = true :`${link}&pageToken=${token}`)
document.getElementById("pageBtn").disabled = i>0 ? data[i-1].disabled : false
 }


 useEffect(()=>{
      let posts = Fetcher(link)
    setData(posts)
    i++
},[link])
  
 console.log(i,data)
//  useEffect(()=>{
//   i > 0 ? data[i-1]? data[i-1].nextPageToken === null ? document.getElementById("pageBtn").disable = true : document.getElementById("pageBtn").disable = false  : document.getElementById("pageBtn").disable = false : console.log(data)
//  },[data])

  return <div id="blog" className = "App" >
  
  {data === null ? (<h3>Loading...<span style={{display:"inline-block"}} className="App-logo">⌛</span></h3>): <div className="row justify-content-center align-items-center" >
      {data.map(data => data.items.map(items => (
        <div className="con col-12 col-sm-6 col-lg-4" key={items.id} style={{maxWidth:"720px"}} ><a href={items.url} ><div className="imgcon  " ><img src ={items.images[0].url} /><div className="eimg " ><h4 style={{textAlign:"left"}}>{items.title}</h4></div></div></a></div> 
        
      )))
     }
  </div> }
  
  <button className="btn btn-secondary" id="pageBtn" onClick={()=>pagechanger (i>0 ? data[i-1].nextPageToken : null )}  style={{backgroundColor:"#ffc822"}} >{buttonName}</button> 
  </div>  
} 

export default BlogPost

function Fetcher(link){
    window.fetch(link).then(res => res.json())
        .then( (result) => {
          // let url = result.items.map((items)=> items.url.split(".com"))
          postData.push({
             items: result.items,
             all: result,
             nextPageToken : result.nextPageToken || null,
             buttonName: result.nextPageToken? "Load more" : "thats all",
            disabled : result.nextPageToken? false : true  })
            buttonName = result.nextPageToken? "Load more" : "thats all"
        }, error =>{
            console.log(error)
        })

  return postData
}