
import Layout from "@/components/layout/Layout"
import ProductServiceItem from "@/components/ProductServiceItem"

export default function Home() {
    const servicesData = [
        {
            title: "MRO",
            description: "We purchase a variety of MRO products. We are committed to providing the best tools, accessories and safety products for our global customers, ensuring the quality of our production processes.",
            image: "/assets/images/products/MRO类.png"
        },
        {
            title: "Equipment",
            description: "We purchase reliable machine tools, equipment and other large-scale industrial facilities from Europe, and provide customers with technical support, maintenance and upgrade services.",
            image: "/assets/images/products/其他工业设备、机床等.png"
        },
        {
            title: "Medical Devices",
            description: "Professional procurement of medical devices and healthcare equipment from leading global manufacturers worldwide. We ensure quality and compliance with international standards, providing comprehensive support for medical institutions.",
            image: "/assets/images/products/医疗设备.png"
        },
        {
            title: "Semiconductor & Laboratory",
            description: "Specialized sourcing of semiconductor chips, laboratory equipment and electronic components from premium international suppliers globally. We focus on precision and reliability.",
            image: "/assets/images/products/半导体实验室相关.png"
        },
        {
            title: "Automation",
            description: "Automated production components including pneumatic systems, mechanical parts, actuators and robotics. We support clients throughout their entire production process with quality solutions.",
            image: "/assets/images/products/工控电机、气缸、减速机等产品合成图.png"
        },
        {
            title: "Electrical Equipment",
            description: "We source high-quality electrical components and equipment from trusted European and American manufacturers. Our focus is on reliability and performance for industrial applications.",
            image: "/assets/images/products/电子电气设备.png"
        }
    ]

    return (
        <>
            <Layout headerStyle={9} footerStyle={9} breadcrumbTitle="Products">
                <div>
                    <div className="servicev1-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 m-auto">
                                    <div className="servicev1-textarea margin-b60 text-center">
                                        <h1 className="font-48 font-lora weight-600 color-29 lineh-56">Professional Product Sourcing Solutions Across Global Markets</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {servicesData.map((service, index) => (
                                    <ProductServiceItem
                                        key={index}
                                        title={service.title}
                                        description={service.description}
                                        image={service.image}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}