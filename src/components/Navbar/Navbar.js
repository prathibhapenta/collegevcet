import React, { useState } from "react"; 
import { Link, NavLink, useLocation } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ isHomePage }) => {

    const location = useLocation();
  const path = location.pathname;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  // All About Us related routes
  const aboutRoutes = [
    "/aboutus",
    "/management",
    "/principal",
    "/organizational-chart",
    "/governance-manual",
    "/governing-body",
    "/e-governance",
    "/college-academic-council",
    "/mou",
    "/aicte-approval",
    "/jntuh-affiliation",
    "/naac-certificate",
    "/self-declaration",
    "/undertaking"
  ];
  const infrastructureRoutes = [
  "/administrative-block",
  "/library",
  "/digitallibrary",
  "/exam-branch"
];
const transportRoutes = [
  "/transport/about",
  "/transport/routes",
  "/transport/fee"
];

const isTransportActive = transportRoutes.some(route =>
  location.pathname.startsWith(route)
);


const isInfrastructureActive = infrastructureRoutes.some(route =>
  location.pathname.startsWith(route)
);

 // Courses (parent)
  const isCoursesActive =
    path.startsWith("/cse") ||
    path.startsWith("/ece") ||
    path.startsWith("/eee") ||
    path.startsWith("/civil") ||
    path.startsWith("/me") ||
    path.startsWith("/aiml") ||
    path.startsWith("/mtech") ||
    path.startsWith("/mba");

  // B.Tech
  const isBtechActive =
    path.startsWith("/cse") ||
    path.startsWith("/ece") ||
    path.startsWith("/eee") ||
    path.startsWith("/civil") ||
    path.startsWith("/me") ||
    path.startsWith("/aiml");

  // M.Tech
  const isMtechActive = path.startsWith("/mtech");

  // MBA
  const isMBAActive = path.startsWith("/mba");


  // Check if current route belongs to About dropdown
 
 const isAboutActive = aboutRoutes.some(route => location.pathname.startsWith(route));

  return (
    <>
     

  {/* Navbar Section */}
  <nav
  className={`navbar navbar-expand-lg main-navbar px-0 ${
    location.pathname === "/" ? "home-navbar" : "inner-navbar"
  }`}
>
   <div className="container-fluid">
    <div className="hamburger" onClick={toggleMobileMenu}>
  <span></span>
  <span></span>
  <span></span>
</div>

      <ul className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>       
      <li className="nav-item dropdown">
        <a
          className={`nav-link dropdown-toggle ${isAboutActive ? "active" : ""}`}
          href="#"
          id="aboutDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          
        >
          About Us
        </a>
      <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
  <li><Link className="dropdown-item" to="/about-us/the-college">The College</Link></li>
  <li><Link className="dropdown-item" to="/about-us/management">The Management</Link></li>
  <li><Link className="dropdown-item" to="/about-us/principal">Principal</Link></li>
  <li><Link className="dropdown-item" to="/about-us/organizational-chart">Organizational Chart</Link></li>
  <li><Link className="dropdown-item" to="/about-us/governance-manual">Governance Manual</Link></li>
  <li><Link className="dropdown-item" to="/about-us/governing-body">Governing Body</Link></li>
  <li><Link className="dropdown-item" to="/about-us/e-governance">E-Governance</Link></li>
  <li><Link className="dropdown-item" to="/about-us/college-academic-council">College Academic Council</Link></li>
  <li><Link className="dropdown-item" to="/about-us/mou">MOU</Link></li>
  <li><Link className="dropdown-item" to="/about-us/aicte-approval">AICTE Approval</Link></li>
  <li><Link className="dropdown-item" to="/about-us/jntuh-affiliation">JNTUH Affiliation</Link></li>
  <li><Link className="dropdown-item" to="/about-us/naac-certificate">NAAC Certificate</Link></li>
  <li><Link className="dropdown-item" to="/about-us/self-declaration">Self Declaration</Link></li>
  <li><Link className="dropdown-item" to="/about-us/undertaking">Undertaking</Link></li>
</ul>

      </li>
       <li className="nav-item dropdown">
      <a className={`nav-link dropdown-toggle ${isCoursesActive ? "active" : ""}`}
    href="#"
    id="coursesDropdown"
    data-bs-toggle="dropdown">
    Courses
  </a>
   <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
    {/* B.Tech */}
    <li className="dropdown-submenu">
      <a className={`dropdown-item dropdown-toggle ${isBtechActive ? "active" : ""}`}
    href="#">
        B.Tech
      </a>
      <ul className="dropdown-menu">
        <li className="dropdown-submenu">
          <Link className="dropdown-item dropdown-toggle" to="/cse/about">
    CSE
  </Link>
          <ul className="dropdown-menu">
             <li><Link className="dropdown-item" to="/courses/btech/cse/about">About CSE</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/cse/hod">HOD</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/cse/faculty">Faculty</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/cse/syllabus">Syllabus</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/cse/labs">Labs</Link></li>
          </ul>
        </li>
        <li className="dropdown-submenu">
          <a className="dropdown-item dropdown-toggle" href="#">
            CSE(AI&ML)
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/courses/btech/cseaiml/about">About CSE(AI&ML)</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/cseaiml/hod">HOD</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/cseaiml/faculty">Faculty</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/cseaiml/syllabus">Syllabus</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/cseaiml/labs">Labs</Link></li>
          </ul>
        </li>
        <li className="dropdown-submenu">
          <a className="dropdown-item dropdown-toggle" href="#">
            CSE(DS)
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/courses/btech/cseds/about">About CSE(DS)</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/cseds/hod">HOD</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/cseds/faculty">Faculty</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/cseds/syllabus">Syllabus</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/cseds/labs">Labs</Link></li>
          </ul>
        </li>
        <li className="dropdown-submenu">
          <a className="dropdown-item dropdown-toggle" href="#">
            AIML
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/courses/btech/aiml/about">About AIML</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/aiml/hod">HOD</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/aiml/faculty">Faculty</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/aiml/syllabus">Syllabus</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/aiml/labs">Labs</Link></li>
          </ul>
        </li>
        <li className="dropdown-submenu">
          <a className="dropdown-item dropdown-toggle" href="#">
            ECE
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/courses/btech/ece/about">About ECE</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/ece/hod">HOD</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/ece/faculty">Faculty</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/ece/syllabus">Syllabus</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/ece/labs">Labs</Link></li>
          </ul>
        </li>
        <li className="dropdown-submenu">
          <a className="dropdown-item dropdown-toggle" href="#">
            Civil
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/courses/btech/civil/about">About Civil</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/civil/hod">HOD</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/civil/faculty">Faculty</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/civil/syllabus">Syllabus</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/civil/labs">Labs</Link></li>
          </ul>
        </li>
        <li className="dropdown-submenu">
          <a className="dropdown-item dropdown-toggle" href="#">
            EEE
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/courses/btech/eee/about">About EEE</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/eee/hod">HOD</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/eee/faculty">Faculty</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/eee/syllabus">Syllabus</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/eee/labs">Labs</Link></li>
           
          </ul>
        </li>
        <li className="dropdown-submenu">
          <a className="dropdown-item dropdown-toggle" href="#">
            ME
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/courses/btech/me/about">About ME</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/me/hod">HOD</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/me/faculty">Faculty</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/me/syllabus">Syllabus</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/me/labs">Labs</Link></li>
          </ul>
        </li>
        <li className="dropdown-submenu">
          <a className="dropdown-item dropdown-toggle" href="#">
            H & S
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/courses/btech/hs/about">About H & S</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/hs/hod">HOD</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/hs/faculty">Faculty</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/hs/syllabus">Syllabus</Link></li>
            <li><Link className="dropdown-item" to="/courses/btech/hs/labs">Labs</Link></li>
          </ul>
        </li>
      </ul>
    </li>

    {/* M.Tech */}
    <li className="dropdown-submenu">
      <a className={`dropdown-item dropdown-toggle ${isMtechActive ? "active" : ""}`} href="#">
        M.Tech
      </a>

      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to="/courses/mtech/embedded-system">Embedded System</Link></li>
        <li><Link className="dropdown-item" to="/courses/mtech/cse">Computer Science Engineering</Link></li>
      </ul>
    </li>

    {/* MBA */}
      <li className="dropdown-submenu">
      <a  className={`dropdown-item dropdown-toggle ${isMBAActive ? "active" : ""}`} href="#">
        MBA
      </a>
    <ul className="dropdown-menu">
        <li>
          <Link className="dropdown-item" to="/courses/mba/about">
            About MBA
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/courses/mba/hod">
            HOD
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/courses/mba/faculty">
            Faculty
          </Link>
        </li>
      </ul>
    </li>
      </ul>
    </li>
        <li className="nav-item dropdown">
        <a
    className={`nav-link dropdown-toggle ${
      isInfrastructureActive ? "active" : ""
    }`}
    href="#"
    id="infrastructureDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Infrastructure
  </a>
      <ul className="dropdown-menu" aria-labelledby="infrastructureDropdown">
          <li><Link className="dropdown-item" to="/infrascture/administrative-block">Administrative Block</Link></li>
          <li><Link className="dropdown-item" to="/infrascture/library">Library</Link></li>
          <li><Link className="dropdown-item" to="/infrascture/digital-library">Digital Library</Link></li>
          <li><Link className="dropdown-item" to="/infrascture/exam-branch">Exam Branch</Link></li>
        </ul>
      </li>

         <li><NavLink to="/iqac"className={({ isActive }) =>isActive ? "nav-link active" : "nav-link"}>IQAC</NavLink></li>
    <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="campuslifeDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          CampusLife
        </a>
      <ul className="dropdown-menu" aria-labelledby="campuslifeDropdown">
        <li><Link className="dropdown-item" to="/infrascture/administrative-block">Administrative Block</Link></li>
        <li><Link className="dropdown-item" to="/infrascture/library">Library</Link></li>
        <li><Link className="dropdown-item" to="/infrascture/digitallibrary">Digital Library</Link></li>
          <li><Link className="dropdown-item" to="/infrascture/academic-regulations">Exam Branch</Link></li>
          <li><Link className="dropdown-item" to="/campuslife/auditorium">Auditorium</Link></li>
          <li><Link className="dropdown-item" to="/campuslife/seminar-hall">Seminar Hall</Link></li>
          <li><Link className="dropdown-item" to="/campuslife/drawing-hall">Drawing Hall</Link></li>
          <li><Link className="dropdown-item" to="/campuslife/sports">sports</Link></li>
          <li><Link className="dropdown-item" to="/campuslife/cafeteria">cafeteria</Link></li>
          <li><Link className="dropdown-item" to="/campuslife/transport">Transport</Link></li>
          <li><Link className="dropdown-item" to="/campuslife/medical-facility">Medical Facility</Link></li>
          <li><Link className="dropdown-item" to="/campuslife/internet">Internet</Link></li>
          <li><Link className="dropdown-item" to="/campuslife/potable-water">Potable Water</Link></li> 
        </ul>
      </li>

       <li className="nav-item dropdown">
          <a
    className={`nav-link dropdown-toggle ${isTransportActive ? "active" : ""}`}
    href="#"   


   
    id="transportDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Transport
  </a>
      <ul className="dropdown-menu" aria-labelledby="transportDropdown">
          <li><Link className="dropdown-item" to="/transport/about-transport">About Transport</Link></li>
          <li><Link className="dropdown-item" to="/transport/transport/routes">Routes</Link></li>
          <li><Link className="dropdown-item" to="/transport/transport/fee">Transport Fee</Link></li>
        </ul>
      </li>

      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="admissionsDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          Admissions
        </a>
      <ul className="dropdown-menu" aria-labelledby="admissionsDropdown">
         <li><Link className="dropdown-item" to="/b.tech">B.Tech</Link></li>
          <li><Link className="dropdown-item" to="/m.tech">M.Tech</Link></li>
          <li><Link className="dropdown-item" to="/mba">MBA</Link></li>
        </ul>
      </li>
      
        <li><NavLink to="/naac"className={({ isActive }) =>isActive ? "nav-link active" : "nav-link"}> NAAC</NavLink></li>
        <li><NavLink to="/r-and-d"className={({ isActive }) =>isActive ? "nav-link active" : "nav-link"}>R&D</NavLink></li>
        <li><NavLink to="/alumni" className={({ isActive }) =>isActive ? "nav-link active" : "nav-link"}> Alumni</NavLink></li>
  <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="placementsDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          Placements
        </a>
      <ul className="dropdown-menu" aria-labelledby="placementsDropdown">
         <li><Link className="dropdown-item" to="/b.tech">B.Tech</Link></li>
          <li><Link className="dropdown-item" to="/m.tech">M.Tech</Link></li>
          <li><Link className="dropdown-item" to="/mba">MBA</Link></li>
        </ul>
      </li>
         <li><NavLink to="/contact" className={({ isActive }) =>isActive ? "nav-link active" : "nav-link"}> Contact</NavLink></li>
      
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
