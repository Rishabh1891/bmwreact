import React from 'react';
import { Component } from 'react';
import Footer from './Footer';
import './Drive.css';

export class Drive extends Component{
    render() {
        const font = {
            width: "18rem"
          };
        return(
            <>
                 <div className="main background">
    <div className="sideone">
      <p className="textfirst">Bayerische Motoren Werke</p>
      <p className="textsecond">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit fringilla enim in aliquet. In hac habitasse platea dictumst. In pretium blandit justo nec malesuada. Ut consectetur, ligula vel maximus tempus, lectus tortor pretium magna, tempus venenatis tortor eros vel est. Donec cursus purus eu nisl hendrerit dictum. Quisque eget nunc libero. Etiam vel venenatis nisl, id scelerisque lectus. Aenean convallis ex nec enim vulputate, eu commodo est hendrerit.</p>
    </div>
    <div className="sidetwo">
    <img src="https://images.unsplash.com/photo-1612545667889-b061512d0dfa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym13JTIwY2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="BMW car"/>
    </div>
  </div>

  <div className="container my-8">
  <div className="card" style={font}>
  <img src="https://images.unsplash.com/photo-1537984822441-cff330075342?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJtdyUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="i am car"/>
  <div className="card-body">
    <h5 className="card-title">BMW A7</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Buy</a><h5>$15,000 only</h5>
  </div>
</div>
  <div className="card" style={font}>
  <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJtdyUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="i am car"/>
  <div className="card-body">
    <h5 className="card-title">BMW LACT F43</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Buy</a><h5>$13,542 only</h5>
  </div>
</div>
  <div className="card" style={font}>
  <img src="https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJtdyUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="i am car"/>
  <div className="card-body">
    <h5 className="card-title">BMW z6 series</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Buy</a><h5>$16,874 only</h5>
  </div>
</div>
  <div className="card" style={font}>
  <img src="https://images.unsplash.com/photo-1523983302122-73e869e1f850?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGJtdyUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="i am car"/>
  <div className="card-body">
    <h5 className="card-title">BMW X19</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Buy</a><h5>$19,999 only</h5>
  </div>
</div></div><br/><br/>
<Footer/>
            </>
        )
    }
}

export default Drive;