import React from "react";
import { mens_kurta } from "../../../data/Men/men_kurta";
import MainCarousel from "../../components/homeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/homeSectionCarousel/HomeSectionCarousel";


const HomePages = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionTitle="Men's Kurta" />
        <HomeSectionCarousel data={mens_kurta} sectionTitle="Men's shoes" />
        <HomeSectionCarousel data={mens_kurta} sectionTitle="Men's Shirt" />
        <HomeSectionCarousel  data={mens_kurta} sectionTitle="Men's Saree" />
        <HomeSectionCarousel  data={mens_kurta} sectionTitle="Men's Dress" /> 
      </div>
    </div>
  );
};

export default HomePages;
