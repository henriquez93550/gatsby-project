import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>hello from gatsby!</h3>
    <h3>This is the Menu page!</h3>
  </Layout>
);

export default MenuPage;
