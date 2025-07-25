
import Link from "next/link"

export default function Contact2() {
    return (
        <>
            <div className="contact2-section-area section-padding5">
                <img src="/assets/images/elementor/elementor8.png" alt="" className="elementor14 aniamtion-key-1" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-down" data-aos-duration={800}>
                            <div className="contact2-header text-center margin-b60">
                                <span className="maximum font-outfit font-16 lineh-16 color-12 weight-500 margin-b20 d-inline-block">Contact Us</span>
                                <h1 className="font-outfit font-44 weight-600 lineh-52 color-17">Ready to Start Your Sourcing Project?</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12" data-aos="fade-right" data-aos-duration={1000}>
                        <div className="contact2-all-contact">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="contact2-maincontact">
                                        <h1 className="font-24 font-outfit lineh-24 color-17 weight-600 margin-b">Get Your Quote Today</h1>
                                        <p className="font-16 font-outfit lineh-26 weight-400 color-15 margin-b24">Tell us about your sourcing needs and get a competitive quote within 24 hours</p>
                                        <div className="contact-from-area">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="first-input">
                                                        <input type="text" placeholder="First Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="first-input">
                                                        <input type="text" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="first-input">
                                                        <input type="text" placeholder="Company Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="first-input">
                                                        <input type="email" placeholder="Email Address" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="first-input">
                                                        <div className="first-name-input">
                                                            <select name="category" id="category" className="country-area nice-select6">
                                                                <option value={1} data-display="Product Category">Product Category</option>
                                                                <option value="electrical">Electrical Equipment</option>
                                                                <option value="medical">Medical Devices</option>
                                                                <option value="semiconductor">Semiconductor Components</option>
                                                                <option value="industrial">Industrial Machinery</option>
                                                                <option value="automotive">Automotive Parts</option>
                                                                <option value="other">Other</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="textarea">
                                                        <textarea cols={30} rows={10} placeholder="Describe your sourcing requirements, target quantity, specifications, and timeline..." />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="theme-btn4 margin-t32 margn-left" data-aos="fade-left" data-aos-duration={1200}>
                                                        <Link href="/contact1" className="theme-btn5 font-outfit font-16  weight-700 ">Get Sourcing Quote
                                                            <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="contact-padding" data-aos="fade-right" data-aos-duration={1000}>
                                        <div className="contact2-auhtor-section">
                                            <div className="clock-area">
                                                <img src="/assets/images/icons/clock1.svg" alt="" />
                                            </div>
                                            <div className="contact-location">
                                                <h1 className="font-20 font-outfit lineh-24 color-17 weight-600 margin-b">Global Office</h1>
                                                <p className="font-outfit font-16 lineh-26 color-17 weight-400 ">Carocosmo International Trading <br /> 123 Business Center, Suite 456 <br /> Shanghai, China 200000</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-padding margin-t" data-aos="fade-right" data-aos-duration={1200}>
                                        <div className="contact2-auhtor-section contact-phonr-bg">
                                            <div className="clock-area">
                                                <img src="/assets/images/icons/phone4.svg" alt="" />
                                            </div>
                                            <div className="contact-location">
                                                <h1 className="font-20 font-outfit lineh-24 color weight-600 margin-b">24/7 Sourcing Hotline</h1>
                                                <p className="font-outfit font-16 lineh-26 color weight-400 "><Link href="/tel:+86-021-12345678" className="color">+86-021-12345678</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-padding margin-t" data-aos="fade-right" data-aos-duration={1400}>
                                        <div className="contact2-auhtor-section">
                                            <div className="clock-area">
                                                <img src="/assets/images/icons/email3.svg" alt="" />
                                            </div>
                                            <div className="contact-location">
                                                <h1 className="font-20 font-outfit lineh-24 color-17 weight-600 margin-b">Sourcing Inquiries</h1>
                                                <p className="font-outfit font-16 lineh-26 color-17 weight-400 "><Link href="/mailto:sourcing@carocosmo.com" className="color-17">sourcing@carocosmo.com</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor12.png" className="elementor13" alt="" />
            </div>
        </>
    )
}
