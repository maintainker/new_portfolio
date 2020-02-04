import React,{useState} from 'react';
import './App.css';
import './index.css';

const Personal = () =>{
    const [person] = useState(['Learn','Balance','Change']);
    const [narr,setNarr]= useState('Narr');
    const [narration,setNarration]=useState('');
    // let menu=''; 
    // for(let i = 0 ; i < 3 ; i++){
    //     menu+='<li>'+person[i]+'</li>';
    // }
    const menu = person.map((person,index) => <li key = {person} onClick={()=>narr_on(index+1)}><span>{person}</span></li>);
    const menu_num = person.map((person,index) => <li key = {person}><span>0{index+1}</span></li>);
    
    const narr_on = (num)=>{
        if(num===1){
            setNarration(`저는 오랜 학원선생님의 경험으로 배웠던것 중 하나는 배움은 끝이없고<br>
            배움을 게을리 하면 안된다는 생각을 하였습니다. 그래서 변화하는 웹 개발 환경에서
            최신트렌드에 뒤쳐져 지지 않게 항상 배우는 자세로 스터디와 꾸준한 공부를 하여
            따라갈수 있도록 노력하겠습니다.`);
        }else if(num===2){
            setNarration(`둥글둥글한 성격으로 남들과 잘 지내고 사람들과 어울리기를 좋아하는 성격입니다
            아무리 힘들더라도 즐기려고 하고 원만하게 해결하기위하여 대화를 주로 하려합니다. `);
        }else{
            setNarration(`현실에 안주하지 않고 항상 도전하는 자세로 일신우일신을 저의 좌우명삼아
            도전하는 삶을 살고있습니다. 1년에 마라톤도 1~2번정도 도전하고 새로운것이라도 주저하지 않고 도전하여
            불가능한것들을 가능하게 만들어보고자 노력합니다.
            `);
        }
        setNarr('Narr active');
    }
    const dispatch=()=>{
        setNarr('Narr');
    }
    return(
    <div id ='person'>
        <div onClick={()=>dispatch()} className={narr}>
            <span>{narration}</span>
        </div>
        <ul className ='person_num'>
            {menu_num}
        </ul>
        <ul className ='personality'>
            {menu}
        </ul>
    </div>);
}

export default Personal;