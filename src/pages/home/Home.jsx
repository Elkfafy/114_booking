import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css"

export default function Home() {
    return (
        <>
            {/* navbar */}
            <Navbar />
            {/* header */}
            <Header />
            <div className="homeContainer">
                {/* featured */}
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                {/* property list */}
                <PropertyList />
                <h1 className="homeTitle">Homes guests love</h1>
                {/* featured properties */}
                <FeaturedProperties />
                {/* mail list */}
                <MailList />
                {/* footer */}
                <Footer />
            </div>
        </>
    )
}