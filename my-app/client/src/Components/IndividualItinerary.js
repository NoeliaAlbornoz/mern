import React from 'react';
import Activities from '../Components/Activities';
import Comments from '../Components/Comments';
import megusta from './img/megusta.jpg';

class IndividualItinerary extends React.Component {
    render(){
        return(
          <div>
            <div className="col-6 offset-3">
              <div className="card">
                <div className="card-block">
                  <div className="row">
                    <div className="col-4">
                      <img src={require(`./img/Users/${this.props.itinerary.profilePic}`)} className="img-thumbnail mx-auto d-block user-pic"/>
                    </div>
                    <div className="col-8 profile-row">
                      <div className="row">
                      <h6>{this.props.itinerary.title} </h6>
                      </div>
                      <div className="row">
                        <ul className="itinerary-item">
                            <li><small>Likes:{this.props.itinerary.likes}</small></li>
                            <li><small>{this.props.itinerary.duration}   Hours</small></li>
                            <li><small>${this.props.itinerary.price}</small></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="view">
                    <a href= "#" data-toggle="collapse" data-target="#view">View Activities</a>
                    <button>Add to Favorites<img src={megusta} className= 'mr-3 mt-3 rounded-circle float-left avatar' alt="Icono"/></button>
                  </div>
                  <div id="view" className="collapse">
                  
                      <Activities itinerary={this.props.itinerary} key={this.props.itinerary._id}/>
                      
                    <div className="card-footer text-muted">
                      <Comments/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default IndividualItinerary;
