import Link from "next/link"

export default function PortfolioItem({ 
    image, 
    title, 
    description1, 
    description2, 
    link = "/contact1",
    showLearnMore = true 
}) {
    return (
        <div className="col-lg-6">
            <div className="single-portfolio singlecase">
                <div className="portfolio-images singleportfolio" style={{ 
                    position: 'relative', 
                    width: '100%', 
                    aspectRatio: '1.4/1', 
                    overflow: 'hidden' 
                }}>
                    <img 
                        src={image} 
                        alt="" 
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }} 
                    />
                </div>
                <div className="portfolio-textarea">
                    <h1 className="font-24 weight-600 font-outfit lineh-24 color-17 margin-b14">
                        <Link href={link} className="color-17">{title}</Link>
                    </h1>
                    <p className="font-outfit weight-400 color-17 lineh-26 font-16">{description1}</p>
                    <div className="portfolio-visible-textarea margin-t">
                        <p className="font-outfit weight-400 color-17 lineh-26 font-16">{description2}</p>
                        {showLearnMore && (
                            <Link href={link} className="font-16 font-outfit weight-700 color lineh-26 ts text-uppercase margin-t30 d-inline-block learn-more1 learn-more">
                                LEARN MORE <span><i className="fa-solid fa-arrow-right-long" /></span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
} 