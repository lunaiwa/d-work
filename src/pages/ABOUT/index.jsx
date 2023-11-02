import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const ABOUTPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-altehaasgrotesk justify-end mx-auto md:pr-10 sm:pr-5 pr-[47px] py-[47px] w-full">
        <div className="flex flex-col items-center mr-[49px] mt-[86px] md:pl-10 sm:pl-5 pl-[97px] w-[97%] md:w-full">
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
              className="md:ml-[0] ml-[412px] mt-[3px] md:text-5xl text-[90px] text-center text-red-400"
              size="txtAlteHaasGroteskBold90"
            >
              ABOUT
            </Text>
            <Text
              className="common-pointer backdrop-opacity-[0.5] blur-[4.00px] md:ml-[0] ml-[699px] mt-[92px] md:text-5xl text-[90px] text-black-900 text-center"
              size="txtAlteHaasGroteskBold90Black900"
              onClick={() => navigate("/")}
            >
              LOGIN
            </Text>
          </div>
        </div>
        <Text
          className="backdrop-opacity-[0.5] blur-[4.00px] mr-[696px] mt-[184px] md:text-5xl text-[200px] text-black-900 text-center"
          size="txtAlteHaasGroteskBold200"
        >
          <>&gt;&gt;&gt;&gt;</>
        </Text>
        <div className="flex flex-col items-center mr-[49px] mt-[94px] px-5 w-[97%] md:w-full">
          <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[91%]">
            <div className="flex flex-col gap-[39px] items-center justify-start w-full">
              <Img
                className="h-[460px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                src="images/img_rectangle16.png"
                alt="rectangleSixteen"
              />
              <div className="flex flex-col gap-3 items-center justify-start">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-800"
                  size="txtAlteHaasGroteskBold25"
                >
                  Emma Shen
                </Text>
                <Text
                  className="text-black-900_68 text-xl"
                  size="txtAlteHaasGrotesk20"
                >
                  {" "}
                  SCRUM Master
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[35px] items-center justify-start w-full">
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
                  className="md:ml-[0] ml-[41px] mr-14 text-black-900_68 text-center text-xl"
                  size="txtAlteHaasGrotesk20"
                >
                  DevOps{" "}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
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
            <div className="flex flex-col gap-[37px] justify-start w-full">
              <Img
                className="h-[460px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                src="images/img_rectangle18.png"
                alt="rectangleEighteen"
              />
              <div className="flex flex-col gap-1.5 justify-start md:ml-[0] ml-[105px]">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtAlteHaasGroteskBold30"
                >
                  Luna Iwazaki
                </Text>
                <Text
                  className="md:ml-[0] ml-[31px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900_68 text-center"
                  size="txtAlteHaasGrotesk25"
                >
                  Frontend
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[37px] items-center justify-start w-full">
              <Img
                className="h-[460px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                src="images/img_rectangle19.png"
                alt="rectangleNineteen"
              />
              <div className="flex flex-col gap-2 items-center justify-start">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                  size="txtAlteHaasGroteskBold30"
                >
                  Raunak Mondal
                </Text>
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900_68 text-center"
                  size="txtAlteHaasGrotesk25"
                >
                  Backend Developer
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[39px] items-center justify-start w-full">
              <Img
                className="h-[460px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                src="images/img_rectangle20.png"
                alt="rectangleTwenty"
              />
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                  size="txtAlteHaasGroteskBold30"
                >
                  Morty
                </Text>
                <Text
                  className="mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900_68 text-center"
                  size="txtAlteHaasGrotesk25"
                >
                  Mentor
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end mr-[49px] mt-[347px] md:px-10 sm:px-5 px-[292px]">
          <Text
            className="md:text-5xl text-[90px] text-black-900 text-center"
            size="txtAlteHaasGroteskBold90Black900"
          >
            our mission
          </Text>
        </div>
        <div className="flex flex-col items-center mr-[49px] mt-[85px] md:px-10 sm:px-5 px-[149px]">
          <Text
            className="md:text-5xl text-[300px] text-black-900 text-center tracking-[-14.50px]"
            size="txtAlteHaasGroteskBold300"
          >
            to save ur grade
          </Text>
        </div>
        <Text
          className="md:ml-[0] ml-[18px] mr-[933px] mt-[276px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
          size="txtAlteHaasGroteskBold30"
        >
          a-reel board all rights reserved
        </Text>
      </div>
    </>
  );
};

export default ABOUTPage;
