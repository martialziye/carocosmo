import Link from "next/link"

export default function Footer9() {
    return (
        <>
            <div className="footer9-section-area6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer4-all-area footer6 section-padding15">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="footer-3logo">
                                            <img src="/assets/images/logo/carocosmo-logo.png" alt="" />
                                            <p className="font-nunito font-16 lineh-26 color-nuni margin-t margin-b24">Include any
                                                additional information that may be relevant or helpful for visitors, such as
                                                FAQs, pricing options, or service packages. Provide contact details.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <div className="about-3-links align-items-center">
                                            <h1 className="font-20 lineh-20 font-lora weight-600 color-ni">About Link</h1>
                                            <ul>
                                                <li><Link href="/about" className="font-nunito font-16 lineh-16 colorhp1 weight-600 margin-t d-inline-block">About
                                                    Us</Link></li>
                                                <li><Link href="/products" className="font-nunito font-16 lineh-16 colorhp1 weight-600 margin-t d-inline-block">
                                                    Products</Link></li>
                                                <li><Link href="/clients" className="font-nunito font-16 lineh-16 colorhp1 weight-600 margin-t d-inline-block">Testimonials</Link>
                                                </li>
                                                <li><Link href="/contact1" className="font-nunito font-16 lineh-16 colorhp1 weight-600 margin-t d-inline-block">Contact
                                                    Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="contcat4-footer">
                                            <h1 className="font-20 lineh-20 font-lora weight-600 color-ni">Get in touch</h1>
                                            <div className="location-icon4 margin-t32">
                                                <div className="image5">
                                                    <img src="/assets/images/icons/email5.png" alt="" />
                                                </div>
                                                <Link href="mailto:contact@carocosmo.fr" className="font-ks font-16 lineh-24 weight-500 colorhp1">contact@carocosmo.fr</Link>
                                            </div>
                                            <div className="location-icon4 margin-t">
                                                <div className="imgge5">
                                                    <img src="/assets/images/icons/location4.svg" alt="" />
                                                </div>
                                                <Link href="#" className="font-ks font-16 lineh-24 weight-500 colorhp1">16 rue du cochet <br /> France 78480</Link>
                                            </div>
                                            <div className="location-icon4 margin-t">
                                                <div className="image5">
                                                    <img src="/assets/images/icons/phone7.svg" alt="" />
                                                </div>
                                                <Link href="tel:+33764855442" className="font-ks font-16 lineh-24 weight-500 colorhp1">+33 7 64 85 54 42</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="cta-contact6">
                                            <h1 className="font-20 lineh-20 font-lora weight-600 color-h9">Business Hours</h1>
                                            <div className="business-hours margin-t32">
                                                <div className="hours-item margin-b">
                                                    <p className="font-ks font-16 lineh-24 weight-600 color-ni">Monday — Friday</p>
                                                    <p className="font-ks font-16 lineh-24 weight-500 colorhp1">8am — 6pm</p>
                                                </div>
                                                <div className="hours-item margin-b24">
                                                    <p className="font-ks font-16 lineh-24 weight-600 color-ni">Saturday</p>
                                                    <p className="font-ks font-16 lineh-24 weight-500 colorhp1">8am — 4pm</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border7" />
                            <div className="copyright4 text-center">
                                <p className="font-16 font-nunito color-28 weight-500 ">Copyright {new Date().getFullYear()} © Carocosmo sourcing company</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor41.png" alt="" className="elementor61" />
                <img src="/assets/images/elementor/elementor42.png" alt="" className="elementors62" />
            </div>

        </>
    )
}
