import React from 'react'
import { SlWrench } from "react-icons/sl";
import { SlPieChart } from "react-icons/sl";
import { SlGlobe } from "react-icons/sl";
import { SlLayers } from "react-icons/sl";
import { TfiCloud } from "react-icons/tfi";
import { IoShieldHalf } from "react-icons/io5";
import './Body.css'

const Body = () => {
  return (
    <div className='container'>
        <h1>What We Do</h1>

        <div className="box-container">
            <div className="box corprim">
                <i><SlWrench /></i>
                <h3>Laptop Repair / Desktop Repair</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ipsam fugiat laboriosam quae aperiam officia aspernatur! Et eligendi </p>
            </div>
            <div className="box">
            <i><SlPieChart/></i>
            <h3>Virus and Spyware Removal</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ipsam fugiat laboriosam quae aperiam officia aspernatur! Et eligendi </p>
            </div>
            <div className="box">
           <i> <SlLayers/></i>
            <h3>Data Recovery and Backup Plan</h3>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ipsam fugiat laboriosam quae aperiam officia aspernatur! Et eligendi </p>
            </div>
            <div className="box">
                <i><SlGlobe /></i>
            <h3>Network Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ipsam fugiat laboriosam quae aperiam officia aspernatur! Et eligendi </p>
                </div>
            <div className="box corsecond">
                <i><TfiCloud/></i>
            <h3>Cloud Services</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ipsam fugiat laboriosam quae aperiam officia aspernatur! Et eligendi </p></div>
            <div className="box cortree">
                 <i>
                <IoShieldHalf/></i>
            <h3>Cyber Security</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ipsam fugiat laboriosam quae aperiam officia aspernatur! Et eligendi </p></div>
        </div>
    </div>
  )
}

export default Body