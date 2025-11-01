import Link from "next/link"
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok, FaSnapchatGhost, FaTwitter } from "react-icons/fa";

export default function Footer1() {
    return (
        <>
            <footer className="footer-one" id="footer">
                <div className="footer-main">
                    <div className="container banner_container_main_feature">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 wow fadeInUp centerize" data-wow-delay=".1s">
                                <div className="single-footer-widget footer-widget__about">
                                    <div className="logo-box centerize">
                                        <Link href="/" passHref>
  <Image
    src="/assets/img/shiro_images/logo.png"
    alt="shiro_logo"
    height={30}
    width={300}
    style={{ height: "50px", width: "auto" }}
  />
</Link>
                                    </div>

                                    <div className="footer-widget__about-inner footer_spacing privacy_policy_footer centerize">
                                        <div className="number-box centerize">
                                            <Link href="https://www.shiroestate.ae/privacy-policy" target="_blank" style={{color: "#ffffff"}}>Privacy Policy</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 wow fadeInUp qr_container centerize aligment_of_qr_code" data-wow-delay=".2s">
                                <div className="single-footer-widget footer-widget__links footer_address">
                                    <Image
    src="/assets/logo/dubai_hills_estate_qr_code.jpeg"
    alt="qr_code"
    height={100}
    width={150}
    style={{ height: "100px", width: "auto" }}
  />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
