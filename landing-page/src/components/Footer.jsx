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
           <div className="input-group">
            <input type="text"required className="input"/>
             <label className="placeholder">Name</label>
             </div> 
             <div className="input-group
             "> <input type="Email"  className="input"/>
             <label className="placeholder">Email</label>
             </div> 
             <div className="input-group
             ">
             <input type="text" className="input"/>
             <label className="placeholder">Address</label>
             </div> 
             <div className="input-group
             ">
             <input type="text"  className="input resi"/>
             <label className="placeholder">Resiidential/Business</label>
             </div>
             <textarea placeholder="Message"></textarea>

             <button>SEND MESSAGES</button>
        </form>
        <div className="infos">
          <h3><i><CiLocationOn/></i>Office</h3>
          <p>1235 Divi St.#1000 San Francisco, CA 94143</p>

          <h3><i><CiClock2/></i>Hours</h3>
          <p>M-F:8am - 10pm S-S: Closed</p>

          <h3><i><FaPhoneAlt/></i>Call Us</h3>
          <p>(235) 396-0987</p>
        </div>
        <h4>&#169; 2024 Brunoake</h4>
    </div>
  )
}

export default Footer