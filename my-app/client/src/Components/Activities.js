import React from 'react'

class Activities extends React.Component {

    render(){
        
        let list = this.props.itinerary.activities.map(activity =>
            <div>
                <p className="activity-title">{activity.title}</p>
                <img src={require(`./img/Activities/${activity.img}`)}  className="activity-pic"/>
            </div>
        )
        return(
            <div>
                <div id="demo" className="carousel slide" data-ride="carousel">
  
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                        <li data-target="#demo" data-slide-to="3"></li>
                        <li data-target="#demo" data-slide-to="4"></li>
                    </ul>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            {list[0]}
                        </div>
                        <div className="carousel-item">
                            {list[1]}
                        </div>
                        <div className="carousel-item">
                            {list[2]}
                        </div>
                        <div className="carousel-item">
                            {list[3]}
                        </div>
                        <div className="carousel-item">
                            {list[4]}
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>       
        )
    }
}

export default Activities;
