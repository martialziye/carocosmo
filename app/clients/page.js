'use client'
import Layout from "@/components/layout/Layout"
import LogoWall from "@/components/LogoWall"
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
            <Layout headerStyle={9} footerStyle={9} breadcrumbTitle="Our Clients">
                <div>
                    {/*===== LOGO WALL START=======*/}
                    <LogoWall />
                    {/*===== LOGO WALL END=======*/}
                    
                    {/*===== CTA STARST=======*/}
                    <div className="cta5-section-area section-padding4">
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors72" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta5-auhtor6-area">
                                        <h1 className="font-lora font-48 lineh-52 color weight-600 margin-b text-capitalize">Ready to Source Your Next Product?</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-21">Join the industry leaders who trust Carocosmo for their global sourcing needs. Get expert consultation and competitive quotes for your next procurement project.</p>
                                    </div>
                                </div>
                                <div className="col-lg-2" />
                                <div className="col-lg-4">
                                    <div className="cta5-btn5-sexction">
                                        <Link href="/contact1" className="theme6-btn6 bakgrnd5 font-ks lineh-16 weight-700 color font-16">Get Quote
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