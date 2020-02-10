import React,{useState} from 'react';
import Cap from './img/captain.png';
import iron from './img/iron.png';
import './index.css';
const Skill =()=> {
    const [direct,setCap]=useState(-900);
    const [disp,setDisp] =useState('static');
    const [tit,setTit] = useState('skilltit');
    document.addEventListener("scroll", function(){
        if(window.pageYOffset<2300){
            let dirY= window.pageYOffset-1650;
            setCap(dirY/15+'%');
            setDisp('block');
        }else{
            setDisp('none');
        }
        if(window.pageYOffset>2000){
            setTit ('skilltit nb_left');
        }else if(tit === 'skilltit nb_left' && window.pageYOffset<1650){
            setTit ('skilltit');
        }
    });    
    const cap_style ={
        left : direct,
        display: disp,
    }
    const iron_style ={
        display: disp,
        right : direct
    }
    const curtain_style ={
        width : '100%',
        height : '100vh',
        position : 'absolute',
        background:'white',
        bottom: '0'
    }
    return (
    <div>
        <img className='iron' src={iron} alt='Iron Man' style = {iron_style}></img>
        <img className='cap' src={Cap} alt='Captain America' style = {cap_style}></img>
        <div style = {curtain_style}>
            <div className='skill_box'>
                <span className ={tit}>My Skill Level</span>
            </div>
        </div>
    </div>);
}


export default Skill;