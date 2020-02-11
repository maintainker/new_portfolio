import React,{useState} from 'react';
import PortTit from './PortFoliotit'

const Portfolio=()=>{
    const [bgc,setBgc] = useState('#fff');
    const [titpo] = 
    useState({
        disp: 'none',
        yDir : 55,
        xDir : 30
    });
    let y_dir = window.pageYOffset;     
    let w_v=true;
    document.addEventListener("scroll", function(){
        y_dir = window.pageYOffset;     
        if(y_dir>3300){
            if(w_v === true){
                titpo.disp='block';
                setBgc('#0c0e14');
            }
            w_v =false;      
        }else{
            if(w_v === false){
                titpo.disp='none';
                setBgc('#fff');
            }
            w_v=true;
        }
    });    
        

    const port_style = {
        background:bgc,
        width:'100%',
        height:'100%',
        transition:'0.3s',
        
    };
        return (
    <div className='port' style={port_style}>
        <PortTit y_dir={y_dir}>0</PortTit>
        <PortTit y_dir={y_dir}>1</PortTit>
    </div>);    
}

export default Portfolio; 