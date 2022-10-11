import React from 'react'
import './Contact.css'

export default function contact() {
  return (
    <section className="section contact" id="contact" aria-label="contact">
      <div className="contact-form">
<h1 className="title-contact" >Inscrivez-vous</h1>

        <form  className='form-con'>
          
          <div className="input-container">
          <h4  className="h4-title" > Nom</h4>
            <input type="text" name="name" class="input" />
           
            <span> Nom</span>
          </div>
          <div className="input-container">
          <h4  className="h4-title" >Prénom </h4>
            <input type="text" name="name" class="input" />
           
            <span>Prenom </span>
          </div>
          <div className="input-container">
          <h4 className="h4-title">E-mail</h4>
            <input type="email" name="email" class="input" />
          
            <span>E-mail</span>
          </div>
          <div className="input-container">
          <h4 className="h4-title">TéléPhone</h4>
            <input type="tel" name="phone" class="input" />
           
            <span>TéléPhone</span>
          </div>
          <div className="input-container">
          <h4 className="h4-title">Formation</h4>
            <input type="text" name="name" class="input" />
            <span>Formation</span>
          </div>
         
         
        <div className="btn-group">
          <a href="#" className="btn btn-primary">S'inscrire</a>
         </div>
        </form>
       
        

      </div>
      </section>
  )
}
