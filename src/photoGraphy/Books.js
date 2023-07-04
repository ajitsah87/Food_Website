import React from 'react'
import './books.css'
function Books() {
  return (
    <>
      <div className="b-wrapper" id='book'>
        <h1 className='text-center '>BOOKS</h1>
        <div className="b-books">
          <div className="b-info">
            <h1>BREAKEFASTS</h1>
            <p>Rise and Shine: The Ultimate Breakfast Guide" -  <br /> this   comprehensive food book. Packed with recipes,<br /> helpful tips, and expert advice, it's your go-to  for<br /> starting your day off right. </p>
          
            <p className='b-price'>40<span>$</span></p>
            <button className="b-btn">Buy Now</button>
          </div>
          <div className="b-container">
            <img src="img/b-image1.png" alt="404" />
          </div>
        </div>
        <div className="b-books">
          <div className="b-info">
            <h1>SUGAR & SPICE</h1>
            <p>Sugar & Spice: A Sweet and Savory Adventure-<br />in the  flavors of our captivating food book. Explore a<br /> world where sweetness meets spice, culinary journey<br /> that will delight your taste buds. </p>
            <p className='b-price'>34<span>$</span></p>
            <button className="b-btn">Buy Now</button>
          </div>
          <div className="b-container ">
            <img  src="img/b-image2.png" alt="404"  />
          </div>
        </div>
        <div className="b-books">
          <div className="b-info">
            <h2 className='h-h2'>SEASON SPECIALS</h2>
           <p>Season Specials: Embrace the Flavors of Every Season" - <br /> Immerse yourself in culinary adventure that celebrates <br /> the ever-changing seasons. Our food book is recipes nature's bounty. </p> 
            <p className='b-price'>27<span>$</span></p>
            <button className="b-btn">Buy Now</button>
          </div>
          <div className="b-container">
            <img src="img/b-image3.png" alt="404" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Books
