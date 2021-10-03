import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import './App.css'

export class Nav extends Component{
  render() {
    const opeN=()=>{
      document.getElementById('ul').classList.toggle('active');
    } 
      return (
       <>
       <nav>
       <div className="logo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvgpj2dmkaWh6cnYq9K0Y_qc-pJv5tr6LmSA&usqp=CAU" alt="i am image"/></div>
         <ul id="ul">
           <li><Link to="/home" className="btn btn-light">Home</Link></li>
           <li><Link className="btn btn-light" to="/about">About</Link></li>
           <li><Link className="btn btn-light" to="/career">Career</Link></li>
           <li><Link className="btn btn-light" to="/contact">Contact</Link></li>
         </ul>
           <i class="bi bi-list fas" onClick={opeN}></i>
       </nav>
       </>
      )
    }
}

export default Nav;