import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Data from './Data';
import './index.css'

function cardn(val){
  return(
    <Card
    imgsrc={val.imgsrc}
    hostname={val.hostnme}
    sname={val.sname}
    link={val.link}
    />
  );
}

ReactDOM.render(
  <React.Fragment>
  {Data.map(cardn)}
  </React.Fragment>
,document.getElementById('root')
);
