import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";

function Img(){
    return (
     <>
     <div/>    

        <div className="underimg">
        <br />
        <br />
        <br />
        <br />
        <br />
          <h3 style={{margin:"130px 10px 5px 80px"}}>4536+ Jobs Listed in Your City</h3>
        <h1 style={{margin:"0px 10px 5px 80px"}}>Find Your Dream Job Today</h1>
        <p style={{margin:"0px 10px 5px 80px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo consequatur reiciendis vitae necessitatibus!</p>

          <button type="button" class="btn btn-success" style={{margin:"0px 10px 5px 80px"}}>Upload Your Resume</button>
          </div>

    
          

      

        
 
  <div>
    <h3 style={{ textAlign: "center" }}>Our Top Company</h3>
    <h1 style={{ textAlign: "center" }}>Our Top 3 Company</h1>

    <div className="container mt-4">
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/11/16140212/L2aCmYvS-amazon1-1200x675-1.jpg"
              className="card-img-top"
              alt="Company 1"
            />
            <div className="card-body">
              <h5 className="card-title">Company One</h5>
              <p className="card-text">
                Leading tech innovator with global impact.
              </p>
              <a href="#" className="btn btn-primary">
                Explore Jobs
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card" >
            <img
              src="https://www.placementstore.com/wp-content/uploads/Apple-Career.jpg"
              className="card-img-top"
              alt="Company 2"
            />
            <div className="card-body">
              <h5 className="card-title">Company Two</h5>
              <p className="card-text">
                Fast-growing startup with exciting opportunities.
              </p>
              <a href="#" className="btn btn-primary">
                Explore Jobs
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://www.recruitmenthub.agency/wp-content/uploads/2023/11/wipro-hiring-2023.webp"
              className="card-img-top"
              alt="Company 3"
            />
            <div className="card-body">
              <h5 className="card-title">Company Three</h5>
              <p className="card-text">
                Trusted brand with a strong legacy.
              </p>
              <a href="#" className="btn btn-primary">
                Explore Jobs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



<br />
<br />
         <footer>

        

  <footer className="footer"/>
  <div className="footer-content"/>
    <div className="footer-form">
      <input type="text" placeholder="Search Keyword" className="input-box" />

      <select name="locations" className="select-box">
        <option value="">Location</option>
        <option value="pune">Pune</option>
        <option value="mumbai">Mumbai</option>
        <option value="delhi">Delhi</option>
        <option value="nashik">Nashik</option>
        <option value="kolkata">Kolkata</option>
        <option value="bangalore">Bangalore</option>
      </select>

      <select name="category" className="select-box">
        <option value="">Category</option>
        <option value="Front end">Front end</option>
        <option value="Back end">Back end</option>
        <option value="MERN developer">MERN Developer</option>
        <option value="Full stack">Full Stack</option>
      </select>

      <button type="button" className="btn btn-success">Search Job</button>
    </div > 
     
 </footer>

        </>
    )
}

export default Img;