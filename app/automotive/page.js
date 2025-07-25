
import Layout from "@/components/layout/Layout"
import PortfolioItem from "@/components/PortfolioItem"

export default function Home() {
    const portfolioData = [
        {
            image: "/assets/images/elementor/electronic.jpg",
            title: "Electrical & Connectivity",
            description1: "Carocosmo sells special cables that are resistant to corrosion, ",
            description2: "vacuum and high temperature to help customers solve power transmission problems in special environments."
        },
        {
            image: "/assets/images/elementor/connexion.jpg",
            title: "Mechanics & Structures",
            description1: "Carocosmo has worked with a large number of factory customers to provide quality circuit breakers, ",
            description2: "protection switches, stoppers, and other factory power solutions to prevent electric shock accidents and electrical fires."
        },
        {
            image: "/assets/images/elementor/nuclear.jpg",
            title: "Fluids & Piping",
            description1: "Terminals are widely used in power distribution systems, electronic equipment manufacturing, ",
            description2: "automobile manufacturing and other fields, and are indispensable components in electrical connections."
        },
        {
            image: "/assets/images/elementor/pompier.jpg",
            title: "Cooling & Thermal Management",
            description1: "Cooling & Thermal Management Common sensor types include voltage sensors, current sensors, temperature sensors, and so on.",
            description2: "They are used to measure parameters such as voltage, current and temperature in power systems, and Carocosmo has had real-life customer cases."
        }
    ]

    return (
        <>
            <Layout headerStyle={9} footerStyle={9} breadcrumbTitle="Automotive">
                <div>
                    <div className="casestudy-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                {portfolioData.map((item, index) => (
                                    <PortfolioItem
                                        key={index}
                                        image={item.image}
                                        title={item.title}
                                        description1={item.description1}
                                        description2={item.description2}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/*===== CASE STUDY END=======*/}
                </div>
            </Layout>
        </>
    )
}