import React from 'react';

// const baseURL = 'http://localhost/portofolio/';
const baseURL = 'https://nardiminardi.com/';

const Hero = () => {
    return (
        <div className="container">
            <section className="hero" >

                <div className="row hero-wrapper" >

                    <div className="col-md-4 col-sm-12 hero-foto-profile">
                        <img src={`${baseURL}public/assets/images/fotoProfile.png`} alt="foto-profile" className="img-fluid" />
                    </div>


                    
                    <div className="col-md-8 col-sm-12 hero-illustration">
                      
                        <h3>Minardi</h3>
                        <h5>Fullstack Developer,</h5>
                        <p className="hero-desc">Saya Bersemangat Berkontribusi di Bidang IT, Memberikan Pengetahuan Teknologi Programming untuk Semua Orang, dan Membantu Membangun Pencapaian.</p>
                       
                        
                        <div className="find-about-me">
                            
                            <div className="cv-info">
                                <p>Cari Tahu Tentang Saya ?</p>
                                <a className="btn-cv" target="_blank" href={`${baseURL}public/assets/images/cv.pdf`}>Download CV</a>
                            </div>

                            <div className="hero-social-info">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/nardiocang" target="_blank">
                                            <i className="fab fa-facebook fa-2x" title="Facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/nardiocang/" target="_blank">
                                            <i className="fab fa-instagram fa-2x" title="instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/Nardi-Minardi" target="_blank">
                                            <i className="fab fa-github fa-2x" title="Github"></i>
                                        </a>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        
            </section>
        </div>

    )
}

export default Hero;
