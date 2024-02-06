import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Section from "./Layout/Section/Section";
export default function Dashbord() {
    return (
        <>
            <header>
                <Header />
            </header>

            <section>
                <Section />
            </section>
            
            <footer>
                <Footer />
            </footer>

        </>
    )
}