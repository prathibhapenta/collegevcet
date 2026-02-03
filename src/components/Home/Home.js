import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiPlus, FiX } from "react-icons/fi";

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


const TeamCard = ({ img, name, role }) => (
  <div className="team-card">
    <div className="team-img-box">
      <img src={img} alt={name} />
    </div>
    <h3>{name}</h3>
    <p>{role}</p>
  </div>
);

const CounterItem = ({ icon, end, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let animationFrame;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const startTime = performance.now();
          const duration = 2000; // slow: 2 seconds

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              animationFrame = requestAnimationFrame(animate);
            }
          };

          animationFrame = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [end]);

  return (
    <div className="vcet-stat-card" ref={ref}>
      <div className="vcet-stat-icon">{icon}</div>
      <div className="text">
        <h2>{count}{suffix}</h2>
        <p>{label}</p>
      </div>
    </div>
  );
};

const videos = [
  "/images/corousel_video_1.mp4",
  "/images/corousel_video_3.mp4",
  "/images/corousel_video_2.mp4",
];

const Home = () => {
 const [activeIndex, setActiveIndex] = useState(0);
 const [isOpen, setIsOpen] = useState(false);
  // Automatic switch every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
    }, 30000); // 30 seconds = 30000 ms

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []); // empty dependency → runs once

  // Manual click → go to next video immediately
  const handleVideoClick = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };
  // AOS initialization
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <div className="home-container">
       {/* Top Header Section */}
       <section>
      <div className="top-header">
  <img
    src="/images/main_logo.png"
    alt="main-logo"
    className="main-logo"
  />
</div>

      </section>

     
    
   {/*Video Manual Carousel */}
      <section className="hero-section">
       <div className="hero-section">
      {videos.map((src, index) => (
        <video
          key={index}
          className={`bg-video ${index === activeIndex ? "active" : ""}`}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          onClick={handleVideoClick}
          style={{ cursor: "pointer" }}
        />
      ))}

      <div className="video-overlay"></div>

      <div className="navbar-container">
        <Navbar />
      </div>

      {/* Optional: show current video number or hint */}
      <div className="hero-content">
        <h4>Welcome to Visvesvaraya College of Engineering</h4>
        <p>Empowering Innovation • Excellence • Future Leaders</p>
      </div>
    </div>
    <button
    className="carousel-btn prev"
    onClick={() => setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length)}
  >
    ❮
  </button>

  <button
    className="carousel-btn next"
    onClick={() => setActiveIndex((prev) => (prev + 1) % videos.length)}
  >
    ❯
  </button>
      </section>

      

       {/* Scrolling Notice */}
    <section>
       <marquee
        className="notice-marquee"
        direction="left"
        scrollamount="6"
      >
      Admissions Open for B.Tech, M.Tech & MBA | NAAC Accredited College |
      Approved by AICTE & Affiliated to JNTUH
    </marquee>
    </section>

    {/* <section className="notice-wave">
  <div className="notice-wave-track">
    Admissions Open for B.Tech, M.Tech & MBA • NAAC Accredited • AICTE & JNTUH
  </div>
</section> */}


       {/* Latest News & Events Section */}
       <section>
      <div className="vcet-news-section">
  <div className="news-grid">

    {/* News Update Column */}
    <div className="column news-column">
      <h2>VCET News Updates</h2>
      <ul className="news-list">
        <li className="news-update">VCET Signs MoU with Industry Partners to Strengthen Skill Development Programs</li>
        <li className="news-update">Department of Computer Science Conducts National Level Technical Workshop</li>
        <li className="news-update">VCET Students Secure Top Ranks in University Examinations</li>
        <li className="news-update">Annual Tech Fest “VISVESTA 2025” Concludes Successfully</li>
        <li className="news-update">Faculty Development Program on Emerging Technologies Held at VCET</li>
        <li className="news-update">Placement Drive 2025 Records Highest Package Till Date</li>
        <li className="news-update">VCET NSS Unit Organizes Community Awareness Program</li>
      </ul>
      <button className="view-all-btn news-btn">
        View All News Updates →
      </button>
    </div>

    {/* Announcements Column */}
    <div className="column announcements-column">
      <h2>Announcements</h2>
      <ul className="announcement-list">
        <li>Semester End Examination Timetable – April 2025</li>
        <li>Anti-Ragging Committee and Squad Details 2025</li>
        <li>Faculty Recruitment Notification – Various Departments</li>
        <li>Internal Assessment Schedule for II & III Year Students</li>
        <li>Submission Deadline for Project Proposals</li>
        <li>Scholarship Renewal Notification for Eligible Students</li>
        <li>Campus Maintenance Holiday Notice</li>
        <li>Revaluation Application Guidelines</li>
        <li>College Annual Day Celebration Announcement</li>
        <li>Library Book Return Reminder</li>
        <li>Hostel Fee Payment Notice</li>
      </ul>
      <button className="view-all-btn announcements-btn">
        View All Announcements →
      </button>
    </div>

    {/* Admission Column */}
    <div className="column admission-column">
      <h2>Admissions</h2>
      <ul className="admission-list">
        <li>B.Tech Admissions through EAMCET – Academic Year 2025–26</li>
        <li>Management Quota Admissions – Notification</li>
        <li>M.Tech Admissions – Eligibility and Application Process</li>
        <li>Diploma Lateral Entry Admissions 안내</li>
        <li>Document Verification Schedule for Admitted Candidates</li>
        <li>Spot Admissions Notification</li>
        <li>Fee Structure and Scholarship Details</li>
        <li>Contact Information for Admission Enquiries</li>
      </ul>
      <button className="view-all-btn admission-btn">
        View All Admissions →
      </button>
    </div>

  </div>
</div>
    </section>

  
      {/* WELCOME TO VISVESVARAYA COLLEGE Section */}
        <section className="vcet-about">
          <div className="vcet-about-box" data-aos="fade-up">
            <h1 className="vcet-about-heading">
              Welcome to Visvesvaraya College of Engineering & Technology
            </h1>

            <p className="vcet-about-text">
              Telangana State is leading state in providing quality technical education in the country. More than 250 Engineering Colleges have been functioning in the state under Private self financing managements. Visvesvaraya College of Engineering and Technology is one of such colleges engaged in contributing to the growth of quality technical education in the state.<br />
              Visvesvaraya College of Engineering and Technology was established in Hyderabad with the approval of AICTE, New Delhi and the Government of Telangana State. The Institution is affiliated to Jawaharlal Nehru Technological University Hyderabad (JNTUH), Kukatpally, Hyderabad.<br />
              Visvesvaraya College of Engineering and Technology was sponsored by Jawahar Educational Society, Ranga Reddy District.
            </p>
          </div>
        </section>

        <section className="vcet-hero-wrapper">
        <div className="vcet-hero-layout">

          {/* Left Carousel */}
          <div className="vcet-hero-image-box">
            <div
              id="vcetHeroCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <img
                    src="/images/visveswaraya_college_img_1.png"
                    className="vcet-hero-image"
                    alt="VCET Campus 1"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src="/images/visveswaraya_college_img_2.png"
                    className="vcet-hero-image"
                    alt="VCET Campus 2"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src="/images/visveswaraya_college_img_3.png"
                    className="vcet-hero-image"
                    alt="VCET Campus 3"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/visveswaraya_college_img_4.png"
                    className="vcet-hero-image"
                    alt="VCET Campus 2"
                  />
                </div>

              </div>

              {/* Controls */}
              <div className="vcet-carousel-controls">
                <button
                  className="vcet-carousel-btn"
                  data-bs-target="#vcetHeroCarousel"
                  data-bs-slide="prev"
                  type="button"
                >
                  &lt;
                </button>

                <button
                  className="vcet-carousel-btn"
                  data-bs-target="#vcetHeroCarousel"
                  data-bs-slide="next"
                  type="button"
                >
                  &gt;
                </button>
              </div>

            </div>
          </div>
          <div className="vcet-hero-text-box">
            <h1 className="vcet-hero-title">
              Take the next step toward your personal and professional goals with us.
            </h1>

            <p className="vcet-hero-description">
              
              Telangana State is leading state in providing quality technical education in the country. More than 250 Engineering Colleges have been functioning in the state under Private self financing managements. Visvesvaraya College of Engineering and technology is one of such colleges engaged in contributing to the growth of quality technical education in the state.<br/>
                </p>
          </div>

        </div>
      </section>

      {/* SCORE OF VISVESVARAYA COLLEGE Section */}
      <section className="vcet-stats-section">
        
      <div className="vcet-stats-container">
        
        <CounterItem
          icon={<FaUserGraduate />}
          end={20203}
          label="Students Enrolled"
        />
        <CounterItem
          icon={<FaChalkboardTeacher />}
          end={139}
          label="Certified Teachers"
        />
        <CounterItem
          icon={<FaUniversity />}
          end={99}
          suffix="%"
          label="Passing to Universities"
        />
        <CounterItem
          icon={<FaSmile />}
          end={100}
          suffix="%"
          label="Parents Satisfaction"
        />
      </div>
    </section>

    

    <section className="vcet-glass-section" data-aos="fade-up">
  <div className="container">
     <div className="oncampus-bg">
    <img
      src="/images/visveswaraya_college_img_4.png"
      alt="VCET On-Campus Placements"
      className="why-choose-us"
    />
    <div className="overlay"></div>
  </div>
    <h2 className="vcet-glass-title">
      Why Choose Visvesvaraya College of Engineering & Technology
    </h2>

    <div className="vcet-glass-grid">

      <div className="vcet-glass-card" data-aos="zoom-in">
        <FaUniversity className="vcet-glass-icon" />
        <h4>Quality Technical Education</h4>
        <p>
          AICTE approved & JNTUH affiliated programs with strong academic
          foundations.
        </p>
      </div>

      <div className="vcet-glass-card" data-aos="zoom-in">
        <FaChalkboardTeacher className="vcet-glass-icon" />
        <h4>Experienced Faculty</h4>
        <p>
          Highly qualified and dedicated faculty with academic and industry
          exposure.
        </p>
      </div>

      <div className="vcet-glass-card" data-aos="zoom-in">
        <FaBuilding className="vcet-glass-icon" />
        <h4>Modern Infrastructure</h4>
        <p>
          Well-equipped laboratories, smart classrooms, and digital learning
          facilities.
        </p>
      </div>

      <div className="vcet-glass-card" data-aos="zoom-in">
        <FaIndustry className="vcet-glass-icon" />
        <h4>Industry-Oriented Learning</h4>
        <p>
          Focus on practical knowledge, internships, workshops, and
          industrial visits.
        </p>
      </div>

      <div className="vcet-glass-card" data-aos="zoom-in">
        <FaLightbulb className="vcet-glass-icon" />
        <h4>Research & Innovation Culture</h4>
        <p>
          Encouraging students towards research, projects, and innovative
          thinking.
        </p>
      </div>

      <div className="vcet-glass-card" data-aos="zoom-in">
        <FaTools className="vcet-glass-icon" />
        <h4>Skill Development Programs</h4>
        <p>
          Regular training in soft skills, coding, and emerging technologies.
        </p>
      </div>

      <div className="vcet-glass-card" data-aos="zoom-in">
        <FaBriefcase className="vcet-glass-icon" />
        <h4>Career Guidance & Placements</h4>
        <p>
          Dedicated placement cell with training for interviews and career
          readiness.
        </p>
      </div>

      <div className="vcet-glass-card" data-aos="zoom-in">
        <FaUsers className="vcet-glass-icon" />
        <h4>Holistic Student Development</h4>
        <p>
          Equal emphasis on academics, sports, cultural, and extracurricular
          activities.
        </p>
      </div>

    </div>
  </div>
</section>


    {/* Engineering Departments */}
      <section className="vcet-masonry-grid" data-aos="fade-up">
         <div className="dept-intro-container">
      <h2>
        Discover Our <span>Engineering Departments</span>
      </h2>
      <p>
        We empower future innovators with cutting-edge programs, state-of-the-art labs, 
        and a vibrant research ecosystem designed to tackle tomorrow's challenges.
        {/* The aim of the Institute is to provide meaningful education, to conduct original research of the highest standard and to provide leadership in technological innovation. */}
      </p>
    </div>
    <div className="masonry-container">
      {/* Masonry items – different heights */}
      <div className="masonry-item tall" data-aos="fade-up" data-aos-delay="100">
        <img
          src="/images/computers_lab.jpg"
          alt="Engineering Lab"
          className="masonry-img"
        />
        <div className="overlay">
        <h3>Computer Science Engineering</h3>
      <span
          className="arrow-icon"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(prev => !prev);
          }}
        >
          {isOpen ? (
            <FiX className="icon close" />
            
          ) : (
          
            <FiPlus className="icon plus" />
          )}
        </span>
      </div>
      </div>


      <div className="masonry-item medium" data-aos="fade-up" data-aos-delay="150">
        <img
          src="/images/ece_img.webp" // medium height
          alt="Library & Research"
          className="masonry-img"
        />
        <div className="overlay">
          <h3>Ece</h3>
          <span
            className="arrow-icon"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(prev => !prev);
            }}
          >
            {isOpen ? (
              <FiX className="icon close" />
              
            ) : (
            
              <FiPlus className="icon plus" />
            )}
          </span>
        </div>
      </div>

      <div className="masonry-item medium" data-aos="fade-up" data-aos-delay="200">
        <img
          src="/images/civil_engineering.webp" // shorter image
          alt="Academics"
          className="masonry-img"
        />
        <div className="overlay">
          <h3>Civil</h3>
           <span
            className="arrow-icon"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(prev => !prev);
            }}
          >
            {isOpen ? (
              <FiX className="icon close" />
              
            ) : (
            
              <FiPlus className="icon plus" />
            )}
          </span>
        </div>
      </div>

      <div className="masonry-item tall" data-aos="fade-up" data-aos-delay="250">
        <img
          src="/images/eee_engineering.jpg" // taller again
          alt="Sciences"
          className="masonry-img"
        />
        <div className="overlay">
          <h3>Eee</h3>
          <span
            className="arrow-icon"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(prev => !prev);
            }}
          >
            {isOpen ? (
              <FiX className="icon close" />
              
            ) : (
            
              <FiPlus className="icon plus" />
            )}
          </span>
        </div>
      </div>

      <div className="masonry-item tall" data-aos="fade-up" data-aos-delay="300">
        <img
          src="/images/Aiml_img.webp"
          alt="Campus Life"
          className="masonry-img"
        />
        <div className="overlay">
          <h3>AIML</h3>
           <span
            className="arrow-icon"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(prev => !prev);
            }}
          >
            {isOpen ? (
              <FiX className="icon close" />
              
            ) : (
            
              <FiPlus className="icon plus" />
            )}
          </span>
        </div>
      </div>

    <div className="masonry-item medium" data-aos="fade-up" data-aos-delay="200">
        <img
          src="/images/Ds_engineering.webp" // shorter image
          alt="Academics"
          className="masonry-img"
        />
        <div className="overlay">
          <h3>Data Science</h3>
           <span
            className="arrow-icon"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(prev => !prev);
            }}
          >
            {isOpen ? (
              <FiX className="icon close" />
              
            ) : (
            
              <FiPlus className="icon plus" />
            )}
          </span>
        </div>
      </div>

      {/* Add more items – heights will auto-vary based on image */}
    </div>
      </section>


       {/* EVENTS AT VCET  */}
      <section className="vcet-feature-section">
        <div className="vcet-feature-container">
 <div class="gallery-intro">
            <h2>Experience Life at VCET</h2>
            <p>
              Step into a vibrant campus where learning goes beyond classrooms.
              At VCET, students thrive in a dynamic environment enriched with
              modern laboratories, cultural celebrations, a knowledge-rich library,
              and spaces that inspire innovation, creativity, and collaboration.
            </p>
            </div>
          {/* ===== ROW 1 ===== */}
          <div className="vcet-feature-row-one">

            {/* LEFT BIG CAROUSEL */}
          <div className="vcet-feature-carousel-big">
        <div
          id="vcetCarouselOne"
          className="carousel slide vcet-custom-carousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/fectures_section_img_1.jpeg" className="d-block w-100" alt="VCET" />
            </div>

            <div className="carousel-item">
              <img src="/images/fectures_section_img_2.jpeg" className="d-block w-100" alt="VCET" />
            </div>
            <div className="carousel-item">
              <img src="/images/fectures_section_img_3.jpeg" className="d-block w-100" alt="VCET" />
            </div>
            <div className="carousel-item">
              <img src="/images/fectures_section_img_4.jpeg" className="d-block w-100" alt="VCET" />
            </div>
          </div>

          {/* CUSTOM BOTTOM-RIGHT CONTROLS */}
              <div className="vcet-carousel-controls">
                <button
                  className="vcet-carousel-btn"
                  data-bs-target="#vcetCarouselOne"
                  data-bs-slide="prev"
                >
                  &lt;
                </button>

                <button
                  className="vcet-carousel-btn"
                  data-bs-target="#vcetCarouselOne"
                  data-bs-slide="next"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
            {/* RIGHT TEXT + IMAGE */}
            <div className="vcet-feature-text-image">

              <div className="vcet-feature-text">
                <h3>Faculty</h3>
                <p>
                  VCET is renowned for its experienced faculty who play
                  a pivotal role in shaping students’ academic excellence
                  and professional careers.
                </p>
                <span className="vcet-learn-link">Learn More →</span>
              </div>

              <div className="vcet-feature-carousel-small">
        <div
          id="vcetCarouselTwo"
          className="carousel slide vcet-custom-carousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/faculty_img_1.jpeg" className="d-block w-100" alt="Class" />
            </div>

            <div className="carousel-item">
              <img src="/images/faculty_img_1.jpeg" className="d-block w-100" alt="Lab" />
            </div>
          </div>

          {/* CORRECT TARGET */}
          <div className="vcet-carousel-controls">
            <button
              className="vcet-carousel-btn"
              data-bs-target="#vcetCarouselTwo"
              data-bs-slide="prev"
            >
              &lt;
            </button>

            <button
              className="vcet-carousel-btn"
              data-bs-target="#vcetCarouselTwo"
              data-bs-slide="next"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>


            </div>
          </div>

          {/* ===== ROW 2 ===== */}
          <div className="vcet-feature-row-two">

        {/* ===== CARD 1 : IMAGE ONLY ===== */}
        <div className="vcet-card-image-only">
  <div
    id="vcetCardCarousel"
    className="carousel slide vcet-custom-carousel"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="/images/event_udbhav.jpeg"
          className="d-block w-100"
          alt="Event 1"
        />
      </div>
      

      <div className="carousel-item">
        <img
          src="/images/event_udbhav_2.jpeg"
          className="d-block w-100"
          alt="Event 2"
        />
      </div>

      <div className="carousel-item">
        <img
          src="/images/event_udbhav_3.jpeg"
          className="d-block w-100"
          alt="Event 3"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/images/event_udbhav_1.jpeg"
          className="d-block w-100"
          alt="Event 2"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/images/event_udbhav_5.jpeg"
          className="d-block w-100"
          alt="Event 2"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/images/event_udbhav_4.jpeg"
          className="d-block w-100"
          alt="Event 2"
        />
      </div>
      
      <div className="carousel-item">
        <img
          src="/images/event_udbhav_6.jpeg"
          className="d-block w-100"
          alt="Event 2"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/images/event_udbhav_7.jpeg"
          className="d-block w-100"
          alt="Event 2"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/images/event_udbhav_8.jpeg"
          className="d-block w-100"
          alt="Event 2"
        />
      </div>
    </div>
    <div className="vcet-carousel-controls">
      <button
        className="vcet-carousel-btn"
        data-bs-target="#vcetCardCarousel"
        data-bs-slide="prev"
      >
        &lt;
      </button>

      <button
        className="vcet-carousel-btn"
        data-bs-target="#vcetCardCarousel"
        data-bs-slide="next"
      >
        &gt;
      </button>
    </div>
  </div>
</div>

        <div className="vcet-card-text academics">
          <div className="vcet-card-overlay" >
            <h4>Academics</h4>
            <p>
             VCET offers a strong academic framework focused on outcome-based education. 
  The curriculum is thoughtfully designed to blend solid theoretical knowledge 
  with hands-on practical learning, enabling students to understand real-world 
  applications of engineering concepts. Emphasis is placed on critical thinking, 
  problem-solving, and innovation through projects, laboratory work, internships, 
  and industry interactions.    </p>
  <p>
  In addition to academic excellence, VCET continuously upgrades its teaching 
  methodologies by integrating modern tools, digital resources, and experiential 
  learning practices. Regular assessments, mentoring, and feedback mechanisms 
  help track student progress and encourage continuous improvement. 
</p>
            <span>Learn More →</span>
          </div>
        </div>
        <div className="vcet-card-text placements">
          <div className="vcet-card-overlay"   style={{ backgroundImage: "url(/images/placements_img_1.jpeg)" }}
      >

            <h4>Placements</h4>
            {/* <p>
              Consistent placement support with
              top recruiting companies.
            </p>
            <span>Learn More →</span> */}
          </div>
        </div>
      </div>
        </div>
      </section>


      {/* EXPERIENCE LIFE AT VCET */}
      <section class="gallery-section">
             
          <div class="gallery-grid">
              <div class="gallery-item large">
            <iframe
              class="video-frame"
              src="https://www.youtube.com/embed/aZ80PN-CmPk?autoplay=0&mute=1"
              title="VCET Campus Tour"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
            <div className="gallery-item">
            <video
              className="gallery-video"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/images/labs_vedio.mp4" type="video/mp4" />
            </video>

            <div className="overlay-bottom">
              <h3>LABS</h3>
              <span className="arrow">→</span>
            </div>
          </div>

          <div class="gallery-item">
            <video
          className="gallery-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/calcuture_events.mp4" type="video/mp4" />
        </video>
            <div class="overlay-bottom">
              <h3>Calcuture Events</h3>
              <span class="arrow">→</span>
            </div>
          </div>

          <div class="gallery-item medium" >
            <video
          className="gallery-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/events.mp4" type="video/mp4" />
        </video>
            <div class="overlay-bottom">
              <h3>Events</h3>
              <span class="arrow">→</span>
            </div>
          </div>

          <div class="gallery-item medium">
            <video
          className="gallery-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/sports.mp4" type="video/mp4" />
        </video>
            <div class="overlay-bottom">
              <h3>Sports</h3>
              <span class="arrow">→</span>
            </div>
          </div>
          <div class="gallery-item medium">
              <video
          className="gallery-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/republic_day.mp4" type="video/mp4" />
        </video>
            <div class="overlay-bottom">
              <h3>Independence Day</h3>
              <span class="arrow">→</span>
            </div>
          </div>

        </div>
      </section>

      


      {/* Campus Placements Section */}
      {/* <section className="placements-section" data-aos="fade-up">
      <div className="placements-container">
        <h1 className="placements-title" data-aos="fade-down" data-aos-delay="100">
          Campus Placements @VCET
        </h1>

        <p className="placements-subtitle" data-aos="fade-up" data-aos-delay="200">
          Launching Careers with Top Companies – Your Future Starts Here!
        </p>

        <div className="placements-stats" data-aos="zoom-in" data-aos-delay="300">
          <div className="stat-item">
            <h3>150+</h3>
            <p>Placement Offers in 2024-25</p>
          </div>
          <div className="stat-item">
            <h3>85%+</h3>
            <p>Placement Rate</p>
          </div>
          <div className="stat-item">
            <h3>₹12 LPA</h3>
            <p>Highest Package</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Recruiters Visited</p>
          </div>
        </div>

        <div className="placements-img-box" data-aos="fade-up" data-aos-delay="400">
          <img
            src="/images/companies_logos.jpg"
            alt="Top Companies Recruited at VCET"
            className="companies-logos"
          />
        </div>

        <p className="placements-desc" data-aos="fade-up" data-aos-delay="500">
          At <strong>Visvesvaraya College of Engineering & Technology</strong>, we don't just educate engineers — 
          we build careers. Our dedicated Training & Placement Cell works tirelessly to bring top-tier companies 
          to campus, offering excellent opportunities in IT, Core Engineering, Consulting, and more.
        </p>

        <div className="cta-buttons" data-aos="fade-up" data-aos-delay="600">
            <a href="/placements" className="placement-button">
              Placement Report 
            </a>
          
        </div>
      </div>
    </section> */}
    
    
  <section className="oncampus-section">
  <div className="oncampus-bg">
    <img
      src="/images/campus_img.jpg"
      alt="VCET On-Campus Placements"
      className="oncampus-img"
    />
    <div className="overlay"></div>
  </div>

  <div className="oncampus-content">
    <h2 className="oncampus-title">On-Campus Placements at VCET</h2>
    <p className="oncampus-subtitle">
      Our students experience seamless transition to the corporate world through strong industry exposure, skill development, and top recruiter visits.
    </p>

    <div className="oncampus-stats">
      <div className="stat-card">
        <h3>95%+</h3>
        <p>Placement Rate</p>
      </div>
      <div className="stat-card">
        <h3>200+</h3>
        <p>Recruiters</p>
      </div>
      <div className="stat-card">
        <h3>₹8 LPA</h3>
        <p>Highest Package</p>
      </div>
    </div>

    {/* Company Logos Section */}
    <div className="company-logos">
      <img
        src="/images/companies_logos.jpg"
        alt="Top Recruiting Companies"
        className="company-logos-img"
      />
    </div>

    <button className="primary-btn oncampus-btn">
       About Placements
    </button>
  </div>
</section>
    </div>
  );
};

export default Home;
