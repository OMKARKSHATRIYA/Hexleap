import type { NextPage } from "next";
import ContainerLasVegasAviators from "../components/container-las-vegas-aviators";

const Group: NextPage = () => {
  return (
    <div className="w-full relative h-[918px] text-left text-31xl text-black font-poppins">
      <div className="absolute top-[0px] left-[calc(50%_-_620px)] [background:linear-gradient(180deg,_#f9f8ff,_#f3f9ff)] w-[1240px] h-[918px]" />
      <div className="absolute top-[70px] left-[calc(50%_-_543px)] w-[1085.7px] h-[799px]">
        <div className="absolute top-[0px] left-[calc(50%_-_542.85px)] w-[1085.7px] h-[799px]">
          <b className="absolute top-[0px] left-[calc(50%_-_252.85px)] leading-[105%]">
            Collection Spotlight
          </b>
          <div className="absolute top-[77px] left-[calc(50%_-_458.85px)] text-sm leading-[22.65px] font-inter text-center inline-block w-[917px]">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </div>
          <div className="absolute top-[174px] left-[0px] w-[1085.7px] h-[625px]">
            <img
              className="absolute top-[288px] left-[1049px] w-[36.7px] h-[49px] object-contain"
              alt=""
              src="/group-1717@2x.png"
            />
            <div className="absolute top-[288px] left-[0px] w-[36.7px] h-[49px]">
              <div className="absolute top-[0px] left-[0px] box-border w-[36.7px] h-[49px] border-[1px] border-solid border-cornflowerblue" />
              <img
                className="absolute h-[39.18%] w-[29.97%] top-[30.41%] right-[35.97%] bottom-[30.41%] left-[34.06%] max-w-full overflow-hidden max-h-full object-contain"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="absolute top-[0px] left-[118px] w-[850px] h-[625px]">
              <ContainerLasVegasAviators
                group1975="/group-19751@2x.png"
                ticketMockup3="/ticket-mockup-31@2x.png"
                lasVegasAviators="Las Vegas Aviators"
                lasVegasBallparkLasVegasN="Las Vegas Ballpark, Las Vegas, Nevada"
                takeFlightCollection="Take Flight Collection"
              />
              <ContainerLasVegasAviators
                group1975="/group-19751@2x.png"
                ticketMockup3="/unnamed-11@2x.png"
                lasVegasAviators="Sacramento River Cats"
                lasVegasBallparkLasVegasN="Sutter Health Park, Sacramento, California"
                takeFlightCollection="Orange Collection"
                sunLeft="300px"
                sunFilter="drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.1))"
                rectangleDivLeft="calc(50% - 105.95px)"
                takeFlightCollectionColor="#000"
                propColor="#525965"
                propColor1="#000"
                propBorderRight="0.5px solid #000"
                propColor2="#000"
                propBorderRight1="0.5px solid #000"
                propColor3="#000"
                propBackgroundColor="#1d1d1f"
                propLeft="51px"
              />
              <ContainerLasVegasAviators
                group1975="/group-19751@2x.png"
                ticketMockup3="/ticket-mockup-31@2x.png"
                lasVegasAviators="Las Vegas Aviators"
                lasVegasBallparkLasVegasN="Las Vegas Ballpark, Las Vegas, Nevada"
                takeFlightCollection="Take Flight Collection"
                sunLeft="593px"
                sunFilter="drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.1))"
                rectangleDivLeft="calc(50% - 106.05px)"
                takeFlightCollectionColor="#000"
                propColor="#525965"
                propColor1="#000"
                propBorderRight="0.5px solid #000"
                propColor2="#000"
                propBorderRight1="0.5px solid #000"
                propColor3="#000"
                propBackgroundColor="#1d1d1f"
                propLeft="41px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
