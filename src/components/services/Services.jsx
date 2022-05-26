import React from 'react'
import './services.css'
import IMG1 from '../../assets/covid-new.jpg'
import IMG2 from '../../assets/Blood.jpg'
import IMG3 from '../../assets/transplant.jpeg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "The Chanjo Portal",
    description: "Use this portal for all your Covid-19 Vacciation related queries",
    demo: 'https://damu-ke.com'
  },
  {
    id: 2,
    image: IMG2,
    title: "Damu-KE(Kenya National Blood Transfusion)",
    description: "Use this service to Register for Blood Donation",
    demo: 'https://damu-ke.com'
  },
  {
    id: 3,
    image: IMG3,
    title: "Tissue and Organ Transplant Service",
    description: "Fill the Donor Questionnaire form and verify your donation suitability",
    demo: 'https://tissueorgantransplant.com'
  }
]

const Services = () => {
  return (
    <section id='services'>
      <h5>SELF SERVICE PORTAL</h5>
      <h2>AVAILABLE SERVICES</h2>

      <div className="services__container">
        {
          data.map(({id, image, title, description, demo}) => {
            return (
              <article key={id} className='services__item'>
              <div className="services__item-image">
                <img src={image} alt={title} />
              </div>
              <h2>{title}</h2>
              <div className="services__item-cta">
                <h4>{description}</h4>
              </div>
              <a href={demo} className='btn btn-primary' target='_blank'>Get Service</a>
            </article>
            )
          })
        }
      </div>
      

      <div className="chanjo services__container">
        <ul id='menu'>
          <a className='menu-button icon-plus' href='#menu' title='Show navigation'>
            <span className='fas fa-share-alt'></span>
          </a>
        </ul>
      </div>
    </section>
  )
}

export default Services