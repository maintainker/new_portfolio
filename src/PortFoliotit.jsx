import React, { useState} from 'react';

const PortTit = (y_dir)=>{
    const [titpo,setTitPo]=useState({titpo_X:55+ 10*y_dir.children,titpo_Y:38});
    const [tit_disp,setTitDisp] = useState('none');
    let onoff = 1;
    
    let y,x;
    let timer;
    document.addEventListener("scroll", function(e){ 
        if (!timer) {
            timer = setTimeout(function() {
            timer = null;
            y= 38-window.pageYOffset/30+110;
            x=55+10*y_dir.children-window.pageYOffset/7+471.4;

            if(window.pageYOffset>3300){

                if(onoff === 1){
                    setTitPo({titpo_X:x,titpo_Y:y}); 
                    setTitDisp('block');
                    
            }
                
                onoff = 2;
            }else{
                if(onoff===2){
                    setTitPo({titpo_X:55+ 10*y_dir.children,titpo_Y:38}); 
                    setTitDisp('none');
                }
                onoff = 1;
            }
            
            }, 14);
        }
    });
    let port_tit = {
        left:titpo.titpo_X+'%',
        top:titpo.titpo_Y+'%',
        display:tit_disp
    }
    let port_tit2 = {
        left:titpo.titpo_X+'%',
        bottom:titpo.titpo_Y+'%',
        display:tit_disp
    }
    let port_titl;
    y_dir.children%2===0? port_titl = port_tit:port_titl=port_tit2;

    return <span style={port_titl}>Portfolio</span>
}

export default PortTit; 