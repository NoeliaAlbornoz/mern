import React from 'react';
import ny from './img/Cities/ny.jpg';
import paris from './img/Cities/paris.jpg';
import barcelona from './img/Cities/barcelona.jpg';
import amsterdam from './img/Cities/amsterdam.jpg';
import dubai from './img/Cities/dubai.jpg';
import bsas from './img/Cities/bsas.jpg';
import tokio from './img/Cities/tokio.jpg';
import sydney from './img/Cities/sydney.jpg';
import cancun from './img/Cities/cancun.jpg';
import roma from './img/Cities/roma.jpg';
import moscu from './img/Cities/moscu.jpg';
import toronto from './img/Cities/toronto.jpg';

class Carousel extends React.Component {
    render(){
        return (
            <div id="carrousel" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                  <li data-target="#carrousel" data-slide-to="1"></li>
                  <li data-target="#carrousel" data-slide-to="2"></li>
                  <li data-target="#carrousel" data-slide-to="3"></li>
                </ul>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                    <div className="col">
                      <small class= "letter-img">New York<img src={ny} className="rounded-circle mx-auto d-block carousel-img" alt="New York"/><br/></small>
                      <img src={paris} className="rounded-circle mx-auto d-block carousel-img" alt="Paris"/><small class= "letter-img">Paris</small>
                      </div>
                      <div className="col">
                      <small class= "letter-img">Barcelona<img src={barcelona} className="rounded-circle mx-auto d-block carousel-img" alt="Barcelona"/><br/></small>
                      <img src={amsterdam} className="rounded-circle mx-auto d-block carousel-img" alt="Amsterdam"/><small class= "letter-img">Amsterdam</small>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                    <div className="col">
                      <small className= "letter-img">Dubai<img src={dubai} className="rounded-circle mx-auto d-block carousel-img" alt="Dubai"/><br/></small>
                      <img src={bsas} className="rounded-circle mx-auto d-block carousel-img" alt="Buenos Aires"/><small className= "letter-img">Buenos Aires</small>
                      </div>
                      <div className="col">
                      <small className= "letter-img">Tokio<img src={tokio} className="rounded-circle mx-auto d-block carousel-img" alt="Tokio"/><br/></small>
                      <img src={sydney} className="rounded-circle mx-auto d-block carousel-img" alt="Sydney"/><small className= "letter-img">Sidney</small>
                      </div>
              </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                    <div className="col">
                      <small className= "letter-img">Cancún<img src={cancun} className="rounded-circle mx-auto d-block carousel-img" alt="Cancun"/><br/></small>
                      <img src={roma} className="rounded-circle mx-auto d-block carousel-img" alt="Roma"/><small class= "letter-img">Roma</small>
                      </div>
                      <div className="col">
                      <small className= "letter-img">Moscú<img src={moscu} className="rounded-circle mx-auto d-block carousel-img" alt="Moscu"/><br/></small>
                      <img src={toronto} className="rounded-circle mx-auto d-block carousel-img" alt="Toronto"/><small className= "letter-img">Toronto</small>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carrousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carrousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )          
    }
}

export default Carousel;


