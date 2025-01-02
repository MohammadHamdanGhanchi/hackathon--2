// import React from "react";
// import ImageOnly from "@/components/ImageOnly";
// import TopNav from "@/components/TopNavbar";
// import Footer from "@/components/Footer";
// import Filters from "@/components/Filters";
// import ProductListing from "@/components/ProductsListing";

import Filters from "@/components/Filters";
import Footer from "@/components/Footer";
import ImageOnly from "@/components/ImageOnly";
import ProductListing from "@/components/ProductsListing";
import TopNav from "@/components/TopNavbar";
// import TopNav from "@/components/TopNavbar";

const Products: React.FC = () => {
  return (
    <div>
      <TopNav/>
      <ImageOnly/>
      <Filters/>
      <ProductListing/>
      <Footer/>
    </div>
  );
};

export default Products;