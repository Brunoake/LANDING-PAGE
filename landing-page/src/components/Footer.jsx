import "./Footer.css";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="helps-container">
          <button>LIVE CHAT</button>
          <button>OUR SERVICES</button>
          <button>GET A FREE QUOT</button>
        </div>
        <h2>We're Here To Help</h2>
        <form className="form-container">
            <input type="text" placeholder="name"
             required/>
             <input type="Email" placeholder="Email Address" />
             <input type="text" placeholder="Address"/>
             <input type="text" placeholder="Residential/Business"/>

             <textarea placeholder="Message"></textarea>

             <button>SEND MESSAGES</button>
        </form>
        <div className="infos">
          <h3><i><CiLocationOn/></i>Office</h3>
          <p>1235 Divi St.#1000 San Francisco, CA 94143</p>

          <h3><CiClock2/>Hours</h3>
          <p>M-F:8am - 10pm S-S: Closed</p>

          <h3><FaPhoneAlt/>Call Us</h3>
          <p>(235) 396-0987</p>
        </div>
    </div>
  )
}

export default Footer