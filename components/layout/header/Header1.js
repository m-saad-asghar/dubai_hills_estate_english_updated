import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import Image from "next/image";

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={`main-header main-header-one container ${scroll ? "" : ""}`}>
                <div className={`menu-area ${scroll ? "sticky-menu" : ""}`}>
                    {/* header-lower */}
                    <div className="auto-container">
                        <div className="menu-area__inner">
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                {/* <i className="fas fa-bars"></i> */}
                                </div>
                            <div className="menu-wrap" style={{width: "100%"}}>
                                <nav className="menu-nav" style={{width: "100%"}}>
                                    <div className="main-header-one__inner" style={{width: "100%"}}>
                                        <div className="main-header-one__left" style={{width: "100%"}}>
                                            <div className="logo-box logo_align">
                                               <Link href="/" passHref>
  <Image
    src="/assets/icon/emaar_logo.png"
    alt="emaar_logo"
    height={60}
    width={300}
    className="emaar_logo"
  />
</Link>
 <Link href="/" passHref>
  <Image
    src="/assets/img/shiro_images/logo.png"
    alt="shiro_logo"
    height={40}
    width={300}
    className="shiro_logo"
  />
</Link>
                                            </div>
                                        </div>

                                        {/* <div className="main-header-one__middle">
                                            <div className="navbar-wrap main-menu">
                                                
                                            </div>
                                        </div> */}

                                        {/* <div className="main-header-one__right">
                                            <div className="logo-box">
                                               <Link href="/" passHref>
  <Image
    src="/assets/img/shiro_images/logo.png"
    alt="shiro_logo"
    height={40}
    width={300}
    style={{ height: "40px", width: "auto" }}
  />
</Link>
                                            </div>
                                        </div> */}
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} /> */}
            </header>
        </>
    )
}
