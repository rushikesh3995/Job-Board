import "./CreateJob.css";

function ApplyJobs() {
  return (
    <div className="create-job-container">

      <h2>Apply for Job</h2>

      <form className="job-form">

        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required/>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required/>
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" placeholder="Enter your phone number" />
        </div>

        <div className="form-group">
          <label>Upload Resume</label>
          <input type="file" required />
        </div>

        <div className="form-group">
          <label>Portfolio / LinkedIn</label>
          <input type="text" placeholder="Enter your portfolio or LinkedIn link" required />
        </div>

        <div className="form-group">
          <label>Cover Letter</label>
          <textarea rows="4" placeholder="Write a short message to the employer"></textarea>
        </div>

        <button className="submit-btn">Apply Now</button>

      </form>

    </div>
  );
}

export default ApplyJobs;