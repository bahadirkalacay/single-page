import HomePageTopLeft from "../../components/home-page-top/HomePageTopLeft";
import React from "react";
import HomePageTopRight from "../../components/home-page-top/HomePageTopRight";
import HomePageTopBottom from "../../components/home-page-top/HomePageTopBottom";
import HomePageCenterLeft from "../../components/home-page-center/HomePageCenterLeft";
import HomePageCenterRight from "../../components/home-page-center/HomePageCenterRight";
import HomePageCenterBottom from "../../components/home-page-center/HomePageCenterBottom";
import HomePageBottom from "../../components/home-page-bottom/HomePageBottom";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col w-full md:flex-row">
        <div className="w-full md:w-1/2">
          <HomePageTopLeft />
        </div>
        <div className="w-full mt-10 md:w-1/2 md:mt-32">
          <HomePageTopRight />
        </div>
      </div>
      <HomePageTopBottom />
      <div className="flex flex-col w-full md:flex-row">
        <div className="w-full md:w-1/2">
          <HomePageCenterLeft />
        </div>
        <div className="w-full mt-10 md:w-1/2 md:mt-32">
          <HomePageCenterRight />
        </div>
      </div>
      <div className="flex justify-center block md:hidden">
        <HomePageCenterBottom />
      </div>
      <div>
        <HomePageBottom />
      </div>
    </>
  );
};

export default HomePage;
