import React from 'react';
import ny from './img/ny.jpg';
import paris from './img/paris.jpg';
import barcelona from './img/barcelona.jpg';
import amsterdam from './img/amsterdam.jpg';
import dubai from './img/dubai.jpg';
import bsas from './img/bsas.jpg';
import tokio from './img/tokio.jpg';
import sydney from './img/sydney.jpg';
import cancun from './img/cancun.jpg';
import roma from './img/roma.jpg';
import moscu from './img/moscu.jpg';
import toronto from './img/toronto.jpg';

class Carousel extends React.Component {
    render(){
        return (
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                  <li data-target="#demo" data-slide-to="1"></li>
                  <li data-target="#demo" data-slide-to="2"></li>
                  <li data-target="#demo" data-slide-to="3"></li>
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
                      <small class= "letter-img">Dubai<img src={dubai} className="rounded-circle mx-auto d-block carousel-img" alt="Dubai"/><br/></small>
                      <img src={bsas} className="rounded-circle mx-auto d-block carousel-img" alt="Buenos Aires"/><small class= "letter-img">Buenos Aires</small>
                      </div>
                      <div className="col">
                      <small class= "letter-img">Tokio<img src={tokio} className="rounded-circle mx-auto d-block carousel-img" alt="Tokio"/><br/></small>
                      <img src={sydney} className="rounded-circle mx-auto d-block carousel-img" alt="Sydney"/><small class= "letter-img">Sidney</small>
                      </div>
              </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                    <div className="col">
                      <small class= "letter-img">Cancún<img src={cancun} className="rounded-circle mx-auto d-block carousel-img" alt="Cancun"/><br/></small>
                      <img src={roma} className="rounded-circle mx-auto d-block carousel-img" alt="Roma"/><small class= "letter-img">Roma</small>
                      </div>
                      <div className="col">
                      <small class= "letter-img">Moscú<img src={moscu} className="rounded-circle mx-auto d-block carousel-img" alt="Moscu"/><br/></small>
                      <img src={toronto} className="rounded-circle mx-auto d-block carousel-img" alt="Toronto"/><small class= "letter-img">Toronto</small>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#demo" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#demo" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )          
    }
}

export default Carousel;


