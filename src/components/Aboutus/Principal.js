import React from "react";
import "./About.css";

const Principal = () => {
  return (
    <div className="principal-page">
      <div className="principal-container">
        <h2 className="principal-title">Principal</h2>

        <div className="principal-card">
          <div className="principal-img">
            {/* You can add Principal image here */}
            <img
              src="/images/managent_img_1.avif"
              alt="Principal"
              className="principal-photo"
            />
          </div>

          <div className="principal-content">
            <h3 className="principal-name">Dr. D Ramesh</h3>
            <p className="principal-designation">Principal</p>

            <div className="principal-details">
              <p>
                <b>AMIE, ME, Ph.D (IIT Madras), FIE</b>
              </p>
              <p>
                Dr. D Ramesh obtained Ph.D in Mechanical Engineering from IIT
                Madras 2006, Master of Engineering with specialization in Machine
                Design from PSG College of Technology, Coimbatore in 1999 and
                Graduation from Institute of Engineers (India) Calcutta. He
                cleared GATE-96 & 97 and secured 94 percentile.
              </p>
              <p>
                He has put up 19 years teaching, research, and industry and
                published 9 international journals, 5 national, 12 national and
                international conferences. He guided and evaluated numerous
                B.Tech and M.Tech projects. He worked in United Kingdom on Airbus
                370M at Magellan Aerospace ltd as senior Fatigue Engineer. His
                research areas are fatigue, surface coating, tribology, friction
                and wear. He is Fellow member of Institute of Engineers and
                received scholarship from Ministry of Human Recourse Dept, Govt
                of India during his Master and Ph.D
              </p>

              <h4 className="principal-msg-title">Principal Message</h4>
              <p className="principal-message">
                Today we are in the fast growing developments globally and our
                responsibility in providing the education blended with latest
                technologies in the fields of Information Technology, Computer
                Science, Electronics Engineering and all the vital engineering
                and science, Management related areas. Every bit of contribution
                made by the students of this Institution will make it significant
                and achievable for the growth of global technological advancement.
                I believe that during the four years engineering course of any
                other PG Courses, we have to strive hard to meet the challenges
                ahead of us. Best wishes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
