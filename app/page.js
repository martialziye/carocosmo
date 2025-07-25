
import Layout from "@/components/layout/Layout"
import About9 from "@/components/sections/About9"
import Company3 from "@/components/sections/Company3"
import Conatact2 from "@/components/sections/Conatact2"
import Cta9 from "@/components/sections/Cta9"
import Service11 from "@/components/sections/Service11"
import Service12 from "@/components/sections/Service12"
import Welcome9 from "@/components/sections/Welcome9"

export default function Home() {
    return (
        <>
            <Layout headerStyle={9} footerStyle={9}>
                <Welcome9 />
                <About9 />
                <Service11 />
                <Company3 />
                <Conatact2 />
                <Cta9 />
            </Layout>
        </>
    )
}