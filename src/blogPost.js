import React, {useEffect, useState} from 'react'

function BlogPost() {
  const [link, setLink] = useState(`https://www.googleapis.com/blogger/v3/blogs/8783291873491079674/posts?key=AIzaSyBSa0px6K3mH5HkhhzbH_Tl4MQiHysI03A&fetchImages=true&lables=OTD&maxResult=999`), [data, setData] = useState(null)
  
 const pagechanger = (token) =>{
setLink(`${link}&pageToken=${token}`)
 }
 let posts = Fetcher(link)
 useEffect(()=>{setData(posts)},[posts])
  
 console.log(data)

  return <div className = "App" >
  
  {data === null ? (<h3>Loading...<span style={{display:"inline-block"}} className="App-logo">⌛</span></h3>): (!data.error === null ? (<h3 className="alert" style={{color:"red"}} >Error occurs ! - {data.error}</h3>) : (data.isLoaded === true ? (<div>
      {data.items.map(items => (
          <div key={items.id} ><h1>{items.title}</h1><p id="content"></p></div>
      ))}
  </div>) : (<h3>Loading...<span style={{display:"inline-block"}} className="App-logo">⌛</span></h3>))) }
  
  <button className="btn btn-secondary"  style={{backgroundColor:"#ffc822"}} >Next page</button>
  </div>  
}

export default BlogPost

function Fetcher(link){
    
    const [postData, setPostData] = useState({isLoaded : false, error : null})

    useEffect((data)=>{
        window.fetch(link).then(res => res.json())
        .then( (result) => {
           let url = result.items.map((items)=> items.url.split(".com"))
            setPostData({...postData, items : result.items, url: url, pageToken : result.nextPageToken, all : result, isLoaded : true})
        }, error =>{
            setPostData({...postData, isLoaded: true, error : error})
        })
    },[])

  return postData
}