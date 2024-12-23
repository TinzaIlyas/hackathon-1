'use client'
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/Feautreprod";
import LatestProducts from "./components/Latestproducts";
import ShopexOffer from "./components/Shopexoffer";
import UniqueFeatures from "./components/UniqueFeautures";
import TrendingProducts from "./components/TrendingsProducts";
import Discount from "./components/Discount";
import TopCateg from "./components/TopCateg";
import Offers from "./components/Offers";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";


export default function Home () {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <FeaturedProducts />
        <LatestProducts />
        <ShopexOffer />
        <UniqueFeatures />
        <TrendingProducts />
        <Discount/>
        <TopCateg/>
        <Offers/>
        <Blogs/>
        <Footer/>
        
        
      </main>
    </div>
  );
};

