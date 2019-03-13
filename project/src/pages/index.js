import React from "react";

import { FaBeer } from "react-icons/fa";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { HomeHeader, Banner, BannerButton } from "../utils";
import img from "../images/bcg/homeBcg.jpeg";
import QuickInfo from "../components/HomePageComponent/QuickInfo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <HomeHeader img={img}>
      <Banner title="Eatery" subtitle="55 main street - Santa Monica CA">
        <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
  </Layout>
);

export default IndexPage;
