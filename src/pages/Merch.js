import React, { useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";

import MerchHero from "components/hero/MerchHero.js";
import MerchDescription from "components/custom/MerchDescription.js";
import MerchShowcase from "components/cards/MerchShowcase.js";
import Footer from "components/footers/Footer.js";


/* Hero */

export default () => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  useEffect(() => {
    window.gtag("js", new Date());
    window.gtag("config", "UA-45799926-9");
  }, [])
  

  const Container = tw.div`relative`;

  return (
    <AnimationRevealPage disabled>
      <Container>
        <MerchHero />
        <MerchShowcase />
        <MerchDescription />
        <Footer />
      </Container>
    </AnimationRevealPage>
  );
};