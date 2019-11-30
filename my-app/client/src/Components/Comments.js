import React from 'react';
import Button from '../Components/Button';

class Comments extends React.Component {
    render(){
        return(
            <div>
                <h6>Comments</h6>
                <textarea className="form-control" placeholder="Write a comment..." />
                <small>60 Remaining</small>
                <Button button="Comment"/>
            </div>
        )
    }
}

export default Comments;
