import { useState } from "react";
import "./Blog.css";

function Blog() {

  const [openCategory, setOpenCategory] = useState(null);
  const [openPost, setOpenPost] = useState(null);

  const toggleCategory = (id) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  const togglePost = (id) => {
    setOpenPost(openPost === id ? null : id);
  };

  return (
    <div className="blog-page">

      {/* SEARCH BAR */}
      <div className="blog-search">
        <input type="text" placeholder="Search blog articles..." />
      </div>

      <div className="blog-layout">

        {/* MAIN BLOG */}
        <div className="blog-main">

          <img
            src="https://static.vecteezy.com/system/resources/previews/023/373/752/non_2x/cheerful-business-lady-working-on-laptop-in-office-asian-happy-beautiful-businesswoman-in-formal-suit-work-in-workplace-attractive-female-employee-office-worker-smile-photo.jpg"
            alt="blog"
          />

          <h2>Online Tips to Make Money in Retirement From Home</h2>

          <p>
            Retirement does not mean the end of productivity. In today's digital
            world, there are many ways seniors can earn money online from the
            comfort of their homes. With the right tools and guidance, anyone
            can build an additional income stream.
          </p>

          <p>
            Freelancing platforms, online tutoring, content writing, and
            consulting are some of the most popular ways retirees generate
            income. Many companies are also looking for experienced
            professionals who can mentor younger employees remotely.
          </p>

          <p>
            Another great opportunity is starting a small online business such
            as blogging, selling handmade products, or providing coaching
            services. These options allow retirees to remain active while
            maintaining a flexible schedule.
          </p>

        </div>


        {/* SIDEBAR */}
        <div className="blog-sidebar">

          {/* Categories */}
          <div className="sidebar-box">
            <h3>Categories</h3>

            <div className="dropdown">
              <h4 onClick={() => toggleCategory(1)}>Career Advice</h4>
              {openCategory === 1 && (
                <p>
                  Learn how to grow professionally, improve workplace skills,
                  and make smart career decisions for long-term success.
                </p>
              )}
            </div>

            <div className="dropdown">
              <h4 onClick={() => toggleCategory(2)}>Job Search</h4>
              {openCategory === 2 && (
                <p>
                  Discover strategies to find the right job faster, build
                  professional networks, and apply effectively.
                </p>
              )}
            </div>

            <div className="dropdown">
              <h4 onClick={() => toggleCategory(3)}>Interview Tips</h4>
              {openCategory === 3 && (
                <p>
                  Prepare for interviews with confidence by learning common
                  questions and effective answering techniques.
                </p>
              )}
            </div>

            <div className="dropdown">
              <h4 onClick={() => toggleCategory(4)}>Remote Work</h4>
              {openCategory === 4 && (
                <p>
                  Remote work is growing rapidly. Learn productivity tips,
                  tools, and best practices for working from home.
                </p>
              )}
            </div>

            <div className="dropdown">
              <h4 onClick={() => toggleCategory(5)}>Freelancing</h4>
              {openCategory === 5 && (
                <p>
                  Freelancing offers flexibility and independence. Explore
                  platforms, pricing strategies, and client management tips.
                </p>
              )}
            </div>

          </div>


          {/* Popular Posts */}
          <div className="sidebar-box">
            <h3>Popular Posts</h3>

            <div className="dropdown">
              <h4 onClick={() => togglePost(1)}>
                How to Build a Strong Resume
              </h4>
              {openPost === 1 && (
                <p>
                  A strong resume highlights your skills, achievements,
                  and experience to attract recruiters quickly.
                </p>
              )}
            </div>

            <div className="dropdown">
              <h4 onClick={() => togglePost(2)}>
                Top 10 Interview Questions
              </h4>
              {openPost === 2 && (
                <p>
                  Practice the most common interview questions and prepare
                  confident answers to impress hiring managers.
                </p>
              )}
            </div>

            <div className="dropdown">
              <h4 onClick={() => togglePost(3)}>
                Best Remote Jobs in 2025
              </h4>
              {openPost === 3 && (
                <p>
                  Remote careers are expanding rapidly across industries
                  including tech, design, and marketing.
                </p>
              )}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Blog;