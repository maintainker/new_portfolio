import React, { useState } from 'react';

const PortPage = (page_name) =>{
    const [disp,setdisp]= useState(0);
    let open = false;
    document.addEventListener("scroll", function(e){ 
        if(open === false){
            if(5500<window.pageYOffset){
                setdisp(1);
            }
            open=true;
        }else{
            if(5500>window.pageXOffset){
                setdisp(0);
            }
            open = false;
        }
    });
    
    const style ={
        transition : '0.5s',
        opacity : disp,
        margin : 0,
        width : '100%',
        height : '100vh',
        background :'#fff',
        position: 'fixed',
        top:0,
        left : 0
    }
    
    return(
    <dir className = 'page' style={style}>

    </dir>);
}



export default PortPage;