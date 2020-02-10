import React from 'react';
import './index.css';
import iron_img from'./img/아이언맨.png';
import cap_img from'./img/캡틴.png';
import fal_img from'./img/팔콘.png';
import black_img from'./img/블랙위도우.png';
import skalet_img from'./img/스칼렛위치.png';
import warmach_img from'./img/워머신.png';
import vision_img from'./img/비전.png';
import panther_img from'./img/블랙펜서.png';
import winter_img from'./img/윈터솔저.png';
import hawk_img from'./img/호크아이.png';

const Capiron = () =>{
    return(
    <div id="header">
        <img className='panther' src={panther_img} alt='black_Panther'></img>
        <img className='hawk' src={hawk_img} alt='hawk_eye'></img>
        <img className='winter' src={winter_img} alt='winter_soldier'></img>
        <img className='vision' src={vision_img} alt='vision'></img>
        <img className='war_mach' src={warmach_img} alt='war_machine'></img>
        <img className='skalet' src={skalet_img} alt='skaletwicth'></img>
        <img className='falcon' src={fal_img} alt='falcon'></img>
        <img className='black' src={black_img} alt='blackwidow'></img>
        <img className='ironman' src={iron_img} alt='ironman'></img>
        <img className='captain' src={cap_img} alt='captain'></img> 

        <span className='portfolio'>Portfolio</span>
        <span className='name'>Sul Young Hwan</span>
        <span className='wanted'>Professional Front-end Designer / Web Publisher</span>
    </div>);
}

export default Capiron;