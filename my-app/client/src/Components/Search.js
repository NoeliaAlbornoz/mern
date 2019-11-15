import React from 'react';
import Paragraph from './Paragraph';
import Title from './Title';

class Search extends React.Component {
    constructor(){
        super()
        this.state = {
            search: ""
        }
    }

    updateSearch(event){
        this.setState({search: event.target.value.substr(0, 30)})
    }
    
    render(){
        return(
            <div>
                <section>
                    <div>       
                        <Title mytitle="Search City"/>
                        <Paragraph mytext="Find the city you want to visit: " class="color"/>
                    </div>
                </section>
      
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <form class="form-inline" action="">
                        <input className="form-control mr-sm-2 search" type="text" 
                            placeholder="Search city" 
                            value={this.state.search} 
                            onChange={this.updateSearch.bind(this)}/>
                    </form>
                </nav>
            </div>
        )
    }

}

export default Search;
