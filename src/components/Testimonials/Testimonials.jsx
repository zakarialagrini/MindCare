import React from 'react';
import './Testimonials.css'; // Make sure to have the appropriate CSS file imported
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className="slider">
                <ul>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt='User 1' />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 0 576 512">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                </span>
                                <span>90%</span>
                                </div>
                            </div>
                            <p>You suffer from depression you feel tired contact us we have the solution to your problem.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt='User 2' />
                                <div>
                                    <h3>John Doe</h3>
                                    <span>Edusity, USA</span>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 0 576 512">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                </span>
                                <span>67%</span>
                                </div>
                            </div>
                            <p>If you're experiencing depression, reach out to us. We have solutions tailored to help you.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt='User 3' />
                            <div>
                                <h3>Emily Johnson</h3>
                                <span>Edusity, USA</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 0 576 512">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                </span>
                                <span>85%</span>
                            </div>

                            </div>
                            <p>Don't let depression control your life. Contact us for assistance.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
