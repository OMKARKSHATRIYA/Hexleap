import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type AdvertisementContainerType = {
  imageDimensions?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propWidth?: CSSProperties["width"];
  propColor1?: CSSProperties["color"];
};

const AdvertisementContainer: NextPage<AdvertisementContainerType> = ({
  imageDimensions,
  propLeft,
  propBoxShadow,
  propBackgroundColor,
  propBackgroundColor1,
  propColor,
  propWidth,
  propColor1,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      boxShadow: propBoxShadow,
    };
  }, [propLeft, propBoxShadow]);

  const rectangleDiv2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDiv3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const advertisementTitleStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      width: propWidth,
    };
  }, [propColor, propWidth]);

  const loremIpsumDolorStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      className="absolute top-[66px] left-[1004px] shadow-[0px_10px_20px_rgba(0,_0,_0,_0.2)] w-[237px] h-[511px] text-left text-smi-8 text-white font-inter"
      style={groupDiv1Style}
    >
      <div
        className="absolute top-[0px] left-[0px] bg-darkslategray-100 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] w-[237px] h-[511px]"
        style={rectangleDiv2Style}
      />
      <div className="absolute top-[10px] left-[10px] w-[217px] h-[491px]">
        <div
          className="absolute top-[0px] left-[0px] bg-darkslategray-100 box-border w-[217px] h-[491px] border-[0.2px] border-solid border-teal"
          style={rectangleDiv3Style}
        />
        <img
          className="absolute top-[0px] left-[0px] w-[217px] h-[218px] object-cover"
          alt=""
          src={imageDimensions}
        />
        <div
          className="absolute top-[246px] left-[15px] text-xl font-semibold"
          style={advertisementTitleStyle}
        >
          Advertisement title
        </div>
        <div
          className="absolute top-[278px] left-[15px] leading-[19px] text-gainsboro inline-block w-[187.1px]"
          style={loremIpsumDolorStyle}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="absolute top-[0px] left-[169.2px] bg-black w-[47.8px] flex flex-col items-center justify-center py-[3px] px-[15px] box-border">
          <b className="relative leading-[19px]">Ad</b>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementContainer;
