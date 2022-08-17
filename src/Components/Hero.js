import React from 'react'
import heroBanner from '../assets/images/hero-banner.png'
import heroBannerMD from '../assets/images/hero-banner-md.png'
import heroBannerSM from '../assets/images/hero-banner-sm.png'

function Hero() {
  return (
  <section className='hero' id='home'>
    <figure className="hero-banner">
            <picture>
              <source
                srcSet={heroBanner}
                media="(min-width: 768px)"
              />
              <source
                srcSet={heroBannerMD}
                media="(min-width: 500px)"
              />
              <img
                src={heroBannerSM}
                alt="A man in a blue shirt with a happy expression"
                className="w-100"
              />
            </picture>
          </figure>

          <div className="hero-content">
            <h2 className="h2 hero-title">
              We Design || Build Creative Products
            </h2>

            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
          </div>

          <ul className="hero-social-list">
            <li>
              <a href="#" className="hero-social-link">
                <ion-icon name="logo-facebook"></ion-icon>

                <div className="tooltip">Facebook</div>
              </a>
            </li>

            <li>
              <a href="#" className="hero-social-link">
                <ion-icon name="logo-twitter"></ion-icon>

                <div className="tooltip">Twitter</div>
              </a>
            </li>

            <li>
              <a href="#" className="hero-social-link">
                <ion-icon name="logo-linkedin"></ion-icon>

                <div className="tooltip">Linkedin</div>
              </a>
            </li>
          </ul>

          <a href="#stats" className="scroll-down">
            Scroll
          </a>
  </section>


  )
}

export default Hero;


