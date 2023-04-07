import Head from "next/head"
import Navbar from "./Navbar"

const MainContainer = ({ children, keywords, title }) => {
    return (
        <>
            <Head>
                <meta keywords={`some text ` + keywords} />
                <title>{title}</title>
            </Head>
            <Navbar />
            {children}
        </>
    )
}

export default MainContainer