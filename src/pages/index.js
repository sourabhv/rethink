import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Feature from "sections/feature";
import BusinessProfit from "sections/business-profit";
import Knowledge from "sections/knowledge";
import ClientFeedback from "sections/client-feedback";
import WorkFlow from "sections/workflow";
import Support from "sections/support";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          description="Drive growth and efficiency with Rethink Studio's tailored tech solutions. From custom software to responsive websites and scalable apps, we are your dedicated partners in shaping a digital future."
          title="Empower Your Business with Rethink Studio's Custom Software Development Services"
        />
        <Banner />
        <Feature />
        <BusinessProfit />
        <Knowledge />
        <ClientFeedback />
        {/* <WorkFlow /> */}
        <Support />
      </Layout>
    </ThemeProvider>
  );
}
