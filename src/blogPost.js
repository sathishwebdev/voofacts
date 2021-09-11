import React, {useEffect, useState} from 'react'


let postData = []
  let buttonName = "Load more"
let i = 0 //page number || postdata array's index number
let url = `https://www.googleapis.com/blogger/v3/blogs/8783291873491079674/posts?key=AIzaSyBSa0px6K3mH5HkhhzbH_Tl4MQiHysI03A&fetchImages=true&lables=OTD&maxResult=999`
function BlogPost() {

  const [data, setData] = useState(null)
  


 useEffect(()=>{
  window.fetch(url).then(res => res.json())
  .then( (result) => {
    // let url = result.items.map((items)=> items.url.split(".com"))
  setData(result.items)
  }, error =>{
      console.log(error)
  })
    

},[])
  
 console.log(i,data)


  return <div id="blog" className = "App" >
  
  {data === null ? (<h3>Loading...<span style={{display:"inline-block"}} className="App-logo">⌛</span></h3>): <div className="row align-items-center" style={{textAlign: "left"}} >
      {data.map(items => (
       
        <div className="con col-12 col-md-6 col-lg-3" key={items.id} style={{maxWidth:"720px"}} >
          <a href={items.url} ><div className="imgcon  " >
            <img id="thumb" src ={items.images[0].url} />
            <div className="eimg " >
              <h4 style={{textAlign:"left"}}>{items.title}</h4>
            </div>
            </div>
          </a> {/* <div className="col-2" ><p><br/></p></div> 
        <div className="d-none d-md-block col" > <div className="con" style={{textAlign:"left"}} > <a href={items.url} ><h2>{items.title}</h2></a></div></div>
        </div> */}
        </div>
       
        
      ))
     }
  </div> }
  
  <a className="btn btn-secondary" id="pageBtn" href = "https://www.voofacts.com"  style={{backgroundColor:"#ffc822"}} > View Blog </a> 
  </div>  
} 

export default BlogPost