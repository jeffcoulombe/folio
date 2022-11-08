import React from 'react';

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-bar-chart about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">Starting</span>
        </div>

        <div className="about__box">
            <i class='bx bx-task about__icon'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">Hired Me</span>
        </div>

        <div className="about__box">
            <i class='bx bxs-coffee-bean about__icon'></i>
            <h3 className="about__title">Coffee</h3>
            <span className="about__subtitle">Still counting</span>
        </div>
    </div>
  )
}

export default Info