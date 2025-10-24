import React from "react";
import Layout from "../layouts/MainLayout";
import Banner from "../components/sections/Home1/Banner";
import About from "../components/sections/Home1/About";
import Service from "../components/sections/Home1/Service";
import Work from "../components/sections/Home1/Work";
import Testimonial from "../components/sections/Home1/Testimonial";
import Cta from "../components/sections/Home1/Cta";
// Removed unused sections: Project, Video, Team, Process, Blog, Clients

function Home1() {

    return (
        <>
        <Layout>
            <Banner />
            <About />
            <Work />
            <Service />
            <Testimonial />
            <Cta />
        </Layout>
        </>
    );
}
export default Home1