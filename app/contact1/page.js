'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>

            <Layout headerStyle={9} footerStyle={9} breadcrumbTitle="Contact Us">
                <div>
                    <div className="cotactinner-section-area section-padding5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="contcat5-textarea5">
                                        <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">Contact
                                            Us</span>
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20 clienth2">Contact Us for
                                            Expert Sourcing Solutions</h1>
                                        <p className="font-ks font-16 weight-500 lineh-26 color-30">Professional sourcing services and global supply chain solutions to help your business connect with quality manufacturers and suppliers worldwide.</p>
                                        <div className="phone7-textarea margin-t32 contactinnerbg">
                                            <div className="phone7-icon">
                                                <img src="/assets/images/icons/phone8.png" alt="" />
                                            </div>
                                            <div className="phone7-text">
                                                <p className="font-16 lineh-16 weight-500 font-ks color-30 margin-b">Give us a Call</p>
                                                <Link href="tel:+33764855442" className="font-lora font-24 weight-700 lineh-24 color-29">+33 7 64 85 54 42</Link>
                                            </div>
                                        </div>
                                        <div className="phone7-textarea margin-t contactinnerbg">
                                            <div className="phone7-icon">
                                                <img src="/assets/images/icons/email7.png" alt="" />
                                            </div>
                                            <div className="phone7-text">
                                                <p className="font-16 lineh-16 weight-500 font-ks color-30 margin-b">Send us Email</p>
                                                <Link href="mailto:contact@carocosmo.fr" className="font-lora font-24 weight-700 lineh-24 color-29">contact@carocosmo.fr</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="contact5-main-section">
                                        <div className="contact-main-text">
                                            <h1 className="font-lora font-24 lineh-24 weight-600 color">Send us a Message</h1>
                                            <p className="font-ks font-16 lineh-26 weight-500 color margin-t">As a fellow business owner, we understand the importance of reliable sourcing partnerships. Contact us today to discover how we can help your business grow.</p>
                                        </div>
                                        <div className="contac5-input5area">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="input-5area margin-t32">
                                                        <input type="text" placeholder="First Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-5area margin-t32">
                                                        <input type="text" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-5area margin-t">
                                                        <input type="email" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-5area margin-t">
                                                        <input type="number" placeholder="Phone" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="input-5area margin-t">
                                                        <input type="text" placeholder="Subject" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="input-5area margin-t">
                                                        <textarea cols={30} rows={10} placeholder="Message" />
                                                    </div>
                                                    <div className="contact5-btn5">
                                                        <button className="font-ks font-16 lineh-16 weight-700 color margin-t32 contcat5" type="submit">Submit Now <span><i className="fa-solid fa-arrow-right" /></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== CONTACT  END=======*/}
                    {/*===== FAQ STARTS=======*/}
                    <div className="faq-section-area section-padding5">
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor24" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 m-auto">
                                    <div className="faq-textarea margin-b60">
                                        <h1 className="font-lora font-48 lineh-52 color-29 weight-600 margin-b">Frequently Asked Questions
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="accordian-area accourbutton">
                                        <div className="accordion accordian4" id="accordionExample">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="accordion-item bordernone">
                                                        <h2 className="accordion-header" onClick={() => handleClick(1)}>
                                                            <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                What types of sourcing services do you offer?
                                                            </button>
                                                        </h2>
                                                        <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p className="font-ks font-16 lineh-26 weight-500 color-22 ">We offer comprehensive sourcing services including industrial equipment procurement, global parts & components sourcing, and complete supply chain solutions for both B2B and B2C markets across various industries.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item bordernone">
                                                        <h2 className="accordion-header" onClick={() => handleClick(2)}>
                                                            <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                How does your sourcing process work?
                                                            </button>
                                                        </h2>
                                                        <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Our sourcing process involves four key steps: Requirements Analysis, Supplier Verification, Quality Assessment, and Delivery Management. We start by understanding your specific needs and then connect you with verified manufacturers.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item bordernone">
                                                        <h2 className="accordion-header" onClick={() => handleClick(3)}>
                                                            <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                What regions and industries do you specialize in?
                                                            </button>
                                                        </h2>
                                                        <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p className="font-ks font-16 lineh-26 weight-500 color-30 ">We specialize in Asian markets with operations in 5 countries, serving manufacturing, industrial equipment, consumer goods, and technology sectors with over 20 years of experience in the region.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item m-0 bordernone">
                                                        <h2 className="accordion-header" onClick={() => handleClick(4)}>
                                                            <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                What sets your sourcing company apart from others?
                                                            </button>
                                                        </h2>
                                                        <div id="collapseFour" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p className="font-ks font-16 lineh-26 weight-500 color-30 ">With 20+ years of experience, we have served tens of thousands of factory clients and obtained numerous agent certificates. Our local presence across Asia ensures direct communication and comprehensive support.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="accordian-area accourbutton">
                                                        <div className="accordion accordian4">
                                                            <div className="accordion-item bordernone">
                                                                <h2 className="accordion-header" onClick={() => handleClick(5)}>
                                                                    <button className={isActive.key == 5 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                                                        What can I expect during an initial consultation?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseFive" className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className="font-ks font-16 lineh-26 weight-500 color-22 ">During your initial consultation, we will discuss your specific sourcing needs, understand your quality requirements, budget parameters, and timeline. We'll provide initial recommendations and outline our sourcing strategy.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item bordernone">
                                                                <h2 className="accordion-header" onClick={() => handleClick(6)}>
                                                                    <button className={isActive.key == 6 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                                        What is the first step in your sourcing process?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseSix" className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 ">The first step is a comprehensive needs assessment where we analyze your requirements, specifications, and business objectives. This helps us identify the most suitable suppliers and develop a tailored sourcing strategy.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item bordernone">
                                                                <h2 className="accordion-header" onClick={() => handleClick(7)}>
                                                                    <button className={isActive.key == 7 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                                        Do you provide quality assurance and supplier verification?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseSeven" className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Yes, we provide comprehensive quality assurance and supplier verification services. Our team conducts thorough background checks, factory audits, and quality assessments to ensure all partners meet international standards.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item m-0 bordernone">
                                                                <h2 className="accordion-header" onClick={() => handleClick(8)}>
                                                                    <button className={isActive.key == 8 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                                        How do you handle logistics and shipping arrangements?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseEight" className={isActive.key == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 ">We coordinate end-to-end logistics solutions including shipping, customs clearance, and delivery arrangements. Our extensive network ensures efficient and cost-effective transportation of goods worldwide.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor25" />
                    </div>
                    {/*===== FAQ END=======*/}
                    {/*===== CTA STARST=======*/}
                    <div className="cta5-section-area section-padding4">
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors72" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta5-auhtor6-area">
                                        <h1 className="font-lora font-48 lineh-52 color weight-600 margin-b text-capitalize">Get Expert Sourcing Solutions for Your Business</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-21">We believe that informed clients make better sourcing decisions. As part of our service, we'll provide comprehensive market intelligence and sourcing strategies to help your business thrive.</p>
                                    </div>
                                </div>
                                <div className="col-lg-2" />
                                <div className="col-lg-4">
                                    <div className="cta5-btn5-sexction">
                                        <Link href="/contact1" className="theme6-btn6 bakgrnd5 font-ks lineh-16 weight-700 color font-16">Get Sourcing Quote
                                            <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                        <Link href="/contact2" className="theme6-btn6 backgrnd6 font-ks lineh-16 weight-700 color-29 font-16">Contact Us
                                            <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors73" />
                    </div>
                </div>

            </Layout>
        </>
    )
}