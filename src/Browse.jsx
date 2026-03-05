import "./Browse.css";

function Browse() {
  return (
    <>
      <div className="browse-page">

        {/* HERO */}
        <section className="browse-hero">
          <h1>Your Career, Powered by AI</h1>
          <p>Job Board transforms the way you discover, apply, and grow.</p>
        </section>


        {/* HOW IT WORKS */}
        <section className="browse-features">
          <h2>How Job Finder Works For You</h2>

          <div className="browse-feature-grid">

            <div className="browse-feature-card">
              <h4>1. Smart Search</h4>
              <p>AI matches your skills and passions with the perfect job opportunities.</p>
            </div>

            <div className="browse-feature-card">
              <h4>2. AI Resume Builder</h4>
              <p>Create professional resumes that attract recruiters.</p>
            </div>

            <div className="browse-feature-card">
              <h4>3. Employer Connections</h4>
              <p>Connect with verified recruiters and apply instantly.</p>
            </div>

            <div className="browse-feature-card">
              <h4>4. Career Growth</h4>
              <p>Interview preparation and skill development resources.</p>
            </div>

            <div className="browse-feature-card">
              <h4>5. Seamless Experience</h4>
              <p>Track applications and receive notifications in real time.</p>
            </div>

            <div className="browse-feature-card">
              <h4>6. Security & Trust</h4>
              <p>Your data and job searches are always secure.</p>
            </div>

          </div>
        </section>


        {/* JOB CATEGORIES */}
        <section className="browse-categories">
          <h2>Popular Job Categories</h2>

          <div className="browse-category-grid">
            <div className="browse-category-card">💻 IT & Software</div>
            <div className="browse-category-card">📊 Data Science</div>
            <div className="browse-category-card">🎨 Design</div>
            <div className="browse-category-card">📈 Marketing</div>
            <div className="browse-category-card">🏦 Finance</div>
            <div className="browse-category-card">⚙ Engineering</div>
          </div>
        </section>


        {/* STATS */}
        <section className="browse-stats">
          <h2>Platform Impact</h2>

          <div className="browse-stats-grid">
            <div className="browse-stat-box">
              <h3>10K+</h3>
              <p>Active Jobs</p>
            </div>

            <div className="browse-stat-box">
              <h3>5K+</h3>
              <p>Companies</p>
            </div>

            <div className="browse-stat-box">
              <h3>50K+</h3>
              <p>Job Seekers</p>
            </div>

            <div className="browse-stat-box">
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </section>


        {/* TESTIMONIAL */}
        <section className="browse-testimonial">
          <h2>What Our Users Say</h2>

          <div className="browse-testimonial-card">
            <p>
              "Job Board helped me land my dream job within two weeks.
              The AI job matching feature is amazing!"
            </p>
            <h4>- Software Developer</h4>
          </div>
        </section>


      
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
    </>
  );
}

export default Browse;