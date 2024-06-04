import React from 'react'
import img from '../../components/img/img.png'
import './Portfolio.scss'

function Portfolio() {
  return (
    <div className='portfolio'>
        <div className="portfolio__wrapper container">
        <div className="contact">
            <h5 className='h5'>Works</h5>
            <h1 className='h1'>Portfolio</h1>
            <p className='papa'>Lorem ipsum, dolor sit amet consectetur <br />
adipisicing elit.</p>
          </div>
          <div className="portfolio__img">
                  <img src={img} alt="" />
          </div>
          <div className="button">
          <button className='more'>Learm More</button>
          </div>
      
        </div>
    </div>
  )
}

export default Portfolio