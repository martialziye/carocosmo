
import Link from "next/link"

export default function Conatact2() {
    return (
        <>
            <div className="contact9-section-area section-padding5">
                <div className="container">
                    <div className="row">
                        <div className="contact09-main-area">
                            <div className="row">
                                <div className="col-lg-6" data-aos="fade-right" data-aos-easing="linear" data-aos-duration={800}>
                                    <div className="contact9-header margin-b30">
                                        <span className="font-16 font-ks lineh-16 weight-500 colorhp9 d-inline-block margin-b24 insurance">Contact Us</span>
                                        <h1 className="font-lora font-44 lineh-54 weight-600 colorh9" data-aos="fade-right" data-aos-easing="linear" data-aos-duration={1000}>Ready to Start Your Sourcing Journey Today?</h1>
                                        <p className="font-ks fotn-16 lineh-26 weight-500 colorhp1 margin-t margin-b">We help businesses worldwide connect with trusted manufacturers and suppliers. Get your custom sourcing solution and competitive quotes from our expert team.</p>
                                        <div className="contact9-allinput">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="input9 margin-t16">
                                                        <input type="text" placeholder="First Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 ">
                                                    <div className="input9 margin-t16">
                                                        <input type="text" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input9 margin-t16">
                                                        <input type="email" placeholder="Email Address" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input9 margin-t16">
                                                        <input type="text" placeholder="Company Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="input9 margin-t16">
                                                        <textarea cols={30} rows={10} placeholder="Tell us about your sourcing requirements..." />
                                                    </div>
                                                    <button className="font-16 font-ks lineh-16 weight-700 color contact9btn" type="submit">Get Sourcing Quote <span className="ml1"><i className="fa-solid fa-arrow-right" /></span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="zoom-out" data-aos-easing="linear" data-aos-duration={1200}>
                                    <div className="contcat6-images margin-b30">
                                        <img src="/assets/images/sectionimg/contact9img1.png" alt="" className="contact9auhtorimg" />
                                        <img src="/assets/images/elementor/Transparency1.png" alt="" className="trandparency1 aniamtion-key-1" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration={800}>
                                    <div className="phonearea-contact9 margin-t32">
                                        <div className="phone9images">
                                            <img src="/assets/images/icons/phone12.png" alt="" className="ts" />
                                        </div>
                                        <div className="phone9textarea">
                                            <h1 className="font-lora font-20 lineh-20 weight-600 color-h9  margin-b20 d-inline-block ts">
                                                Sourcing Hotline</h1> <br />
                                            <Link href="/tel:+33 7 64 85 54 42" className="font-ks font-16 weight-500 colorhp1 lineh-16 ts">+33 7 64 85 54 42</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration={1000}>
                                    <div className="phonearea-contact9 margin-t32">
                                        <div className="phone9images">
                                            <img src="/assets/images/icons/location.png" alt="" className="ts" />
                                        </div>
                                        <div className="phone9textarea">
                                            <h1 className="font-lora font-20 lineh-20 weight-600 color-h9  margin-b20 d-inline-block ts">
                                                Europe Office</h1> <br />
                                            <Link href="/tel:123-456-7890" className="font-ks font-16 weight-500 colorhp1 lineh-26 ts">16 rue du cochet <br /> France 78480</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration={1200}>
                                    <div className="phonearea-contact9 margin-t32">
                                        <div className="phone9images">
                                            <img src="/assets/images/icons/clock.png" alt="" className="ts" />
                                        </div>
                                        <div className="phone9textarea">
                                            <h1 className="font-lora font-20 lineh-20 weight-600 color-h9  margin-b20 d-inline-block ts">
                                                Business Hours</h1> <br />
                                            <Link href="/tel:123-456-7890" className="font-ks font-16 weight-500 colorhp1 lineh-16 ts">Monday - Friday: 8am to 6pm <br /> Saturday: 8am to 4pm</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
