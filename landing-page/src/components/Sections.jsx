import ti from "../assets/ti.jpg"
import "./Sections.css"
// icons
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { RxColorWheel } from "react-icons/rx";
import { SlLayers } from "react-icons/sl";
import { BsCloud } from "react-icons/bs";
import { IoShieldHalf } from "react-icons/io5";
import { SlSpeedometer } from "react-icons/sl";
import { MdComputer } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import { LuBarChart2 } from "react-icons/lu";
import { SlGraph } from "react-icons/sl";
import { CiLock } from "react-icons/ci";


const Sections = () => {
  return (
    <div className='sections'>
        <div className="section-1">
        <div className='right'><h2>Professional IT Services & Technology Consulting</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore deserunt saepe amet voluptatem ex eum officia? Dicta rem exercitationem optio quaerat!</p> 
        <button>LEARN MORE</button>
        </div>
       <div className='left'> <img src={ti} alt="" />
       </div>
        
        </div>

      <div className="section-2">
        <div className="text">
          <h2>We Create Fully Connected Systems So You Can Focus On Your Business</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse commodi, doloribus quo dolore, libero consectetur saepe placeat magni in odio suscipit veritatis debitis soluta? Maxime harum quis nemo dignissimos natus?</p>
          <button className="btn">GET STARTED</button>
        </div>
        <div className="circle-container">
       <div className="circle">
          <i className="icon-container position-1"><HiOutlineWrenchScrewdriver/></i>
          <i className="icon-container position-2"><RxColorWheel/></i>
          <i className="icon-container position-3"><SlLayers/></i>
          <i className="icon-container position-4"><BsCloud/></i>
          <i className="icon-container position-5"><IoShieldHalf/></i>
          <i className="icon-container position-6"><SlSpeedometer/></i>
          <i className="icon-container position-7"><MdComputer/></i>
          <i className="icon-container position-8"><FaGears/></i>
          <i className="icon-container position-9"><LuBarChart2/></i>
          <i className="icon-container position-10"><SlGraph/></i>
          <i className="icon-container position-11"><CiLock/></i>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sections