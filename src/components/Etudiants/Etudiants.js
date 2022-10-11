import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Etudiants.css'
function  Etudiants() {
  return (
    <div className="etud">
         <h2 class="title-etud title-center">Nos Etudiants</h2>
    <Carousel className='caro'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://qph.cf2.quoracdn.net/main-qimg-5e4201e9cf4c484a0e8d2ea6201bc4e6-lq"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://us.123rf.com/450wm/wavebreakmediamicro/wavebreakmediamicro1604/wavebreakmediamicro160412826/55179414-portrait-d-%C3%A9tudiant-heureux-en-utilisant-l-ordinateur-dans-la-salle-de-classe.jpg?ver=6"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://previews.123rf.com/images/dolgachov/dolgachov1308/dolgachov130800350/21275745-l-%C3%A9ducation-la-technologie-et-internet-%C3%A9tudiant-en-informatique-qui-%C3%A9tudient-%C3%A0-l-%C3%A9cole.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://st.depositphotos.com/1017986/2913/i/600/depositphotos_29134325-stock-photo-student-with-computer-studying-at.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
  
}

export default Etudiants
