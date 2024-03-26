import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ContainerLasVegasAviatorsType = {
  group1975?: string;
  ticketMockup3?: string;
  lasVegasAviators?: string;
  lasVegasBallparkLasVegasN?: string;
  takeFlightCollection?: string;

  /** Style props */
  sunLeft?: CSSProperties["left"];
  sunFilter?: CSSProperties["filter"];
  rectangleDivLeft?: CSSProperties["left"];
  takeFlightCollectionColor?: CSSProperties["color"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propBorderRight?: CSSProperties["borderRight"];
  propColor2?: CSSProperties["color"];
  propBorderRight1?: CSSProperties["borderRight"];
  propColor3?: CSSProperties["color"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propLeft?: CSSProperties["left"];
};

const ContainerLasVegasAviators: NextPage<ContainerLasVegasAviatorsType> = ({
  group1975,
  ticketMockup3,
  lasVegasAviators,
  lasVegasBallparkLasVegasN,
  takeFlightCollection,
  sunLeft,
  sunFilter,
  rectangleDivLeft,
  takeFlightCollectionColor,
  propColor,
  propColor1,
  propBorderRight,
  propColor2,
  propBorderRight1,
  propColor3,
  propBackgroundColor,
  propLeft,
}) => {
  const groupDiv2Style: CSSProperties = useMemo(() => {
    return {
      left: sunLeft,
      filter: sunFilter,
    };
  }, [sunLeft, sunFilter]);

  const groupDiv3Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft,
    };
  }, [rectangleDivLeft]);

  const lasVegasAviatorsStyle: CSSProperties = useMemo(() => {
    return {
      color: takeFlightCollectionColor,
    };
  }, [takeFlightCollectionColor]);

  const lasVegasBallparkStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const oct15Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const lineDivStyle: CSSProperties = useMemo(() => {
    return {
      borderRight: propBorderRight,
    };
  }, [propBorderRight]);

  const sunStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const lineDiv1Style: CSSProperties = useMemo(() => {
    return {
      borderRight: propBorderRight1,
    };
  }, [propBorderRight1]);

  const pMStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const rectangleDiv4Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const takeFlightCollectionStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="absolute top-[0px] left-[0px] [filter:drop-shadow(0px_8px_16px_rgba(0,_0,_0,_0.1))] w-[257px] h-[625px] text-center text-mid text-black font-poppins"
      style={groupDiv2Style}
    >
      <img
        className="absolute top-[0px] left-[0px] w-[257px] h-[625px] object-cover"
        alt=""
        src={group1975}
      />
      <div className="absolute top-[15.9px] left-[15px] w-[226.1px] h-[597.9px]">
        <img
          className="absolute top-[0px] left-[0px] w-[226.1px] h-[401.3px] object-cover"
          alt=""
          src={ticketMockup3}
        />
        <div
          className="absolute h-[16.84%] top-[73.81%] bottom-[9.35%] left-[calc(50%_-_106.05px)] w-[213px]"
          style={groupDiv3Style}
        >
          <div
            className="absolute h-[26.81%] top-[0%] left-[calc(50%_-_106.5px)] leading-[26.52px] capitalize font-medium inline-block w-[213px]"
            style={lasVegasAviatorsStyle}
          >
            {lasVegasAviators}
          </div>
          <div className="absolute h-[61.27%] top-[38.73%] bottom-[0%] left-[0px] w-[213px] text-sm text-dimgray font-inter">
            <div
              className="absolute top-[49.59%] left-[0px] leading-[20.58px] inline-block w-[213px]"
              style={lasVegasBallparkStyle}
            >
              {lasVegasBallparkLasVegasN}
            </div>
            <div className="absolute top-[0px] left-[30px] w-[152.2px] h-[12.7px] text-black font-poppins">
              <div className="absolute top-[0px] left-[0px] h-[12.7px] flex flex-row items-center justify-start gap-[5.304955959320068px]">
                <div className="relative uppercase" style={oct15Style}>
                  Oct 15
                </div>
                <div
                  className="w-[0.5px] relative box-border h-[13.3px] border-r-[0.5px] border-solid border-black"
                  style={lineDivStyle}
                />
                <div className="relative uppercase" style={sunStyle}>
                  Sun
                </div>
                <div
                  className="w-[0.5px] relative box-border h-[13.3px] border-r-[0.5px] border-solid border-black"
                  style={lineDiv1Style}
                />
                <div className="relative uppercase" style={pMStyle}>
                  4:30 PM
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[561.9px] left-[7px] w-[213px] h-9 text-smi-7 text-white font-inter">
          <div
            className="absolute top-[0px] left-[0px] bg-gray-200 w-[213px] h-9"
            style={rectangleDiv4Style}
          />
          <div
            className="absolute top-[11px] left-[41px] capitalize font-medium"
            style={takeFlightCollectionStyle}
          >
            {takeFlightCollection}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerLasVegasAviators;
