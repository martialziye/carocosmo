
import Layout from "@/components/layout/Layout"
import ProductServiceItem from "@/components/ProductServiceItem"

export default function Home() {
    const servicesData = [
        {
            title: "Electrical Equipment",
            description: "We source high-quality electrical components and equipment from trusted European and American manufacturers.",
            image: "/assets/images/elementor/camera.jpg"
        },
        {
            title: "Medical Devices",
            description: "Professional procurement of medical devices and healthcare equipment from leading global manufacturers worldwide.",
            image: "/assets/images/elementor/medical.jpg"
        },
        {
            title: "Semiconductor Components",
            description: "Specialized sourcing of semiconductor chips and electronic components from premium international suppliers globally.",
            image: "/assets/images/elementor/chip.jpg"
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