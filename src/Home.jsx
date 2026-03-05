import "./Home.css"
import HOMEPage from "./home.jpg"

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${HOMEPage})` }}
      >
        <div className="hero-content">
          <h1>Discover Your Passion with Job Board</h1>
          <p>
            Find jobs that match your skills, connect with trusted employers,
            and build your dream career.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Find Jobs</button>
            <button className="secondary-btn">Post a Job</button>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats">
        <div className="stat">
          <h2>10K+</h2>
          <p>Active Jobs</p>
        </div>

        <div className="stat">
          <h2>5K+</h2>
          <p>Companies</p>
        </div>

        <div className="stat">
          <h2>20K+</h2>
          <p>Job Seekers</p>
        </div>

        <div className="stat">
          <h2>8K+</h2>
          <p>Successful Placements</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>How Job Board Helps You</h2>

        <div className="feature-box">

          <div className="feature">
            <h3>🔍 Smart Search</h3>
            <ul>
              <li>AI-powered job matching</li>
              <li>Filter by location, salary, industry</li>
              <li>Personalized recommendations</li>
            </ul>
          </div>

          <div className="feature">
            <h3>📄 Resume Tools</h3>
            <ul>
              <li>Upload and manage resume easily</li>
              <li>Build professional profiles</li>
              <li>Improve resume visibility</li>
            </ul>
          </div>

          <div className="feature">
            <h3>💼 Employer Connections</h3>
            <ul>
              <li>Verified companies</li>
              <li>One-click job applications</li>
              <li>Connect with recruiters</li>
            </ul>
          </div>

          <div className="feature">
            <h3>🚀 Career Growth</h3>
            <ul>
              <li>Skill assessments</li>
              <li>Learning resources</li>
              <li>Interview preparation tips</li>
            </ul>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="steps">
        <h2>How It Works</h2>

        <div className="step-container">

          <div className="step">
            <h3>1️⃣ Create Profile</h3>
            <p>Sign up and build your professional profile.</p>
          </div>

          <div className="step">
            <h3>2️⃣ Search Jobs</h3>
            <p>Use smart filters to find the best opportunities.</p>
          </div>

          <div className="step">
            <h3>3️⃣ Apply Easily</h3>
            <p>Apply to jobs instantly with one click.</p>
          </div>

          <div className="step">
            <h3>4️⃣ Get Hired</h3>
            <p>Connect with recruiters and start your dream career.</p>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta">
        <h2>Ready to Start Your Career Journey?</h2>
        <p>Join thousands of job seekers finding their dream jobs today.</p>
        <button className="primary-btn1">Get Started</button>
      </section>

      {/* FOOTER */}

      
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
    </>
  );
}

export default Home;