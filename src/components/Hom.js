import { BsNewspaper } from "react-icons/bs";
import { FaLocationDot, FaCalendarDays, FaArrowRight } from "react-icons/fa6";
import {
  FaUniversity,
  FaChalkboardTeacher,
  FaBuilding,
  FaIndustry,
  FaLightbulb,
  FaTools,
  FaBriefcase,
  FaUsers,
  FaUserGraduate,
  FaSmile,
} from "react-icons/fa";


<section className="vcet-news-events" data-aos="fade-up">
      <div className="vcet-container">
        <div className="vcet-news">
          <h2 className="vcet-title">
            <BsNewspaper />Latest News
          </h2>

          <div className="vcet-scroll-wrapper">
            <div className="vcet-scroll-content">
              <p>
                <FaArrowRight />
                VCET B.Tech III Year II Sem – R22 Examination Timetable Released
              </p>
              <p>
                <FaArrowRight />
                National Level Technical Workshop on AI & ML – April 2025
              </p>
              <p>
                <FaArrowRight />
                24 Hours Coding Hackathon “CODE STORM – 2K25”
              </p>
              <p>
                <FaArrowRight />
                International Women’s Day Celebrations at VCET
              </p>
              <p>
                <FaArrowRight />
                NSS Blood Donation Camp Successfully Conducted
              </p>

              {/* 🔁 Duplicate for infinite scroll */}
              <p>
                <FaArrowRight />
                VCET B.Tech III Year II Sem – R22 Examination Timetable Released
              </p>
              <p>
                <FaArrowRight />
                National Level Technical Workshop on AI & ML – April 2025
              </p>
              <p>
                <FaArrowRight />
                24 Hours Coding Hackathon “CODE STORM – 2K25”
              </p>
              <p>
                <FaArrowRight />
                International Women’s Day Celebrations at VCET
              </p>
              <p>
                <FaArrowRight />
                NSS Blood Donation Camp Successfully Conducted
              </p>
            </div>
          </div>

          <button className="vcet-btn">ALL NEWS</button>
        </div>
        <div className="vcet-events">
          <h2 className="vcet-title">
            <FaCalendarDays /> VCET Events
          </h2>

          <div className="vcet-scroll-wrapper">
            <div className="vcet-scroll-content">

              <div className="vcet-event-item">
                <div className="vcet-date-box">
                  <h3>15</h3>
                  <span>Aug</span>
                </div>
                <div>
                  <h4>Independence Day Celebrations</h4>
                  <p>
                    <FaLocationDot /> VCET Campus
                  </p>
                </div>
              </div>

              <div className="vcet-event-item">
                <div className="vcet-date-box">
                  <h3>05</h3>
                  <span>Jul</span>
                </div>
                <div>
                  <h4>National Level Technical Symposium</h4>
                  <p>
                    <FaLocationDot /> VCET Auditorium
                  </p>
                </div>
              </div>

              <div className="vcet-event-item">
                <div className="vcet-date-box">
                  <h3>28</h3>
                  <span>Jun</span>
                </div>
                <div>
                  <h4>Campus Placement Drive</h4>
                  <p>
                    <FaLocationDot /> VCET Training & Placement Cell
                  </p>
                </div>
              </div>

              {/* 🔁 Duplicate for infinite scroll */}
              <div className="vcet-event-item">
                <div className="vcet-date-box">
                  <h3>15</h3>
                  <span>Aug</span>
                </div>
                <div>
                  <h4>Independence Day Celebrations</h4>
                  <p>
                    <FaLocationDot /> VCET Campus
                  </p>
                </div>
              </div>

            </div>
          </div>

          <button className="vcet-btn">ALL EVENTS</button>
        </div>
      </div>
    </section>