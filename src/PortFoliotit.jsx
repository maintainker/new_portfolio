import React, { useState} from 'react';

const PortTit = (y_dir)=>{
    let titpo_X=55+ 10*y_dir.children;
    const [titpo_Y,setTitpoY] = useState(38);
    const [tit_disp,setTitDisp] = useState('none');
    let onoff = 1;
    
    let y;
    let timer;
    document.addEventListener("scroll", function(e){ 
        if (!timer) {
            timer = setTimeout(function() {
            timer = null;
            y= 38-window.pageYOffset/20+165;
            if(window.pageYOffset>3300){
                if(onoff === 1){
                    titpo_X-=window.pageYOffset/10;
                    setTitpoY(y); 
                    setTitDisp('block');
                    
                console.log('이프 이전 :',onoff);
            }
                
                onoff = 2;
                console.log('이프 이후 :',onoff);
            }else{
                if(onoff===2){
                    titpo_X=55+ 10*y_dir.children;
                    setTitDisp('none');
                }
                onoff = 1;
            }
            
            }, 10);
        }
    });
    let port_tit = {
        left:titpo_X+'%',
        top:titpo_Y+'%',
        display:tit_disp
    }
    let port_tit2 = {
        left:titpo_X+'%',
        bottom:titpo_Y+'%',
        display:tit_disp
    }
    let port_titl;
    y_dir.children%2===0? port_titl = port_tit:port_titl=port_tit2;

    return <span style={port_titl}>Portfolio</span>
}

export default PortTit; 