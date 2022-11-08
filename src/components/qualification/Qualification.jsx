import React from 'react';
import { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">A Little Tour Aboard My Life</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                    className={toggleState === 1 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div 
                    className={toggleState === 2 
                        ? "qualification__button qualification__active" 
                        : "qualification__button"
                    }
                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experiences
                </div>
            </div>

            <div className="qualification__sections">
                <div 
                    className={
                        toggleState === 1 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content"
                    }
                >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">Trois-Rivières - College<br />Updating Skills</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">Trois-Rivières - College</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2013 - 2014
                            </div>
                        </div>        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Social Sciences</h3>
                            <span className="qualification__subtitle">Joliette - College</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2002 - 2006
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <div 
                    className={
                        toggleState === 2 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content"
                    }
                >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Sales Rep</h3>
                            <span className="qualification__subtitle">On the sale field developing extraordinary business relations.<br /><br />@Groupe Triani<br />@Molson Coors</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2014 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Freelance</h3>
                            <span className="qualification__subtitle">La Buxida</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2014
                            </div>
                        </div>        
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification