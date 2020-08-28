import React, {Component} from 'react';
import { Segment, Button, Input, Container} from "semantic-ui-react";



class authBreedingTool extends Component {


    render() {
        return (
            <Segment className='form'>
                <h2>Hello!</h2>  
                <span>Please login to use this feature</span>
                <span>This will allow you to use our breeding tools and get immediate results.</span> 
                <div>
                    <Auth/>
                </div>            
            </Segment>
        )

    }

}

export default authBreedingTool;