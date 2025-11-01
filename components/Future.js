import Link from "next/link"
export default function Future() {
    return (
        <>
            {/*Start About One */}
            <section id="future-of-waterfront">
                {/* <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div> */}
                <div className="container future_container">
                    <div className="row">
                        <div className="col-xl-12 wow animated fadeInLeft" data-wow-delay="0.1s">
                            <div className="about-one__content" style={{marginLeft: 0}}>
                                <div className="sec-title">
                                    {/* <div className="sub-title">
                                        <h5>About Company</h5>
                                    </div> */}
                                    <h2>The Future of Waterfront Living</h2>
                                </div>

                                <div className="text-box">
                                    <p>Discover the perfect harmony of tranquillity, wellness, and sophistication at Dubai Creek Harbour. This vibrant community blends serene waterfront living with lively promenades, wellness facilities, and breathtaking views of the marina and Dubai skyline.</p><br/>
                                    <p>Enjoy sunrise yoga by the water, alfresco dining, or leisurely strolls along the picturesque creek. Relax by an infinity pool overlooking the Burj Khalifa or explore the neighbourhood on a scenic bike ride.</p><br/>
                                    <p>Whether for living or investment, Dubai Creek Harbour offers exceptional value with its collection of 1–3 bedroom apartments, family homes, and luxury penthouses — all crafted with contemporary elegance and world-class design.</p>
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

                                <div className="about-one__content-bottom future_btn" style={{display: "flex", justifyContent: "center"}}>
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
                            </div>
                        </div>
                        {/*End About One Content */}
                    </div>
                </div>
            </section>
            {/*End About One */}
        </>
    )
}