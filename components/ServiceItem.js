import Link from "next/link"

export default function ServiceItem({ 
    image, 
    icon, 
    title, 
    description, 
    link = "/servicemiddle",
    aosDuration = 1000 
}) {
    return (
        <div className="col-lg-4 col-md-6" data-aos="fade-right" data-aos-duration={aosDuration}>
            <div className="service9-boxarea margin-b30">
                <div className="service9-images">
                    <img src={image} alt="" />
                </div>
                <div className="service9icons">
                    <img src={icon} alt="" />
                </div>
                <div className="service9-texreas">
                    <Link href={link} className="font-lora font-24 weight-600 lineh-26 color-h9 margin-b d-inline-block ts">{title}</Link>
                    <p className="font-16 font-ks weight-500 colorhp1 lineh-26 ts">{description}</p>
                    <Link href={link} className="learnservices margin-t28 d-inline-block font-ks lineh-16 ts weight-700 color-h9">Learn
                        More <span><i className="fa-solid fa-arrow-right ml1" /></span></Link>
                </div>
            </div>
        </div>
    )
} 