import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import './index.css';
import Rishabh from './Rishabh';
import Drive from './Drive';
import Contact from './Contact';
import Foot from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { brown } from '@mui/material/colors';

const styling = {
  background: "black",
};


ReactDOM.render(
  <>
  <Router>
  <Nav/>
  <Switch>
          <Route path="/home">
          <section className="text-gray-600 body-font" style={styling}>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Welcome to The B.M.W.</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Bayerische Motoren Werke AG, commonly known as Bavarian Motor Works, BMW or BMW AG, is a German automobile, motorcycle and engine manufacturing company founded in 1916. BMW is headquartered in Munich, Bavaria. It also owns and produces Mini cars, and is the parent company of Rolls-Royce Motor Cars.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://images.unsplash.com/photo-1512206818698-0038a42885fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym13fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Logan 1</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">BMW Lisba</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://images.unsplash.com/photo-1543796076-e9b02d7c37e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJtd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">True Freak</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://images.unsplash.com/photo-1537984822441-cff330075342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJtd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Secured Ride</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Atmoshpheric Riders</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://images.unsplash.com/photo-1549556889-cba541c33c0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGJtd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Flight High</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Francisco Drift</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col bg-brown">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-blue-500"></div>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1543796076-e9b02d7c37e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJtd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The Catalyzer</h2>
        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Book your Free Appointment and Take a tour.</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever you are desiring is going to be true, your dream car key is gonna be adhere by you. Just fill the neccessity here:</p>
    </div>
    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div className="relative flex-grow w-full">
        <label for="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
        <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative flex-grow w-full">
        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Book</button>
    </div>
  </div>
</section>
          </Route>
          <Route path="/about">
            <Rishabh/>
          </Route>
          <Route path="/career">
            <Drive/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
        </Router>
  </>
  ,document.getElementById('root')
)
