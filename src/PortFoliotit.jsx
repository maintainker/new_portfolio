import React, { useState} from 'react';

const PortTit = (y_dir)=>{
    const [tit_po_y,set_tit_po_y]=useState(38);
    const [tit_disp,set_tit_disp] = useState('none');
    let tit_po_X= 55+ 10*y_dir.children;
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
                    tit_po_X = x;
                    set_tit_po_y(y); 
                    set_tit_disp('block');
                    
            }
                
                onoff = 2;
            }else{
                if(onoff===2){
                    let tit_po_X= 55+ 10*y_dir.children;
                    set_tit_po_y({titpo_X:55+ 10*y_dir.children,titpo_Y:38}); 
                    set_tit_disp('none');
                }
                onoff = 1;
            }
            
            }, 14);
        }
    });
    let port_tit = {
        left:tit_po_X+'%',
        top:tit_po_y+'%',
        display:tit_disp
    }
    let port_tit2 = {
        left:tit_po_X+'%',
        bottom:tit_po_y+'%',
        display:tit_disp
    }
    let port_titl;
    y_dir.children%2===0? port_titl = port_tit:port_titl=port_tit2;

    return <span style={port_titl}>Portfolio</span>
}

export default PortTit; 