import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Cta9 from "@/components/sections/Cta9";
import Link from "next/link";
export default function Home() {
    return (
        <>
            <Layout headerStyle={9} footerStyle={9} breadcrumbTitle="About US">
                <div>
                    {/*===== ABOUT STARTS=======*/}
                    <div className="about3-section-area section-padding5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="about3-images1">
                                        <img src="/assets/images/sectionimg/about3-img1.png" alt="" />
                                        <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-9 keyframe3" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about3-textarea1">
                                        <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">Who We Are</span>
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Connecting Global Industry Solutions Across Asia</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Our team has been serving industrial development in Asia for more than 20 years. Through cooperation with manufacturers, we have provided tens of thousands of factory clients with complete sets of solutions and equipment and parts from all over the world, and have obtained a number of agent certificates.</p>
                                        <div className="counter3-area3">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center margin-b20 margin-t32">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                                                                <CounterUp count={20} />+
                                                            </h1>
                                                            <p className="font-ks font-16 lineh-16 weight-500 color-30">Years Experience</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center margin-b20 margin-t32">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                                                                <CounterUp count={50000} />+
                                                            </h1>
                                                            <p className="font-ks font-16 lineh-16 weight-500 color-30">Factory Clients</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                                                                <CounterUp count={5} />+
                                                            </h1>
                                                            <p className="font-ks font-16 lineh-16 weight-500 color-30">Asian Countries</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                                                                <CounterUp count={100} />+
                                                            </h1>
                                                            <p className="font-ks font-16 lineh-16 weight-500 color-30">Agent Certificates</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="/contact1" className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32">
                                            Call Us Today{" "}
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== ABOUT END=======*/}
                    {/*===== LAW PROVIDE STARTS =======*/}
                    <div className="lawprovide-section-area section-padding5">
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor24" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="lawprovide-textarea">
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">What Drives Us - Bridging Global Manufacturing Excellence</h1>
                                        <p className="font-ks font-16 weight-500 lineh-26 margin-b20 color-30">We are committed to sourcing, marketing good products and bringing them to the customers who need them, building a smooth bridge between manufacturers and end users. Whether the product is daily consumption goods or industrial equipment.</p>
                                        <p className="font-ks font-16 weight-500 lineh-26 color-30">Whether the deal is B2B or B2C, our global expertise and local presence ensure seamless connections across international markets, delivering comprehensive solutions that empower businesses to thrive.</p>
                                        <Link href="/servicev1" className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32">
                                            Our Solutions
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="lawprovide-boaxrea margin-b30">
                                        <div className="guidiance-boxarea">
                                            <img src="/assets/images/icons/gudeiance1.svg" alt="" className="ts" />
                                        </div>
                                        <div className="lax-conultingprovide">
                                            <Link href="/servicemiddle" className="color-29">
                                                <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">Industrial Equipment Sourcing</h1>
                                            </Link>
                                            <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">Complete sets of solutions and equipment from global manufacturers to meet your industrial needs.</p>
                                        </div>
                                    </div>
                                    <div className="lawprovide-boaxrea margin-b30">
                                        <div className="guidiance-boxarea">
                                            <img src="/assets/images/icons/consulting1.svg" alt="" className="ts" />
                                        </div>
                                        <div className="lax-conultingprovide">
                                            <Link href="/servicemiddle" className="color-29">
                                                <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">Global Parts & Components</h1>
                                            </Link>
                                            <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">Comprehensive supply chain solutions connecting you with quality parts from verified manufacturers worldwide.</p>
                                        </div>
                                    </div>
                                    <div className="lawprovide-boaxrea">
                                        <div className="guidiance-boxarea">
                                            <img src="/assets/images/icons/support1.svg" alt="" className="ts" />
                                        </div>
                                        <div className="lax-conultingprovide">
                                            <Link href="/servicemiddle" className="color-29">
                                                <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">B2B & B2C Solutions</h1>
                                            </Link>
                                            <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">Flexible sourcing strategies for both business clients and consumer markets across multiple industries.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor25" />
                    </div>
                    {/*===== LAW PROVIDE END=======*/}
                    {/*===== MISSION STARTS=======*/}
                    <div className="mission-area-starts section-padding5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="missionimg">
                                        <img src="/assets/images/sectionimg/missionimg1.png" alt="" className="missionimg2" />
                                        <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-9 keyframe3" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="missiontextarea">
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Our Mission</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b">Connecting global manufacturers with businesses across Asia, we facilitate seamless sourcing solutions for industrial equipment, components, and consumer goods, enabling growth and innovation in diverse markets.</p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b">With over two decades of experience, we are dedicated to building lasting partnerships and delivering exceptional value through our comprehensive sourcing expertise and extensive network.</p>
                                        <ul>
                                            <li className="font-ks font-16 lineh-16 weight-600 color-17 margin-b20">
                                                <span>
                                                    <img src="/assets/images/icons/check1.png" alt="" />
                                                </span>
                                                Client-Focused Sourcing Solutions and Results
                                            </li>
                                            <li className="font-ks font-16 lineh-16 weight-600 color-17 margin-b20">
                                                <span>
                                                    <img src="/assets/images/icons/check1.png" alt="" />
                                                </span>
                                                Flexible, Value-Driven Global Approach
                                            </li>
                                            <li className="font-ks font-16 lineh-16 weight-600 color-17 margin-b20">
                                                <span>
                                                    <img src="/assets/images/icons/check1.png" alt="" />
                                                </span>
                                                Continuous Market Intelligence for Customers
                                            </li>
                                            <li className="font-ks font-16 lineh-16 weight-600 color-17">
                                                <span>
                                                    <img src="/assets/images/icons/check1.png" alt="" />
                                                </span>
                                                Expert Team with 20+ Years Asian Market Experience
                                            </li>
                                        </ul>
                                        <Link href="/servicev1" className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32">
                                            Learn More{" "}
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== MISSION END=======*/}
                    {/*===== VISSION STARTS=======*/}
                    <div className="vission-section-area section-padding5">
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor24" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="vission-textarea">
                                        <h1 className="font-48 lineh-56 font-lora weight-600 color-29 margin-b20">Customers We Serve - Hand in Hand, Heart to Heart</h1>
                                        <p className="font-16 lineh-26 weight-500 color-30 margin-b24">With a strong local presence around the world, our global in-house sales, service, and support teams work directly with customers in 5 Asian countries. Our engineer experts and sales managers provide comprehensive application support, empowering clients to easily get the equipment, materials, and information they need.</p>
                                        <div className="border7 margin-b20" />
                                        <p className="font-ks font-16 weight-500 lineh-26 margin-b20 color-30">
                                            <span className="weight-700 color-29">Asian Market Presence:</span> With operations spanning 5 Asian countries, we maintain strong local presence to serve our customers effectively and understand regional market dynamics.
                                        </p>
                                        <p className="font-ks font-16 weight-500 lineh-26 color-30">
                                            <span className="weight-700 color-29">Direct Support:</span> Our in-house sales, service, and support teams work directly with customers, ensuring personalized attention and rapid response to your sourcing needs.
                                        </p>
                                        <Link href="/contact1" className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32">
                                            Get Started Today
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="vissionimages">
                                        <img src="/assets/images/sectionimg/vissionimg.png" alt="" />
                                        <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-23 keyframe3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor25" />
                    </div>
                    {/*===== VISSION END=======*/}
                    {/*===== CTA STARST=======*/}
                    <Cta9 />
                    {/*===== CTA END=======*/}
                </div>
            </Layout>
        </>
    );
}
