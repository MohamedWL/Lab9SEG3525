import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

const Home =()=>{
    return (
        <div>
            <Slideshow/>
        </div>
    
    );
}



class Slideshow extends Component{
    render(){
        return(
            <div id="slideshow">
                <figure>
                    <img src= {require('./tame.jpg')}  id="tame"/>
                    <img src={require('./tbask.jpg')} id="tbask"/>
                    <img src={require('./tfoot.jpg')} id="tfoot"/>
                    <img src={require('./eame.jpg')} id="eame"/>
                    <img src={require('./ebasket.jpeg')} id="ebasket"/>
 
                </figure>
            </div>
        );
    }
}

export default Home