import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const HomepagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-altehaasgrotesk justify-start mx-auto p-[18px] w-full">
        <div className="flex flex-col gap-[58px] items-center max-w-[1393px] mt-[21px] mx-auto md:px-5 w-full">
          <div className="sm:h-[1219px] md:h-[491px] h-[752px] relative w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[370px] items-start justify-start w-full">
                <Text
                  className="mb-[100px] md:text-5xl text-[320px] text-black-900 text-center"
                  size="txtAlteHaasGroteskBold320"
                >
                  A
                </Text>
                <Text
                  className="backdrop-opacity-[0.5] blur-[4.00px] sm:mt-0 mt-[133px] md:text-5xl text-[300px] text-black-900 text-center"
                  size="txtAlteHaasGrotesk300"
                >
                  REEL
                </Text>
              </div>
            </div>
            <Text
              className="common-pointer absolute bottom-[0] left-[0] md:text-5xl text-[300px] text-black-900 text-center tracking-[-14.50px]"
              size="txtAlteHaasGroteskBold300"
              onClick={() => navigate("/scrumboard")}
            >
              BOARD
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[84%] md:w-full">
            <Text
              className="md:text-5xl text-[90px] text-center text-red-400"
              size="txtAlteHaasGroteskBold90"
            >
              HOME
            </Text>
            <Text
              className="backdrop-opacity-[0.5] blur-[4.00px] md:ml-[0] ml-[133px] md:text-5xl text-[90px] text-black-900 text-center"
              size="txtAlteHaasGroteskBold90Black900"
            >
              ABOUT
            </Text>
            <Text
              className="common-pointer backdrop-opacity-[0.5] blur-[4.00px] md:ml-[0] ml-[99px] md:text-5xl text-[90px] text-black-900 text-center"
              size="txtAlteHaasGroteskBold90Black900"
              onClick={() => navigate("/login")}
            >
              LOGIN
            </Text>
          </div>
        </div>
        <Text
          className="md:ml-[0] ml-[294px] mt-[377px] md:text-5xl text-[300px] text-black-900 text-center"
          size="txtAlteHaasGroteskBold300"
        >
          help{" "}
        </Text>
        <div className="flex flex-col items-center max-w-[1393px] mt-[437px] mx-auto md:px-5 px-[101px] w-full">
          <div className="flex flex-col gap-[52px] items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="md:text-5xl text-[100px] text-black-900"
                size="txtAlteHaasGroteskBold100"
              >
                meet the team
              </Text>
              <a className="text-red-400_01 text-right text-xl">
                <Text
                  className="common-pointer"
                  size="txtAlteHaasGroteskBold20"
                  onClick={() => navigate("/about")}
                >
                  View All
                </Text>
              </a>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[39px] items-center justify-start w-[32%] md:w-full">
                <Img
                  className="h-[460px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_rectangle16.png"
                  alt="rectangleSixteen"
                />
                <div className="flex flex-col gap-[11px] items-center justify-start">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-800"
                    size="txtAlteHaasGroteskBold25"
                  >
                    Emma Shen
                  </Text>
                  <Text
                    className="text-black-900_68 text-xl"
                    size="txtSourceSansProRegular20"
                  >
                    <span className="text-black-900_68 font-sourcesanspro text-left font-normal">
                      {" "}
                    </span>
                    <span className="text-black-900_68 font-altehaasgrotesk text-left font-normal">
                      SCRUM Master
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[35px] items-center justify-start w-[32%] md:w-full">
                <Img
                  className="h-[460px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_rectangle15.png"
                  alt="rectangleFifteen"
                />
                <div className="flex flex-col gap-[11px] justify-end py-1.5">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-800"
                    size="txtAlteHaasGroteskBold25"
                  >
                    Ekamjot Kaire
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[42px] mr-[55px] text-black-900_68 text-center text-xl"
                    size="txtAlteHaasGrotesk20"
                  >
                    DevOps
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
                <div className="flex flex-col gap-[42px] items-center justify-start w-full">
                  <Img
                    className="h-[460px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle17.png"
                    alt="rectangleSeventeen"
                  />
                  <div className="flex flex-col gap-[11px] items-center justify-start">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-800"
                      size="txtAlteHaasGroteskBold25"
                    >
                      Aliya Tang
                    </Text>
                    <Text
                      className="text-black-900_68 text-center text-xl"
                      size="txtAlteHaasGrotesk20"
                    >
                      Backend Developer
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Text
          className="mb-7 mt-[481px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
          size="txtAlteHaasGroteskBold30"
        >
          a-reel board all rights reserved
        </Text>
      </div>
    </>
  );
};

export default HomepagePage;
