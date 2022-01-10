import React, { useEffect } from 'react';
import './App.scss';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



function App() {
  useEffect(
    () => {
      gsap.from('blockquote', {
        duration: 1,
        x: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: '.intro',
          start: "top top",
          scrub: 1,
          
        }
      })
    }
  )

  return (
    <div className="App">
      <div className="titlebar">
        <nav>
          <ul>
            <a href="">
              <li>Home</li>
            </a>
            <a href="">
              <li>Map</li>
            </a>
          </ul>
        </nav>
      </div>
      <section className='intro'>
        <h1>Museum Welcome</h1>
      </section>

      <section className='sticky'>
        <blockquote>
          Bonjour, et bienvenue à Expo 86.
        </blockquote>
      </section>

      <section className='conclusion section'>
        <h1>Museum Conclusion</h1>
      </section>
    </div>
  );
}



export default App;
