import React from 'react';
import './Service.css'
const Services = ({servicesWork}) => {
    return (
      
              <div className='col-lg-4 '>
            <div className="card-section">
            <div className="services-container text-center">
               <img src={servicesWork.photo} alt=""/>
            </div>
            <div className="caption-post-section text-center">
                 <p> ${servicesWork.price}</p>
                <h4>{servicesWork.name}</h4>
                <h6>{servicesWork.about}</h6>
            </div>
            </div>
        </div>
       
    );
};

export default Services;