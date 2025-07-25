
import Link from "next/link"
import ServiceItem from "@/components/ServiceItem"

export default function Service11() {
    const servicesData = [
        {
            image: "/assets/images/sectionimg/service9img1.png",
            icon: "/assets/images/icons/service9icon4.png",
            title: "Consumer Goods Sourcing",
            description: "Source the finest skincare, daily essentials, and health supplements from Europe and America. We provide a seamless procurement service for Chinese merchants.",
            aosDuration: 1000
        },
        {
            image: "/assets/images/sectionimg/service9img2.png",
            icon: "/assets/images/icons/service9icon5.png",
            title: "Channel Explore",
            description: "Acting as your trusted agent, we represent European and American health and beauty brands, introducing and establishing them in the thriving Chinese market.",
            aosDuration: 1200
        },
        {
            image: "/assets/images/sectionimg/service9img3.png",
            icon: "/assets/images/icons/service9icon6.png",
            title: "Technical Support",
            description: "Our professional team of engineers provides top-notch technical support for Asian factory clients, helping them find the right machines, equipment, and materials for efficient production processes.",
            aosDuration: 1400
        }
    ]

    return (
        <>
            <div className="service9-section-area section-padding8">
                <img src="/assets/images/elementor/elementor59.png" alt="" className="elementors59" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="service9-header margin-b60 text-center">
                                <span className="font-16 font-ks lineh-16 weight-500 colorhp9 d-inline-block margin-b24 insurance">Our
                                    Services</span>
                                <h1 className="font-lora font-44 lineh-54 weight-600 colorh9">Professional Sourcing Solutions 
                                    for Global Business</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {servicesData.map((service, index) => (
                            <ServiceItem
                                key={index}
                                image={service.image}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                aosDuration={service.aosDuration}
                            />
                        ))}
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor60.png" alt="" className="elementors60" />
            </div>
        </>
    )
}
