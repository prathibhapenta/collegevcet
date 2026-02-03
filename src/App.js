import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Aboutus from './components/Aboutus/Aboutus';
import Iqac from './components/IQAC/Iqac';
// import CampusLife from './components/CampusLife';
import Naac from './components/NAAC/Naac';
import Rd from './components/RAndD/Rd';
import Contact from './components/Contact/Contact';
import Alumni from './components/Alumni/Alumni';
import AboutCse from "./components/Courses/BTech/Cse/AboutCse";
import Faculty from './components/Courses/BTech/Cse/Faculty';
import Hod from './components/Courses/BTech/Cse/Hod';
import Labs from './components/Courses/BTech/Cse/Labs';
import Syllabus from './components/Courses/BTech/Cse/Syllabus';
import AboutEee from './components/Courses/BTech/Eee/AboutEee';
import EeeFaculty from './components/Courses/BTech/Eee/EeeFaculty';
import EeeHod from './components/Courses/BTech/Eee/EeeHod';
import EeeLabs from './components/Courses/BTech/Eee/EeeLabs';
import EeeSyllabus from './components/Courses/BTech/Eee/EeeSyllabus';
import AboutAiml from './components/Courses/BTech/Aiml/AboutAiml';
import AimlFaculty from './components/Courses/BTech/Aiml/AimlFaculty';
import AimlHod from './components/Courses/BTech/Aiml/AimlHod';
import AimlLabs from './components/Courses/BTech/Aiml/AimlLabs';
import AimlSyllabus from './components/Courses/BTech/Aiml/AimlSyllabus';
import AboutCivil from './components/Courses/BTech/Civil/AboutCivil';
import CivilFaculty from './components/Courses/BTech/Civil/CivilFaculty';
import CivilLHod from './components/Courses/BTech/Civil/CivilLHod';
import CivilLabs from './components/Courses/BTech/Civil/CivilLabs';
import CivilSyllabus from './components/Courses/BTech/Civil/CivilSyllabus';
import AboutCseAIML from './components/Courses/BTech/CseAIML/AboutCseAIML';
import CseAIMLFaculty from './components/Courses/BTech/CseAIML/CseAIMLFaculty';
import CseAIMLHod from './components/Courses/BTech/CseAIML/CseAIMLHod';
import CseAIMLLab from './components/Courses/BTech/CseAIML/CseAIMLLab';
import CseAIMLSyllabus from './components/Courses/BTech/CseAIML/CseAIMLSyllabus';
import AboutCseDs from './components/Courses/BTech/CseDs/AboutCseDs';
import CseDsFaculty from './components/Courses/BTech/CseDs/CseDsFaculty';
import CseDsHod from './components/Courses/BTech/CseDs/CseDsHod';
import CseDsLabs from './components/Courses/BTech/CseDs/CseDsLabs';
import CseDsSyllabus from './components/Courses/BTech/CseDs/CseDsSyllabus';
import AboutEce from './components/Courses/BTech/Ece/AboutEce';
import EceFaculty from './components/Courses/BTech/Ece/EceFaculty';
import EceHod from './components/Courses/BTech/Ece/EceHod';
import EceLabs from './components/Courses/BTech/Ece/EceLabs';
import EceSyllabus from './components/Courses/BTech/Ece/EceSyllabus';
import AboutHS from './components/Courses/BTech/Hs/AboutHS';
import HsFaculty from './components/Courses/BTech/Hs/HsFaculty';
import HsHod from './components/Courses/BTech/Hs/HsHod';
import HsLabs from './components/Courses/BTech/Hs/HsLabs';
import HsSyllabus from './components/Courses/BTech/Hs/HsSyllabus';
import AboutMe from './components/Courses/BTech/Me/AboutMe';
import MeFaculty from './components/Courses/BTech/Me/MeFaculty';
import MeHod from './components/Courses/BTech/Me/MeHod';
import MeLabs from './components/Courses/BTech/Me/MeLabs';
import MeSyllabus from './components/Courses/BTech/Me/MeSyllabus';
import EmbeddedSystem from './components/Courses/MTech/EmbeddedSystem';
import ComputerScienceEngineering from './components/Courses/MTech/ComputerScienceEngineering';
import AboutMBA from './components/Courses/MBA/AboutMBA';
import MbaFaculty from './components/Courses/MBA/MbaFaculty';
import MbaHod from './components/Courses/MBA/MbaHod';
import AICTEApproval from './components/Aboutus/AICTEApproval';
import CollegeAcademicCouncil from './components/Aboutus/CollegeAcademicCouncil';
import EGovernance from './components/Aboutus/EGovernance';
import GovernanceManual from './components/Aboutus/GovernanceManual';
import GoverningBody from './components/Aboutus/GoverningBody';
import JNTUHAffiliation from './components/Aboutus/JNTUHAffiliation';
import Mou from './components/Aboutus/Mou';
import NAACCertificate from './components/Aboutus/NAACCertificate';
import OrganizationalChart from './components/Aboutus/OrganizationalChart';
import Principal from './components/Aboutus/Principal';
import SelfDeclaration from './components/Aboutus/SelfDeclaration';
import TheCollege from './components/Aboutus/TheCollege';
import TheManagement from './components/Aboutus/TheManagement';
import Undertaking from './components/Aboutus/Undertaking';
import AdministrativeBlock from './components/Infrascture/AdministrativeBlock';
import DigitalLibrary from './components/Infrascture/DigitalLibrary';
import Library from './components/Infrascture/Library';
import Exambranch from './components/Infrascture/Exambranch';
import AboutTransport from './components/Transport/AboutTransport';
import TransportRoutes from './components/Transport/TransportRoutes';
import TransportFee from './components/Transport/TransportFee';
import Auditorium from './components/CampusLife/Auditorium';
import Cafeteria from './components/CampusLife/Cafeteria';
// import Drawinghall from './components/CampusLife/Drawinghall';
import Internet from './components/CampusLife/Internet';
import MedicalFacility from './components/CampusLife/MedicalFacility';
import PotableWater from './components/CampusLife/PotableWater';
// import Seminarhall from './components/CampusLife/Seminarhall';
import Sports from './components/CampusLife/Sports';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
const App = () => {
   const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div>
     
       {!isHome && <Navbar />}
       <div className="main-content">
      <Routes>
        
        <Route path='/' element = {<Home/>}/>
        <Route path='/aboutus' element = {<Aboutus/>} />
         <Route path="/iqac" element={<Iqac />} />
         {/* <Route path= "/campuslife" element = {<CampusLife/>} /> */}
         <Route path= "naac" element = {<Naac/>}/>
        <Route path="/r-and-d" element={<Rd />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/courses/btech/cse/about" element={<AboutCse />} />
        <Route path="/courses/btech/cse/labs" element={<Labs />} />
        <Route path="/courses/btech/cse/hod" element={<Hod />} />
        <Route path="/courses/btech/cse/faculty" element={<Faculty />} />
        <Route path="/courses/btech/cse/syllabus" element={<Syllabus />} />
        <Route path="/courses/btech/aiml/about" element={<AboutAiml />} />
        <Route path="/courses/btech/aiml/labs" element={<AimlLabs />} />
        <Route path="/courses/btech/aiml/hod" element={<AimlHod />} />
        <Route path="/courses/btech/aiml/faculty" element={<AimlFaculty/>} />
        <Route path="/courses/btech/aiml/syllabus" element={<AimlSyllabus />} />
        <Route path="/courses/btech/eee/about" element={<AboutEee />} />
        <Route path="/courses/btech/eee/labs" element={<EeeLabs />} />
        <Route path="/courses/btech/eee/hod" element={<EeeHod />} />
        <Route path="/courses/btech/eee/faculty" element={<EeeFaculty/>} />
        <Route path="/courses/btech/eee/syllabus" element={<EeeSyllabus />} />
        <Route path="/courses/btech/civil/about" element={<AboutCivil />} />
        <Route path="/courses/btech/civil/labs" element={<CivilLabs/>} />
        <Route path="/courses/btech/civil/hod" element={<CivilLHod />} />
        <Route path="/courses/btech/civil/faculty" element={<CivilFaculty/>} />
        <Route path="/courses/btech/civil/syllabus" element={<CivilSyllabus />} />
        <Route path="/courses/btech/cseaiml/about" element={<AboutCseAIML />} />
        <Route path="/courses/btech/cseaiml/faculty" element={<CseAIMLFaculty/>} />
        <Route path="/courses/btech/cseaiml/hod" element={<CseAIMLHod />} />
        <Route path="/courses/btech/cseaiml/labs" element={<CseAIMLLab/>} />
        <Route path="/courses/btech/cseaiml/syllabus" element={<CseAIMLSyllabus />} />
        <Route path="/courses/btech/cseds/about" element={<AboutCseDs />} />
        <Route path="/courses/btech/cseds/faculty" element={<CseDsFaculty/>} />
        <Route path="/courses/btech/cseds/hod" element={<CseDsHod />} />
        <Route path="/courses/btech/cseds/labs" element={<CseDsLabs/>} />
        <Route path="/courses/btech/cseds/syllabus" element={<CseDsSyllabus />} />
        <Route path="/courses/btech/ece/about" element={<AboutEce />} />
        <Route path="/courses/btech/ece/faculty" element={<EceFaculty/>} />
        <Route path="/courses/btech/ece/hod" element={<EceHod />} />
        <Route path="/courses/btech/ece/labs" element={<EceLabs/>} />
        <Route path="/courses/btech/ece/syllabus" element={<EceSyllabus />} />
        <Route path="/courses/btech/hs/about" element={<AboutHS />} />
        <Route path="/courses/btech/hs/faculty" element={<HsFaculty/>} />
        <Route path="/courses/btech/hs/hod" element={<HsHod />} />
        <Route path="/courses/btech/hs/labs" element={<HsLabs/>} />
        <Route path="/courses/btech/hs/syllabus" element={<HsSyllabus />} />
        <Route path="/courses/btech/me/about" element={<AboutMe />} />
        <Route path="/courses/btech/me/faculty" element={<MeFaculty/>} />
        <Route path="/courses/btech/me/hod" element={<MeHod />} />
        <Route path="/courses/btech/me/labs" element={<MeLabs/>} />
        <Route path="/courses/btech/me/syllabus" element={<MeSyllabus />} />
        <Route path="/courses/mtech/embedded-system" element={<EmbeddedSystem />} />
        <Route path="/courses/mtech/cse"element={<ComputerScienceEngineering />}/>
        <Route path="/courses/mba/about" element={<AboutMBA />} />
        <Route path="/courses/mba/faculty" element={<MbaFaculty />} />
        <Route path="/courses/mba/hod" element={<MbaHod />} />
           {/* ABOUT US ROUTES */}
        <Route path="/about-us/the-college" element={<TheCollege />} />
        <Route path="/about-us/management" element={<TheManagement />} />
        <Route path="/about-us/principal" element={<Principal />} />
        <Route path="/about-us/organizational-chart" element={<OrganizationalChart />} />
        <Route path="/about-us/governance-manual" element={<GovernanceManual />} />
        <Route path="/about-us/governing-body" element={<GoverningBody />} />
        <Route path="/about-us/e-governance" element={<EGovernance />} />
        <Route path="/about-us/college-academic-council" element={<CollegeAcademicCouncil />}/>
        <Route path="/about-us/jntuh-affiliation" element={<JNTUHAffiliation />} />
        <Route path="/about-us/aicte-approval" element={<AICTEApproval />} />
        <Route path="/about-us/naac-certificate" element={<NAACCertificate />} />
        <Route path="/about-us/self-declaration" element={<SelfDeclaration />} />
        <Route path="/about-us/undertaking" element={<Undertaking />} />
     
        <Route path="/about-us/mou" element={<Mou />} />
        <Route path="/infrascture/administrative-block" element={<AdministrativeBlock />} />
        <Route path="/infrascture/library" element={<Library />} />
        <Route path="/infrascture/digital-library" element={<DigitalLibrary />} />
        <Route path="/infrascture/exam-branch" element={<Exambranch />} />
        {/* campus Life*/}
        
          <Route path="/campuslife/auditorium" element={<Auditorium />} />
          <Route path="/campuslife/cafeteria" element={<Cafeteria />} />
          {/* <Route path="/campuslife/drawinghall" element={<Drawinghall />} /> */}
          <Route path="/campuslife/internet" element={<Internet />} />
          <Route path="/campuslife/medical-facility" element={<MedicalFacility />} />
          <Route path="/campuslife/potable-water" element={<PotableWater />} />
          {/* <Route path="/campuslife/seminarhall" element={<Seminarhall />} /> */}
          <Route path="/campuslife/sports" element={<Sports />} />
        {/* transport*/}
        <Route path="/transport/about-transport" element={<AboutTransport />} />
        <Route path="/transport/transport/routes" element={<TransportRoutes />} />
        <Route path="/transport/transport/fee" element={<TransportFee />} />

      </Routes>
      <ScrollToTop />
      <Footer/>
  
    </div>
    </div>
  )
}

export default App
