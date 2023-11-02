import React from "react";

import { useNavigate } from "react-router-dom";

import { Text } from "components";

const LOGINPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-altehaasgrotesk items-center justify-end mx-auto p-[18px] w-full">
        <div className="flex flex-col justify-start max-w-[1246px] mt-[181px] mx-auto md:px-5 w-full">
          <Text
            className="backdrop-opacity-[0.5] blur-[4.00px] md:ml-[0] ml-[806px] md:text-5xl text-[90px] text-black-900 text-center"
            size="txtAlteHaasGroteskBold90Black900"
          >
            CONTACT
          </Text>
          <Text
            className="common-pointer backdrop-opacity-[0.5] blur-[4.00px] mt-[18px] md:text-5xl text-[90px] text-black-900 text-center"
            size="txtAlteHaasGroteskBold90Black900"
            onClick={() => navigate("/")}
          >
            HOME
          </Text>
          <Text
            className="backdrop-opacity-[0.5] blur-[4.00px] md:ml-[0] ml-[412px] mt-10 md:text-5xl text-[90px] text-black-900 text-center"
            size="txtAlteHaasGroteskBold90Black900"
          >
            ABOUT
          </Text>
          <Text
            className="common-pointer md:ml-[0] ml-[720px] mt-24 md:text-5xl text-[90px] text-center text-red-400"
            size="txtAlteHaasGroteskBold90"
            onClick={() => navigate("/")}
          >
            LOGIN
          </Text>
        </div>
        <div className="flex flex-col items-start mt-[389px] md:px-5 px-[344px]">
          <Text
            className="md:text-5xl text-[90px] text-black-900 text-center"
            size="txtAlteHaasGroteskBold90Black900"
          >
            login
          </Text>
        </div>
        <div className="bg-blue_gray-100 flex flex-col md:gap-10 gap-[93px] items-center justify-start max-w-[965px] mt-[111px] mx-auto p-[76px] md:px-5 w-full">
          <div className="bg-white-A700 h-[82px] mt-[13px] w-full"></div>
          <div className="bg-white-A700 h-[82px] w-full"></div>
          <div className="bg-white-A700 h-[229px] mb-[79px] w-full"></div>
        </div>
        <div className="flex flex-col items-start mt-[182px] md:px-5 px-[186px]">
          <Text
            className="md:text-5xl text-[90px] text-black-900 text-center"
            size="txtAlteHaasGroteskBold90Black900"
          >
            send a message
          </Text>
        </div>
        <div className="bg-blue_gray-100 flex flex-col md:gap-10 gap-[93px] items-center justify-start max-w-[965px] mt-[270px] mx-auto p-[76px] md:px-5 w-full">
          <div className="bg-white-A700 h-[82px] mt-[13px] w-full"></div>
          <div className="bg-white-A700 h-[82px] w-full"></div>
          <div className="bg-white-A700 h-[229px] mb-[79px] w-full"></div>
        </div>
        <div className="flex flex-col items-start mb-7 mt-[718px] pr-[884px] md:px-5">
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
            size="txtAlteHaasGroteskBold30"
          >
            a-reel board all rights reserved
          </Text>
        </div>
      </div>
    </>
  );
};

export default LOGINPage;
