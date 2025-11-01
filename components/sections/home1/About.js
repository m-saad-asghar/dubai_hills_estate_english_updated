import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"
export default function About() {
    return (
        <>
            {/*Start About One */}
            <section className="about-one" id="welcome-to-dubai">
                {/* <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div> */}
                <div className="container">
                    <div className="row">
                        {/*Start About One Img */}
                        <div className="col-xl-5 wow animated fadeInRight full_height" data-wow-delay="0.1s">
                            <div className="about-one__img" style={{height: 500}}>
                                <div className="inner full_height">
                                    <img src="assets/img/gallery/dubai_hills_estate_about_us.png" alt="Welcome to Dubai Hills Estate" className="full_height"/>
                                </div>
                                {/* <div className="experience-box">
                                    <div className="counter-box">
                                        <h2 className="count">
                                            <CounterUp end={10}/><span style={{fontSize: 20}}>%</span>
                                        </h2>
                                        
                                    </div>
                                    <div className="text-box">
                                        <p>DOWN PAYMENT</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {/*End About One Img */}

                        {/*Start About One Content */}
                        <div className="col-xl-7 wow animated fadeInLeft" data-wow-delay="0.1s">
                            <div className="about-one__content">
                                <div className="sec-title">
                                    {/* <div className="sub-title">
                                        <h5>About Company</h5>
                                    </div> */}
                                    <h2>Welcome To Dubai Hills Estate</h2>
                                </div>

                                <div className="text-box">
                                    <p>Home to iconic landmarks like Dubai Creek Marina and the Ras Al Khor Wildlife Sanctuary, Dubai Creek Harbour blends urban sophistication with natural beauty. Stroll along peaceful lagoons, enjoy waterfront dining, and take in panoramic skyline views.</p><br/>
                                    <p>Perfectly connected to Downtown Dubai, Dubai International Airport, and the upcoming Metro expansion, it offers unmatched convenience and lifestyle.</p><br/>
                                    <p>Discover elegant apartments, penthouses, and hotels including Vida Creek Harbour, Address Harbour Point, and Palace Residences — all offering world-class amenities, retail, and leisure experiences in one vibrant waterfront destination.</p><br/>
                                </div>

                                {/* <div className="about-one__content-progress">
                                    <div className="about-one__content-progress-single">
                                        <div className="title">
                                            <h4>Design</h4>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner1 count-bar" data-percent="80%">
                                                <div className="count-text">80%</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="about-one__content-progress-single mb0">
                                        <div className="title">
                                            <h4>Architect</h4>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner2 count-bar" data-percent="90%">
                                                <div className="count-text style2">90%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                         <div className="about-one__content-bottom centerize" style={{display: "flex", justifyContent: "center"}}>
                                    <div className="about-one__content-bottom-author-box">
                                       <div className="btn-box">
                            <div className="btn-one">
                                <Link className="thm-btn" href="#contact-form">
                                    <span className="txt">REGISTER INTEREST</span>
                                </Link>
                            </div>
                        </div>

                                        {/* <div className="author-info">
                                            <div className="img-box">
                                                <img src="assets/img/about/about-v1-img2.jpg" alt=""/>
                                            </div>
                                            <div className="signature-box">
                                                <img src="assets/img/about/signature-1.png" alt=""/>
                                            </div>
                                        </div> */}
                                    </div>
                                    {/* <div className="text">
                                        <h4>Do you have any project on your mind? Call Us: <Link href="tel:123456789">+123
                                                456789</Link></h4>
                                    </div> */}
                                </div>
                        {/*End About One Content */}
                    </div>
                </div>
            </section>
            {/*End About One */}
        </>
    )
}
