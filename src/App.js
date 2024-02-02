import './App.css';
import { IoIosMail, IoIosSunny, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram, IoLogoYoutube, IoLogoWhatsapp, IoMdStar, IoMdStarHalf, IoIosArrowRoundForward, IoIosQuote } from "react-icons/io";
import { FaGooglePlusG, FaAngleDown,FaHandPointRight,FaUniversity} from "react-icons/fa";
import { PiStudentFill, PiPencilSimpleLineFill, PiChalkboardTeacherFill, PiEnvelopeOpenFill, PiQuotesFill } from "react-icons/pi";
import img1 from './image/logo.svg';
import img2 from './image/img2.webp';
import img3 from './image/course1.webp';
import img4 from './image/course2.webp';
import img5 from './image/course3.webp';
import img6 from './image/course4.webp';
import img7 from './image/course5.webp';
import img8 from './image/course6.webp';
import img9 from './image/about.jpeg';
import img10 from './image/count.jpg';
import img12 from './image/happy1.jpeg';
import img13 from './image/happy-bg.jpeg';
import img14 from './image/happy-bg1.png';
import img15 from './image/read.png';
import img16 from './image/read1.png';
import img17 from './image/read2.png';
import img18 from './image/read3.png';
import img19 from './image/read4.png';
import img20 from './image/read5.png';
import img21 from './image/std1.png';
import img22 from './image/std2.jpeg';
import img23 from './image/std3.png';
import img24 from './image/std4.png';
import img25 from './image/std5.png';
import img26 from './image/std6.png';
import img27 from './image/logo1.svg';

function App() {
  return (
    <div className='website'>

      {/* TOP-MENU START */}
      <div className="top-menu">
        <div className="d-flex container">
          <div className='d-flex right'>
            <div className='d-flex mail'>
              <IoIosMail className='icon'></IoIosMail>
              <p>info@cdmi.in</p>
            </div>

            <div className='d-flex sun'>
              <IoIosSunny className='icon'></IoIosSunny >
              <p>Verify Certificate</p>
            </div>
          </div>
          <div>
            <p>HAVE ANY QUESTION ? +91 90333 16003</p>
          </div>
          <div>
            <IoLogoFacebook className='socail'></IoLogoFacebook>
            <IoLogoTwitter className='socail'></IoLogoTwitter>
            <FaGooglePlusG className='socail'></FaGooglePlusG>
            <IoLogoLinkedin className='socail'></IoLogoLinkedin>
            <IoLogoInstagram className='socail'></IoLogoInstagram>
            <IoLogoYoutube className='socail'></IoLogoYoutube>
            <IoLogoWhatsapp className='socail'></IoLogoWhatsapp>
          </div>
        </div>
      </div>
      {/* TOP-MENU END */}

      {/* MAIN-MENU START */}
      <div className='menu'>
        <div className='d-flex container'>
          <div className='logo'>
            <img src={img1}></img>
          </div>

          <nav>
            <ul className='main-menu d-flex'>
              <li><a href=''>Home</a></li>
              <li><a href=''>Courses<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
              <li><a href=''>Activities<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
              <li><a href=''>Blog</a></li>
              <li><a href=''>Known Us<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
              <li><a href=''>Get In Touch<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
              <li><a href=''>Student Zone</a></li>
            </ul>
          </nav>
        </div>
      </div>
      {/* MAIN-MENU END */}

      {/* Slider Start */}
      <div className='slider'>
        <img src={img2}></img>
      </div>
      {/* Slider End */}

      {/* CREATIVE COURSE START */}
      <div className='pd-y container course'>
        <p className='course-head'>Creative Courses</p>
        <h1>Offered Courses</h1>

        <div className='d-flex course-img'>
          <div className='w-33'>
            <div className='content'>
              <img src={img3}></img>
              <h2>Development Courses</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-33'>
            <div className='content'>
              <img src={img4}></img>
              <h2>Design Courses</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-33'>
            <div className='content'>
              <img src={img5}></img>
              <h2>Programming IT</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-33'>
            <div className='content'>
              <img src={img6}></img>
              <h2>Trendy Courses</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-33'>
            <div className='content'>
              <img src={img7}></img>
              <h2>Civil-Mech. Engineering</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-33'>
            <div className='content'>
              <img src={img8}></img>
              <h2>Bussiness Development</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className='btn-all-courses'><a href=''>View All Categories<IoIosArrowRoundForward className='arrow'></IoIosArrowRoundForward></a></button>
      </div>
      {/* CREATIVE COURSE END */}

      {/* ABOUT US START */}
      <div className='about pd-y'>
        <div className='d-flex'>
          <div className='about-content'>
            <div className='container'>
              <p className='about-head'>About Us
                <div className='line'></div>
              </p>
              <h1>IT Career in Surat, moving towards the better Tomorrow!</h1>
              <p className='detail'> Creative Design & Multimedia Institute(CDMI)  is a reputed training
                institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All
                types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market
                in 2014 with the goal to help students, working professionals and other interested candidates get that dream job
                or open that desired freelance business in some of the most popular Computer / IT fields.  Our aim is to ease the
                hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
              </p>
              <button className='about-btn'><a href=''>Enroll Now...!<IoIosArrowRoundForward className='arrow'></IoIosArrowRoundForward></a></button>
            </div>
          </div>
          <div className='about-img'>
            <img src={img9}></img>
          </div>
        </div>
      </div>
      {/* ABOUT US END */}

      {/* COUNTING START */}
      <div className='count'>

        <div style={{
          width: '100%',
          height: '230px',
          backgroundImage: `url(${img10})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>

          <div className='container content'>
            <div className='d-flex'>
              <div className='w-25 c-1'>
                <PiStudentFill className='count-icon'></PiStudentFill>
                <h1>14000+</h1>
                <h2>Happy students</h2>
              </div>
              <div className='w-25 c-2'>
                <PiPencilSimpleLineFill className='count-icon'></PiPencilSimpleLineFill>
                <h1>10+</h1>
                <h2>Certification Approval</h2>
              </div>
              <div className='w-25 c-3'>
                <PiChalkboardTeacherFill className='count-icon'></PiChalkboardTeacherFill>
                <h1>70+</h1>
                <h2>Certified Teachers</h2>
              </div>
              <div className='w-25 c-4'>
                <PiEnvelopeOpenFill className='count-icon'></PiEnvelopeOpenFill>
                <h1>9000+</h1>
                <h2>Students Placed</h2>
              </div>
            </div>
          </div>

        </div>

      </div>
      {/* COUNTING END */}

      {/* HAPPY STUDENTS START */}
      <div className='container pd-y'>

        <div className='d-flex'>
          <div className='w-50 happy'>
            <p className='happy-head'>Happy Students
              <div className='line'></div>
            </p>
            <h1>Alumni Speak</h1>
            <PiQuotesFill className='happy-icon'></PiQuotesFill>
            <p className='detail'>Very good Institute for the Computer courses. They are always ready to provide the help required. The courses are very well designed, and lab sessions gives you hands on experience. Once you complete the course, you will be very well equipped to clear interview and land in good job.</p>

            <div className='happy-bottom d-flex'>
              <img src={img12}></img>
              <div className='bottom-con'>
                <h3>Goti Shruti</h3>
                <h5><i>Andriod Developer</i> <span>@ KD Infotech</span></h5>
              </div>
            </div>
          </div>

          <div className='w-50 happy-img'>
            <div style={{
              width: '500px',
              height: '500px',
              backgroundImage: `url(${img13})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>

              <div className='happy1'>
                <img src={img14}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HAPPY STUDENTS END */}

      {/* READ OUR DIFFERENCE START */}
      <div className='read-bg'>
        <div className='pd-y container read'>
          <p className='read-head'>Read Our Difference</p>
          <h1>Why Choose Creative</h1>

          <div className='d-flex flex-wrap read-img'>
            <div className='read-1 read1'>
              <img src={img15}></img>

              <h3>Industry Experts As Trainers</h3>
              <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
            </div>

            <div className='read-1 read2'>
              <img src={img16}></img>

              <h3>Latest Curriculum</h3>
              <p>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</p>
            </div>

            <div className='read-1 read3'>
              <img src={img17}></img>

              <h3>Latest Technology</h3>
              <p>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
            </div>

            <div className='read-1 read4'>
              <img src={img18}></img>

              <h3>Interview Assistance</h3>
              <p>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>
            </div>

            <div className='read-1 read5'>
              <img src={img19}></img>

              <h3>Free Upgradation</h3>
              <p>We will be provided free upgradation for any newer version of the course you have.</p>
            </div>

            <div className='read-1 read6'>
              <img src={img20}></img>

              <h3>Lifetime Support</h3>
              <p>We will provide you lifetime support on all the courses you learned from us.</p>
            </div>
          </div>

        </div>
      </div>
      {/* READ OUR DIFFERENCE END */}

      {/* STUDENT PLACEMENT START*/}
      <div className='pd-y container student'>
        <p className='student-head'>Student Placement</p>
        <h1>Our Recruitment Partners</h1>


        <div className='d-flex std-img'>
          <div className='std'>
            <img src={img21}></img>
          </div>


          <div className='std'>
            <img src={img22}></img>
          </div>


          <div className='std'>
            <img src={img23}></img>
          </div>


          <div className='std'>
            <img src={img24}></img>
          </div>


          <div className='std'>
            <img src={img25}></img>
          </div>


          <div className='std'>
            <img src={img26}></img>
          </div>
        </div>

        <h2>Our Demanded Course -</h2>

        <div className='d-flex flex-wrap btn-demand'>
          <a href=''>Lumion training institute in varachha</a>
          <a href=''>nodejs training institute in Mota Varachha</a>
          <a href=''>best php training in katargam</a>
          <a href=''>python training institute in surat</a>
          <a href=''>Live game development training institute</a>
          <a href=''>Illustrator training in katargam</a>
          <a href=''>Tally accounting training institute</a>
          <a href=''>Unity 3d training institute in katargam</a>
          <a href=''>3d game development training institute in Mota Varachha</a>
          <a href=''>Adobe xd design course</a>
          <a href=''>Lumion training institute in katargam</a>
          <a href=''>Video Editing Training in Surat</a>
          <a href=''>Web design training in varachha</a>
          <a href=''>Android training institute in varachha</a>
          <a href=''>C++ programming language course</a>
          <a href=''>python training institute in varachha</a>
          <a href=''>Web development training institute in varachha</a>
          <a href=''>PHP project company in surat</a>
          <a href=''>ios app training institute in varachha</a>
          <a href=''>Maya 3d animation training institute in surat</a>
          <h5>Show More</h5>
        </div>
      </div>
      {/* STUDENT PLACEMENT END*/}

      {/* FOOTER START */}
      <footer className='footer-bg'>
        <div className='pd-y container d-flex'>
          <div className='footer-p p-1'>
            <img src={img27}></img>
            <p>Creative Design and Multimedia Institute is
              leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
            <h2>Follow Us On</h2>
            <div className='icon'>
              <IoLogoFacebook className='footer-icon'></IoLogoFacebook>
              <IoLogoTwitter className='footer-icon'></IoLogoTwitter>
              <FaGooglePlusG className='footer-icon'></FaGooglePlusG>
              <IoLogoLinkedin className='footer-icon'></IoLogoLinkedin>
              <IoLogoInstagram className='footer-icon'></IoLogoInstagram>
              <IoLogoYoutube className='footer-icon'></IoLogoYoutube>
              <IoLogoWhatsapp className='footer-icon'></IoLogoWhatsapp>
            </div>
          </div>
          <div className='footer-p p-2'>
            <h4>Feature Links</h4>
            <ul>
              <li><FaHandPointRight className='footer-icon'></FaHandPointRight>About Us</li>
              <li><FaHandPointRight className='footer-icon'></FaHandPointRight>Blogs</li>
              <li><FaHandPointRight className='footer-icon'></FaHandPointRight>Join Us</li>
              <li><FaHandPointRight className='footer-icon'></FaHandPointRight>Company Login</li>
              <li><FaHandPointRight className='footer-icon'></FaHandPointRight>Certificate Verification</li>
            </ul>
          </div>
          <div className='footer-p p-3'>
              <h4>Contact Us</h4>
              <h3>HEAD OFFICE - YOGICHOWK</h3>
              <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
              <h5>Mo :<span>+91 90333 16003</span></h5>
              <h3>Other Branches</h3>

              <ul>
                <li><FaUniversity className='footer-icon'></FaUniversity>Katargam</li>
                <li><FaUniversity className='footer-icon'></FaUniversity>Mota Varachha</li>
                <li><FaUniversity className='footer-icon'></FaUniversity>Adajan</li>
                <li><FaUniversity className='footer-icon'></FaUniversity>Navsari</li>
              </ul>
          </div>
        </div>
      </footer>
      {/* FOOTER END */}

      {/* COPYRIGHT START */}
      <div className='copyright'>
        <div className='container'>
            <h3>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</h3>
        </div>
      </div>
      {/* COPYRIGHT END */}

    </div>
  );
}

export default App;
