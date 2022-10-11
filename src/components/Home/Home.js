import React from 'react'
import './Home.css'

export default function Home() {
  return (
        <section className="section-about" id="about" aria-label="about">
        <div className="container">

          <figure className="about-banner">
            <img src="https://gestionsucces.ca/wp-content/uploads/2020/04/formations-professionnelles-en-entreprise.jpeg" width="600" height="350" loading="lazy" alt="about banner"
              class=""/>
          </figure>

          <div className="about-content">

            <h2 className="h2-sm section-title"> Apprendre</h2>

            <p className="section-text">
            Nous fondateur du cabinet de formation BCC, ingénieur en Informatique, avons l'idée de valoirsé le domaine de la formation vue son importance dans le developpement des Skills chez le participant.
            Rejoingez nos etudiants et suivez nos formations qui touchent plusieurs secteurs (Developpement Web et Mobile, Design Graphique, Conception des Piéces Mécaniques, Réseaux et Télécommunication, Architecutre 3D, SoftSkills, Gestion de projet...)
            
            </p>

            <div className="btn-group">
              <a href="#" className="btn btn-primary">Decouvrir nos programme</a>
             </div>
            </div>
        </div>
      </section>
      
   
  )
}
