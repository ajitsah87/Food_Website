import React from 'react'
import'./portfolio.css'
function Portfolio() {
  return (
    <> <h1 className='text-center' id='portfolio'>Portfolio</h1>
    <div class="p-wrapper">
       
    <div class="p-photo">
      <img src="img/p-image1.png"  alt="404"/>
      <h2>EDITORIAL</h2>
      <button className='p-btn'>View More</button>
    </div>
    <div class="p-photo">
      <img src="img/p-image2.jpg"   alt="404"/>
      <h2>FOOD & SERVE</h2>
      <button className='p-btn'>View More</button>
    </div>
    <div class="p-photo">
      <img src="img/p-image3.jpg"  alt="404"/>
      <h2>BAKED GOODS</h2>
      <button className='p-btn'>View More</button>
    </div>
  </div>
  </>
  )
}

export default Portfolio
