// import EmailSignUp from "@/components/EmailSignUp";
// import FeaturesSection from "@/components/Features";
// import Footer from "@/components/Footer";
// import HeroSection from "@/components/Hero";
// import ListingsSection from "@/components/Listing";
// import PopularListingsSection from "@/components/PopularListing";
// import BrandStorySection from "@/components/StorySection";
// import TopNav from "@/components/TopNavbar";
// import React from "react";
import AboutEmailSignUp from "@/components/AboutEmailSignUp";
import AboutFeaturesSection from "@/components/AboutFeatureSection";
import AboutPageHeader from "@/components/AboutPageHeaders";
import FeaturesSection from "@/components/Features";
import Footer from "@/components/Footer";
import TopNav from "@/components/TopNavbar";

import React from "react";

const page = () => {
  return (
    <div>
     <TopNav/>
      <AboutPageHeader/>
      <AboutFeaturesSection/>
      <FeaturesSection/>
      <AboutEmailSignUp/>
      <Footer/>
    </div>
  );
};

export default page;