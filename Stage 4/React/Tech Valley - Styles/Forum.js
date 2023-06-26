import React from 'react';
function Forum(){
    
    return (
        <div style={{backgroundColor:"#5d76a8", color:"white", textAlign:"center", padding:"5px", height:"200px", width:"500px"}}>
        <h2>Tech Valley</h2>
        <h4>Post your queries? Tech Valley is here to help..</h4>
        <input type="text" id="query" placeholder="Type your query and press enter" style={{padding:"5px", height:"25px", width:"350px", border:"0px", borderRadius:"20px"}}/>
        </div>
        
        
    );
}
 
export default Forum;