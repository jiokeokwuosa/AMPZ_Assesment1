import React from 'react';

function Icon(props) {
  return (
     <div className="col-md-3">              
        <div className="row">
            <div className="col-md-12">
                <img src={props.image} alt={props.title}/> 
            </div>
        </div>
        <div className="row title">
            <div className="col-md-12">
            {props.title}
            </div>
        </div>
     </div>    
  );
}

export default Icon;
