import React,{useState} from 'react';

const ScrollDirect=()=>{
    const [direct,setDirect] =useState( window.pageYOffset);
    document.addEventListener("scroll", function(){
        setDirect(window.pageYOffset);
    });        
    return (
    <div id = 'scroll_direct' >
        <span>{direct}</span>
    </div>
    );
}



export default ScrollDirect;