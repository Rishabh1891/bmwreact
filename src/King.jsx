import React, {useState} from 'react';
import './App.css';


function King() {

    const caseUp=()=>{
            let net = text.toUpperCase();
            setText(net);
    } 
    const caseLow=()=>{
            let net = text.toLowerCase();
            setText(net);
    } 
    const changeOn=(event)=>{
        setText(event.target.value);
    }
    const clearOut=()=> {
        let tt = '';
        setText(tt);
    }
    let copyIn=()=>{
        var x = document.getElementById('exampleFormControlTextarea1');
        x.select();
        navigator.clipboard.writeText(x.value);
    }
    const[text, setText] = useState("");

    //jsx is here
    return(
        <div>
            <div className="mb-3">
  <textarea className="form-control" value={text} onChange={changeOn} id="exampleFormControlTextarea1" rows="6"></textarea>
</div>
    <button type="button" className="btn btn-info" onClick={caseUp}>Up</button>
    <button type="button my-18" className="btn btn-danger" onClick={caseLow}>Down</button>
    <button type="button my-18" className="btn btn-danger" onClick={clearOut}>Clean</button>
    <button type="button my-18" className="btn btn-success" onClick={copyIn}>Copy</button>
        <div className="container mx-6">
        <p>{text.split(" ").length}, {text.length}</p>
        <h3>{text}</h3>
        </div>
        <section className="section">
  <div className="paras">
  <p className="sectiontag text-big">Your New York dream is going to be accomplished.</p>
  <p className="sectionsubtag text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue sem quam, vel iaculis mauris vulputate non. Ut dui nulla, pellentesque id dolor in, faucibus euismod nunc. Etiam et nulla eget lacus interdum fringilla. Nulla quis iaculis massa. Sed tempus volutpat libero, ac fringilla dui vehicula eget. Mauris nec ante ipsum. Pellentesque et erat et sem mollis auctor.

    Nunc pharetra mi dolor, in ultrices velit molestie vel. Integer aliquet hendrerit risus nec vestibulum. Nullam a facilisis massa. In magna nisl, eleifend quis risus tincidunt, faucibus faucibus neque. Donec porttitor condimentum tellus, in viverra enim. Integer a tempus tellus. Aenean ultricies orci a ultrices tincidunt. Etiam quis urna diam. Sed porttitor libero a neque fringilla malesuada. Vivamus vel massa eleifend, commodo purus ac, varius purus. Maecenas lectus velit, egestas a tempor ut, tristique a sem.</p>    
    </div>
 <div className="thumbnail">
   <img src="https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="imgFluid" alt="img"/>
 </div>   
</section>
        </div> //last initial div
    )
}

export default King;