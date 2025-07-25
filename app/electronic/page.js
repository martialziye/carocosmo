
import Layout from "@/components/layout/Layout"
import PortfolioItem from "@/components/PortfolioItem"
import Link from "next/link"

export default function Home() {
    const portfolioData = [
        {
            image: "/assets/images/sectionimg/case-img1.png",
            title: "Cable Applications",
            description1: "Carocosmo sells special cables that are resistant to corrosion, ",
            description2: "vacuum and high temperature to help customers solve power transmission problems in special environments.",
            showLearnMore: true
        },
        {
            image: "/assets/images/sectionimg/case-img2.png",
            title: "Electrical Engineering equipement",
            description1: "Carocosmo has worked with a large number of factory customers to provide quality circuit breakers ",
            description2: "protection switches, stoppers, and other factory power solutions to prevent electric shock accidents and electrical fires.",
            showLearnMore: true
        },
        {
            image: "/assets/images/sectionimg/case-img3.png",
            title: "Terminal",
            description1: "Terminals are widely used in power distribution systems, electronic equipment manufacturing, ",
            description2: "automobile manufacturing and other fields, and are indispensable components in electrical connections.",
            showLearnMore: true
        }
    ]

    return (
        <>
            <Layout headerStyle={9} footerStyle={9} breadcrumbTitle="Electronical Engineering">
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
                                        showLearnMore={item.showLearnMore}
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