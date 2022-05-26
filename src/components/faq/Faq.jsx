import React from 'react'
import './faq.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Faq = () => {
  return (
    <section id='faq'>
          <h2>Frequently Asked Questions</h2>

          <div className="container faq__container">
            <div className="faq__frontend">
              <h3>How to View and Download Your Vaccination Certificate</h3>
              <div className="faq__content">

                <article className='faq__details'>
                  <BsPatchCheckFill className='faq__details-icon'/>
                  <div>
                    <h4>Visit <a href='#'>portal.health.go.ke</a> on your web browser.</h4>
                    <h4>Register on the platform by creating an account by visiting the <a href='#'>create account page here.</a></h4>
                  </div>
                </article>

                <article className='faq__details'>
                  <BsPatchCheckFill className='faq__details-icon'/>
                  <div>
                    <h4><a href='#'>Login here </a> if you have an account. If you have received any of your vaccinations, you will be able to find the Vaccination Certificate Menu as described below.</h4>
                  </div>
                </article>

                <article className='faq__details'>
                  <BsPatchCheckFill className='faq__details-icon'/>
                  <div>
                    <h4>If you have received any of your vaccinations, you will be able to find the Vaccination Certificate Menu as described below.</h4>
                    <br/>
                    <small className='text-light'>On Mobile devices, click on the three horizontal lines at the top right of your screen to reveal additional menus.</small>
                    <br/><br/>
                    <small className='text-light'>On a tablet or laptop, You will now see some menus on the left bar of the screen.</small>
                    <br/><br/>
                  </div>
                </article>

                <article className='faq__details'>
                  <BsPatchCheckFill className='faq__details-icon'/>
                  <div>
                    <h4>From here you'll be able to see your vaccination certificate with the corresponding doses already received. Alongside this information will be a download button.</h4>
                  </div>
                </article>
              </div>
            </div>

            {/* END OF FRONTEND */}

            <div className="faq__frontend">
              <h3>I cannot See My Vaccination Certificate</h3>
              <div className="faq__content">

                <article className='faq__details'>
                  <BsPatchCheckFill className='faq__details-icon'/>
                  <div>
                    <h4>Your vaccination certificate will be available once you have received at least 1 dose of the vaccine.</h4>
                    <h4></h4>
                  </div>
                </article>

                <article className='faq__details'>
                  <BsPatchCheckFill className='faq__details-icon'/>
                  <div>
                    <h4>If you still cannot see your certificate after this period, visit the facility to confirm the following: </h4>
                    <br/>
                    <small className='text-light'>Your identification details were input correctly by the vaccinating facility.</small>
                    <br/><br/>
                    <small className='text-light'>Your vaccination information was uploaded into national repository by the vaccinating facility.</small>
                    <br/><br/>
                    <small className='text-light'>The identification information provided when creating your portal.health.go.ke account matches those you provided during vaccination.</small>
                  </div>
                </article>

                <article className='faq__details'>
                  <BsPatchCheckFill className='faq__details-icon'/>
                  <div>
                  <h4>Note that it may take up to a day after vaccination for your certificate to be available for download depending on the facility where you were vaccinated.</h4>
                  </div>
                </article>
              </div>
            </div>

            {/* END OF FRONTEND */}

            <div className="faq__frontend">
              <h3>I Was Vaccinated in Another Country</h3>
              <div className="faq__content">

                <article className='faq__details'>
                  <BsPatchCheckFill className='faq__details-icon'/>
                  <div>
                    <h4>If you received any of your doses in another country, e.g the first dose, you can still receive the second dose in Kenya and get a valid vaccination certificate.</h4>
                  </div>
                </article>

                <article className='faq__details'>
                  <BsPatchCheckFill className='faq__details-icon'/>
                  <div>
                    <h4>Note that: </h4>
                    <br/>
                    <small className='text-light'>You must provide valid proof of vaccination from the other country where you received your first or second dose in order to receive either the booster or subsequent vaccine dose.</small>
                    <br/><br/>
                    <small className='text-light'>Your Kenyan vaccination certificate will only indicate the doses you received within the country.</small>
                    <br/><br/>
                    <small className='text-light'>The Kenyan Covid-19 vaccination certificate will not contain information about doses received outside the country. You will therefore need to refrain both certificates as proof of complete vaccination.</small>
                  </div>
                </article>

                <article className='faq__details'>
                  <BsPatchCheckFill className='faq__details-icon'/>
                  <div>
                    <h4>You can also receive a booster dose in Kenya, irregardless of where you received your previous vaccinations.</h4>
                  </div>
                </article>
              </div>
            </div>

            <div className="faq__backend">
                <h3>I was vaccinated in a military facility in Kenya</h3>
                <div className="faq__content">

                    <article className='faq__details'>
                    <BsPatchCheckFill className='faq__details-icon'/>
                    <div>
                        <h4>The Kenyan military manages its vaccination program separately. If you received any of your doses in a military facility, kindly visit any military vaccination facility for assistance.</h4>
                    </div>
                    </article>
                    
                    <h3>I was vaccinated in a UN facility</h3>
                    <article className='faq__details'>
                    <BsPatchCheckFill className='faq__details-icon'/>
                    <div>
                        <h4>The UN manages its vaccination program separately. If you received any of your doses in a UN facility, kindly visit that vaccination facility for assistance.</h4>
                        <br/>
                    </div>
                    </article>

                    <h3>Where can I get vaccinated?</h3>
                    <article className='faq__details'>
                    <BsPatchCheckFill className='faq__details-icon'/>
                    <div>
                        <h4>You can get a list of vaccination facilities in the region of your choice by visiting <a href='#'>portal.health.go.ke</a></h4>
                    </div>
                    </article>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Faq