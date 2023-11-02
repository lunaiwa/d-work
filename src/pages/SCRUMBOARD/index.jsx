import React from "react";

import { useNavigate } from "react-router-dom";

import { Text } from "components";

const SCRUMBOARDPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-altehaasgrotesk sm:gap-10 md:gap-10 gap-[509px] justify-end mx-auto p-[18px] w-full">
        <div className="flex flex-col md:gap-10 gap-[443px] items-center mr-[78px] mt-[104px] pl-[78px] md:px-5 w-[95%] md:w-full">
          <div className="flex flex-col justify-start">
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
              className="backdrop-opacity-[0.5] blur-[4.00px] md:ml-[0] ml-[699px] mt-[133px] md:text-5xl text-[90px] text-black-900 text-center"
              size="txtAlteHaasGroteskBold90Black900"
            >
              LOGIN
            </Text>
          </div>
          <Text
            className="leading-[190.00px] md:text-5xl text-[300px] text-black-900 text-center w-[81%] sm:w-full"
            size="txtAlteHaasGroteskBold300"
          >
            board here
          </Text>
        </div>
        <Text
          className="mb-7 mr-[962px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
          size="txtAlteHaasGroteskBold30"
        >
          a-reel board all rights reserved
        </Text>
      </div>
    </>
  );
};

export default SCRUMBOARDPage;
