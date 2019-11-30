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
                <div id="demo" class="carousel slide" data-ride="carousel">
  
                    <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                        <li data-target="#demo" data-slide-to="3"></li>
                        <li data-target="#demo" data-slide-to="4"></li>
                    </ul>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            {list[0]}
                        </div>
                        <div class="carousel-item">
                            {list[1]}
                        </div>
                        <div class="carousel-item">
                            {list[2]}
                        </div>
                        <div class="carousel-item">
                            {list[3]}
                        </div>
                        <div class="carousel-item">
                            {list[4]}
                        </div>
                    </div>

                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>       
        )
    }
}

export default Activities;
