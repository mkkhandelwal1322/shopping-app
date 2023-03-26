import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="info-container">
        <div className="contact-nav">
          <div>
            <i className="fa fa-phone contact-nav-icon" aria-hidden="true"></i>
            <span>Call : +91 1234567890</span>
          </div>
          <div>
            <i
              className="fa fa-envelope contact-nav-icon"
              aria-hidden="true"
            ></i>
            <span>Email : demo@gmail.com</span>
          </div>
          <div>
            <i
              className="fa fa-map-marker contact-nav-icon"
              aria-hidden="true"
            ></i>
            <span>Location : xyz , India</span>
          </div>
        </div>
        <div className="social-box">
          <a href="https://www.facebook.com/">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://linkedin.com">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className="footer-container">
        <p>&copy; All Rights Reserved 2022</p>
      </div>
    </>
  );
};

export default Footer;
