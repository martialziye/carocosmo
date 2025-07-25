import Link from "next/link"

export default function Header9({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className="header about-bg d-none d-lg-block">
                <div className={`header-area header ${scroll ? "sticky scrolled-header" : "transparent-header"}`} id="header" style={{
                    backgroundColor: scroll ? '#a2bfbe' : 'transparent',
                    transition: 'background-color 0.3s ease'
                }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/"><img src="/assets/images/logo/carocosmo-logo.png" alt="" /></Link>
                                    </div>
                                    <div className="main-menu-ex homepage5 homepage9">
                                        <ul>
                                            <li className="mega-dropdawn"><Link href="/">Home</Link>

                                            </li>
                                            <li><Link href="/about" className="font-ks font-16 weight-500 color-1">About Us</Link>
                                            </li>
                                            <li><Link href="/products" className="font-ks font-16 weight-500 color-1">Products</Link>
                                             </li>
                                            <li><Link href="#" className="font-ks font-16 weight-500 color-1">Markets <span><i className="fa-solid fa-angle-down" /></span></Link>
                                                <ul>
                                                    <li><Link href="/electronic" className="font-ks font-16 weight-500 color">Electronical Engineering</Link></li>
                                                    <li><Link href="/automotive" className="font-ks font-16 weight-500 color">Automotive</Link></li>
                                                    <li><Link href="/aerospace" className="font-ks font-16 weight-500 color">Aerospace</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/contact1" className="font-ks font-16 weight-500 color-1">Contact</Link>
                                            </li>
                                            <li><Link href="/clients" className="font-ks font-16 weight-500 color-1">Partners</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
