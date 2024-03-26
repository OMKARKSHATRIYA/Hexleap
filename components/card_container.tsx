import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type CardContainerType = {
  dimensionsText?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propColor1?: CSSProperties["color"];
  propColor2?: CSSProperties["color"];
  propColor3?: CSSProperties["color"];
  propColor4?: CSSProperties["color"];
};

const CardContainer: NextPage<CardContainerType> = ({
  dimensionsText,
  propLeft,
  propBackgroundColor,
  propColor,
  propBackgroundColor1,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const newJerseyDevilsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const totalEventsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const eventsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const sportStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const iceHockeyStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  return (
    <div
      className="absolute top-[66px] left-[502px] shadow-[0px_8px_16px_rgba(0,_0,_0,_0.05)] w-[237px] h-[511px] text-left text-mid text-white font-inter"
      style={groupDivStyle}
    >
      <div
        className="absolute top-[0px] left-[0px] bg-darkslategray-100 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] w-[237px] h-[511px]"
        style={rectangleDivStyle}
      />
      <div className="absolute top-[10px] left-[10px] w-[217px] h-[467px]">
        <div className="absolute top-[399.9px] left-[0px] w-[127.4px] h-[67.1px]">
          <div className="absolute top-[0px] left-[0px] w-32 h-[67px]">
            <div className="absolute top-[0.1px] left-[0px] w-[217px] h-[91px]">
              <div
                className="absolute top-[0px] left-[0px] capitalize font-medium"
                style={newJerseyDevilsStyle}
              >
                new jersey devils
              </div>
              <div className="absolute top-[37px] left-[0px] w-[217px] h-[54px] text-xs text-gainsboro">
                <div
                  className="absolute top-[0px] left-[0px] rounded-sm bg-gray-100 w-[217px] h-[54px]"
                  style={rectangleDiv1Style}
                />
                <div className="absolute top-[12px] left-[10px] w-[183px] h-[31px]">
                  <div className="absolute top-[0px] left-[0px] w-[70px] h-[31px]">
                    <div
                      className="absolute top-[0px] left-[0px] capitalize"
                      style={totalEventsStyle}
                    >
                      total events
                    </div>
                    <div
                      className="absolute top-[21px] left-[0px] text-sm capitalize font-medium text-white"
                      style={eventsStyle}
                    >
                      15 Events
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[109px] w-[74px] h-[31px]">
                    <div
                      className="absolute top-[0px] left-[0px] capitalize"
                      style={sportStyle}
                    >
                      sport
                    </div>
                    <div
                      className="absolute top-[21px] left-[0px] text-sm capitalize font-medium text-white"
                      style={iceHockeyStyle}
                    >
                      ice hockey
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[217px] h-[385.4px] object-contain"
          alt=""
          src={dimensionsText}
        />
      </div>
    </div>
  );
};

export default CardContainer;
