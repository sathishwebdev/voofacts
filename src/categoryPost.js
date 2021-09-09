import React from 'react';
import science from './catPho/dyk.jpg'
import dyk from './catPho/science.jpg'
import fun from './catPho/fun.jpg'
import his from './catPho/history.jpg';

function CategoryPost() {
   
    return (
        <div className="App"> 
        <h2 style={{textAlign:"center", textTransform:"uppercase", color:"#ffc822"}} >Categories</h2>
            <div id="Cat"className="scrollmenu">
               
               {/* DYK */}
                
                   <a href="https://www.instagram.com/voofactss/"> <img src={dyk} height="80px" alt="did you know?" style={{borderRadius:"50%", border:"1px solid #ffc822"}}></img></a>
                
                {/* science */}
                
                   <a href="https://www.instagram.com/voofactss/"> <img src={science} alt="science facts" height="80px" style={{borderRadius:"50%", border:"1px solid #ffc822"}}></img></a>
              

                {/* fun */}
               
                   <a href="https://www.instagram.com/voofactss/"> <img src={fun} alt="fun fact" height="80px" style={{borderRadius:"50%", border:"1px solid #ffc822"}}></img></a>
                

                {/* history */}
             
                   <a href="https://www.instagram.com/voofactss/"> <img alt="history facts" src={his} height="80px" style={{borderRadius:"50%", border:"1px solid #ffc822"}}></img></a>

                   
               
            </div>
        </div>
    )
}

export default CategoryPost
