import { Kumbh_Sans, Nunito, Outfit,Lora } from 'next/font/google'

const nunito = Nunito({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--nunito-font-family",
    display: 'swap',
})
const outfit = Outfit({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--outfit-font-family",
    display: 'swap',
})
const kumbh = Kumbh_Sans({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--kumbh-font-family",
    display: 'swap',
})
const lora = Lora({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--lora-font-family",
    display: 'swap',
})

export const metadata = {
    title: 'Carocosmo',
    description: 'Bridging and sourcing company',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="/assets/css/plugins/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/css/plugins/font-awesome-pro.css" />
                <link rel="stylesheet" href="/assets/css/plugins/nice-select.css" />
                <link rel="stylesheet" href="/assets/css/plugins/swiper.bundle.css" />
                <link rel="stylesheet" href="/assets/icon/font-awesome/css/all.css" />
                <link rel="stylesheet" href="/assets/css/plugins/modal-video.min.css" />
                <link rel="stylesheet" href="/assets/css/plugins/mobile.css" />
                <link rel="stylesheet" href="/assets/css/plugins/aos.css" />
                <link rel="stylesheet" href="/assets/css/typography.css" />
                <link rel="stylesheet" href="/assets/css/master.css" />
                <link rel="stylesheet" href="/assets/css/plugins/responsive.css" />
            </head>
            <body className={`${nunito.variable} ${outfit.variable} ${kumbh.variable} ${lora.variable}`}>{children}</body>
        </html>
    )
}
