import "./Job.css";
import { FaUserPlus, FaSearch, FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";
import jobImage from "./Job-Board-Square-Image.png";
function Job() {
  return (
    <div>



      <div className="hero">

        <h2>
          Find Your Dream Job Today With <strong>Job Board</strong>
        </h2>

        <p>India's Hidden Job Market, Unlocked</p>

        {/* Search Box */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Skills, job title or company"
          />

          <input
            type="text"
            placeholder="Location"
          />

          <button>Search</button>
        </div>

        {/* Steps Section */}
        <div className="midd">

          <h2>Get Your Dream Job in 3 Simple Steps</h2>

          <div className="steps">

            <div className="step">
              <FaUserPlus className="icon" />
              <h3>
                <Link to="/Register">Create Profile</Link>
              </h3>
              <p>Create your professional profile and upload your resume.</p>
            </div>

            <div className="step">
              <FaSearch className="icon" />
              <h3>
                <Link to="/Applayjobs">Apply for Jobs</Link>
              </h3>
              <p>Browse thousands of job listings and apply easily.</p>
            </div>

            <div className="step">
              <FaBriefcase className="icon" />
              <h3>
                <Link to="/gethired">Get Hired</Link>
              </h3>
              <p>Connect with companies and start your career.</p>
            </div>

          </div>

        </div>

        {/* Featured Jobs Section */}

        <div className="jobs-feature">

          <h2 className="section-title">Latest Job Openings</h2>
          <p className="section-subtitle">
            Explore the newest opportunities from top companies
          </p>

          <div className="jobs-container">

            <div className="job-card">
              <h3>Frontend Developer</h3>
              <p className="company">Tech Solutions Pvt Ltd</p>
              <p className="location">Pune, India</p>
              <p className="salary">₹4L - ₹7L</p>
              <Link to="/Applayjobs">
              <button className="apply-btn">Apply Now</button>
              </Link>
              
            </div>

            <div className="job-card">
              <h3>Java Backend Developer</h3>
              <p className="company">Innovate Systems</p>
              <p className="location">Remote</p>
              <p className="salary">₹5L - ₹9L</p>
                <Link to="/Applayjobs">
              <button className="apply-btn">Apply Now</button>
              </Link>
            </div>

            <div className="job-card">
              <h3>React <br /> Developer</h3>
              <p className="company">NextGen Tech</p>
              <p className="location">Bangalore</p>
              <p className="salary">₹6L - ₹10L</p>
                <Link to="/Applayjobs">
              <button className="apply-btn">Apply Now</button>
              </Link>
            </div>

          </div>


                <section className="membership-section">

      <div className="membership-container">

        {/* Left Image Area */}
        <div className="membership-left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="membership"
          />
        </div>

        {/* Right Content */}
        <div className="membership-right">

          <h2>Learn & Level Up Your Skills</h2>

          <p>
            Unlock Limitless Possibilities with a Lifetime Membership Pass!
          </p>

          <div className="membership-features">
            <span>✔ Premium Services</span>
            <span>✔ Exclusive Perks</span>
            <span>✔ Priority Support</span>
          </div>

          <button className="explore-btn">
            Explore Now
          </button>

        </div>

      </div>

    </section>


          <section className="why-section">

            <div className="why-container">

              {/* Left Text */}
              <div className="why-text">

                <h2>Why Job Board?</h2>

                <p className="why-desc">
                  Job Board connects talented job seekers with companies looking for
                  the right people. Our platform makes job searching simple, fast,
                  and reliable.
                </p>

                <div className="why-points">

                  <p>✔ Access hundreds of job opportunities from trusted companies.</p>
                  <p>✔ Create your profile once and apply to multiple jobs easily.</p>
                  <p>✔ Find jobs that match your skills and experience.</p>
                  <p>✔ Start your career journey with opportunities across India.</p>

                </div>

              </div>

              {/* Right Image */}
              <div className="why-image">
                <img src={jobImage} alt="Job Board" />
              </div>

            </div>

          </section>


        </div>

      </div>

      <footer className="footer">

  <div className="footer-container">

    <div className="footer-about">
      <h2 className="footer-logo">Job Board</h2>
      <p>
        Find the best jobs, connect with top companies, and start
        your career journey with our smart job search platform.
      </p>
    </div>

    <div className="footer-links">
      <h3>Explore</h3>
      <a href="/">Home</a>
      <a href="/jobs">Find Jobs</a>
      <a href="/register">Create Profile</a>
      <a href="/postjob">Post Job</a>
    </div>

    <div className="footer-links">
      <h3>Resources</h3>
      <a href="#">Career Advice</a>
      <a href="#">Interview Tips</a>
      <a href="#">Help Center</a>
      <a href="#">Privacy Policy</a>
    </div>

    <div className="footer-contact">
      <h3>Contact</h3>
      <p>📍 India</p>
      <p>📧 support@jobboard.com</p>
      <p>📞 +91 98765 43210</p>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} Job Board. All rights reserved.</p>
  </div>

</footer>
     </div>
     

  );
}

export default Job;
