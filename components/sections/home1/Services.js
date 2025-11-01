'use client'
import Link from "next/link"
import { useState } from "react"
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift, FaKey, FaUsers, FaBriefcase, FaPassport, FaCity, FaStar } from "react-icons/fa";

export default function Pricing() {
    
    return (
        <>
            {/*Start Service One */}
        <section className="service-one" id="why-invest-in-dubai">
            {/* <div className="service-one__shape2" style={{backgroundImage: 'url(assets/img/shape/service-v1-shape2.png)'}}>
            </div> */}
            <div className="container">
                <div className="sec-title">
                    <h2>Why Invest In Dubai?</h2>
                </div>
                <div className="row">
                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            
                            <div className="service-one__single-inner">
                                
                                <div className="icon-box">
                                    {/* <span className="icon-line-chart"></span> */}
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaChartLine className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>High Rental Profits</h2>
                                    <p>Yields of 5–9% annually.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service One Single */}

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            
                            <div className="service-one__single-inner">
                                
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaHouseUser className="icon-plane" size={50}/> 
                                    </span>
                                    {/* <span className="icon-construction-machine"></span> */}
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>Premium Property, Lower Cost</h2>
                                    <p>Luxury at competitive rates.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service One Single */}

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            
                            <div className="service-one__single-inner">
                                
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaKey className="icon-plane" size={50}/> 
                                    </span>
                                    {/* <span className="icon-check-list"></span> */}
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>Tax-Free Ownership</h2>
                                    <p>No property taxes ever.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service One Single */}

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            
                            <div className="service-one__single-inner">
                                
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaGlobe className="icon-plane" size={50}/> 
                                    </span>
                                    {/* <span className="icon-interior-design"></span> */}
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>Global Accessibility</h2>
                                    <p>Direct flights to major cities.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service One Single */}

                     {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            
                            <div className="service-one__single-inner">
                                
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaPlane className="icon-plane" size={50}/> 
                                    </span>
                                    {/* <span className="icon-interior-design"></span> */}
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>Tourism & Lifestyle</h2>
                                    <p>Beaches, malls, attractions & hotels.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service One Single */}

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            
                            <div className="service-one__single-inner">
                                
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaUsers className="icon-plane" size={50}/> 
                                    </span>
                                    {/* <span className="icon-interior-design"></span> */}
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>Safe & Family-Friendly</h2>
                                    <p>One of the safest cities worldwide.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service One Single */}

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            
                            <div className="service-one__single-inner">
                                
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaBriefcase className="icon-plane" size={50}/> 
                                    </span>
                                    {/* <span className="icon-interior-design"></span> */}
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>Business & Trade Hub</h2>
                                    <p>Attractive to global investors.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service One Single */}

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            
                            <div className="service-one__single-inner">
                                
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaPassport className="icon-plane" size={50}/> 
                                    </span>
                                    {/* <span className="icon-interior-design"></span> */}
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>UAE Golden Visa</h2>
                                    <p>Golden & Green Visas for investors.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service One Single */}

                     {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            
                            <div className="service-one__single-inner">
                                
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaCity className="icon-plane" size={50}/> 
                                    </span>
                                    {/* <span className="icon-interior-design"></span> */}
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>Future-Ready City</h2>
                                    <p>Focus on tech, green energy, health & education.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service One Single */}

                     {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            
                            <div className="service-one__single-inner">
                                
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaStar className="icon-plane" size={50}/> 
                                    </span>
                                    {/* <span className="icon-interior-design"></span> */}
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>Exclusive Emaar Rewards</h2>
                                    <p>Platinum & Gold perks for high-value investors.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service One Single */}
                </div>
                <div className="about-one__content-bottom" style={{display: "flex", justifyContent: "center"}}>
                                    <div className="about-one__content-bottom-author-box">
                                       <div className="btn-box">
                            <div className="btn-one">
                                <Link className="thm-btn" href="#contact-form">
                                    <span className="txt">REGISTER INTEREST</span>
                                </Link>
                            </div>
                        </div>
                                    </div>
                                </div>
            </div>
        </section>
        {/*End Service One */}
        </>
    )
}
