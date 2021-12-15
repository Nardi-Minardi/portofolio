import React, {useState} from 'react';
import service from '../utils/service.json';

const Card = () => {
    return (
        <div className='container'>
            <section className='card-section'>
            {
                service.map((item) => {
                    return (
                        <div className="card" key={item.id} data-label={item.status}>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
                    
                    
            </section>
        </div>
    )
}


export default Card;
