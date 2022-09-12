import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import images from '../images/images.js'
import  '../styles/ServiceComp.css'
function ServiceComp({Servicio,position}) {
  return (
    <Card style={{ width: '18rem' , marginBottom:'2rem'}} className='text-center cont-serviceCard'> 
      <div style={{width:'100%'}}>
      <img style={{height:'10rem',width:'10rem'}} src={images[position]}/>
      </div>
      <Card.Body>
        <Card.Title>{Servicio}</Card.Title>
        <hr/>
        <div>Web&nbsp;&nbsp; Graphic&nbsp;&nbsp; Database</div>
        <br/>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServiceComp;