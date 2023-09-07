import React from 'react';
import './index.css'

function Card(props){
    return(
        <center>
            <div className='cards'>
                <div className='eachcard'>
                    <img src={props.imgsrc} alt='pic' className='pic'></img>
                    <div className='info'>
                        <span className='host'>Host : {props.hostname}</span>
                        <h3 className='title'>{props.sname}</h3>
                        <a href={props.link} ><button className='link'>Watch Now </button></a>
                    </div>
                </div>
            </div>
            </center>
    ); 
  }
  export default Card;


