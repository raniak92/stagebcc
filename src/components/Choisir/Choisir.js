import React from 'react'

import {useState} from 'react'

import './Choisir.css'

export default function Choisir() {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
  return (
    
    <section className="section-choisir" id="choisir" aria-label="choisir">
    <div className="container-choi">
        <h2 className="choisir-title"> Pourquoi choisir notre Cabinet de formation ?</h2>
<div className={click ? 'choi-menu active' : 'choi-menu'}>
    <div>
        <h4 className="section-title">  Formations certifiantes 
        </h4>
         <p>
        vous aurez un certificat reconnu par l'état à la fin de chaque formation suivie
        </p>
        </div>
        <div>
        <h4 className="section-title">
        Formateurs qualifiés
        </h4>
        <p>
        Nous choisissons des formateurs de trés hauts niveaux, compétents, expérimentés afin de vous accompagner durant vos formations
        </p>
        </div>
        <div>
         <h4 className="section-title">
         Un contenu riche et interactif
        </h4>
        <p>
        Le contenu de nos parcours est élaboré avec les entreprises partenaires de BCC. Il est orienté employabilité et il est constamment mis à jour selon les demandes des recruteurs.
        </p>
        </div>
        <div>
        <h4 className="section-title">
        Accompagnement personnalisé
        </h4>
        <p>
        Depuis votre premier contact jusqu’à la fin de votre stage et même au-delà, les conseillers pédagogiques et formateurs référents de notre centre de formation professionnelle sont à votre disposition pour vous aider à surmonter toute difficulté que vous pourriez rencontrer.
        </p>
        </div>

        
        </div>
       
        </div>
   
  </section>
  )
}
