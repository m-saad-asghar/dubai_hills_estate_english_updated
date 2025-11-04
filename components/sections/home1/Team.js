'use client'
import Link from "next/link"
import { useState } from "react"
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift, FaKey, FaUsers, FaBriefcase, FaPassport, FaCity, FaStar } from "react-icons/fa";

export default function Team() {
    
    return (
        <>
            {/*Start Service One */}
        <section id="map" className="map_container">
            {/* <div className="service-one__shape2" style={{backgroundImage: 'url(assets/img/shape/service-v1-shape2.png)'}}>
            </div> */}
            <div className="">
                <div className="sec-title container">
                    <h2>Dubai Map</h2>
                </div>
                <div className="text-box project_content">
                                 <img src="assets/img/dubai_hills_map.jpg" alt="" className="map_styling"/>
                                </div>
            </div>
        </section>
        {/*End Service One */}
        </>
    )
}
