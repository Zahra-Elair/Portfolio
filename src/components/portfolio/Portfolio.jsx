import React from 'react'
import './portfolio.css'
import PIC from '../../assets/sorty.png'
import lool1 from '../../assets/lool1.jpg'
import lool2 from '../../assets/lool2.jpg'
import lool3 from '../../assets/lool3.jpg'
import lool4 from '../../assets/lool4.jpg'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {[PIC,lool1,lool2,lool3,lool4,lool2].map((pic)=>{
                    return(
                        <article className="portfolio__item">
                            <div className="portfolio__item-image">
                            <img src={pic} alt="" />
                            </div>
                                <h3>This is a portfolio item title</h3>
                                <div className="portfolio__item-cta">
                                    <a href="https://github.com" className="btn">Github</a>
                                    <a href="https://github.com" className="btn btn-primary">Live Demo</a>
                                </div>
                        </article>
                    );
                })}
      </div> 
    </section>
  )
}

export default Portfolio