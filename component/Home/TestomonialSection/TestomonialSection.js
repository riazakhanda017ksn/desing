import React from 'react';
import './TestomonialSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TestomonialSection = ({Review}) => {
    return (
        <div className='col-lg-4'>
            <div className="card-container">
                <div className="user-img">
                    <div className="reviewer-img">
                    <img src={Review.img} alt=""/>
                    </div>
                    <div className="professional">
                        <h5>{Review.name}</h5>
                <span>{Review.profession}</span>
                </div>
                    
                </div>
                
                <div className="card-post">
                  <p>{Review.about}</p>
                </div>
                <div className="card-five-star">
                  <span><FontAwesomeIcon icon={faStar} /></span>
                  <span><FontAwesomeIcon icon={faStar} /></span>
                  <span><FontAwesomeIcon icon={faStar} /></span>
                  <span><FontAwesomeIcon icon={faStar} /></span>
                  <span><FontAwesomeIcon icon={faStar} /></span>
                
                </div>
            </div>
        </div>
    );
};

export default TestomonialSection;