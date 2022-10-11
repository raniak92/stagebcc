import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Formateur.css'
function Formateur() {
  return (
    <div className='forma' >
   <h2 class="title-forma title-center">Nos Formateurs</h2>
  
    <Carousel className='caro'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.lesitedesformateurs.com/images/photos/5d0a872fcaef8.jpg"
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
          src="https://oberlien.fr/wp-content/uploads/2021/11/tableau-300x253.jpg"
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
          src="http://www.lemensuel.net/wp-content/uploads/2021/08/developpeur-devenir.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
  
}

export default Formateur
