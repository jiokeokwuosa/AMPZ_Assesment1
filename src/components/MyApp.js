import React from 'react';
import Icon from '../components/includes/Icon';

function MyApp() {
  return (
    <>
      <img src={require('../assets/img/1.png')} className="floatImg1" alt='Floating Img'/>
      <div className="floatImg2"></div>           
      <div id="main" className="container-fluid">
        <div className="row row1">
           <div className="col-md-12">
            <img src={require('../assets/img/2.png')} alt='Icon 1'/>  <img src={require('../assets/img/3.png')} alt='Icon 2'/> <img src={require('../assets/img/4.png')} alt='Icon 3'/>
           </div>
        </div>
        <div className="row row2">
           <div className="col-md-12">
              <img src={require('../assets/img/5.png')} alt='craigslist'/>
           </div>
        </div>
        <div className="row row3">
           <div className="col-md-12">              
                <input placeholder="Search in New Delhi"/>    <img src={require('../assets/img/6.png')} alt='craigslist'/>          
           </div>
        </div>
        <div className="row row4">
           <Icon image={require('../assets/img/7.png')} title='House'/>
           <Icon image={require('../assets/img/8.png')} title='Jobs'/>
           <Icon image={require('../assets/img/9.png')} title='For Sale'/> 
           <Icon image={require('../assets/img/10.png')} title='Personal'/>                        
        </div>
        <div className="row row5">
           <Icon image={require('../assets/img/11.png')} title='Services'/>
           <Icon image={require('../assets/img/12.png')} title='Community'/>
           <Icon image={require('../assets/img/13.png')} title='Forums'/> 
           <Icon image={require('../assets/img/14.png')} title='Calender'/>                        
        </div>
      </div>
      <div className="overlay"></div>  
      <img src={require('../assets/img/15.png')} alt='LastFloat' className="lastFloat"/>
      <p className="copyright">&copy;craigslist&nbsp;&nbsp;&nbsp;&nbsp; Terms&nbsp;&nbsp;&nbsp;&nbsp;Privacy</p>
    </>
  );
}

export default MyApp;
