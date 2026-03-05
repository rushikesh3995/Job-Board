import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* HERO SECTION */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <h3>Smart Work With Job Board</h3>
        <p>
          Need an expert? You are more than welcome to leave your contact
          information and we will be in touch shortly.
        </p>
      </div>

      {/* CONTACT CARDS */}
      <div className="contact-cards">

        <div className="contact-card">
          <img src="https://static.vecteezy.com/system/resources/previews/012/660/859/original/telegram-logo-on-transparent-isolated-background-free-vector.jpg" alt="telegram"/>
          <h4>Telegram</h4>
          <p>You can directly connect with us and send messages through Telegram.</p>
        </div>

        <div className="contact-card">
          <img src="https://cdn.pixabay.com/photo/2017/08/23/11/30/twitter-2672572_1280.jpg" alt="twitter"/>
          <h4>Twitter</h4>
          <p>Follow us on Twitter for updates, announcements, and career tips.</p>
        </div>

        <div className="contact-card">
          <img src="https://as2.ftcdn.net/v2/jpg/04/76/40/09/1000_F_476400933_A4gKwXtlgQFslfSuDvbV35eQcBIDlYjw.jpg" alt="email"/>
          <h4>Email</h4>
          <p>Send us your questions or feedback anytime and we will respond quickly.</p>
        </div>

        <div className="contact-card">
          <img src="https://www.kindpng.com/picc/m/19-195256_whatsapp-icon-whatsapp-logo-jpg-download-hd-png.png" alt="whatsapp"/>
          <h4>WhatsApp</h4>
          <p>Chat with our support team directly on WhatsApp for fast assistance.</p>
        </div>

      </div>


      {/* CONTACT DESCRIPTION */}
      <div className="contact-info">
        <p>
          Welcome to <strong>Job Board</strong>, and thank you for reaching out to us.
          Your message is important, and our team is already reviewing your request.
          We will contact you shortly with the information or support you need.
        </p>

        <p>
          At Job Board, we focus on clear communication, trust, and professional
          guidance to help users connect with the right opportunities.
        </p>

        <ul>
          <li><strong>Quick Response:</strong> Our team replies as soon as possible.</li>
          <li><strong>Friendly Communication:</strong> Simple and helpful support.</li>
          <li><strong>Professional Support:</strong> Guidance for all job-related queries.</li>
          <li><strong>Trust & Transparency:</strong> Honest and clear communication.</li>
          <li><strong>Long-Term Partnership:</strong> Supporting your career journey.</li>
        </ul>

        <p>
          Thank you again for choosing <strong>Job Board</strong>. We look forward
          to helping you achieve your goals and building a long-lasting connection.
        </p>
      </div>

    </div>
  );
}

export default Contact;