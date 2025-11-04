'use client'
import Link from "next/link"
import { useState } from "react"
import TeamsListing from "@/components/TeamListing";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift, FaKey, FaUsers, FaBriefcase, FaPassport, FaCity, FaStar } from "react-icons/fa";

export default function Projects() {
    
    return (
        <>
            {/*Start Service One */}
        <section className="why-one" id="why-choose-emaar">
            {/* <div className="service-one__shape2" style={{backgroundImage: 'url(assets/img/shape/service-v1-shape2.png)'}}>
            </div> */}
            <div className="container">
                <div className="sec-title">
                    <h2>Why Emaar?</h2>
                </div>
                <div className="text-box project_content">
                                    <p>Emaar Properties stands as a global leader in real estate, renowned for creating integrated communities and shaping the future of modern living. Owning an Emaar property means more than just investing — it’s about trusting a reputable name, enjoying a premium lifestyle, and being part of a thriving community in a city that turns aspirations into reality.</p>
                                </div>

                                <TeamsListing/>
            </div>
        </section>
        </>
    )
}
