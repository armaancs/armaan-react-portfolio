import './Footer.css'
import './index.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer text-gray-300 py-10 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-6 space-y-8 md:space-y-0">

        {/* Left side - Name / Copyright */}
        <div className="text-center md:text-left pixelify-sans">
          <h2 className="footer-name">Armaan Chowdhury</h2>
          <p className="footer-copy play-regular">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>


        {/* Right side - Links */}
        <div className="flex space-x-6 text-2xl items-center">
          <a href="https://github.com/r0gzz" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/armaan-chowdhury-2075a1337/" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FaLinkedin />
          </a>
          <a href="mailto:armchow312@gmail.com" className="footer-icon">
            <FaEnvelope />
          </a>

          {/* Back to top button */}
          <button 
            onClick={scrollToTop} 
            className="footer-top"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
